"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  appointmentSchema,
  type AppointmentFormValues,
  projectTypeOptions,
  budgetOptions,
  timeSlotOptions,
  consultationModeOptions,
  hearAboutOptions,
} from "@/lib/validations";

const inputClasses =
  "w-full border border-bg-light/25 bg-bg-light/5 px-4 py-3 text-sm text-bg-light placeholder:text-bg-light/40 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";

const labelClasses =
  "mb-2 block font-sans text-xs uppercase tracking-widest2 text-bg-light/70";

const errorClasses = "mt-1.5 text-xs text-accent";

function todayISODate(): string {
  return new Date().toISOString().split("T")[0];
}

export default function AppointmentForm() {
  const [submitState, setSubmitState] = useState<
    { status: "idle" } | { status: "success"; message: string } | { status: "error"; message: string }
  >({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      budget: "",
      message: "",
      hearAboutUs: "",
      consent: false,
      company: "",
    },
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    setSubmitState({ status: "idle" });
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result: { success: boolean; message: string } = await response.json();

      if (result.success) {
        setSubmitState({ status: "success", message: result.message });
        reset();
      } else {
        setSubmitState({ status: "error", message: result.message });
      }
    } catch {
      setSubmitState({
        status: "error",
        message: "Something went wrong. Please check your connection and try again.",
      });
    }
  };

  return (
    <section id="appointment" className="bg-primary py-16 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-light mx-auto mb-6 justify-center">Book an Appointment</p>
          <h2 className="font-serif text-3xl font-medium text-bg-light sm:text-4xl md:text-5xl">
            Let&rsquo;s Design Something Beautiful Together
          </h2>
          <p className="mt-5 font-sans text-base text-bg-light/70">
            Tell us a little about your space and vision. Our design team
            typically responds within 24 hours to schedule your consultation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mx-auto mt-14 max-w-4xl"
        >
          {/* Honeypot field — hidden from real visitors, catches basic bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClasses}>
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                className={inputClasses}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p id="fullName-error" className={errorClasses}>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClasses}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className={errorClasses}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={inputClasses}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
              />
              {errors.phone && (
                <p id="phone-error" className={errorClasses}>
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="projectType" className={labelClasses}>
                Project Type *
              </label>
              <select
                id="projectType"
                defaultValue=""
                className={inputClasses}
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? "projectType-error" : undefined}
                {...register("projectType")}
              >
                <option value="" disabled className="text-text">
                  Select project type
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option} className="text-text">
                    {option}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p id="projectType-error" className={errorClasses}>
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="location" className={labelClasses}>
                Property Location / City *
              </label>
              <input
                id="location"
                type="text"
                autoComplete="address-level2"
                className={inputClasses}
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? "location-error" : undefined}
                {...register("location")}
              />
              {errors.location && (
                <p id="location-error" className={errorClasses}>
                  {errors.location.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className={labelClasses}>
                Estimated Budget Range
              </label>
              <select id="budget" defaultValue="" className={inputClasses} {...register("budget")}>
                <option value="" className="text-text">
                  Select a range (optional)
                </option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option} className="text-text">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className={labelClasses}>
                Preferred Consultation Date *
              </label>
              <input
                id="preferredDate"
                type="date"
                min={todayISODate()}
                className={inputClasses}
                aria-invalid={!!errors.preferredDate}
                aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                {...register("preferredDate")}
              />
              {errors.preferredDate && (
                <p id="preferredDate-error" className={errorClasses}>
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="timeSlot" className={labelClasses}>
                Preferred Time Slot *
              </label>
              <select
                id="timeSlot"
                defaultValue=""
                className={inputClasses}
                aria-invalid={!!errors.timeSlot}
                aria-describedby={errors.timeSlot ? "timeSlot-error" : undefined}
                {...register("timeSlot")}
              >
                <option value="" disabled className="text-text">
                  Select a time slot
                </option>
                {timeSlotOptions.map((option) => (
                  <option key={option} value={option} className="text-text">
                    {option}
                  </option>
                ))}
              </select>
              {errors.timeSlot && (
                <p id="timeSlot-error" className={errorClasses}>
                  {errors.timeSlot.message}
                </p>
              )}
            </div>

            <fieldset className="sm:col-span-2">
              <legend className={labelClasses}>Consultation Mode *</legend>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                {consultationModeOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 font-sans text-sm text-bg-light/90"
                  >
                    <input
                      type="radio"
                      value={option}
                      className="h-4 w-4 border-bg-light/40 text-accent focus-visible:outline-2 focus-visible:outline-accent"
                      {...register("consultationMode")}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.consultationMode && (
                <p className={errorClasses}>{errors.consultationMode.message}</p>
              )}
            </fieldset>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClasses}>
                Project Details / Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your space and vision"
                className={inputClasses}
                {...register("message")}
              />
              {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            <div>
              <label htmlFor="hearAboutUs" className={labelClasses}>
                How did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                defaultValue=""
                className={inputClasses}
                {...register("hearAboutUs")}
              >
                <option value="" className="text-text">
                  Select an option (optional)
                </option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option} className="text-text">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start sm:col-span-2">
              <label className="flex items-start gap-3 font-sans text-sm text-bg-light/80">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 border-bg-light/40 text-accent focus-visible:outline-2 focus-visible:outline-accent"
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  {...register("consent")}
                />
                I agree to be contacted regarding my inquiry. *
              </label>
            </div>
            {errors.consent && (
              <p id="consent-error" className={`${errorClasses} sm:col-span-2 sm:-mt-4`}>
                {errors.consent.message}
              </p>
            )}
          </div>

          <div className="mt-10 flex flex-col items-center gap-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent sm:min-w-[260px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Request Consultation"
              )}
            </button>

            {submitState.status === "success" && (
              <p
                role="status"
                className="flex items-center gap-2 font-sans text-sm text-bg-light"
              >
                <CheckCircle2 size={18} className="text-accent" />
                {submitState.message}
              </p>
            )}
            {submitState.status === "error" && (
              <p role="alert" className="font-sans text-sm text-accent">
                {submitState.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
