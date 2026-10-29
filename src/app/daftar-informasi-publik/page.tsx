import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Daftar Informasi Publik (DIP)",
  description: "Katalog dokumen publik berkala, serta-merta, dan setiap saat yang diterbitkan PPID Kota Parepare.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Daftar Informasi Publik (DIP)"
      description="Katalog dokumen publik berkala, serta-merta, dan setiap saat yang diterbitkan PPID Kota Parepare."
      icon="menu_book"
    />
  );
}
