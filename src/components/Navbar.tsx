import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MoonStar, Phone, Sun, Waves, X } from "lucide-react";
import { useTheme, type ThemeName } from "../context/ThemeContext";
import { CONTACT } from "../data/content";
import { cn } from "../utils/cn";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

/* --------------------- Design-direction switch --------------------- */

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const options: { id: ThemeName; label: string; icon: typeof Sun }[] = [
    { id: "sky", label: "Sky", icon: Sun },
    { id: "sapphire", label: "Sapphire", icon: MoonStar },
  ];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-line bg-glass p-1 shadow-[0_10px_35px_-12px_rgba(4,16,31,0.45)] backdrop-blur-xl",
        className
      )}
      role="group"
      aria-label="Choose a design direction"
    >
      {options.map(({ id, label, icon: Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            aria-pressed={active}
            title={id === "sky" ? "Direction A — Sky Blue & Cloud White" : "Direction B — Sapphire & Ocean Blue"}
            className={cn(
              "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all duration-300",
              active
                ? "bg-accent text-onaccent shadow-[0_6px_18px_-6px_var(--c-accent)]"
                : "text-soft hover:text-ink"
            )}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------- Navbar -------------------------------- */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const onPhoto = !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-glass shadow-[0_18px_50px_-30px_rgba(4,16,31,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3" aria-label="Glamour Pools & Spas — home">
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent2 shadow-[0_12px_28px_-10px_var(--c-accent)] transition-transform duration-500 group-hover:rotate-6">
              <Waves className="h-5 w-5 text-white" strokeWidth={2.2} />
            </span>
            <span className="leading-none">
              <span
                className={cn(
                  "block font-display text-[19px] font-bold tracking-[0.14em] transition-colors duration-500",
                  onPhoto ? "text-white" : "text-ink"
                )}
              >
                GLAMOUR
              </span>
              <span
                className={cn(
                  "mt-1 block text-[9px] font-bold tracking-[0.42em] transition-colors duration-500",
                  onPhoto ? "text-white/75" : "text-accent"
                )}
              >
                POOLS &amp; SPAS
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative text-[13px] font-semibold tracking-wide transition-colors duration-300",
                  onPhoto ? "text-white/85 hover:text-white" : "text-soft hover:text-ink"
                )}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              className={cn(
                "hidden text-right text-[9px] leading-tight font-bold tracking-[0.26em] uppercase min-[480px]:block",
                onPhoto ? "text-white/60" : "text-faint"
              )}
            >
              Design
              <br />
              Direction
            </span>
            <ThemeSwitch />
            <a
              href={CONTACT.phoneHref}
              className={cn(
                "hidden h-10 w-10 place-items-center rounded-full border transition-all duration-300 hover:scale-105 md:grid",
                onPhoto
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-line text-ink hover:bg-alt"
              )}
              aria-label={`Call Glamour Pools at ${CONTACT.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-bold text-onaccent shadow-[0_14px_30px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-12px_var(--c-accent)] lg:inline-flex"
            >
              Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "grid h-10 w-10 cursor-pointer place-items-center rounded-full border transition-all duration-300 xl:hidden",
                onPhoto
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-line text-ink hover:bg-alt"
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent via-glow to-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-base transition-all duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent2 opacity-25 blur-[100px]" />
        <div className="flex flex-1 flex-col justify-center px-8 pt-24 pb-10">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.34em] text-accent">
            Explore Glamour
          </p>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={cn(
                  "group flex items-center justify-between border-b border-line py-3.5 transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <span className="font-display text-3xl font-semibold text-ink transition-colors group-hover:text-accent">
                  {l.label}
                </span>
                <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div
            className={cn(
              "mt-9 transition-all delay-500 duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.34em] text-faint">
              Design Direction
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ThemeSwitch />
              <span className="text-xs text-soft">
                A · Coastal Sky&nbsp;&nbsp;/&nbsp;&nbsp;B · Sapphire Deep
              </span>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-onaccent shadow-[0_16px_34px_-12px_var(--c-accent)]"
            >
              Request a Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-6 text-sm text-soft">
              {CONTACT.phoneDisplay} · {CONTACT.address}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
