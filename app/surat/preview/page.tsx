"use client";

import { useEffect, useState } from "react";
import TemplateSurat from "@/components/surat/template/TemplateSurat";

export default function PreviewSuratPage() {
  const [surat, setSurat] = useState<any>(null);

  useEffect(() => {
    fetch("/api/surat/1")
      .then((res) => res.json())
      .then((data) => setSurat(data));
  }, []);

  if (!surat) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Memuat surat...
      </main>
    );
  }

  return (
    <main className="bg-gray-200 min-h-screen py-10">
      <TemplateSurat
        surat={{
          nama_lengkap: surat.nama_lengkap,
          nik: surat.identitas,
          tempat_lahir: surat.tempat_lahir,
          tanggal_lahir: surat.tanggal_lahir,
          pekerjaan: surat.pekerjaan,
          alamat: surat.alamat,
        }}
      />
    </main>
  );
}