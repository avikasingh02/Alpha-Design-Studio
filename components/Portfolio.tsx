import Image from "next/image";

const largeProject = {
  title: "Whitfield Residence",
  category: "Residential",
  image: "/images/moroccan-swing-living-room.jpg",
};

const smallProjects = [
  {
    title: "Marlowe & Co. Studio",
    category: "Commercial",
    image: "/images/wood-paneled-restaurant-booth.jpg",
  },
  {
    title: "Birchwood Apartment",
    category: "Residential",
    image: "/images/green-cabinetry-dining-room.jpg",
  },
  {
    title: "Linden Family Home",
    category: "Residential",
    image: "/images/cognac-camaleonda-living-room.jpg",
  },
  {
    title: "Northgate Offices",
    category: "Commercial",
    image: "/images/red-glass-office-hallway.jpg",
  },
];

function ProjectFigure({
  title,
  category,
  image,
  aspect,
}: {
  title: string;
  category: string;
  image: string;
  aspect: string;
}) {
  return (
    <figure className="group flex flex-col">
      <div
        className={`relative w-full ${aspect} overflow-hidden border border-border shadow-[0_20px_45px_-25px_rgba(31,42,68,0.35)]`}
      >
        <Image
          src={image}
          alt={`${title} — ${category} interior design project`}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-105"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-3">
        <span className="font-serif text-base text-primary">{title}</span>
        <span className="shrink-0 font-sans text-[11px] uppercase tracking-widest2 text-text-muted">
          {category}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg py-16 sm:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">Selected Work</p>
          <h2 className="font-serif text-2xl font-medium leading-[1.1] text-primary sm:text-3xl md:text-4xl">
            A few rooms we&rsquo;re proud of.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-8">
          <div className="sm:col-span-2">
            <ProjectFigure {...largeProject} aspect="aspect-[3/4]" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-3">
            {smallProjects.map((project) => (
              <ProjectFigure
                key={project.title}
                {...project}
                aspect="aspect-[4/5]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
