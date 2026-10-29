import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Masuk Petugas PPID",
  description: "Area khusus petugas PPID Utama dan PPID Pelaksana OPD Pemerintah Kota Parepare.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Masuk Petugas PPID"
      description="Area khusus petugas PPID Utama dan PPID Pelaksana OPD Pemerintah Kota Parepare."
      icon="lock"
    />
  );
}
