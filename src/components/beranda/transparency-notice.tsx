import { Icon } from "@/components/ui/icon";

export function TransparencyNotice() {
  return (
    <section className="w-full bg-secondary-fixed/20 py-2.5 px-6 lg:px-12 text-on-surface">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-label-md">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-on-primary shrink-0">
            <Icon name="verified" size={14} />
          </span>
          <span className="font-semibold text-primary">
            Jaminan Transparansi Publik:
          </span>
          <span className="text-on-surface-variant">
            Sesuai amanat UU KIP No. 14 Tahun 2008 &amp; Perki No. 1 Tahun 2021
            Kota Parepare.
          </span>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant font-body text-label-sm">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            Server Sinkronisasi Real-Time
          </span>
          <span className="text-outline-variant">|</span>
          <span>Akses Terbuka Tanpa Pungutan Biaya</span>
        </div>
      </div>
    </section>
  );
}
