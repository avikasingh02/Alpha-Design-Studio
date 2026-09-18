# Alpha Design Studio

A single-page marketing site for Alpha Design Studio, an interior design
studio, built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
per the project PRD (`PRD_Alpha_Design_Studio.md`).

## Stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS (custom navy/brass theme tokens)
- React Hook Form + Zod for the appointment form
- lucide-react for icons, Framer Motion for hero motion
- API route (`app/api/appointment/route.ts`) validates and stores
  consultation requests

## Getting started

Requires Node.js 18.18+ (Node was not available in the environment this was
scaffolded in, so dependencies have not been installed or run yet).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Appointment form data

Submissions are appended to `data/submissions.json` (created automatically
on first submission). This is an MVP-only data store:

- **TODO:** swap for a real database (Postgres, Airtable, etc.) — a flat
  JSON file isn't safe under concurrent writes and won't persist on
  serverless deployments with an ephemeral filesystem (e.g. Vercel).
- **TODO:** wire up a real email provider in `lib/sendEmail.ts` (Resend,
  Nodemailer, SES...). Both `sendAppointmentEmail` and
  `sendClientConfirmationEmail` currently just `console.log` the payload.
- A hidden honeypot field (`company`) and a simple in-memory rate limiter
  are in place in the API route as basic MVP spam mitigation. The rate
  limiter is per-server-instance and resets on restart — swap for a durable
  store (e.g. Upstash Redis) before relying on it in production.

## Content placeholders

Copy is realistic placeholder marketing copy, and imagery uses Unsplash
URLs. Anywhere real studio photography should go is marked
`TODO: replace with real project photography` in the component source
(see `components/Hero.tsx` and `components/Portfolio.tsx`).

## Deployment

Intended for deployment on [Vercel](https://vercel.com) — connect the repo
and it should build with zero config. Note the JSON-file storage caveat
above before relying on form submissions in a serverless deployment.

## Fast-follows (explicitly out of scope for MVP)

- Real payment processing
- Real calendar/scheduling integration (e.g. Calendly sync)
- CMS integration for portfolio content
- Multi-language support
- User accounts/login
