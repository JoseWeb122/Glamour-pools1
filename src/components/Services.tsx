import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Gem,
  Phone,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CONTACT, services, type Service } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

export const INQUIRY_MAP: Record<string, string> = {
  pools: "Custom Concrete Pool",
  spas: "Luxury Custom Spa",
  pavers: "Premium Paver Installation",
  transformations: "Complete Backyard Transformation",
};

/* ------------------------------- Modal ------------------------------- */

function ServiceModal({
  service,
  onClose,
  onInquire,
}: {
  service: Service;
  onClose: () => void;
  onInquire: (type: string) => void;
}) {
  const { isSky } = useTheme();
  const title = isSky ? service.titleSky : service.titleSapphire;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[#04101f]/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="animate-pop-in relative grid max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-surface shadow-2xl sm:rounded-[2rem] md:grid-cols-2 md:overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[#04101f]/45 text-white backdrop-blur-md transition-all hover:rotate-90 hover:bg-[#04101f]/70"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-60 shrink-0 md:h-auto md:min-h-[540px]">
          <img src={service.image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
            <p className="text-[9px] font-bold tracking-[0.28em] text-white/70 uppercase">
              Typical Investment
            </p>
            <p className="mt-0.5 font-display text-xl font-bold text-white">
              {service.investment}
            </p>
          </div>
        </div>

        <div className="flex flex-col p-7 sm:p-9 md:overflow-y-auto">
          <p className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">
            Signature Service
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight font-semibold text-ink">
            {title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-soft">{service.longDesc}</p>

          <ul className="mt-6 space-y-2.5">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-alt p-4">
              <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.22em] text-faint uppercase">
                <Clock className="h-3.5 w-3.5 text-accent" /> Timeline
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-ink">{service.timeline}</p>
            </div>
            <div className="rounded-2xl bg-alt p-4">
              <p className="flex items-center gap-1.5 text-[9px] font-bold tracking-[0.22em] text-faint uppercase">
                <Gem className="h-3.5 w-3.5 text-accent" /> Investment
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-ink">{service.investment}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onInquire(INQUIRY_MAP[service.id])}
              className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold whitespace-nowrap text-onaccent shadow-[0_16px_34px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:bg-alt"
            >
              <Phone className="h-4 w-4 text-accent" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */

export default function Services({
  onInquire,
}: {
  onInquire: (type: string) => void;
}) {
  const { isSky } = useTheme();
  const [active, setActive] = useState<Service | null>(null);

  const openModal = (s: Service) => setActive(s);
  const inquire = (type: string) => {
    setActive(null);
    onInquire(type);
  };

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-base py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent2 opacity-[0.12] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={isSky ? "Signature Services" : "Premium Services"}
          title={
            isSky ? (
              <>
                Designed Around <em className="text-accent italic">the Way You Live</em>
              </>
            ) : (
              <>
                Bespoke Services. <em className="text-accent italic">Singular Craft.</em>
              </>
            )
          }
          sub={
            isSky
              ? "Four crafts, one standard: extraordinary. Explore each signature service — then let's design yours."
              : "Four disciplines, executed by our own master builders under one roof in Naples, Florida."
          }
        />

        {isSky ? (
          /* ---- Direction A · elegant service cards ---- */
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id} delay={i * 110}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[var(--card-shadow)] transition-all duration-500 hover:-translate-y-2.5">
                    <button
                      onClick={() => openModal(s)}
                      className="relative block h-52 w-full cursor-pointer overflow-hidden"
                      aria-label={`Learn more about ${s.titleSky}`}
                    >
                      <img
                        src={s.image}
                        alt={s.titleSky}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-[#04101f]/45 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#176B91] uppercase backdrop-blur-sm">
                        0{i + 1}
                      </span>
                    </button>
                    <div className="relative flex flex-1 flex-col p-6 pt-0">
                      <span className="relative z-10 -mt-7 mb-4 grid h-13 w-13 place-items-center self-start rounded-2xl bg-accent text-onaccent shadow-[0_14px_28px_-10px_var(--c-accent)] ring-4 ring-surface transition-transform duration-500 group-hover:-rotate-6">
                        <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-[1.35rem] leading-snug font-semibold text-ink">
                        {s.titleSky}
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-soft">{s.descSky}</p>
                      <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-[11px] font-bold tracking-wide text-faint uppercase">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-accent" /> {s.timeline}
                        </span>
                        <span>{s.investment}</span>
                      </div>
                      <button
                        onClick={() => openModal(s)}
                        className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-accent transition-all duration-300 hover:gap-3.5"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          /* ---- Direction B · cinematic alternating editorials ---- */
          <div className="mt-16 space-y-8 lg:space-y-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              const flipped = i % 2 === 1;
              return (
                <Reveal key={s.id} variant={flipped ? "right" : "left"}>
                  <article className="group grid overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[var(--card-shadow)] lg:grid-cols-12">
                    <button
                      onClick={() => openModal(s)}
                      className={cn(
                        "relative block h-72 w-full cursor-pointer overflow-hidden lg:col-span-7 lg:h-[430px]",
                        flipped && "lg:order-2"
                      )}
                      aria-label={`Learn more about ${s.titleSapphire}`}
                    >
                      <img
                        src={s.image}
                        alt={s.titleSapphire}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-108"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-[#04101f]/60 via-transparent to-[#04101f]/10" />
                      <span className="absolute bottom-4 left-6 font-display text-[6rem] leading-none font-bold text-white/15 select-none lg:text-[8rem]">
                        0{i + 1}
                      </span>
                      <span className="absolute top-5 left-5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.24em] text-white uppercase backdrop-blur-md">
                        {s.investment}
                      </span>
                    </button>
                    <div
                      className={cn(
                        "flex flex-col justify-center p-8 sm:p-10 lg:col-span-5 lg:p-12",
                        flipped && "lg:order-1"
                      )}
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-onaccent shadow-[0_12px_26px_-10px_var(--c-accent)]">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">
                          Service 0{i + 1}
                        </span>
                      </span>
                      <h3 className="mt-5 font-display text-3xl leading-tight font-semibold text-ink">
                        {s.titleSapphire}
                      </h3>
                      <p className="mt-3.5 leading-relaxed text-soft">{s.descSapphire}</p>
                      <ul className="mt-6 space-y-2.5">
                        {s.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => openModal(s)}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-bold text-accent transition-all duration-300 hover:gap-3.5 hover:bg-accent hover:text-onaccent"
                        >
                          Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-faint uppercase">
                          <Clock className="h-4 w-4 text-accent" /> {s.timeline}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>

      {active && (
        <ServiceModal
          service={active}
          onClose={() => setActive(null)}
          onInquire={inquire}
        />
      )}
    </section>
  );
}
