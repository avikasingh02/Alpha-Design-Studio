import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Book a Consultation", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary pt-16 sm:pt-28">
      <div className="container-page grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl tracking-wide text-bg-light">
            ALPHA DESIGN STUDIO
          </p>
          <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-bg-light/50">
            Est. MMXX
          </p>
          <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-bg-light/60">
            A full-service interior design studio for residential and
            commercial spaces, grounded in craft and considered living.
          </p>
        </div>

        <div>
          <p className="eyebrow-light mb-6">Contact</p>
          <ul className="flex flex-col gap-3 font-sans text-sm text-bg-light/70">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-bg-light/40" />
              42 Lakeview Road, Indiranagar, Bengaluru 560038
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-bg-light/40" />
              <a href="tel:+919876543210" className="hover:text-bg-light">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-bg-light/40" />
              <a href="mailto:studio@alphadesignstudio.com" className="hover:text-bg-light">
                studio@alphadesignstudio.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-light mb-6">Quick Links</p>
          <ul className="flex flex-col gap-3 font-sans text-sm text-bg-light/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-bg-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow-light mb-6">Follow</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              aria-label="Alpha Design Studio on Instagram"
              className="text-bg-light/70 hover:text-accent"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="Alpha Design Studio on LinkedIn"
              className="text-bg-light/70 hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Alpha Design Studio on Facebook"
              className="text-bg-light/70 hover:text-accent"
            >
              <Facebook size={20} />
            </a>
          </div>

          <p className="eyebrow-light mb-4 mt-10">Newsletter</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-bg-light/10 py-6">
        <p className="container-page font-sans text-xs text-bg-light/50">
          © {new Date().getFullYear()} Alpha Design Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
