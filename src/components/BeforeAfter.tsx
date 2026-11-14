import { useEffect, useRef, useState } from "react";
import { ChevronsLeftRight, MoveHorizontal } from "lucide-react";
import { IMG } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

export default function BeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const touched = useRef(false);
  const introDone = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  /* Gentle intro sweep the first time the slider scrolls into view */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || introDone.current) return;
        introDone.current = true;
        io.disconnect();
        const start = performance.now();
        const dur = 2400;
        const tick = (now: number) => {
          if (touched.current) return;
          const p = Math.min((now - start) / dur, 1);
          // Sweep toward "before", then settle back to center
          setPos(50 - Math.sin(p * Math.PI * 1.15) * 30 * (1 - p * 0.35));
          if (p < 1) requestAnimationFrame(tick);
          else setPos(50);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    touched.current = true;
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const stopDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    touched.current = true;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
    else if (e.key === "Home") setPos(4);
    else if (e.key === "End") setPos(96);
    else return;
    e.preventDefault();
  };

  return (
    <section id="before-after" className="relative scroll-mt-24 overflow-hidden bg-base py-24 lg:py-32">
      <div className="pointer-events-none absolute top-10 -right-32 h-80 w-80 rounded-full bg-accent2 opacity-[0.12] blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Before & After"
          title={
            <>
              From Ordinary Yard to <em className="text-accent italic">Private Resort</em>
            </>
          }
          sub="Drag the handle to witness a complete Glamour transformation — the same Naples backyard, fourteen weeks apart."
        />

        <Reveal variant="zoom" delay={140}>
          <div
            ref={trackRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)} percent after`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            onKeyDown={onKeyDown}
            className="relative mt-14 aspect-[4/3] cursor-ew-resize touch-none overflow-hidden rounded-[2rem] shadow-[var(--card-shadow)] select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:aspect-[16/9] lg:aspect-[21/10]"
          >
            {/* AFTER (bottom layer) */}
            <img
              src={IMG.after}
              alt="After: the transformed backyard with a luxury concrete pool and lush landscaping"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            {/* BEFORE (clipped top layer) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={IMG.before}
                alt="Before: the original plain backyard lawn awaiting transformation"
                className="absolute inset-0 h-full w-full object-cover saturate-[.55] brightness-[.92]"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <span
              className={cn(
                "absolute top-5 left-5 rounded-full bg-[#04101f]/55 px-4 py-2 text-[10px] font-bold tracking-[0.26em] text-white uppercase backdrop-blur-md transition-opacity duration-300",
                pos < 14 && "opacity-0"
              )}
            >
              Before
            </span>
            <span
              className={cn(
                "absolute top-5 right-5 rounded-full bg-[#04101f]/55 px-4 py-2 text-[10px] font-bold tracking-[0.26em] text-white uppercase backdrop-blur-md transition-opacity duration-300",
                pos > 86 && "opacity-0"
              )}
            >
              After
            </span>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 z-10"
              style={{ left: `${pos}%` }}
              aria-hidden="true"
            >
              <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(4,16,31,0.55)]" />
              <div className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white/40 bg-white text-[#176b91] shadow-[0_16px_36px_-8px_rgba(4,16,31,0.6)]">
                <ChevronsLeftRight className="h-6 w-6" strokeWidth={2.4} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                The Grey Oaks Transformation
              </h3>
              <p className="mt-1 text-sm text-soft">
                Blank lawn → 40&apos; concrete pool, raised spa &amp; travertine
                terrace · Completed in 14 weeks
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-bold text-soft shadow-sm">
              <MoveHorizontal className="animate-float h-4 w-4 text-accent" />
              Drag — or use arrow keys — to compare
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
