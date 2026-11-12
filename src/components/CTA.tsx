import { GENERAL_WA_MESSAGE, buildWhatsAppLink } from "../data/config";
import Button from "./Button";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

// CTA penutup dengan latar foto gelap + overlay.
export default function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-charcoal py-24 text-center text-ivory sm:py-32"
      aria-labelledby="cta-title"
    >
      <img
        src="https://images.pexels.com/photos/36779953/pexels-photo-36779953.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900&w=1600"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Promo Minggu Ini · Diskon 30%
          </p>
          <h2
            id="cta-title"
            className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Temukan Aroma <span className="text-shimmer italic">Khasmu</span>{" "}
            Hari Ini
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            Chat tim kami di WhatsApp untuk konsultasi aroma, cek stok, dan
            pesan sekarang. Gratis konsultasi, garansi uang kembali 14 hari.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink(GENERAL_WA_MESSAGE)}
              className="w-full px-8 py-4 sm:w-auto"
            >
              <WhatsAppIcon width={20} height={20} />
              Pesan via WhatsApp
            </Button>
            <Button
              href="#produk"
              variant="ghost-light"
              className="w-full px-8 py-4 sm:w-auto"
            >
              Lihat Varian
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
