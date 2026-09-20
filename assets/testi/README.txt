FOLDER TESTIMONI SCREENSHOT
===========================

Taruh screenshot testimoni WhatsApp lo di sini.

Format yang disarankan:
- JPG atau PNG
- Crop portrait (hasil screenshot WA)
- Nama file bebas: ss1.jpg, ridwan.jpg, dll

Cara daftarkan ke website:
Buka config.js, di bagian "testimonials", tambahkan:

  { type: "screenshot", imagePath: "assets/testi/NAMAFILE.jpg", caption: "opsional" },

Contoh:
  { type: "screenshot", imagePath: "assets/testi/ss1.jpg", caption: "dari pengguna setia" },
  { type: "screenshot", imagePath: "assets/testi/ridwan.jpg" },

Bisa dicampur sama chat bubble, urutannya bebas.
