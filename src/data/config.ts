// Konfigurasi global brand & helper umum.

export const BRAND = {
  name: "Aurelle",
  // Nomor WhatsApp format internasional TANPA tanda + / spasi / 0 di depan.
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/aurelle.id",
  tiktok: "https://tiktok.com/@aurelle.id",
  youtube: "https://youtube.com/@aurelle",
  email: "halo@aurelle.id",
} as const;

/** Membuat link wa.me dengan pesan otomatis. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Format angka ke Rupiah, contoh: Rp 525.000 */
export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Link menu navigasi (dipakai Navbar & Footer). */
export const NAV_LINKS = [
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Pesan WhatsApp umum (tanpa varian tertentu). */
export const GENERAL_WA_MESSAGE =
  "Halo Aurelle, saya tertarik dengan parfum Aurelle dan promo diskon 30%. Boleh minta info lebih lanjut?";
