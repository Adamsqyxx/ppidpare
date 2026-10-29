/**
 * Data statis halaman Beranda PPID Kota Parepare.
 * Dipisah dari komponen supaya nanti mudah diganti fetch API/DB.
 */

export const SITE = {
  nama: "PPID Kota Parepare",
  instansi: "Pemerintah Kota Parepare",
  deskripsi:
    "Layanan resmi permohonan informasi publik dan dokumentasi Pemerintah Kota Parepare, Sulawesi Selatan sesuai amanat Undang-Undang Keterbukaan Informasi Publik.",
  hotline: "(0421) 21123",
  hotlineTel: "tel:042121123",
  whatsapp:
    "https://wa.me/62811421000?text=Halo%20PPID%20Parepare,%20saya%20ingin%20berkonsultasi",
  email: "ppid@pareparekota.go.id",
  alamat:
    "Gedung Dinas Komunikasi dan Informatika Kota Parepare, Jl. Jenderal Sudirman No. 1, Parepare, Sulawesi Selatan 91122",
  jamKerja: [
    "Senin – Kamis: 08.00 – 16.00 WITA",
    "Jumat: 08.00 – 16.30 WITA",
  ],
  logo: "/img/logo-parepare.png",
} as const;

export type NavItem = {
  label: string;
  path: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", path: "beranda", href: "/" },
  {
    label: "Daftar Informasi Publik",
    path: "daftar-informasi-publik",
    href: "/daftar-informasi-publik",
  },
  {
    label: "Permohonan Informasi",
    path: "permohonan-informasi",
    href: "/permohonan-informasi",
  },
  {
    label: "Pengajuan Keberatan",
    path: "pengajuan-keberatan",
    href: "/pengajuan-keberatan",
  },
  { label: "Lacak Status", path: "lacak-status", href: "/lacak-status" },
  { label: "Regulasi & SOP", path: "regulasi-dan-sop", href: "/regulasi-dan-sop" },
];

export type ActionCard = {
  path: string;
  href: string;
  badge: string;
  badgeClass: string;
  icon: string;
  iconWrapClass: string;
  iconClass: string;
  title: string;
  desc: string;
  cta: string;
};

export const ACTION_CARDS: ActionCard[] = [
  {
    path: "permohonan-informasi",
    href: "/permohonan-informasi",
    badge: "Layanan Cepat",
    badgeClass: "bg-primary-container/10 text-primary",
    icon: "edit_document",
    iconWrapClass: "bg-secondary-fixed/50 text-primary",
    iconClass: "text-primary",
    title: "Ajukan Permohonan Informasi",
    desc: "Tanpa login akun. Isi data diri & dokumen pemohon, respons resmi diterima maks. 10 hari kerja.",
    cta: "Isi Formulir Online",
  },
  {
    path: "daftar-informasi-publik",
    href: "/daftar-informasi-publik",
    badge: "Akses Terbuka",
    badgeClass: "bg-surface-container text-tertiary",
    icon: "menu_book",
    iconWrapClass: "bg-surface-container-high text-tertiary-container",
    iconClass: "text-tertiary-container",
    title: "Katalog Informasi Publik (DIP)",
    desc: "Telusuri dan langsung unduh ribuan dokumen APBD, LKPJ, pengadaan barang jasa, dan keputusan Walikota.",
    cta: "Buka Dokumen Publik",
  },
  {
    path: "pengajuan-keberatan",
    href: "/pengajuan-keberatan",
    badge: "Advokasi Hak",
    badgeClass: "bg-error-container text-on-error-container",
    icon: "gavel",
    iconWrapClass: "bg-error-container/40 text-error",
    iconClass: "text-error",
    title: "Pengajuan Keberatan Resmi",
    desc: "Laporkan jika permohonan ditolak tidak berdasar, biaya tidak wajar, atau melewati batas waktu SLA legal.",
    cta: "Kirim Dokumen Sengketa",
  },
  {
    path: "regulasi-dan-sop",
    href: "/regulasi-dan-sop",
    badge: "Standar Legalitas",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    icon: "verified_user",
    iconWrapClass: "bg-surface-container text-primary",
    iconClass: "text-primary",
    title: "Regulasi & Maklumat Pelayanan",
    desc: "Standar operasional prosedur (SOP), uji konsekuensi, daftar informasi dikecualikan, dan janji layanan PPID.",
    cta: "Pelajari Peraturan",
  },
];

export type NewsItem = {
  slug: string;
  kategori: string;
  kategoriClass: string;
  image: string;
  imageAlt: string;
  tanggal: string;
  sumber: string;
  title: string;
  excerpt: string;
  fileIcon: string;
  fileLabel: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: "lkjip-2024",
    kategori: "Informasi Berkala",
    kategoriClass: "bg-primary text-on-primary",
    image: "/img/news-lkjip.jpg",
    imageAlt:
      "Suasana rapat koordinasi Pejabat Pengelola Informasi dan Dokumentasi Kota Parepare di ruang rapat Diskominfo dengan suasana formal modern berlatar bendera Indonesia dan logo kota Parepare berfokus pada diskusi transparansi data publik",
    tanggal: "12 Februari 2025",
    sumber: "Diskominfo Parepare",
    title:
      "Pemkot Parepare Rilis Laporan Kinerja Instansi Pemerintah (LKjIP) Tahun Anggaran 2024",
    excerpt:
      "Dokumen akuntabilitas pencapaian sasaran strategis Pemkot Parepare tahun 2024 kini dapat diakses dan diunduh publik secara utuh tanpa pembatasan.",
    fileIcon: "picture_as_pdf",
    fileLabel: "Unduh Dokumen (4.2 MB)",
  },
  {
    slug: "cuaca-ekstrem",
    kategori: "Serta-Merta",
    kategoriClass: "bg-secondary text-on-secondary",
    image: "/img/news-cuaca.jpg",
    imageAlt:
      "Gedung Balai Kota Parepare dan pemandangan kawasan pesisir pantai Senggol Parepare dengan sinar matahari cerah pagi hari mencerminkan keterbukaan dan modernitas pelayanan publik kota pelabuhan di Sulawesi Selatan",
    tanggal: "08 Februari 2025",
    sumber: "BPBD & Dinkes Parepare",
    title:
      "Pemberitahuan Kesiapsiagaan Cuaca Ekstrem Pesisir Selat Makassar Wilayah Parepare",
    excerpt:
      "Penyebarluasan informasi dini keselamatan maritim dan penanganan luapan drainase perkotaan untuk keselamatan masyarakat nelayan dan pesisir.",
    fileIcon: "description",
    fileLabel: "Baca Salinan Edaran",
  },
  {
    slug: "pembaruan-dip-semester-i",
    kategori: "Setiap Saat",
    kategoriClass: "bg-surface-container-high text-on-surface",
    image: "/img/news-dip.jpg",
    imageAlt:
      "Pelatihan sosialisasi keterbukaan informasi publik dan uji konsekuensi dokumen pemerintah daerah di hadapan para pengelola PPID pelaksana seluruh OPD Kota Parepare dalam aula pelatihan profesional",
    tanggal: "29 Januari 2025",
    sumber: "PPID Utama Kota",
    title:
      "Pembaruan Daftar Informasi Publik (DIP) Semester I 2025 oleh Tim Pertimbangan",
    excerpt:
      "Sebanyak 180 item arsip proyek strategis daerah dan realisasi APBD tahun lalu kini telah disetujui untuk dipublikasikan pada katalog terbuka.",
    fileIcon: "table_chart",
    fileLabel: "Buka Tabel DIP 2025",
  },
];

export type DocRow = {
  kode: string;
  nama: string;
  opd: string;
  klasifikasi: "Berkala" | "Setiap Saat";
  format: string;
  size: string;
  href: string;
};

export const QUICK_DOCS: DocRow[] = [
  {
    kode: "DIP-2025-0012",
    nama: "Ringkasan DPA-SKPD Bappeda Kota Parepare TA 2025",
    opd: "Badan Perencanaan Pembangunan Daerah",
    klasifikasi: "Berkala",
    format: "PDF",
    size: "2.1 MB",
    href: "#",
  },
  {
    kode: "DIP-2025-0044",
    nama: "Laporan Realisasi Anggaran Pendapatan & Belanja Daerah (APBD) Semester II",
    opd: "Badan Keuangan Daerah (BKD)",
    klasifikasi: "Berkala",
    format: "XLSX",
    size: "1.4 MB",
    href: "#",
  },
  {
    kode: "DIP-2025-0089",
    nama: "Rencana Tata Ruang Wilayah (RTRW) & Peta Zonasi Pembangunan Parepare 2025-2045",
    opd: "Dinas PUPR Kota Parepare",
    klasifikasi: "Setiap Saat",
    format: "ZIP/SHP",
    size: "18 MB",
    href: "#",
  },
  {
    kode: "DIP-2025-0102",
    nama: "Data Profil Statistik Daerah & Indikator Kemiskinan Kota Parepare",
    opd: "Dinas Komunikasi dan Informatika",
    klasifikasi: "Berkala",
    format: "CSV",
    size: "850 KB",
    href: "#",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Pernyataan Aksesibilitas WCAG 2.2",
    href: "/pernyataan-aksesibilitas",
    icon: "accessibility_new",
  },
  {
    label: "Standar Layanan & SLA PPID",
    href: "/standar-layanan-informasi",
    icon: "verified",
  },
  {
    label: "Kebijakan Privasi & Data Pribadi",
    href: "/kebijakan-privasi",
    icon: "shield",
  },
  {
    label: "Maklumat Pelayanan Informasi",
    href: "/maklumat-pelayanan",
    icon: "contract",
  },
] as const;
