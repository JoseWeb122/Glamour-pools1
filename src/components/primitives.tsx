import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------ Reveal ------------------------------ */

type RevealVariant = "up" | "left" | "right" | "zoom";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "right" && "reveal-right",
        variant === "zoom" && "reveal-zoom",
        inView && "is-in",
        className
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------- Section heading --------------------------- */

export function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-accent",
        center && "justify-center"
      )}
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent" />
      {children}
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent" />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        center ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <Eyebrow center={center}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={180}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-soft sm:text-lg",
              center && "mx-auto max-w-2xl"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------ Count up ------------------------------ */

export function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1900;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * value));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
