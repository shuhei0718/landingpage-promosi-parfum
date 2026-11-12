import { BRAND, NAV_LINKS } from "../data/config";
import { InstagramIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from "./Icons";
import Logo from "./Logo";

// Tautan media sosial
const SOCIALS = [
  { label: "Instagram Aurelle", href: BRAND.instagram, Icon: InstagramIcon },
  { label: "TikTok Aurelle", href: BRAND.tiktok, Icon: TikTokIcon },
  { label: "YouTube Aurelle", href: BRAND.youtube, Icon: YouTubeIcon },
  {
    label: "WhatsApp Aurelle",
    href: `https://wa.me/${BRAND.whatsapp}`,
    Icon: WhatsAppIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0c0b] text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Eau de parfum premium untuk setiap momen. Dibuat dengan cinta,
              dipakai dengan percaya diri.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Jelajahi
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold focus-visible:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#promo"
                  className="text-sm text-ivory/70 transition-colors hover:text-gold focus-visible:text-gold"
                >
                  Promo
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Ikuti Kami
            </h2>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-charcoal focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <Icon width={20} height={20} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ivory/60">
              <a
                href={`mailto:${BRAND.email}`}
                className="transition-colors hover:text-gold"
              >
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-ivory/50">
          © {new Date().getFullYear()} {BRAND.name}. Seluruh hak cipta
          dilindungi.
        </div>
      </div>
    </footer>
  );
}
