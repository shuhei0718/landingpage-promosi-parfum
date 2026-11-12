import { GENERAL_WA_MESSAGE, buildWhatsAppLink } from "../data/config";
import { PRODUCTS } from "../data/products";
import Button from "./Button";
import { ArrowRightIcon, SparkleIcon, WhatsAppIcon } from "./Icons";
import PerfumeBottle from "./PerfumeBottle";

// Statistik singkat di bawah CTA
const STATS = [
  { value: "4,9/5", label: "Rating pelanggan" },
  { value: "12rb+", label: "Botol terjual" },
  { value: "8–12 jam", label: "Daya tahan aroma" },
];

export default function Hero() {
  const [noir, blanc, citrus] = PRODUCTS;

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-charcoal text-ivory"
      aria-labelledby="hero-title"
    >
      {/* Dekorasi latar */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b9742b]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-20">
        {/* Teks */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            <SparkleIcon width={14} height={14} className="text-gold" />
            Diskon 30% Minggu Ini
          </span>

          <h1
            id="hero-title"
            className="mt-7 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Aroma yang Bicara{" "}
            <span className="text-shimmer italic">Sebelum</span> Kamu Berkata
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg lg:mx-0">
            Aurelle Eau de Parfum 50 ml. Diracik dari essence pilihan dengan
            daya tahan 8–12 jam, untuk kamu yang ingin meninggalkan kesan
            tak terlupakan.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href={buildWhatsAppLink(GENERAL_WA_MESSAGE)}
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon width={18} height={18} />
              Beli Sekarang
            </Button>
            <Button
              href="#produk"
              variant="ghost-light"
              className="w-full sm:w-auto"
            >
              Lihat Koleksi
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:mx-0">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-xl text-gold sm:text-2xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-ivory/60" aria-hidden="true">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual botol */}
        <div className="relative mx-auto aspect-square w-full max-w-[300px] min-[400px]:max-w-[380px] sm:max-w-[480px]">
          {/* Lingkaran emas + cincin berputar */}
          <div
            className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(201,169,110,0.35),rgba(201,169,110,0.04)_70%)]"
            aria-hidden="true"
          />
          <div
            className="animate-spin-slow absolute inset-[2%] rounded-full border border-dashed border-gold/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[16%] rounded-full border border-gold/20"
            aria-hidden="true"
          />

          {/* Botol kiri */}
          <div className="absolute bottom-[10%] left-[2%] w-[30%] -rotate-[8deg]">
            <div className="animate-float-delayed">
              <PerfumeBottle
                name={blanc.name}
                liquidFrom={blanc.liquidFrom}
                liquidTo={blanc.liquidTo}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Botol kanan */}
          <div className="absolute bottom-[10%] right-[2%] w-[30%] rotate-[8deg]">
            <div className="animate-float-delayed [animation-delay:-4s]">
              <PerfumeBottle
                name={citrus.name}
                liquidFrom={citrus.liquidFrom}
                liquidTo={citrus.liquidTo}
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Botol utama */}
          <div className="absolute bottom-[5%] left-1/2 w-[44%] -translate-x-1/2">
            <div className="animate-float">
              <PerfumeBottle
                name={noir.name}
                liquidFrom={noir.liquidFrom}
                liquidTo={noir.liquidTo}
                className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Badge diskon */}
          <div
            className="absolute right-0 top-[4%] flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border border-gold bg-charcoal text-center shadow-[0_10px_40px_-10px_rgba(201,169,110,0.6)] sm:h-28 sm:w-28"
            role="img"
            aria-label="Diskon 30 persen"
          >
            <span className="font-serif text-2xl leading-none text-gold sm:text-3xl">
              30%
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ivory/80">
              Diskon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
