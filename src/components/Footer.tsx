import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Waves,
} from "lucide-react";

type IconProps = { className?: string };

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
import { CONTACT } from "../data/content";
import { NAV_LINKS, ThemeSwitch } from "./Navbar";

const footerServices = [
  "Custom Concrete Pool",
  "Luxury Custom Spa",
  "Premium Paver Installation",
  "Complete Backyard Transformation",
];

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer({
  onInquire,
}: {
  onInquire: (type: string) => void;
}) {
  return (
    <footer className="relative overflow-hidden bg-deep text-white">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent2 opacity-15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:py-20">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Back to top — Glamour Pools & Spas">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 shadow-lg">
                <Waves className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[19px] font-bold tracking-[0.14em]">
                  GLAMOUR
                </span>
                <span className="mt-1 block text-[9px] font-bold tracking-[0.42em] text-glow">
                  POOLS &amp; SPAS
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Naples&apos; premier design-build studio for custom concrete
              pools, luxury spas, and premium paver outdoor living —
              crafting private paradises since 1998.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Glamour Pools & Spas on ${s.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-onaccent"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-glow uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Services — each starts a pre-filled inquiry */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-glow uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onInquire(s)}
                    className="group inline-flex cursor-pointer items-center gap-1.5 text-left text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {s}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
              <li>
                <a href="#before-after" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                  Before &amp; After
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                  Our Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-glow uppercase">
              Visit or Call
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-glow" />
                <span className="text-white/70">{CONTACT.address}</span>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex gap-3 text-white/70 transition-colors hover:text-white">
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-glow" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex gap-3 text-white/70 transition-colors hover:text-white">
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-glow" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-glow" />
                <span className="text-white/70">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {new Date().getFullYear()} Glamour Pools &amp; Spas · Naples,
            Florida · {CONTACT.license}
          </p>
          <div className="flex items-center gap-3.5">
            <span className="text-[10px] font-bold tracking-[0.26em] text-white/45 uppercase">
              Design Direction
            </span>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
