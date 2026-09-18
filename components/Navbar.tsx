"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <nav className="container-page flex items-center justify-between py-6">
        <a href="#hero" className="font-serif text-xl tracking-wide text-bg-light sm:text-2xl">
          ALPHA DESIGN STUDIO
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-widest2 text-bg-light/80 transition-colors hover:text-bg-light"
            >
              {link.label}
            </a>
          ))}
          <a href="#appointment" className="btn-outline-light !px-5 !py-2.5 !text-xs">
            Book a Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-bg-light md:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-bg-light/10 bg-primary md:hidden">
          <div className="container-page flex flex-col gap-5 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm uppercase tracking-widest2 text-bg-light/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="btn-outline-light mt-2 w-full"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
