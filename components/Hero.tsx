"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="bg-bg">
      <div className="relative">
        <div className="relative h-[52vh] w-full sm:h-[62vh] lg:h-[70vh]">
          <Image
            src="/images/eames-lounge-sunroom.jpg"
            alt="A sunlit reading nook with a carved wooden pillar, tall glazing, and an Eames lounge chair"
            fill
            priority
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container-page absolute inset-x-0 bottom-0 translate-y-1/2"
        >
          <div className="flex flex-col gap-6 bg-bg-light p-8 shadow-[0_25px_60px_-20px_rgba(31,42,68,0.3)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="eyebrow mb-3">Start Your Project</p>
              <p className="max-w-md font-sans text-sm leading-relaxed text-text-muted sm:text-base">
                Book a complimentary consultation with our design team and
                bring your space to life.
              </p>
            </div>
            <a href="#appointment" className="btn-primary shrink-0">
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container-page pb-16 pt-32 sm:pb-28 sm:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl font-serif text-5xl font-medium leading-[1.05] text-primary sm:text-6xl md:text-7xl"
        >
          Interiors Designed Around How You Live
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl font-sans text-base leading-relaxed text-text-muted sm:text-lg"
        >
          We create considered, livable interiors for residential and
          commercial spaces — balancing atmosphere, function, and craft from
          first sketch to final styling.
        </motion.p>
        <div className="mt-8">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest2 text-primary"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
