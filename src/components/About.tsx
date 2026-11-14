import { Award, CheckCircle2 } from "lucide-react";
import { IMG, stats } from "../data/content";
import { CountUp, Eyebrow, Reveal } from "./primitives";

const checklist = [
  "In-house design studio & construction crews — never day labor",
  "Photorealistic 3D design before a single shovel touches soil",
  "One dedicated project manager from first sketch to first swim",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-base py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent2 opacity-[0.13] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Visual collage */}
          <Reveal variant="left" className="relative mb-10 lg:mb-0">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--card-shadow)]">
              <img
                src={IMG.aboutMain}
                alt="Elegant Naples mansion with a sparkling custom concrete pool and manicured gardens"
                className="aspect-[4/3.3] w-full object-cover transition-transform duration-[1.6s] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/35 via-transparent to-transparent" />
            </div>
            <img
              src={IMG.aboutAerial}
              alt="Aerial view of luxury Naples homes with private pools"
              className="absolute -right-3 -bottom-10 hidden w-52 rotate-2 rounded-2xl border-[6px] border-base object-cover shadow-[var(--card-shadow)] transition-transform duration-500 hover:rotate-0 sm:block lg:-right-8 lg:w-64"
              loading="lazy"
            />
            <div className="absolute top-6 -left-2 flex items-center gap-3.5 rounded-2xl border border-line bg-glassstrong px-5 py-4 shadow-[var(--card-shadow)] backdrop-blur-xl sm:left-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-onaccent">
                <Award className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-xl leading-none font-bold text-ink">
                  Since 1998
                </span>
                <span className="mt-1 block text-[10px] font-bold tracking-[0.22em] text-faint uppercase">
                  Naples, Florida
                </span>
              </span>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>Welcome to Glamour Pools &amp; Spas</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl">
                Crafting Naples&apos; Most{" "}
                <em className="text-accent italic">Coveted Backyards</em> for
                Over 25 Years
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 leading-relaxed text-soft">
                Glamour Pools &amp; Spas is a family-owned design-build firm
                devoted to one craft: transforming Southwest Florida backyards
                into private resorts. We design, engineer, and construct every
                concrete pool, spa, and paver terrace ourselves — so the
                artistry you approve in 3D is exactly the craftsmanship you
                swim in.
              </p>
              <p className="mt-4 leading-relaxed text-soft">
                From Port Royal to Marco Island, our work is known by its
                quiet signatures: water that sits perfectly still, tile lines
                true to the laser, and stone that feels cool at noon in
                August.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <ul className="mt-8 space-y-3.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-9 flex items-center gap-4 border-t border-line pt-7">
                <span className="font-display text-2xl text-accent italic">
                  Marco Delgado
                </span>
                <span className="h-8 w-px bg-line" />
                <span className="text-xs leading-snug font-semibold tracking-wide text-faint uppercase">
                  Founder &amp; Master
                  <br />
                  Pool Builder
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats band */}
        <Reveal delay={120}>
          <dl className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dd className="font-display text-5xl font-bold text-ink lg:text-[3.4rem]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[11px] font-bold tracking-[0.24em] text-accent uppercase">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
