import { notFound } from "next/navigation";
import TemplateVerifikasi from "./template";
import { verifikasiSurat } from "@/lib/verifikasi";

type Props = {
  params: Promise<{
    token: string;
  }>;
};

export default async function VerifikasiPage({ params }: Props) {
  const { token } = await params;

  const hasil = await verifikasiSurat(token);

  if (!hasil.valid || !hasil.data) {
    notFound();
  }

  const surat = hasil.data;

  const tanggal = new Date(
    surat.updated_at ?? surat.created_at
  ).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <TemplateVerifikasi
          nomorSurat={surat.nomor_surat ?? "-"}
          nama={surat.nama_lengkap}
          jenisSurat={
            surat.jenis_surat === "Lain-lain"
              ? surat.surat_lainnya
              : surat.jenis_surat
          }
          tanggal={tanggal}
          status={surat.status}
        />
      </div>
    </main>
  );
}