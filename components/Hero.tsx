"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[88vh] min-h-[560px] w-full items-end overflow-hidden sm:h-[92vh]"
    >
      <Image
        src="/images/green-cabinetry-dining-room.jpg"
        alt="A warm, sunlit dining room with sage-green built-in cabinetry and a wooden table set for entertaining"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container-page relative z-10 pb-16 pt-24 sm:pb-24"
      >
        <p className="eyebrow-light mb-5">Alpha Design Studio</p>
        <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.05] text-bg-light sm:text-6xl md:text-7xl">
          Interiors Designed Around How You Live
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-bg-light/75 sm:text-lg">
          We create considered, livable interiors for residential and
          commercial spaces — balancing atmosphere, function, and craft from
          first sketch to final styling.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href="#appointment"
            className="btn-accent transition-transform duration-200 hover:scale-105"
          >
            Book a Consultation
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest2 text-bg-light"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
