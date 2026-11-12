// Data produk (3 varian aroma) dan paket bundling.

export interface Product {
  id: string;
  name: string;
  family: string; // karakter aroma singkat
  notes: string[]; // notes aroma
  description: string;
  price: number; // harga normal
  promoPrice: number; // harga promo
  badge?: string;
  accent: string; // warna aksen varian
  accentSoft: string; // latar lembut kartu
  liquidFrom: string; // gradien cairan botol
  liquidTo: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "noir-velvet",
    name: "Noir Velvet",
    family: "Woody · Amber · Oud",
    notes: ["Oud", "Amber", "Cedarwood", "Vanilla"],
    description:
      "Hangat, dalam, dan memikat. Oud berpadu amber dan vanila untuk kesan percaya diri di malam hari.",
    price: 750000,
    promoPrice: 525000,
    badge: "Terlaris",
    accent: "#B9742B",
    accentSoft: "#F3E6D3",
    liquidFrom: "#8a4b17",
    liquidTo: "#2a1407",
  },
  {
    id: "blanc-bloom",
    name: "Blanc Bloom",
    family: "Floral · White Musk · Peony",
    notes: ["Peony", "White Musk", "Jasmine", "Pear"],
    description:
      "Lembut dan bersih. Bunga peony dengan musk putih yang terasa feminin, segar, dan menenangkan.",
    price: 720000,
    promoPrice: 504000,
    badge: "Favorit Wanita",
    accent: "#C9708A",
    accentSoft: "#F8E7EB",
    liquidFrom: "#f2c4d0",
    liquidTo: "#b4627c",
  },
  {
    id: "citrus-aurora",
    name: "Citrus Aurora",
    family: "Fresh · Bergamot · Lemon · Cedar",
    notes: ["Bergamot", "Lemon", "Neroli", "Cedar"],
    description:
      "Cerah dan energik. Bergamot dan lemon yang menyegarkan, ditutup cedar yang bersih untuk aktivitas harian.",
    price: 690000,
    promoPrice: 483000,
    badge: "Segar Harian",
    accent: "#8A9A2B",
    accentSoft: "#EEF0D5",
    liquidFrom: "#f1e27a",
    liquidTo: "#9bb02f",
  },
];

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: string[]; // id produk yang termasuk
  promoPrice: number;
  featured?: boolean;
}

export const BUNDLES: Bundle[] = [
  {
    id: "duo-couple",
    name: "Duo Couple",
    description: "Noir Velvet + Blanc Bloom. Pasangan aroma untuk berdua.",
    productIds: ["noir-velvet", "blanc-bloom"],
    promoPrice: 899000,
  },
  {
    id: "trio-collection",
    name: "Trio Collection",
    description: "Ketiga varian lengkap. Cocok untuk koleksi atau hadiah.",
    productIds: ["noir-velvet", "blanc-bloom", "citrus-aurora"],
    promoPrice: 1290000,
    featured: true,
  },
  {
    id: "duo-fresh",
    name: "Duo Fresh",
    description: "Citrus Aurora + Blanc Bloom. Ringan dan segar sepanjang hari.",
    productIds: ["citrus-aurora", "blanc-bloom"],
    promoPrice: 849000,
  },
];

/** Cari produk berdasarkan id. */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
