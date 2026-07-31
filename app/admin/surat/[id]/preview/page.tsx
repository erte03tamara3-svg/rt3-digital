"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import TemplateSurat from "@/components/surat/template/TemplateSurat";

export default function PreviewSuratPage() {
  const { id } = useParams();
  const [surat, setSurat] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getSurat = async () => {
      const { data, error } = await supabase
        .from("surat")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) {
        setSurat(data);
      }

      setLoading(false);
    };

    getSurat();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg">
        Memuat surat...
      </div>
    );
  }

  if (!surat) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-lg">
        Surat tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="flex justify-center mb-6 gap-3 print:hidden">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
        >
          Kembali
        </button>

        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Cetak Surat
        </button>
      </div>

      <TemplateSurat surat={surat} />
    </div>
  );
}