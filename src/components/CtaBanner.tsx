import { ArrowRight, BadgeCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CTA_COPY, IMG } from "../data/content";
import { Reveal } from "./primitives";

const assurances = ["Free consultation", "3D design preview included", "No obligation"];

export default function CtaBanner() {
  const { theme } = useTheme();
  const copy = CTA_COPY[theme];

  return (
    <section className="noise relative isolate overflow-hidden">
      <img
        src={IMG.cta}
        alt="Luxury stone villa pool glowing at twilight in Naples, Florida"
        loading="lazy"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04101f]/78 via-[#04101f]/52 to-[#04101f]/82" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(84,216,232,0.16), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-glow uppercase">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-glow" />
            {copy.eyebrow}
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-glow" />
          </span>
        </Reveal>
        <Reveal delay={110}>
          <h2 className="mt-6 font-display text-4xl leading-[1.06] font-semibold text-balance text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/82 sm:text-lg">
            {copy.sub}
          </p>
        </Reveal>
        <Reveal delay={290}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent px-9 py-4 text-[15px] font-bold text-onaccent shadow-[0_24px_50px_-14px_var(--c-accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-14px_var(--c-accent)]"
          >
            {copy.button}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
        <Reveal delay={380}>
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
            {assurances.map((a) => (
              <li key={a} className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/75">
                <BadgeCheck className="h-4 w-4 text-glow" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
