"use client";

import FormSurat from "@/components/surat/FormSurat";

export default function SuratPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-green-700">
            Ajukan Surat
          </h1>

          <p className="mt-2 text-gray-600">
            Silakan isi formulir di bawah ini sesuai data identitas Anda.
          </p>

          <div className="mt-4 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-gray-700">
            <b>Perhatian:</b>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Pastikan seluruh data sesuai KTP/SIM/Paspor.</li>
              <li>Pengajuan akan diperiksa oleh Ketua RT.</li>
              <li>Setelah disetujui, surat dapat diunduh dalam format PDF.</li>
              <li>Silakan cetak sendiri dan bawa ke Ketua RT untuk cap serta tanda tangan.</li>
            </ul>
          </div>
        </div>

        <FormSurat />

      </div>
    </main>
  );
}