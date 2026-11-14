import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import { CONTACT, IMG, whyItems } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";

const trustChips = [
  { icon: ShieldCheck, label: CONTACT.license },
  { icon: Award, label: "Best of Naples · 2023 – 2025" },
  { icon: Users, label: "In-House Crews Only" },
  { icon: Clock, label: "On-Time Completion Promise" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden bg-base py-24 lg:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 font-display text-[11rem] leading-none font-bold tracking-tight text-ink/[0.035] select-none lg:text-[16rem]"
      >
        GLAMOUR
      </span>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <Reveal variant="left" className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--card-shadow)]">
              <img
                src={IMG.whyUs}
                alt="Architectural white villa with a serene custom pool and stone terrace"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[1.6s] hover:scale-105 lg:h-[580px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/70 via-transparent to-transparent" />
              <span className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-white uppercase backdrop-blur-md">
                <Award className="h-4 w-4 text-glow" /> Best of Naples 2025
              </span>
              <figure className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/18 bg-white/10 p-5 backdrop-blur-md">
                <blockquote className="font-display text-lg leading-snug text-white italic">
                  “We treat every backyard like it&apos;s our own — because our
                  name is on it forever.”
                </blockquote>
                <figcaption className="mt-2.5 text-[11px] font-bold tracking-[0.24em] text-white/70 uppercase">
                  Marco Delgado · Founder
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Glamour"
              title={
                <>
                  Craftsmanship You Can See.{" "}
                  <em className="text-accent italic">Quality You Can Feel.</em>
                </>
              }
              sub="Anyone can pour concrete. We compose environments — and stand behind every square inch for decades."
            />

            <div className="mt-6">
              {whyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="group flex gap-5 border-b border-line py-6 transition-transform duration-400 first:pt-2 hover:translate-x-1.5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-[var(--card-shadow)] transition-all duration-400 group-hover:border-accent group-hover:bg-accent group-hover:text-onaccent">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-soft">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {trustChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[11px] font-bold text-soft shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {chip.label}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
