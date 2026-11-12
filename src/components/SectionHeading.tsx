import { cn } from "../utils/cn";

// Judul section seragam: eyebrow kecil + judul serif + deskripsi.
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean; // true bila latar gelap
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.3em]",
          dark ? "text-gold" : "text-gold-dark"
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl",
          dark ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <span className="mx-auto mt-6 block h-px w-16 bg-gold" aria-hidden="true" />
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            dark ? "text-ivory/70" : "text-charcoal/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
