import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Lacak Status Permohonan",
  description: "Pantau progres permohonan informasi menggunakan nomor registrasi PPID Anda.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Lacak Status Permohonan"
      description="Pantau progres permohonan informasi menggunakan nomor registrasi PPID Anda."
      icon="travel_explore"
    />
  );
}
