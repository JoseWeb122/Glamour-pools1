import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Expand,
  MapPin,
  Ruler,
  Sparkles,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

const CATEGORY_INQUIRY: Record<ProjectCategory, string> = {
  "Infinity Edge": "Custom Concrete Pool",
  Geometric: "Custom Concrete Pool",
  Freeform: "Complete Backyard Transformation",
  "Spa & Stonework": "Luxury Custom Spa",
};

/* ------------------------------- Lightbox ------------------------------- */

function Lightbox({
  list,
  index,
  onClose,
  onNavigate,
  onInquire,
}: {
  list: Project[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
  onInquire: (type: string) => void;
}) {
  const project = list[index];
  const prev = useCallback(
    () => onNavigate((index - 1 + list.length) % list.length),
    [index, list.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % list.length),
    [index, list.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#020c18]/92 p-4 backdrop-blur-md sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div
        key={project.id}
        className="animate-pop-in grid max-h-[92svh] w-full max-w-6xl overflow-y-auto rounded-[1.75rem] bg-surface shadow-2xl lg:grid-cols-[1.55fr_1fr] lg:overflow-hidden"
      >
        {/* Image side */}
        <div className="relative min-h-[300px] lg:min-h-[560px]">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} in ${project.location}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/55 via-transparent to-[#04101f]/25" />
          <span className="absolute top-5 left-5 rounded-full bg-[#04101f]/50 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white backdrop-blur-md">
            {index + 1} / {list.length}
          </span>
          <div className="absolute bottom-5 left-5 flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Detail side */}
        <div className="relative flex flex-col p-7 sm:p-9 lg:overflow-y-auto">
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-5 right-5 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-ink transition-all duration-300 hover:rotate-90 hover:bg-alt"
          >
            <X className="h-5 w-5" />
          </button>

          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/12 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-accent uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            {project.category}
          </span>
          <h3 className="mt-4 pr-10 font-display text-3xl leading-tight font-semibold text-ink">
            {project.title}
          </h3>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-faint">
            <MapPin className="h-4 w-4 text-accent" /> {project.location}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-soft">{project.description}</p>

          <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
            <div className="flex items-center justify-between">
              <dt className="inline-flex items-center gap-2 font-semibold text-faint">
                <Ruler className="h-4 w-4 text-accent" /> Pool Size
              </dt>
              <dd className="font-bold text-ink">{project.size}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="inline-flex items-center gap-2 font-semibold text-faint">
                <Sparkles className="h-4 w-4 text-accent" /> Finish
              </dt>
              <dd className="text-right font-bold text-ink">{project.finish}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="inline-flex items-center gap-2 font-semibold text-faint">
                <CalendarCheck className="h-4 w-4 text-accent" /> Completed
              </dt>
              <dd className="font-bold text-ink">{project.year}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-alt px-3 py-1.5 text-[11px] font-bold text-soft"
              >
                {h}
              </span>
            ))}
          </div>

          <button
            onClick={() => onInquire(CATEGORY_INQUIRY[project.category])}
            className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-onaccent shadow-[0_16px_34px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5 lg:mt-auto lg:pt-3.5"
          >
            Start a Similar Project <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Gallery ------------------------------- */

export default function Gallery({
  onInquire,
}: {
  onInquire: (type: string) => void;
}) {
  const { isSky } = useTheme();
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  const inquire = (type: string) => {
    setLightbox(null);
    onInquire(type);
  };

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden bg-alt py-24 lg:py-32">
      <div className="pointer-events-none absolute top-20 -left-32 h-96 w-96 rounded-full bg-accent2 opacity-[0.12] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            isSky ? (
              <>
                Designed to Impress. <em className="text-accent italic">Built to Last.</em>
              </>
            ) : (
              <>
                Every Pool <em className="text-accent italic">Tells a Story.</em>
              </>
            )
          }
          sub="A portfolio of Naples' most admired backyards — each one designed, engineered, and built by Glamour's own craftsmen."
        />

        {/* Filters */}
        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter projects">
            {projectCategories.map((c) => {
              const activeFilter = filter === c;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={activeFilter}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "cursor-pointer rounded-full border px-5 py-2.5 text-[13px] font-bold transition-all duration-300",
                    activeFilter
                      ? "border-accent bg-accent text-onaccent shadow-[0_12px_26px_-10px_var(--c-accent)]"
                      : "border-line bg-surface text-soft hover:border-accent/50 hover:text-ink"
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <Reveal delay={100}>
          <div key={filter} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setLightbox(i)}
                style={{ animationDelay: `${i * 70}ms` }}
                className="animate-pop-in group relative mb-5 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[1.5rem] text-left shadow-[var(--card-shadow)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                aria-label={`View ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category} pool in ${p.location}`}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-108",
                    p.aspect
                  )}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#04101f]/82 via-[#04101f]/12 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute top-4 left-4 rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                  {p.category}
                </span>
                <span className="absolute top-4 right-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-accent text-onaccent opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="h-4.5 w-4.5" />
                </span>
                <span className="absolute right-5 bottom-5 left-5">
                  <span className="block font-display text-[1.45rem] leading-tight font-semibold text-white">
                    {p.title}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-white/75">
                    <MapPin className="h-3.5 w-3.5 text-glow" />
                    {p.location}
                    <span className="mx-1 text-white/40">·</span>
                    {p.year}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 text-center text-sm text-faint">
            Showing {filtered.length} of {projects.length} signature projects ·{" "}
            <a href="#contact" className="font-bold text-accent underline-offset-4 hover:underline">
              Yours could be next
            </a>
          </p>
        </Reveal>
      </div>

      {lightbox !== null && (
        <Lightbox
          list={filtered}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
          onInquire={inquire}
        />
      )}
    </section>
  );
}
