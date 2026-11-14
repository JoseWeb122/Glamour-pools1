import { ArrowRight, ChevronDown, MapPin, Star } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { HERO_COPY, IMG } from "../data/content";
import { cn } from "../utils/cn";

export default function Hero() {
  const { theme, isSky } = useTheme();
  const copy = HERO_COPY[theme];

  return (
    <section id="home" className="noise relative isolate flex min-h-svh flex-col overflow-hidden bg-[#04101f]">
      {/* Dual cinematic backdrops — crossfade on direction switch */}
      <img
        src={IMG.heroSky}
        alt="Modern Florida luxury villa with a crystal-clear turquoise concrete pool under a bright blue sky"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out",
          isSky ? "animate-kenburns opacity-100" : "scale-105 opacity-0"
        )}
        fetchPriority="high"
      />
      <img
        src={IMG.heroSapphire}
        alt="Luxury modern villa pool glowing at twilight with underwater lighting and deep sapphire water"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out",
          !isSky ? "animate-kenburns opacity-100" : "scale-105 opacity-0"
        )}
        fetchPriority="high"
      />

      {/* Cinematic grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04101f]/60 via-[#04101f]/10 to-[#04101f]/78" />
      <div className="absolute inset-0" style={{ background: "var(--hero-tint)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/45 via-transparent to-transparent" />

      {/* Ambient water-glow orbs */}
      <div
        className={cn(
          "absolute top-[22%] right-[8%] h-64 w-64 rounded-full blur-[110px] transition-all duration-1000",
          isSky ? "bg-[#bfe9ff]/35" : "bg-glow/30"
        )}
        style={{ animation: "float 9s ease-in-out infinite" }}
      />
      <div
        className={cn(
          "absolute bottom-[26%] left-[4%] h-52 w-52 rounded-full blur-[100px] transition-all duration-1000",
          isSky ? "bg-white/25" : "bg-[#123f78]/60"
        )}
        style={{ animation: "float 12s ease-in-out infinite reverse" }}
      />

      {/* Content — keyed by theme so the reveal replays on switch */}
      <div
        key={theme}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-36 pb-44 sm:px-8"
      >
        <div className="max-w-3xl">
          <p
            className="animate-hero-up inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-white uppercase backdrop-blur-md"
            style={{ animationDelay: "0.1s" }}
          >
            <MapPin className="h-3.5 w-3.5 text-glow" />
            {copy.eyebrow}
          </p>

          <h1
            className="animate-hero-up mt-7 font-display text-[2.9rem] leading-[1.02] font-semibold text-white sm:text-7xl lg:text-[5.6rem]"
            style={{ animationDelay: "0.24s" }}
          >
            {copy.titleA}
            <span className="block italic">
              <span className="bg-gradient-to-r from-glow via-white to-glow bg-clip-text text-transparent">
                {copy.titleB}
              </span>
            </span>
          </h1>

          <div
            className="water-line animate-shimmer mt-8 h-[2px] w-44 rounded-full"
            aria-hidden="true"
          />

          <p
            className="animate-hero-up mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ animationDelay: "0.38s" }}
          >
            {copy.sub}
          </p>

          <div
            className="animate-hero-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.52s" }}
          >
            <a
              href={isSky ? "#projects" : "#process"}
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-onaccent shadow-[0_20px_44px_-14px_var(--c-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-14px_var(--c-accent)]"
            >
              {copy.primary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              {copy.secondary}
            </a>
          </div>

          <p
            className="animate-hero-up mt-8 text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase"
            style={{ animationDelay: "0.64s" }}
          >
            {copy.direction} · Switch directions anytime above
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute right-0 bottom-24 left-0 z-10 hidden md:block">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 sm:px-8">
          <a
            href="#about"
            className="group flex items-center gap-3 text-white/75 transition-colors hover:text-white"
            aria-label="Scroll down to explore"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 backdrop-blur-sm transition-colors group-hover:bg-white/10">
              <ChevronDown className="animate-scroll-cue h-4 w-4" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
              Scroll to explore
            </span>
          </a>

          <div className="flex items-center gap-5 rounded-full border border-white/20 bg-white/10 py-2.5 pr-6 pl-3 backdrop-blur-md">
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
              ))}
            </span>
            <span className="text-[13px] font-semibold text-white">
              4.9 · Loved by 350+ Naples homeowners
            </span>
            <span className="hidden h-6 w-px bg-white/25 lg:block" />
            <span className="hidden text-[13px] font-semibold text-white/80 lg:block">
              Est. 1998 · FL Lic. #CPC1458923
            </span>
          </div>
        </div>
      </div>

      {/* Coastal wave into the page */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 z-[5] h-[64px] w-full sm:h-[84px]"
        aria-hidden="true"
      >
        <path
          d="M0,52 C220,92 460,6 720,34 C980,62 1210,94 1440,42 L1440,90 L0,90 Z"
          fill="var(--c-base)"
        />
      </svg>
    </section>
  );
}
