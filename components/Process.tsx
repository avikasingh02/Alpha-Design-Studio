import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We visit your space, listen to how you live, and define the brief and budget together.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Concept, spatial planning, materials, and 3D visuals — refined until it feels right.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Technical drawings, sourcing, and contractor coordination to bring it to life.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Installation, styling, and a final walkthrough — your space, fully realized.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-primary py-16 sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow-light mb-6">How We Work</p>
          <h2 className="mb-10 font-serif text-3xl font-medium leading-[1.1] text-bg-light sm:text-4xl md:text-5xl">
            A clear process, from brief to build.
          </h2>

          <ul className="flex flex-col divide-y divide-bg-light/15 border-t border-bg-light/15">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-6 py-6">
                <p className="w-10 shrink-0 font-serif text-2xl italic text-bg-light/30">
                  {step.number}
                </p>
                <div>
                  <p className="font-sans text-sm uppercase tracking-wide text-bg-light">
                    {step.title}
                  </p>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-bg-light/60">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[4/5] overflow-hidden border border-bg-light/15 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/amber-copper-restaurant-bar.jpg"
              alt="A warm, copper-toned bar and dining space with material and finish craft on display"
              fill
              className="object-cover"
            />
          </div>
          <a
            href="#testimonials"
            className="mt-6 inline-block border-b border-accent pb-1 font-sans text-xs uppercase tracking-widest2 text-bg-light"
          >
            Hear From Our Clients
          </a>
        </div>
      </div>
    </section>
  );
}
