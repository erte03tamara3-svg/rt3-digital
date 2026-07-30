"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import TemplateSurat from "@/components/surat/template/TemplateSurat";

export default function PreviewSurat({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [loading, setLoading] = useState(true);
  const [surat, setSurat] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    setLoading(true);

    const { data, error } = await supabase
      .from("surat")
      .select("*")
      .eq("id", Number(id))
      .single();

    if (error) {
      console.error(error);
    } else {
      setSurat(data);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Memuat surat...
      </div>
    );
  }

  if (!surat) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-red-600">
        Data surat tidak ditemukan.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-200 py-10 print:bg-white print:py-0">

      <div className="max-w-5xl mx-auto mb-6 flex gap-3 print:hidden">

        <Link
          href={`/admin/surat/${id}`}
          className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg"
        >
          ← Kembali
        </Link>

        <button
          onClick={() => window.print()}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg"
        >
          🖨 Cetak Surat
        </button>

      </div>

      <div className="flex justify-center print:block">
        <TemplateSurat surat={surat} />
      </div>

    </main>
  );
}