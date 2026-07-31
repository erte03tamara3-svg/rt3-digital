import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verifikasi Surat | RT3 Digital",
  description:
    "Halaman verifikasi surat resmi RT 003 RW 024 Perumahan Taman Raya Tahap III Kelurahan Belian.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifikasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}