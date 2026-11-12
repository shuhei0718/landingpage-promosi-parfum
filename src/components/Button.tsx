import type { ReactNode } from "react";
import { cn } from "../utils/cn";

// Tombol berbentuk <a> dengan beberapa varian gaya.
type Variant = "primary" | "ghost-light" | "outline-dark" | "dark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal shadow-[0_8px_30px_-8px_rgba(201,169,110,0.7)] hover:-translate-y-0.5 hover:bg-gold-light",
  "ghost-light":
    "border border-white/30 text-ivory hover:-translate-y-0.5 hover:border-gold hover:text-gold",
  "outline-dark":
    "border border-charcoal/30 text-charcoal hover:-translate-y-0.5 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  dark: "bg-charcoal text-ivory hover:-translate-y-0.5 hover:bg-charcoal-soft hover:shadow-lg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
