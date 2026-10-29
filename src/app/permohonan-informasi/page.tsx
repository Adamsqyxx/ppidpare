import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata: Metadata = {
  title: "Permohonan Informasi Publik",
  description: "Formulir pengajuan permohonan informasi publik daring tanpa registrasi akun wajib, dengan batas respons maksimal 10 hari kerja.",
};

export default function Page() {
  return (
    <PagePlaceholder
      title="Permohonan Informasi Publik"
      description="Formulir pengajuan permohonan informasi publik daring tanpa registrasi akun wajib, dengan batas respons maksimal 10 hari kerja."
      icon="edit_document"
    />
  );
}
