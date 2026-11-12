import { buildWhatsAppLink, formatRupiah } from "../data/config";
import { BUNDLES, getProductById } from "../data/products";
import { getPromoEndDate, useCountdown } from "../hooks/useCountdown";
import { cn } from "../utils/cn";
import Button from "./Button";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import PerfumeBottle from "./PerfumeBottle";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pad = (n: number) => String(n).padStart(2, "0");

// Section Promo: countdown timer + paket bundling hemat.
export default function Promo() {
  const { days, hours, minutes, seconds } = useCountdown(getPromoEndDate);

  const units = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ];

  return (
    <section
      id="promo"
      className="bg-sand py-20 sm:py-28"
      aria-labelledby="promo-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="promo-title"
            eyebrow="Promo Terbatas"
            title="Diskon 30% Berakhir Sebentar Lagi"
            description="Dapatkan harga spesial untuk semua varian dan paket bundling. Stok terbatas, jangan sampai kehabisan."
          />
        </Reveal>

        {/* Countdown */}
        <Reveal delay={100}>
          <div
            className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-gold/40 bg-charcoal p-6 shadow-[0_30px_60px_-30px_rgba(20,19,17,0.6)] sm:p-10"
            role="timer"
            aria-label={`Sisa waktu promo: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`}
          >
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gold">
              Promo berakhir dalam
            </p>
            <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-5">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-center sm:py-6"
                >
                  <div
                    className="font-serif text-3xl tabular-nums text-ivory sm:text-5xl"
                    aria-hidden="true"
                  >
                    {pad(unit.value)}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold sm:text-xs">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Paket bundling */}
        <h3 className="mt-20 text-center font-serif text-2xl text-charcoal sm:text-3xl">
          Paket Bundling Hemat
        </h3>

        <ul className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {BUNDLES.map((bundle, index) => {
            const items = bundle.productIds
              .map((id) => getProductById(id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            const normalTotal = items.reduce((sum, p) => sum + p.price, 0);
            const saving = normalTotal - bundle.promoPrice;
            const savingPct = Math.round((saving / normalTotal) * 100);
            const message = `Halo Aurelle, saya ingin memesan paket ${bundle.name} (${items
              .map((p) => p.name)
              .join(" + ")}) seharga ${formatRupiah(bundle.promoPrice)}. Apakah masih tersedia?`;

            return (
              <li key={bundle.id}>
                <Reveal delay={index * 120} className="h-full">
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2",
                      bundle.featured
                        ? "border-gold bg-charcoal text-ivory shadow-[0_30px_60px_-25px_rgba(20,19,17,0.6)]"
                        : "border-charcoal/10 bg-white text-charcoal hover:border-gold/60 hover:shadow-xl"
                    )}
                  >
                    {bundle.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal">
                        Paling Hemat
                      </span>
                    )}

                    {/* Mini botol */}
                    <div className="flex h-28 items-end justify-center gap-1">
                      {items.map((p) => (
                        <PerfumeBottle
                          key={p.id}
                          name={p.name}
                          liquidFrom={p.liquidFrom}
                          liquidTo={p.liquidTo}
                          className="h-full w-auto"
                        />
                      ))}
                    </div>

                    <h4 className="mt-6 text-center font-serif text-2xl">
                      {bundle.name}
                    </h4>
                    <p
                      className={cn(
                        "mt-2 text-center text-sm leading-relaxed",
                        bundle.featured ? "text-ivory/70" : "text-charcoal/70"
                      )}
                    >
                      {bundle.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-sm">
                      {items.map((p) => (
                        <li key={p.id} className="flex items-center gap-2">
                          <CheckIcon
                            width={16}
                            height={16}
                            className={
                              bundle.featured ? "text-gold" : "text-gold-dark"
                            }
                          />
                          {p.name} · 50 ml
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 text-center">
                      <p
                        className={cn(
                          "text-sm line-through",
                          bundle.featured ? "text-ivory/50" : "text-charcoal/50"
                        )}
                      >
                        <span className="sr-only">Harga normal </span>
                        {formatRupiah(normalTotal)}
                      </p>
                      <p
                        className={cn(
                          "font-serif text-3xl",
                          bundle.featured ? "text-gold" : "text-charcoal"
                        )}
                      >
                        {formatRupiah(bundle.promoPrice)}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-xs font-medium",
                          bundle.featured ? "text-gold-light" : "text-gold-dark"
                        )}
                      >
                        Hemat {formatRupiah(saving)} ({savingPct}%)
                      </p>

                      <Button
                        href={buildWhatsAppLink(message)}
                        variant={bundle.featured ? "primary" : "dark"}
                        className="mt-5 w-full"
                        ariaLabel={`Pesan paket ${bundle.name} via WhatsApp`}
                      >
                        <WhatsAppIcon width={18} height={18} />
                        Pesan Paket
                      </Button>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
