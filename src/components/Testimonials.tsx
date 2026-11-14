import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

function initials(name: string) {
  const clean = name.replace(/^(The|Dr\.)\s+/i, "");
  const parts = clean.split(/\s+/);
  const first = parts[0]?.[0] ?? "G";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => clearInterval(t);
  }, [paused, count]);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-alt to-base py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2 opacity-[0.1] blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title={
            <>
              Loved Across <em className="text-accent italic">Naples&apos; Finest Streets</em>
            </>
          }
        />

        <Reveal delay={140}>
          <div
            className="relative mx-auto mt-12 max-w-4xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 42) go(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <Quote
              aria-hidden="true"
              className="absolute -top-8 left-1/2 h-20 w-20 -translate-x-1/2 text-accent/12"
              fill="currentColor"
            />
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <figure key={t.name} className="w-full shrink-0 px-2 pt-10 text-center sm:px-10">
                    <div className="flex items-center justify-center gap-1.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="mx-auto mt-7 max-w-3xl font-display text-[1.55rem] leading-snug font-medium text-balance text-ink italic sm:text-3xl">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-8 flex flex-col items-center gap-3">
                      <span className="grid h-13 w-13 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 font-display text-base font-bold text-white shadow-[0_12px_26px_-10px_var(--c-accent)]">
                        {initials(t.name)}
                      </span>
                      <span>
                        <span className="block text-[15px] font-bold text-ink">{t.name}</span>
                        <span className="mt-0.5 block text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                          {t.area} · {t.project}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="absolute top-1/2 -left-2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink shadow-[var(--card-shadow)] transition-all duration-300 hover:bg-accent hover:text-onaccent md:grid lg:-left-16"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="absolute top-1/2 -right-2 hidden h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-line bg-surface text-ink shadow-[var(--card-shadow)] transition-all duration-300 hover:bg-accent hover:text-onaccent md:grid lg:-right-16"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2.5 cursor-pointer rounded-full transition-all duration-400",
                    i === index ? "w-9 bg-accent" : "w-2.5 bg-faint/50 hover:bg-accent/60"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
