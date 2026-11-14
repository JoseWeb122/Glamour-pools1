import { useEffect, useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import {
  CONTACT,
  IMG,
  budgetOptions,
  projectTypeOptions,
} from "../data/content";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "../utils/cn";

interface Fields {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  contactMethod: string;
  message: string;
}

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  projectType: projectTypeOptions[0],
  budget: budgetOptions[0],
  contactMethod: "Phone Call",
  message: "",
};

const inputCls = (error?: string) =>
  cn(
    "w-full rounded-xl border bg-alt/50 px-4 py-3 text-[15px] text-ink transition-all duration-300 placeholder:text-faint focus:bg-surface focus:ring-4",
    error
      ? "border-rose-400 focus:border-rose-400 focus:ring-rose-400/15"
      : "border-line focus:border-accent focus:ring-accent/15"
  );

function ErrorText({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-rose-500" role="alert">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" /> {msg}
    </p>
  );
}

const infoCards = [
  {
    icon: Phone,
    label: "Call or Text",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Design Studio & Showroom",
    value: CONTACT.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: CONTACT.hours,
  },
];

const contactMethods = [
  { label: "Phone Call", icon: Phone },
  { label: "Text Message", icon: MessageSquare },
  { label: "Email", icon: Mail },
];

export default function Contact({
  inquiry,
}: {
  inquiry: { type: string; nonce: number };
}) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [highlight, setHighlight] = useState(false);

  /* A service / project CTA elsewhere on the page pre-fills this form */
  useEffect(() => {
    if (!inquiry.nonce) return;
    setFields((f) => ({ ...f, projectType: inquiry.type }));
    setSubmitted(false);
    setHighlight(true);
    const t = setTimeout(() => setHighlight(false), 1800);
    return () => clearTimeout(t);
  }, [inquiry]);

  const set = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2)
      next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = "Please enter a valid email address.";
    if (fields.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (!fields.projectType) next.projectType = "Please choose a project type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  const firstName = fields.name.trim().split(" ")[0] || "friend";

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-alt py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-accent2 opacity-[0.12] blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Contact & Project Inquiry"
              title={
                <>
                  Tell Us About Your{" "}
                  <em className="text-accent italic">Dream Backyard</em>
                </>
              }
              sub="Share a few details and a Glamour design consultant will respond within one business day with honest next steps."
            />

            <div className="mt-10 space-y-3.5">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-onaccent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold tracking-[0.24em] text-faint uppercase">
                        {card.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[15px] font-bold text-ink">
                        {card.value}
                      </span>
                    </span>
                  </>
                );
                const cls =
                  "group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4.5 shadow-sm transition-all duration-300";
                return (
                  <Reveal key={card.label} delay={i * 80}>
                    {card.href ? (
                      <a href={card.href} className={cn(cls, "hover:-translate-y-0.5 hover:shadow-[var(--card-shadow)]")}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={320}>
              <div className="relative mt-8 overflow-hidden rounded-[1.75rem] shadow-[var(--card-shadow)]">
                <img
                  src={IMG.contact}
                  alt="Seaside luxury villa with an infinity pool in bright Florida sunshine"
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-[1.6s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 inline-flex items-center gap-2 text-[13px] font-bold text-white">
                  <MapPin className="h-4 w-4 text-glow" />
                  Serving Naples · Marco Island · Bonita Springs
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal variant="right" delay={120} className="lg:col-span-3">
            <div
              className={cn(
                "relative h-full rounded-[2rem] border bg-surface p-7 shadow-[var(--card-shadow)] transition-all duration-700 sm:p-9",
                highlight
                  ? "border-accent ring-4 ring-accent/25"
                  : "border-line ring-0 ring-transparent"
              )}
            >
              {submitted ? (
                <div className="flex h-full min-h-[480px] flex-col items-center justify-center text-center">
                  <span className="animate-check-pop grid h-20 w-20 place-items-center rounded-full bg-accent/12 text-accent">
                    <CheckCircle2 className="h-10 w-10" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-7 font-display text-3xl font-semibold text-ink sm:text-4xl">
                    Thank You, {firstName}!
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-soft">
                    Your <strong className="text-ink">{fields.projectType}</strong>{" "}
                    inquiry has been received. A Glamour design consultant will
                    reach out by{" "}
                    <strong className="text-ink">{fields.contactMethod.toLowerCase()}</strong>{" "}
                    within one business day to schedule your free consultation.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-[11px] font-bold tracking-wide text-soft uppercase">
                    <span className="rounded-full bg-alt px-3.5 py-1.5">Budget · {fields.budget}</span>
                    <span className="rounded-full bg-alt px-3.5 py-1.5">{CONTACT.phoneDisplay}</span>
                  </div>
                  <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={reset}
                      className="cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:bg-alt"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-onaccent shadow-[0_14px_30px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Explore Our Projects <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink sm:text-[1.7rem]">
                        Request Your Free Consultation
                      </h3>
                      <p className="mt-1.5 text-sm text-soft">
                        Fields marked <span className="font-bold text-accent">*</span> are required.
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-accent/12 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-accent uppercase sm:block">
                      Free · No Obligation
                    </span>
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="f-name" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Full Name *
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jordan Whitfield"
                        value={fields.name}
                        onChange={(e) => set("name", e.target.value)}
                        className={inputCls(errors.name)}
                        aria-invalid={!!errors.name}
                      />
                      <ErrorText msg={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="f-phone" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Phone *
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(239) 555-0100"
                        value={fields.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className={inputCls(errors.phone)}
                        aria-invalid={!!errors.phone}
                      />
                      <ErrorText msg={errors.phone} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="f-email" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Email Address *
                      </label>
                      <input
                        id="f-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={fields.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={inputCls(errors.email)}
                        aria-invalid={!!errors.email}
                      />
                      <ErrorText msg={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="f-type" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Project Type *
                      </label>
                      <div className="relative">
                        <select
                          id="f-type"
                          value={fields.projectType}
                          onChange={(e) => set("projectType", e.target.value)}
                          className={cn(inputCls(errors.projectType), "cursor-pointer appearance-none pr-11")}
                        >
                          {projectTypeOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4.5 w-4.5 -translate-y-1/2 text-accent" />
                      </div>
                      <ErrorText msg={errors.projectType} />
                    </div>
                    <div>
                      <label htmlFor="f-budget" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          id="f-budget"
                          value={fields.budget}
                          onChange={(e) => set("budget", e.target.value)}
                          className={cn(inputCls(), "cursor-pointer appearance-none pr-11")}
                        >
                          {budgetOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4.5 w-4.5 -translate-y-1/2 text-accent" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Preferred Contact Method
                      </span>
                      <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Preferred contact method">
                        {contactMethods.map((m) => {
                          const Icon = m.icon;
                          const activeOpt = fields.contactMethod === m.label;
                          return (
                            <button
                              key={m.label}
                              type="button"
                              role="radio"
                              aria-checked={activeOpt}
                              onClick={() => set("contactMethod", m.label)}
                              className={cn(
                                "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4.5 py-2.5 text-[13px] font-bold transition-all duration-300",
                                activeOpt
                                  ? "border-accent bg-accent text-onaccent shadow-[0_10px_24px_-10px_var(--c-accent)]"
                                  : "border-line bg-alt/50 text-soft hover:border-accent/50 hover:text-ink"
                              )}
                            >
                              <Icon className="h-4 w-4" />
                              {m.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="f-msg" className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-soft uppercase">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="f-msg"
                        rows={4}
                        placeholder="We've always dreamed of an infinity-edge pool with a spa overlooking the preserve…"
                        value={fields.message}
                        onChange={(e) => set("message", e.target.value)}
                        className={cn(inputCls(), "resize-none")}
                      />
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-xs leading-relaxed text-faint">
                      Response within one business day.
                      <br className="hidden sm:block" /> No spam — ever.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-bold text-onaccent shadow-[0_18px_38px_-12px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                    >
                      Send My Request
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
