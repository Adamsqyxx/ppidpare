import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Regulasi & SOP",
  description: "UU KIP No. 14 Tahun 2008, Perki, SOP layanan, uji konsekuensi, dan daftar informasi yang dikecualikan.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Regulasi & SOP"
      description="UU KIP No. 14 Tahun 2008, Perki, SOP layanan, uji konsekuensi, dan daftar informasi yang dikecualikan."
      icon="verified_user"
    />
  );
}
