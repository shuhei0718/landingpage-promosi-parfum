// Data testimoni pelanggan.

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  variant: string;
  rating: number; // 1–5
  quote: string;
  avatar: string; // URL foto avatar
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "nadia",
    name: "Nadia Putri",
    city: "Jakarta",
    variant: "Blanc Bloom",
    rating: 5,
    quote:
      "Wanginya lembut tapi nempel banget. Dari kantor sampai makan malam masih tercium, dan banyak yang tanya pakai parfum apa.",
    avatar:
      "https://images.pexels.com/photos/14664508/pexels-photo-14664508.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
  },
  {
    id: "rizky",
    name: "Rizky Pratama",
    city: "Bandung",
    variant: "Noir Velvet",
    rating: 5,
    quote:
      "Oud-nya mewah tanpa terlalu menyengat. Kemasannya juga premium banget, kaget sih dengan harga segini kualitasnya setara parfum luar.",
    avatar:
      "https://images.pexels.com/photos/20782648/pexels-photo-20782648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
  },
  {
    id: "salsa",
    name: "Salsabila Anindya",
    city: "Surabaya",
    variant: "Citrus Aurora",
    rating: 4,
    quote:
      "Segar banget buat dipakai harian di cuaca panas. Pengiriman cepat, admin WhatsApp-nya ramah dan responsif.",
    avatar:
      "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=160&w=160",
  },
];
