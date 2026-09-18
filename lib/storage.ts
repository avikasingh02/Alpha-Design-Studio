import fs from "fs";
import path from "path";
import type { AppointmentFormValues } from "./validations";

// MVP storage: append submissions to a local JSON file.
// TODO: Swap for a real database (Postgres, Airtable, etc.) before production —
// a flat JSON file does not scale past a handful of concurrent writes and is
// not durable on serverless deployments with an ephemeral filesystem.
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

export type StoredSubmission = Omit<AppointmentFormValues, "company"> & {
  id: string;
  submittedAt: string;
};

function readSubmissions(): StoredSubmission[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as StoredSubmission[];
  } catch {
    return [];
  }
}

export function saveSubmission(
  data: Omit<AppointmentFormValues, "company">
): StoredSubmission {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const submissions = readSubmissions();
  const record: StoredSubmission = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    submittedAt: new Date().toISOString(),
  };

  submissions.push(record);
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");

  return record;
}
