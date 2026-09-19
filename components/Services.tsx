import Image from "next/image";
import { Home, Building2, Ruler, Palette } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Full-home interiors built around how you live.",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description: "Workplaces, retail, and hospitality spaces.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Layouts that make every space work harder.",
  },
  {
    icon: Palette,
    title: "Styling & Staging",
    description: "Furnishing and styling for market-ready spaces.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary py-16 sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden border border-bg-light/15 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/olive-tile-cafe.jpg"
              alt="An olive-tiled café interior with round wood tables and hanging pendant lamps"
              fill
              className="object-cover"
            />
          </div>
          <a
            href="#process"
            className="mt-6 inline-block border-b border-accent pb-1 font-sans text-xs uppercase tracking-widest2 text-bg-light"
          >
            See How We Work
          </a>
        </div>

        <div>
          <p className="eyebrow-light mb-6">What We Do</p>
          <h2 className="mb-6 font-serif text-3xl font-medium leading-[1.1] text-bg-light sm:text-4xl md:text-5xl">
            Full-service design, start to finish.
          </h2>
          <p className="max-w-md font-sans text-base leading-relaxed text-bg-light/70">
            From a single room to a full build, our services scale to meet
            the project.
          </p>

          <ul className="mt-10 flex flex-col divide-y divide-bg-light/15 border-t border-bg-light/15">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <li
                  key={service.title}
                  className="flex items-center gap-5 py-5"
                >
                  <Icon
                    className="shrink-0 text-bg-light"
                    size={20}
                    strokeWidth={1}
                  />
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
                    <p className="font-sans text-sm uppercase tracking-wide text-bg-light">
                      {service.title}
                    </p>
                    <p className="font-sans text-sm text-bg-light/60">
                      {service.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
