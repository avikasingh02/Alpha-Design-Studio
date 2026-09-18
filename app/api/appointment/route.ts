import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import { saveSubmission } from "@/lib/storage";
import { sendAppointmentEmail, sendClientConfirmationEmail } from "@/lib/sendEmail";

// Simple in-memory rate limit: MVP-level spam mitigation only.
// TODO: Replace with a durable rate limiter (e.g. Upstash Redis) in production —
// this map resets on every server restart/deploy and is per-instance only.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          message: firstIssue?.message ?? "Please check the form and try again.",
        },
        { status: 400 }
      );
    }

    const { company, ...data } = parsed.data;

    // Honeypot: real visitors never populate this hidden field.
    if (company) {
      return NextResponse.json({ success: true, message: "Received." });
    }

    saveSubmission(data);

    await sendAppointmentEmail(parsed.data);
    await sendClientConfirmationEmail(parsed.data);

    return NextResponse.json({
      success: true,
      message: "Thank you — our design team will reach out within 24 hours.",
    });
  } catch (error) {
    console.error("[POST /api/appointment] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong on our end. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
