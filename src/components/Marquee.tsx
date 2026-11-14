import { Waves } from "lucide-react";
import { marqueeItems } from "../data/content";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="group overflow-hidden border-b border-line bg-base py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap"
              >
                <span className="font-display text-sm font-semibold tracking-[0.24em] text-soft uppercase">
                  {item}
                </span>
                <Waves className="h-4 w-4 shrink-0 text-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
