import { BRAND } from "../data/config";
import { cn } from "../utils/cn";

// Logo teks + simbol berlian emas kecil.
interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
}

export default function Logo({ className, tone = "light" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-serif text-2xl tracking-[0.18em] uppercase",
        tone === "light" ? "text-ivory" : "text-charcoal",
        className
      )}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M7 0l7 7-7 7-7-7 7-7z" fill="#C9A96E" />
        <path d="M7 3.5L10.5 7 7 10.5 3.5 7 7 3.5z" fill="#141311" />
      </svg>
      {BRAND.name}
    </span>
  );
}
