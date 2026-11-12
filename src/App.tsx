import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { WhatsAppIcon } from "./components/Icons";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Promo from "./components/Promo";
import Testimonials from "./components/Testimonials";
import { GENERAL_WA_MESSAGE, buildWhatsAppLink } from "./data/config";

// Komponen root: menyusun seluruh section landing page secara berurutan.
export default function App() {
  return (
    <>
      <a
        href="#produk"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Lompat ke konten
      </a>

      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Promo />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      {/* Tombol WhatsApp mengambang */}
      <a
        href={buildWhatsAppLink(GENERAL_WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
