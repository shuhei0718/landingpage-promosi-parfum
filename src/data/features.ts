// Data keunggulan produk. `icon` dipetakan ke komponen ikon di Features.tsx.

export type FeatureIcon = "clock" | "gem" | "box" | "shield";

export interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    id: "tahan-lama",
    icon: "clock",
    title: "Tahan 8–12 Jam",
    description:
      "Konsentrasi eau de parfum yang pekat menjaga aromamu tetap hadir dari pagi hingga malam.",
  },
  {
    id: "bahan-berkualitas",
    icon: "gem",
    title: "Bahan Berkualitas",
    description:
      "Essence pilihan dari perfumer berpengalaman, bebas alkohol berlebih dan aman untuk kulit.",
  },
  {
    id: "kemasan-elegan",
    icon: "box",
    title: "Kemasan Elegan",
    description:
      "Botol kaca tebal dan box premium, siap menjadi hadiah istimewa tanpa perlu dibungkus ulang.",
  },
  {
    id: "garansi",
    icon: "shield",
    title: "Garansi Uang Kembali",
    description:
      "Tidak cocok dengan aromanya? Klaim garansi 14 hari dan uangmu kami kembalikan.",
  },
];
