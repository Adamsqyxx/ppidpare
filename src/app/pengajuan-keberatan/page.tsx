import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Pengajuan Keberatan",
  description: "Kanal advokasi hak jika permohonan informasi ditolak tanpa dasar, dikenai biaya tidak wajar, atau melewati batas waktu SLA.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Pengajuan Keberatan"
      description="Kanal advokasi hak jika permohonan informasi ditolak tanpa dasar, dikenai biaya tidak wajar, atau melewati batas waktu SLA."
      icon="gavel"
    />
  );
}
