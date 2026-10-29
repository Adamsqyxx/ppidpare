import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";
import { NEWS } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  return {
    title: item?.title ?? "Berita",
    description: item?.excerpt ?? "Pengumuman dan berita PPID Kota Parepare.",
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);

  return (
    <PagePlaceholder
      title={item?.title ?? "Berita tidak ditemukan"}
      description={item?.excerpt ?? "Publikasi yang Anda cari belum tersedia."}
      icon="article"
    />
  );
}
