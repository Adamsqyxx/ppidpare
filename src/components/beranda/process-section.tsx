import Link from "next/link";
import { Icon } from "@/components/ui/icon";

const STEPS = [
  {
    n: "1",
    badgeClass: "bg-primary text-on-primary",
    title: "Ajukan Formulir Daring",
    desc: "Pilih informasi yang dibutuhkan, cantumkan alasan penggunaan informasi, unggah foto identitas KTP/akta ormas secara aman.",
    footIcon: "schedule",
    foot: "Estimasi: 3 Menit Pengisian",
    footClass: "text-primary",
  },
  {
    n: "2",
    badgeClass: "bg-surface-container-high text-on-surface",
    title: "Verifikasi & Analisis OPD",
    desc: "Petugas PPID Utama meneruskan ke PPID Pelaksana (OPD terkait). Dokumen diklasifikasi sesuai status keterbukaan publik.",
    footIcon: "verified",
    foot: "Maks. 10 Hari Kerja (+ Perpanjangan 7 Hari)",
    footClass: "text-on-surface-variant",
  },
  {
    n: "3",
    badgeClass: "bg-surface-container-high text-on-surface",
    title: "Pemberitahuan Tertulis",
    desc: "Pemohon menerima surat keputusan resmi PPID via surel/WhatsApp mengenai ketersediaan dan metode penguasaan informasi.",
    footIcon: "mark_email_read",
    foot: "Notifikasi Elektronik Otomatis",
    footClass: "text-primary",
  },
  {
    n: "4",
    badgeClass: "bg-secondary text-on-secondary",
    title: "Terima Salinan Dokumen",
    desc: "Unduh salinan berkas digital gratis secara langsung atau ambil salinan fisik di Meja Layanan PPID Diskominfo Parepare.",
    footIcon: "download",
    foot: "Format PDF / Excel Terverifikasi",
    footClass: "text-secondary",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-surface-container-low py-14 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
            Transparan &amp; Terstandar
          </span>
          <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold">
            Alur Pengajuan Permohonan 4 Langkah Mudah
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Pahami hak Anda sebagai warga negara. Tidak ada dokumen yang
            disembunyikan tanpa uji konsekuensi hukum yang sah.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-4 flex flex-col justify-between relative overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-3 font-headline text-headline-2xl font-black text-surface-container select-none"
              >
                0{step.n}
              </span>
              <div className="space-y-3 relative">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-headline text-headline-sm font-bold ${step.badgeClass}`}
                >
                  {step.n}
                </div>
                <h3 className="font-headline text-headline-sm font-bold text-on-surface">
                  {step.title}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div
                className={`pt-2 font-body text-label-sm font-semibold flex items-center gap-1 ${step.footClass}`}
              >
                <Icon name={step.footIcon} size={16} />
                <span>{step.foot}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="pt-2 text-center">
          <Link
            href="/permohonan-informasi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-body text-label-md font-semibold hover:bg-primary-container shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <Icon name="send" size={20} />
            <span>Mulai Ajukan Permohonan Sekarang</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
