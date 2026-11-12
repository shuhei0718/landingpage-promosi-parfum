import { useEffect, useState } from "react";
import { GENERAL_WA_MESSAGE, NAV_LINKS, buildWhatsAppLink } from "../data/config";
import { cn } from "../utils/cn";
import Button from "./Button";
import { CloseIcon, MenuIcon } from "./Icons";
import Logo from "./Logo";

// Navbar sticky: transparan di atas, solid + blur setelah scroll. Hamburger di mobile.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk mengubah latar navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ctaHref = buildWhatsAppLink(GENERAL_WA_MESSAGE);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-charcoal/90 backdrop-blur-md"
          : "border-transparent bg-charcoal"
      )}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Navigasi utama"
      >
        <a
          href="#beranda"
          aria-label="Aurelle, kembali ke beranda"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Logo />
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-ivory/80 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold hover:after:w-full focus-visible:text-gold focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href={ctaHref} className="hidden px-5 py-2.5 sm:inline-flex">
            Beli Sekarang
          </Button>

          {/* Tombol hamburger */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="animate-fade-down border-t border-white/10 bg-charcoal px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 font-serif text-lg text-ivory/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={ctaHref} className="mt-5 w-full">
            Beli Sekarang
          </Button>
        </div>
      )}
    </header>
  );
}
