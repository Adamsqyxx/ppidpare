import Link from "next/link";
import { Icon } from "@/components/ui/icon";

type Props = {
  title: string;
  description: string;
  icon?: string;
};

/**
 * Placeholder sementara untuk rute yang belum diimplementasikan.
 * Ganti dengan halaman sebenarnya saat fitur terkait dibangun.
 */
export function PagePlaceholder({
  title,
  description,
  icon = "construction",
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-surface-container-high text-primary">
          <Icon name={icon} size={28} />
        </span>
        <h1 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold">
          {title}
        </h1>
        <p className="font-body text-body-md text-on-surface-variant">
          {description}
        </p>
        <p className="font-body text-label-md text-tertiary">
          Halaman ini sedang dalam pengembangan. Untuk sementara, gunakan kanal
          layanan yang tersedia di beranda.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-body text-label-md font-semibold hover:bg-primary-container transition-colors"
          >
            <Icon name="home" size={18} />
            <span>Kembali ke Beranda</span>
          </Link>
          <a
            href="tel:042121123"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body text-label-md font-semibold transition-colors"
          >
            <Icon name="support_agent" size={18} />
            <span>Hotline Diskominfo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
