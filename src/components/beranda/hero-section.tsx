import { TrackingCard } from "@/components/beranda/tracking-card";
import { Icon } from "@/components/ui/icon";

const STATS = [
  {
    icon: "timer",
    iconClass: "text-primary",
    before: "SLA Standar ",
    strong: "10 Hari Kerja",
    after: "",
  },
  {
    icon: "lock_open_right",
    iconClass: "text-secondary",
    before: "Akses Terbuka & ",
    strong: "Tanpa Biaya Retribusi",
    after: "",
  },
  {
    icon: "history_edu",
    iconClass: "text-primary",
    before: "Kawal Kinerja ",
    strong: "34 OPD Kota",
    after: "",
  },
];

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-12 lg:py-20 px-6 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-surface-container-high/40 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-surface-container-high text-primary font-body text-label-sm font-semibold shadow-sm">
              <Icon name="shield_person" size={16} className="text-primary" />
              <span>Portal Resmi Keterbukaan Informasi Kota Parepare</span>
            </div>

            <h1 className="font-headline text-headline-2xl-mobile sm:text-headline-2xl text-on-surface tracking-tight leading-tight">
              Layanan Keterbukaan Informasi Publik{" "}
              <span className="text-primary font-bold">Kota Parepare</span>
            </h1>

            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Wujudkan hak konstitusional Anda untuk mengetahui informasi
              pemerintahan daerah secara transparan, mudah diakses, dan
              akuntabel.{" "}
              <strong className="text-on-surface font-semibold">
                Dapat diajukan langsung tanpa registrasi akun wajib
              </strong>{" "}
              dengan batas respons maksimal 10 hari kerja.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.icon}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-body text-label-md"
                >
                  <Icon name={stat.icon} size={18} className={stat.iconClass} />
                  <span>
                    {stat.before}
                    <strong>{stat.strong}</strong>
                    {stat.after}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <TrackingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
