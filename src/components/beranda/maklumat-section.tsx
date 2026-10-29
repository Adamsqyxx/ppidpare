import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { SITE } from "@/lib/data";

export function MaklumatSection() {
  return (
    <section className="w-full bg-primary text-on-primary py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-on-primary/10 font-label-sm text-label-sm font-semibold text-on-primary">
            Maklumat Pelayanan Informasi PPID Parepare
          </span>
          <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl font-bold tracking-tight">
            &ldquo;Kami Berkomitmen Memberikan Pelayanan Informasi Publik yang
            Cepat, Tepat Waktu, Biaya Ringan, dan Sederhana.&rdquo;
          </h2>
          <p className="font-body text-body-md text-on-primary/90 leading-relaxed">
            Sesuai Keputusan Walikota Parepare tentang Standar Operasional
            Prosedur Layanan Keterbukaan Informasi Publik. Jika Anda mengalami
            hambatan atau pungutan liar, segera laporkan ke Inspektorat Kota
            Parepare.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
          <Link
            href="/pengajuan-keberatan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface text-primary font-body text-label-md font-bold shadow-md hover:bg-surface-bright active:scale-[0.99] transition-all"
          >
            <Icon name="report" size={20} />
            <span>Formulir Keberatan</span>
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-on-primary/15 hover:bg-on-primary/25 text-on-primary font-body text-label-md font-semibold transition-all"
          >
            <Icon name="chat" size={20} />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
