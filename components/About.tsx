import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-bg py-16 sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-6">Our Philosophy</p>
          <h2 className="section-heading mb-6">
            Good design disappears into daily life.
          </h2>
          <p className="max-w-md font-sans text-base leading-relaxed text-text-muted sm:text-lg">
            We believe a well-designed room should feel inevitable — as if it
            could never have been arranged any other way. Alpha Design
            Studio works closely with each client to understand how a space
            is actually lived in, then builds outward from there: material,
            light, proportion, and finally, the details that make a house
            feel like home.
          </p>
          <div className="hairline mt-10 grid max-w-md grid-cols-3 gap-8 pt-8">
            <div>
              <p className="font-serif text-3xl text-primary">120+</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest2 text-text-muted">
                Projects
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">14</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest2 text-text-muted">
                Years
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-primary">6</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest2 text-text-muted">
                Cities
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-[0_20px_45px_-25px_rgba(31,42,68,0.35)]">
            <Image
              src="/images/framed-sketches-lounge.jpg"
              alt="A warm, wood-paneled lounge with framed sketches and a reading lamp"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-6 font-serif text-xl italic leading-snug text-primary">
            &ldquo;We don&rsquo;t design rooms to be photographed. We design
            them to be lived in, and photographed anyway.&rdquo;
          </p>
          <p className="mt-3 font-sans text-xs uppercase tracking-widest2 text-text-muted">
            — Founding Principal
          </p>
          <a
            href="#portfolio"
            className="mt-5 inline-block border-b border-accent pb-1 font-sans text-xs uppercase tracking-widest2 text-primary"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
