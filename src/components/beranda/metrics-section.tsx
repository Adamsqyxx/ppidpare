import { Icon } from "@/components/ui/icon";

export function MetricsSection() {
  return (
    <section className="w-full bg-surface py-14 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary font-body text-label-sm font-semibold">
              <Icon name="analytics" size={16} />
              <span>Transparansi Real-Time Tahun Anggaran 2025</span>
            </div>
            <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold mt-1">
              Indikator Kinerja &amp; Akuntabilitas PPID
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Pemerintah Kota Parepare secara transparan memperbarui rekam jejak
              penyelesaian permohonan informasi kepada seluruh warga masyarakat.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start lg:self-auto bg-surface-container-high px-3.5 py-2 rounded-xl text-on-surface font-body text-label-sm">
            <Icon name="update" size={18} className="text-primary" />
            <span>Diperbarui Otomatis: Hari Ini, 14:00 WITA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1 — Kepatuhan SLA */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-label-md font-semibold text-on-surface-variant">
                Kepatuhan Waktu SLA
              </span>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-bold whitespace-nowrap">
                Target ≥ 95%
              </span>
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-headline text-headline-2xl font-bold text-primary">
                98.4%
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">
                ↑ +1.2% dari 2024
              </span>
            </div>
            <div className="space-y-1.5">
              <div
                className="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={98.4}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Kepatuhan waktu SLA 98.4 persen"
              >
                <div className="bg-primary h-full rounded-full" style={{ width: "98.4%" }} />
              </div>
              <p className="font-body text-label-sm text-on-surface-variant">
                336 dari 342 permohonan tuntas sesuai tenggat UU
              </p>
            </div>
          </div>

          {/* Metric 2 — Dokumen DIP */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-label-md font-semibold text-on-surface-variant">
                Dokumen DIP Terbit
              </span>
              <Icon name="folder_special" size={20} className="text-primary" />
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-headline text-headline-2xl font-bold text-on-surface">
                1.420+
              </span>
              <span className="font-label-sm text-label-sm text-tertiary">Dokumen</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-body text-label-sm text-on-surface-variant">
                <span>Berkala: 820</span>
                <span>Setiap Saat: 600</span>
              </div>
              <p className="font-body text-label-sm text-on-surface-variant">
                Tersedia format terbuka (PDF, XLSX, CSV, JSON)
              </p>
            </div>
          </div>

          {/* Metric 3 — Permohonan Selesai */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-label-md font-semibold text-on-surface-variant">
                Permohonan Selesai
              </span>
              <Icon name="task_alt" size={20} className="text-secondary" />
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-headline text-headline-2xl font-bold text-on-surface">
                342
              </span>
              <span className="font-label-sm text-label-sm text-primary font-semibold">
                100% Ditanggapi
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
                <div className="bg-primary h-full" style={{ width: "92%" }} title="Diberikan Penuh" />
                <div className="bg-secondary h-full" style={{ width: "6%" }} title="Diberikan Sebagian" />
                <div className="bg-error h-full" style={{ width: "2%" }} title="Dikecualikan" />
              </div>
              <div className="flex justify-between font-body text-label-sm text-on-surface-variant">
                <span>Dikabulkan: 314</span>
                <span>Sebagian: 21</span>
                <span>Ditolak: 7</span>
              </div>
            </div>
          </div>

          {/* Metric 4 — Waktu Tanggap */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-label-md font-semibold text-on-surface-variant">
                Rata-Rata Waktu Tanggap
              </span>
              <Icon name="bolt" size={20} className="text-primary" />
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-headline text-headline-2xl font-bold text-primary">
                4.2
              </span>
              <span className="font-headline text-headline-sm text-on-surface font-semibold">
                Hari Kerja
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-primary font-body text-label-sm font-semibold">
                <Icon name="check_circle" size={16} />
                <span>58% lebih cepat dari batas legal 10 hari</span>
              </div>
              <p className="font-body text-label-sm text-on-surface-variant">
                Pengiriman arsip via surel atau unduh sistem langsung
              </p>
            </div>
          </div>
        </div>

        {/* Banner aksesibilitas */}
        <div className="bg-surface-container-low rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs shrink-0">
              <Icon name="hearing" size={26} />
            </div>
            <div className="space-y-1">
              <h3 className="font-headline text-headline-sm text-on-surface font-bold">
                Layanan Ramah Disabilitas &amp; Pemohon Rentan
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                Petugas PPID Parepare melayani pendampingan tatap muka, pembaca
                dokumen braille, juru bahasa isyarat, serta formulir audio untuk
                pemohon tunanetra di Gedung Diskominfo.
              </p>
            </div>
          </div>
          <a
            href="tel:042121123"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-primary font-body text-label-md font-semibold shadow-xs transition-colors"
          >
            <Icon name="support_agent" size={18} />
            <span>Bantuan Hotline Diskominfo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
