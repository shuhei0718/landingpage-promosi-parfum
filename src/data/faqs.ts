// Data FAQ untuk accordion.

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "daya-tahan",
    question: "Berapa lama aroma Aurelle bertahan di kulit?",
    answer:
      "Rata-rata 8–12 jam tergantung varian, jenis kulit, dan cuaca. Semprotkan di titik nadi seperti pergelangan tangan dan leher untuk hasil terbaik.",
  },
  {
    id: "ukuran",
    question: "Apa perbedaan eau de parfum dengan parfum biasa?",
    answer:
      "Eau de parfum memiliki kadar minyak wangi lebih tinggi (15–20%) sehingga aromanya lebih pekat, lebih tahan lama, dan lebih personal dibanding eau de toilette atau body mist.",
  },
  {
    id: "kulit-sensitif",
    question: "Apakah aman untuk kulit sensitif?",
    answer:
      "Formula kami diuji dermatologis dan bebas bahan kasar. Namun jika kulitmu sangat sensitif, lakukan uji tempel di bagian dalam lengan terlebih dahulu.",
  },
  {
    id: "cara-pesan",
    question: "Bagaimana cara memesan?",
    answer:
      "Klik tombol “Pesan” pada varian pilihanmu. Kamu akan diarahkan ke WhatsApp dengan pesan otomatis. Tim kami akan membantu konfirmasi stok, alamat, dan pembayaran.",
  },
  {
    id: "pengiriman",
    question: "Berapa lama pengiriman ke seluruh Indonesia?",
    answer:
      "Pesanan dikirim di hari yang sama jika masuk sebelum pukul 15.00 WIB. Estimasi tiba 1–3 hari untuk Pulau Jawa dan 3–6 hari untuk luar Jawa.",
  },
  {
    id: "garansi",
    question: "Bagaimana cara klaim garansi uang kembali?",
    answer:
      "Hubungi kami via WhatsApp maksimal 14 hari setelah barang diterima. Sertakan foto produk dan bukti pembelian, lalu kami proses pengembalian dana.",
  },
];
