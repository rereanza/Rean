var WILKYBOT_CONFIG = {
  botName: "WilkyBot",
  botTagline: "Sewa bot WhatsApp siap pakai, kustomisasi lewat dashboard, tanpa perlu coding.",
  logoPath: "assets/foto.png",

  linkChatBot: "https://wa.me/6282323918046",
  linkGrupWA: "https://chat.whatsapp.com/LINK_GRUP",
  linkDonasiAlt: "https://saweria.co/LINK_DONASI",

  dana: {
    nomor: "0823-2391-8046",
    nomorRaw: "082323918046",
    namaPenerima: "-Ree | Indie Dev",
  },
  gopay: {
    nomor: "0823-2391-8046",
    nomorRaw: "082323918046",
    namaPenerima: "-Ree | Indie Dev",
  },
  qris: {
    imagePath: "assets/qris.png",
  },

  // ─── OWNERS ──────────────────────────────────────────────────────────────────
  owners: [
    {
      nama: "Wilky",
      title: "THE FOUNDER",
      peran: "Pemilik Asli",
      nomor: "0823-2391-8046",
      nomorRaw: "082323918046",
      linkChat: "https://wa.me/6282323918046",
      foto: "assets/owner-ree.png",
      initial: "W",
      emoji: "",
      verified: true,
    },
  ],

  botStatus: "online",

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  faqs: [
    { q: "Apakah WilkyBot gratis dipakai?",
      a: "Gratis dan dapat fitur lengkap, dengan cara bergabung ke Grup Komunitas WilkyBot dan memakai bot di sana bareng member lain. Jika ingin WilkyBot aktif khusus di grup Anda sendiri, tersedia paket berlangganan mulai Rp15.000/bulan." },
    { q: "Kenapa bot lambat balas?",
      a: "Keterlambatan dapat terjadi akibat volume trafik tinggi. Mohon tunggu beberapa saat atau kirim ulang permintaan Anda." },
    { q: "Bagaimana cara sewa WilkyBot untuk grup saya?",
      a: "Hubungi tim kami melalui WhatsApp, sampaikan nama grup dan durasi sewa yang Anda inginkan. Setelah pembayaran dikonfirmasi, bot akan ditambahkan ke grup Anda." },
    { q: "Bagaimana cara menyampaikan masukan atau melaporkan kendala teknis?",
      a: "Anda dapat menghubungi tim kami melalui WhatsApp atau bergabung dengan komunitas WilkyBot. Setiap masukan dan laporan akan kami tindaklanjuti secepat mungkin." },
  ],

  // ─── SUPPORT ─────────────────────────────────────────────────────────────────
  support: [
    {
      icon: '',
      title: 'WhatsApp',
      desc: 'Hubungi tim kami untuk pertanyaan seputar layanan atau berlangganan.',
      label: 'Hubungi Kami',
      href: 'https://wa.me/6282323918046',
      accent: true,
    },
    {
      icon: '',
      title: 'Grup Komunitas',
      desc: 'Bergabung dengan komunitas WilkyBot untuk informasi terbaru dan diskusi.',
      label: 'Gabung Sekarang',
      href: '#grup',
      accent: false,
    },
    {
      icon: '',
      title: 'FAQ',
      desc: 'Temukan jawaban atas pertanyaan umum sebelum menghubungi tim kami.',
      label: 'Lihat FAQ',
      href: '#faq',
      accent: false,
    },
  ],

  // ─── PAYMENT ─────────────────────────────────────────────────────────────────
  payments: [
    {
      initial: 'SW', name: 'Saweria',
      gradientFrom: '#f97316', gradientTo: '#ea580c',
      desc: 'Donasi lewat halaman Saweria — kartu, e-wallet, QRIS',
      webUrl: 'https://saweria.co/LINK_DONASI',
    },
  ],

  // ─── TESTIMONI ───────────────────────────────────────────────────────────────
  testimonials: [
    { nama: "Sarah A.", initial: "SA", rating: 5, quote: "Kustomisasi bot WhatsApp saya cuma butuh 5 menit, dashboard-nya jelas dan gampang dipahami." },
    { nama: "Ridwan",   initial: "RD", rating: 5, quote: "Bot-nya ga kayak bot panel biasa, beneran pinter dan responsif." },
    { nama: "Dam",      initial: "DM", rating: 5, quote: "Download musik langsung jadi audio, ga perlu nunggu lama sama sekali." },
    { nama: "Wilky",    initial: "WK", rating: 5, quote: "AI-nya nyambung terus, bisa inget konteks percakapan. Mantap!" },
  ],

  // ─── TOP DONATUR ─────────────────────────────────────────────────────────────
  topDonatur: [
    { nama: "Anonim",    jumlah: "Rp150.000" },
    { nama: "Ridwan S.", jumlah: "Rp75.000"  },
    { nama: "Dam W.",    jumlah: "Rp50.000"  },
  ],

  // ─── STATS ───────────────────────────────────────────────────────────────────
  stats: [
    { value: 12400, suffix: '+',  label: 'Pengguna Aktif', sub: 'seluruh Indonesia' },
    { value: 220,   suffix: '+',  label: 'Fitur',          sub: 'siap pakai' },
    { value: 99.9,  suffix: '%',  label: 'Uptime',         sub: 'rata-rata bulanan', decimal: 1 },
    { value: 50,    suffix: 'ms', label: 'Latency',        sub: 'response time AI' },
  ],

  // ─── PRICING ─────────────────────────────────────────────────────────────────
  // Semua tier fitur LENGKAP sama persis, semua buat 1 grup pribadi.
  // Pembeda cuma DURASI sewa — makin lama durasi, makin worth it per harinya.
  pricing: [
    {
      name: 'GRATIS',
      price: 0, duration: '',
      highlight: false, badge: null,
      features: ['Seluruh fitur', 'Perintah tanpa batas', 'Aktif di Grup Komunitas', 'Dipakai bareng member lain'],
      cta: 'Gabung Grup Komunitas', ctaLink: '#grup',
    },
    {
      name: 'PERSONAL',
      price: 15000, duration: '30 Hari',
      highlight: false, badge: null,
      features: ['Seluruh fitur', 'Perintah tanpa batas', '1 Grup Pribadi Anda', 'Dukungan prioritas'],
      cta: 'Sewa Sekarang', ctaLink: '#kontak',
    },
    {
      name: 'GROUP',
      price: 25000, duration: '45 Hari',
      highlight: true, badge: 'POPULER',
      features: ['Seluruh fitur', 'Perintah tanpa batas', '1 Grup Pribadi Anda', 'Dukungan prioritas'],
      cta: 'Sewa Sekarang', ctaLink: '#kontak',
    },
    {
      name: 'ELITE',
      price: 40000, duration: '90 Hari',
      highlight: false, badge: null,
      features: ['Seluruh fitur', 'Perintah tanpa batas', '1 Grup Pribadi Anda', 'Dukungan prioritas'],
      cta: 'Sewa Sekarang', ctaLink: '#kontak',
    },
  ],

  // ─── CHANGELOG ───────────────────────────────────────────────────────────────
  changelog: [
    { versi: "v2.0.0", tanggal: "Apr 2026", catatan: "Pembaruan dashboard kustomisasi — pengaturan bot kini lebih cepat dan mudah diakses" },
    { versi: "v1.5.0", tanggal: "Mar 2026", catatan: "Integrasi AI dengan session memory per-pengguna" },
    { versi: "v1.0.0", tanggal: "Feb 2026", catatan: "Peluncuran pertama WilkyBot" },
  ],

  // ─── BOOT MESSAGES ───────────────────────────────────────────────────────────
  bootMessages: [
    '[SYS]  WilkyBot v2.4 — memulai sistem...',
    '[OK]   Modul sistem berhasil dimuat → 220 fitur tersedia',
    '[OK]   Koneksi WhatsApp berhasil terhubung',
    '[OK]   Modul AI berhasil diinisialisasi',
    '[OK]   Sistem antrean siap digunakan',
    '[OK]   Basis data berhasil disinkronkan',
    '[READY] Seluruh sistem berjalan normal. Selamat datang.',
  ],
};
