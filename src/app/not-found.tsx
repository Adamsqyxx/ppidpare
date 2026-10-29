import { PagePlaceholder } from "@/components/ui/page-placeholder";

export default function NotFound() {
  return (
    <PagePlaceholder
      title="Halaman tidak ditemukan"
      description="Alamat yang Anda tuju tidak tersedia atau telah dipindahkan. Periksa kembali tautan atau mulai dari beranda portal PPID."
      icon="search_off"
    />
  );
}
