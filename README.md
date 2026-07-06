# D`Samiran
Deskripsi singkat
- Situs statis untuk memperkenalkan Desa Wisata Samiran: profil desa, atraksi, fasilitas, galeri, ekosistem, FAQ, dan kontak. Dirancang sebagai landing page informatif yang responsif dan ringan.

Struktur halaman dan section
- Hero: judul besar, ringkasan singkat, tombol panggilan tindakan, statistik ringkas.
- Profile: teks tentang desa dan timeline interaktif (kartu melayang di sepanjang garis waktu).
- Facilities: daftar fasilitas (homestay, tempat makan, kios suvenir) dengan modal detail.
- Attractions: carousel gambar pengalaman dan tombol detail untuk setiap atraksi.
- Ecosystem: sorotan flora, fauna, dan upaya konservasi.
- Gallery: grid gambar yang bisa membuka modal untuk melihat lebih besar.
- FAQ: pertanyaan umum yang dapat dikembangkan.
- Contact: formulir kontak dan informasi alamat/email/telepon.

Font
- Menggunakan `Montserrat` (Google Fonts) untuk keseluruhan tipografi.

Teknologi dan framework
- Struktur modul JS: ada bundel modul di `js/` (mis. `js/main.js`) dan fallback `script.js` untuk pemakaian lewat protokol file.

Warna utama (variabel CSS)
- `--primary`: #fff2db (aksen lembut / pill)
- `--background`: #fffaf3 (latar halaman)
- `--accent`: #007979 (warna aksen utama, link, dan highlight)
- `--secondary`: #24b1b1 (warna sekunder)
- `--surface`: #ffe0c5 (permukaan panel kecil)
- `--text`: #17363a (warna teks utama)
- `--muted`: #5f6f72 (teks sekunder)

Struktur direktori
- `index.html` — halaman utama.
- `css/` — stylesheet utama `main.css` dan file pendukung.
- `js/` — modul JavaScript (UI, timeline, carousel, modal, dll.).
- `image/` — semua aset gambar terorganisir (folder `gallery`, `ecosystem-flora`, `ecosystem-fauna`, `ecosystem-conservation`, dll.).
- `config/` — `content.js` berisi data statis (konten timeline, modal, gallery) yang dipakai oleh skrip.
- `css/` juga berisi file layout/component jika ada pemisahan.

Cara pakai (dari GitHub)
1. Clone repository:

   git clone <REPO-URL>
   cd <repo-folder>

2. Menjalankan secara lokal (pilih salah satu):
- Buka langsung: buka `index.html` di browser.
- VS Code: gunakan extension Live Server dan pilih `Open with Live Server` pada `index.html`.

3. Catatan skrip:
- `index.html` memuat `js/main.js` sebagai modul pada mode server. Jika file dibuka langsung (`file:`), ada fallback ke `script.js`.

Kelebihan dan keuntungan
- Ringan dan cepat: tidak ada dependensi bundler atau framework besar.
- Mudah dibaca dan disesuaikan: markup HTML jelas, konten statis terpusat di `config/content.js`.
- Mudah di-host: bisa langsung dipasang di GitHub Pages atau server statis.
- Responsif: CSS diatur untuk beberapa breakpoint agar tampil baik pada desktop, laptop, tablet, dan ponsel.
- Modularitas: JS dipisah menjadi modul yang memudahkan pengembangan fitur (timeline, modal, carousel).
