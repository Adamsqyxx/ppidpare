import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Standar Layanan & SLA PPID",
  description: "Standar operasional, maklumat, dan target waktu layanan permohonan informasi publik.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Standar Layanan & SLA PPID"
      description="Standar operasional, maklumat, dan target waktu layanan permohonan informasi publik."
      icon="verified"
    />
  );
}
