import { useState } from "react";
import { TESTIMONIALS, type Testimonial } from "../data/testimonials";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StarRating from "./StarRating";

// Avatar dengan fallback inisial bila foto gagal dimuat.
function Avatar({ person }: { person: Testimonial }) {
  const [failed, setFailed] = useState(false);
  const initials = person.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (failed) {
    return (
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 font-serif text-lg text-gold-dark"
        role="img"
        aria-label={`Avatar ${person.name}`}
      >
        {initials}
      </span>
    );
  }

  return (
    <img
      src={person.avatar}
      alt={`Foto ${person.name}`}
      width={56}
      height={56}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/60 ring-offset-2 ring-offset-white"
    />
  );
}

// Section Testimoni: grid 3 kartu.
export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-ivory py-20 sm:py-28"
      aria-labelledby="testimoni-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="testimoni-title"
            eyebrow="Kata Mereka"
            title="Dicintai Ribuan Pelanggan"
            description="Cerita nyata dari pelanggan yang sudah menjadikan Aurelle bagian dari keseharian mereka."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <li key={t.id}>
              <Reveal delay={index * 120} className="h-full">
                <figure className="relative flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_60px_-30px_rgba(20,19,17,0.35)]">
                  <span
                    className="absolute right-7 top-3 font-serif text-7xl leading-none text-gold/30"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <StarRating rating={t.rating} />
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal/80">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-6">
                    <Avatar person={t} />
                    <div>
                      <p className="font-medium text-charcoal">{t.name}</p>
                      <p className="text-sm text-charcoal/60">
                        {t.city} · {t.variant}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
