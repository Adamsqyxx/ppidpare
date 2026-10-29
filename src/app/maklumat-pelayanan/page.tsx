import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Maklumat Pelayanan Informasi",
  description: "Janji layanan PPID Kota Parepare kepada seluruh pemohon informasi publik.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Maklumat Pelayanan Informasi"
      description="Janji layanan PPID Kota Parepare kepada seluruh pemohon informasi publik."
      icon="contract"
    />
  );
}
