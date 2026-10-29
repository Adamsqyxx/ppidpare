import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Data Pribadi",
  description: "Ketentuan pengelolaan data pribadi pemohon sesuai UU PDP dan UU KIP.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Kebijakan Privasi & Data Pribadi"
      description="Ketentuan pengelolaan data pribadi pemohon sesuai UU PDP dan UU KIP."
      icon="shield"
    />
  );
}
