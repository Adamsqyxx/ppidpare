import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { ACTION_CARDS } from "@/lib/data";

export function ActionCardsSection() {
  return (
    <section className="w-full bg-surface-container-low py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
              Aksi Prioritas Warga
            </span>
            <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold mt-1">
              Layanan Utama Keterbukaan Informasi
            </h2>
          </div>
          <p className="font-body text-body-md text-on-surface-variant max-w-md">
            Pilih kanal layanan sesuai kebutuhan publik Anda. Seluruh proses
            diawasi langsung oleh Komisi Informasi Provinsi Sulsel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTION_CARDS.map((card) => (
            <Link
              key={card.path}
              href={card.href}
              className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${card.iconWrapClass}`}
                >
                  <Icon name={card.icon} size={28} filled className={card.iconClass} />
                </div>
                <div>
                  <span
                    className={`inline-block px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold mb-2 ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                  <h3 className="font-headline text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between font-body text-label-md font-semibold text-primary">
                <span>{card.cta}</span>
                <Icon
                  name="arrow_forward"
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
