CARA GANTI ASET & DATA
=======================

Sekarang HAMPIR SEMUA data (nama bot, owner, link, nomor, playlist, FAQ,
testimoni, dll) diatur dari SATU FILE: config.js — kamu tidak perlu lagi
edit index.html untuk ganti data teks.

1. LOGO BOT
   - Ganti file "foto.png" di folder assets/ dengan logo kamu.
   - Nama file harus tetap "foto.png", atau ubah "logoPath" di config.js.

2. FOTO OWNER (3 orang: wilky, riii4yy, rere)
   - Taruh foto masing-masing di assets/ dengan nama:
     owner-wilky.png, owner-riiayy.png, owner-rere.png
   - Kalau file belum ada, otomatis tampil emoji fallback.

3. MUSIK (5 lagu)
   - Taruh 5 file mp3 di assets/music/ dengan nama:
     lagu1.mp3, lagu2.mp3, lagu3.mp3, lagu4.mp3, lagu5.mp3
   - Mau ganti judul/artis/nama file lain? Edit array "tracks" di config.js.

4. QRIS (opsional)
   - Taruh gambar QRIS asli di assets/qris.png kalau mau tampil beneran
     (saat ini masih placeholder kotak "QR").

5. SEMUA DATA LAIN ada di config.js, tinggal buka & edit:
   - botName, botTagline           -> nama & tagline bot
   - linkChatBot, linkGrupWA        -> link WA bot & grup
   - dana / gopay                   -> nomor & nama penerima donasi
   - owners[]                       -> nama, peran, nomor, link chat 3 owner
   - commands[]                     -> daftar perintah bot
   - faqs[]                         -> pertanyaan & jawaban FAQ
   - testimonials[]                 -> testimoni pengguna
   - topDonatur[]                   -> leaderboard donatur bulanan
   - changelog[]                    -> riwayat update
   - botStatus                      -> "online" atau "offline"

Setelah edit config.js, save & refresh browser — semua section otomatis
ikut berubah.
