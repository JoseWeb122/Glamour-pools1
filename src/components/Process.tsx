import { ClipboardCheck, PenTool, ShieldCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { IMG, processSteps } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";

const wideChips = [
  { icon: PenTool, label: "In-house design studio" },
  { icon: ShieldCheck, label: "Permits & HOA handled for you" },
  { icon: ClipboardCheck, label: "Weekly photo progress updates" },
];

export default function Process() {
  const { isSky } = useTheme();
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-alt py-24 lg:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent2 opacity-[0.12] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={isSky ? "Our Process" : "Our Craftsmanship"}
          title={
            isSky ? (
              <>
                From First Sketch to <em className="text-accent italic">First Swim</em>
              </>
            ) : (
              <>
                Precision at <em className="text-accent italic">Every Step</em>
              </>
            )
          }
          sub="A transparent, four-act journey refined over 480+ Naples backyards. You'll always know what happens next — and when."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-[52px] right-[12%] left-[12%] hidden border-t-2 border-dashed border-accent/30 xl:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 130}>
                  <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface p-8 shadow-[var(--card-shadow)] transition-all duration-500 hover:-translate-y-2">
                    <span
                      aria-hidden="true"
                      className="absolute -top-3 right-5 font-display text-[5.2rem] leading-none font-bold text-accent/10 transition-colors duration-500 select-none group-hover:text-accent/20"
                    >
                      {step.num}
                    </span>
                    <span className="relative grid h-13 w-13 place-items-center rounded-2xl bg-accent text-onaccent shadow-[0_14px_28px_-10px_var(--c-accent)] transition-transform duration-500 group-hover:-rotate-6">
                      <Icon className="h-5.5 w-5.5" strokeWidth={2} />
                    </span>
                    <p className="mt-6 text-[10px] font-bold tracking-[0.28em] text-accent uppercase">
                      Step {step.num} · {step.duration}
                    </p>
                    <h3 className="mt-2.5 font-display text-[1.55rem] leading-snug font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-soft">{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal variant="zoom" delay={120}>
          <div className="group relative mt-14 overflow-hidden rounded-[2rem] shadow-[var(--card-shadow)]">
            <img
              src={IMG.processWide}
              alt="Elegant indoor-outdoor luxury pool craftsmanship with architectural detailing"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-[1.8s] group-hover:scale-105 sm:h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/72 via-[#04101f]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-7 sm:p-10">
              <p className="font-display text-2xl leading-snug text-white sm:text-[1.7rem]">
                One team. One contract.{" "}
                <em className="text-glow">Zero handoffs</em> between the dream
                and the dive.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {wideChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-4 py-2 text-[11px] font-bold text-white backdrop-blur-md"
                    >
                      <Icon className="h-4 w-4 text-glow" />
                      {chip.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
