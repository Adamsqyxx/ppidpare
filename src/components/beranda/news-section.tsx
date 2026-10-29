import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { NEWS } from "@/lib/data";

export function NewsSection() {
  return (
    <section className="w-full bg-surface py-14 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
              Publikasi &amp; Agenda
            </span>
            <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold mt-1">
              Pengumuman &amp; Berita PPID Terkini
            </h2>
          </div>
          <Link
            href="/daftar-informasi-publik"
            className="inline-flex items-center gap-1.5 font-body text-label-md font-semibold text-primary hover:underline"
          >
            <span>Lihat Seluruh Arsip Publikasi</span>
            <Icon name="chevron_right" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item) => (
            <article
              key={item.slug}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-full h-48 bg-surface-container relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-md font-label-sm text-label-sm font-semibold shadow-xs ${item.kategoriClass}`}
                  >
                    {item.kategori}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 font-body text-label-sm text-on-surface-variant">
                    <Icon name="calendar_today" size={16} className="text-primary" />
                    <span>{item.tanggal}</span>
                    <span aria-hidden="true">•</span>
                    <span>{item.sumber}</span>
                  </div>
                  <h3 className="font-headline text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="font-body text-body-sm text-on-surface-variant line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between font-body text-label-md text-primary font-semibold">
                  <span className="flex items-center gap-1">
                    <Icon name={item.fileIcon} size={18} />
                    <span>{item.fileLabel}</span>
                  </span>
                  <Icon name="arrow_forward" size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
