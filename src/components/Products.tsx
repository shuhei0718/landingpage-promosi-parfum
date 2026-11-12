import { buildWhatsAppLink, formatRupiah } from "../data/config";
import { PRODUCTS } from "../data/products";
import Button from "./Button";
import { WhatsAppIcon } from "./Icons";
import PerfumeBottle from "./PerfumeBottle";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Section Produk: 3 kartu varian aroma.
export default function Products() {
  return (
    <section
      id="produk"
      className="bg-ivory py-20 sm:py-28"
      aria-labelledby="produk-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="produk-title"
            eyebrow="Koleksi Eau de Parfum"
            title="Tiga Aroma, Tiga Karakter"
            description="Pilih aroma yang paling mewakili dirimu. Semua varian hadir dalam botol 50 ml dengan konsentrasi eau de parfum."
          />
        </Reveal>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => {
            const discount = Math.round(
              (1 - product.promoPrice / product.price) * 100
            );
            const message = `Halo Aurelle, saya ingin memesan ${product.name} (Eau de Parfum 50 ml) dengan harga promo ${formatRupiah(
              product.promoPrice
            )}. Apakah stok tersedia?`;

            return (
              <li
                key={product.id}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Reveal delay={index * 120} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_60px_-25px_rgba(20,19,17,0.35)] md:mx-auto md:max-w-md lg:max-w-none">
                    {/* Gambar produk */}
                    <div
                      className="relative flex items-end justify-center overflow-hidden px-8 pt-10"
                      style={{
                        background: `radial-gradient(circle at 50% 35%, #ffffff 0%, ${product.accentSoft} 70%)`,
                      }}
                    >
                      <span
                        className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white"
                        style={{ backgroundColor: product.accent }}
                      >
                        {product.badge}
                      </span>
                      <span className="absolute right-4 top-4 rounded-full bg-charcoal px-3 py-1 text-[11px] font-medium text-gold">
                        -{discount}%
                      </span>
                      <PerfumeBottle
                        name={product.name}
                        liquidFrom={product.liquidFrom}
                        liquidTo={product.liquidTo}
                        className="h-auto w-40 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105 sm:w-44"
                      />
                    </div>

                    {/* Detail */}
                    <div className="flex flex-1 flex-col p-7">
                      <p
                        className="text-xs font-medium uppercase tracking-[0.2em]"
                        style={{ color: product.accent }}
                      >
                        {product.family}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-charcoal">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                        {product.description}
                      </p>

                      <ul
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label={`Notes aroma ${product.name}`}
                      >
                        {product.notes.map((note) => (
                          <li
                            key={note}
                            className="rounded-full border px-3 py-1 text-xs text-charcoal/80"
                            style={{
                              borderColor: `${product.accent}55`,
                              backgroundColor: product.accentSoft,
                            }}
                          >
                            {note}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-7">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-serif text-2xl text-charcoal">
                            {formatRupiah(product.promoPrice)}
                          </span>
                          <span className="text-sm text-charcoal/50 line-through">
                            <span className="sr-only">Harga normal </span>
                            {formatRupiah(product.price)}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-charcoal/60">
                          Eau de Parfum · 50 ml
                        </p>

                        <Button
                          href={buildWhatsAppLink(message)}
                          variant="dark"
                          className="mt-5 w-full"
                          ariaLabel={`Pesan ${product.name} via WhatsApp`}
                        >
                          <WhatsAppIcon width={18} height={18} />
                          Pesan
                        </Button>
                      </div>
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
