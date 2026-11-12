import type { ComponentType, SVGProps } from "react";
import { FEATURES, type FeatureIcon } from "../data/features";
import { BoxIcon, ClockIcon, GemIcon, ShieldIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Pemetaan nama ikon pada data -> komponen ikon
const ICONS: Record<FeatureIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  clock: ClockIcon,
  gem: GemIcon,
  box: BoxIcon,
  shield: ShieldIcon,
};

// Section Keunggulan: 4 ikon + penjelasan singkat.
export default function Features() {
  return (
    <section
      id="keunggulan"
      className="relative overflow-hidden bg-charcoal py-20 sm:py-28"
      aria-labelledby="keunggulan-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="keunggulan-title"
            dark
            eyebrow="Mengapa Aurelle"
            title="Kemewahan yang Terasa di Setiap Semprotan"
            description="Kami percaya parfum yang baik bukan hanya wangi, tetapi juga bertahan, aman, dan indah dipandang."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <li key={feature.id}>
                <Reveal delay={index * 100} className="h-full">
                  <div className="group h-full rounded-3xl border border-white/10 bg-charcoal-soft p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-[#25221e]">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal">
                      <Icon width={28} height={28} />
                    </div>
                    <h3 className="mt-6 font-serif text-xl text-ivory">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
