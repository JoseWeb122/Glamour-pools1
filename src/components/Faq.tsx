import { useState } from "react";
import { Mail, Phone, Plus } from "lucide-react";
import { CONTACT, faqs } from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-base py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* Left rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions, Answered"
              title={
                <>
                  Everything You&apos;re{" "}
                  <em className="text-accent italic">Wondering</em>
                </>
              }
              sub="Straight answers on timelines, budgets, permits, and warranties — from the builders themselves."
            />
            <Reveal delay={220}>
              <div className="mt-9 rounded-[1.75rem] border border-line bg-alt p-7">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  Talk with a real Glamour design consultant — no pressure, no
                  scripts, just honest guidance.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-bold text-onaccent shadow-[0_14px_30px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-[13px] font-bold text-ink transition-all duration-300 hover:border-accent/60"
                  >
                    <Mail className="h-4 w-4 text-accent" /> Email Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.q} delay={i * 70}>
                  <div
                    className={cn(
                      "mb-3.5 overflow-hidden rounded-3xl border transition-colors duration-400",
                      isOpen ? "border-accent/45 bg-surface shadow-[var(--card-shadow)]" : "border-line bg-surface"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-5 p-5 text-left sm:p-6"
                    >
                      <span className="text-[16px] font-bold text-ink sm:text-[17px]">
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-400",
                          isOpen ? "rotate-45 bg-accent text-onaccent" : "bg-alt text-accent"
                        )}
                      >
                        <Plus className="h-4.5 w-4.5" strokeWidth={2.4} />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "[grid-template-rows:1fr] opacity-100" : "[grid-template-rows:0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-[15px] leading-relaxed text-soft sm:px-6">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
