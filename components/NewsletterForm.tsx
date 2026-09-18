"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter-email"
        type="email"
        placeholder="Your email"
        className="w-full border border-bg-light/25 bg-bg-light/5 px-3 py-2 text-sm text-bg-light placeholder:text-bg-light/40 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
      />
      <button
        type="submit"
        className="shrink-0 border border-bg-light/25 px-4 py-2 font-sans text-xs uppercase tracking-widest2 text-bg-light hover:bg-bg-light hover:text-primary"
      >
        Join
      </button>
    </form>
  );
}
