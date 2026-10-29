import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Pernyataan Aksesibilitas",
  description: "Komitmen portal PPID Kota Parepare terhadap standar aksesibilitas WCAG 2.2 level AA.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Pernyataan Aksesibilitas"
      description="Komitmen portal PPID Kota Parepare terhadap standar aksesibilitas WCAG 2.2 level AA."
      icon="accessibility_new"
    />
  );
}
