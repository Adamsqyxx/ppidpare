import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { FOOTER_LINKS, SITE } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={SITE.logo}
                alt="Logo PPID Parepare"
                width={46}
                height={66}
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-headline text-headline-sm font-bold text-primary">
                  PPID Kota Parepare
                </span>
                <span className="font-body text-label-sm text-on-surface-variant">
                  Keterbukaan Informasi Publik
                </span>
              </div>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">
              {SITE.deskripsi}
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                Status Layanan: Aktif &amp; Terbuka
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-headline text-headline-sm text-on-surface font-semibold">
              Kontak &amp; Alamat Layanan
            </h3>
            <div className="space-y-2 font-body text-body-sm text-on-surface-variant">
              <p className="flex items-start gap-2">
                <Icon name="location_on" size={18} className="text-primary mt-0.5 shrink-0" />
                <span>{SITE.alamat}</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="call" size={18} className="text-primary" />
                <span>{SITE.hotline} / Hotline PPID</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="mail" size={18} className="text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-headline text-headline-sm text-on-surface font-semibold">
              Jam Operasional PPID
            </h3>
            <div className="space-y-2 font-body text-body-sm text-on-surface-variant">
              <p className="font-semibold text-on-surface">
                Layanan Meja Informasi Langsung:
              </p>
              {SITE.jamKerja.map((jam) => (
                <p key={jam}>{jam}</p>
              ))}
              <p className="font-body text-label-sm text-tertiary mt-2">
                Sabtu, Minggu &amp; Hari Libur Nasional Tutup. Permohonan daring
                tetap dapat diajukan 24 jam.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-headline text-headline-sm text-on-surface font-semibold">
              Informasi &amp; Aksesibilitas
            </h3>
            <ul className="space-y-2 font-body text-body-sm text-on-surface-variant">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <Icon name={link.icon} size={16} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-space-2xl pt-space-lg border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-body-sm text-on-surface-variant">
          <p>
            © 2025 PPID Pemerintah Kota Parepare. Dikelola oleh Dinas Komunikasi
            dan Informatika.
          </p>
          <p className="font-body text-label-sm text-tertiary text-center md:text-right">
            Sesuai Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 tentang
            Keterbukaan Informasi Publik (UU KIP).
          </p>
        </div>
      </div>
    </footer>
  );
}
