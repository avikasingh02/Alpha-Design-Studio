import type { AppointmentFormValues } from "./validations";

/**
 * Sends the studio-facing notification email for a new appointment request.
 *
 * TODO: Wire up a real email provider (Resend, Nodemailer + SMTP, SES, etc.).
 * Example with Resend once RESEND_API_KEY is set:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Alpha Design Studio <bookings@alphadesignstudio.com>",
 *     to: "studio@alphadesignstudio.com",
 *     subject: `New consultation request — ${data.fullName}`,
 *     html: renderStudioEmail(data),
 *   });
 */
export async function sendAppointmentEmail(
  data: AppointmentFormValues
): Promise<void> {
  console.log("[sendAppointmentEmail] TODO: integrate real email provider.");
  console.log("[sendAppointmentEmail] Studio notification payload:", {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    projectType: data.projectType,
    location: data.location,
    preferredDate: data.preferredDate,
    timeSlot: data.timeSlot,
    consultationMode: data.consultationMode,
  });
}

/**
 * Sends an optional confirmation email back to the client who submitted the form.
 *
 * TODO: Wire up a real email provider — see sendAppointmentEmail() above.
 */
export async function sendClientConfirmationEmail(
  data: AppointmentFormValues
): Promise<void> {
  console.log(
    `[sendClientConfirmationEmail] TODO: integrate real email provider. Would confirm with ${data.email}.`
  );
}
