import type { Metadata } from "next";
import { verifikasiSurat } from "@/lib/verifikasi";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const hasil = await verifikasiSurat(id);

  if (!hasil.valid || !hasil.data) {
    return {
      title: "Surat Tidak Ditemukan | RT3 Digital",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const surat = hasil.data;

  return {
    title: `Verifikasi Surat - ${surat.nama_lengkap} | RT3 Digital`,
    description: `Verifikasi keaslian surat atas nama ${surat.nama_lengkap}.`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `Verifikasi Surat - ${surat.nama_lengkap}`,
      description: "Sistem Verifikasi Surat RT3 Digital",
      type: "website",
    },
  };
}