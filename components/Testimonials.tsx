const testimonials = [
  {
    quote:
      "Alpha listened first and designed second. Our home finally feels like us — just better resolved.",
    name: "Priya & Arjun Mehta",
    project: "Residential Renovation, Bengaluru",
  },
  {
    quote:
      "They managed contractors, sourcing, and our anxiety in equal measure. The studio opened three weeks early.",
    name: "Rohan Kapoor",
    project: "Commercial Fit-Out, Mumbai",
  },
  {
    quote:
      "Every detail was considered without ever feeling fussy. It's the calmest room in the house.",
    name: "Ananya Rao",
    project: "Styling & Staging, Pune",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-light py-16 sm:py-28">
      <div className="container-page text-center">
        <p className="eyebrow mx-auto mb-6 justify-center">Client Words</p>
        <h2 className="section-heading mx-auto max-w-xl">
          What it&rsquo;s like to work with us.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col items-center">
              <blockquote className="font-serif text-2xl italic leading-snug text-primary">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-sans text-xs uppercase tracking-widest2 text-text-muted">
                {testimonial.name}
                <br />
                {testimonial.project}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
