import { z } from "zod";

export const projectTypeOptions = [
  "Residential",
  "Commercial",
  "Renovation",
  "New Build",
  "Styling Only",
  "Other",
] as const;

export const budgetOptions = [
  "Under ₹5L",
  "₹5L–15L",
  "₹15L–40L",
  "₹40L+",
  "Not sure yet",
] as const;

export const timeSlotOptions = ["Morning", "Afternoon", "Evening"] as const;

export const consultationModeOptions = [
  "In-Studio",
  "On-Site Visit",
  "Virtual Call",
] as const;

export const hearAboutOptions = [
  "Instagram",
  "Google",
  "Referral",
  "Other",
] as const;

// Shared Zod schema — used by both the client form (React Hook Form) and the
// API route, since server-side validation must never trust client input alone.
export const appointmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number."),
  projectType: z.enum(projectTypeOptions, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  location: z
    .string()
    .trim()
    .min(2, "Please enter your city or property location.")
    .max(100, "Location is too long."),
  budget: z.enum(budgetOptions).optional().or(z.literal("")),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date.")
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(selected.getTime()) && selected >= today;
    }, "Preferred date cannot be in the past."),
  timeSlot: z.enum(timeSlotOptions, {
    errorMap: () => ({ message: "Please select a preferred time slot." }),
  }),
  consultationMode: z.enum(consultationModeOptions, {
    errorMap: () => ({ message: "Please select a consultation mode." }),
  }),
  message: z.string().trim().max(2000, "Message is too long.").optional().or(z.literal("")),
  hearAboutUs: z.enum(hearAboutOptions).optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((val) => val === true, "You must agree to be contacted to continue."),
  // Honeypot field — real users never fill this in; bots that auto-fill every
  // input will, so a non-empty value is treated as spam server-side.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
