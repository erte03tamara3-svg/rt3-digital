"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { generateNomorSurat } from "@/lib/generateNomorSurat";

export default function DetailSuratPage() {
  const { id } = useParams();
  const router = useRouter();

  const [surat, setSurat] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!id) return;

    loadData();
  }, [id]);

  async function loadData() {
    const { data } = await supabase
      .from("surat")
      .select("*")
      .eq("id", id)
      .single();

    setSurat(data);
    setLoading(false);
  }

  async function setujuiSurat() {
    if (!surat) return;

    setSaving(true);

    let nomorSurat = surat.nomor_surat;

    if (!nomorSurat) {
      nomorSurat = await generateNomorSurat();
    }

    const { error } = await supabase
      .from("surat")
      .update({
        status: "Disetujui",
        nomor_surat: nomorSurat,
        updated_at: new Date().toISOString(),
      })
      .eq("id", surat.id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push(`/admin/surat/${surat.id}/preview`);
  }

  async function tolakSurat() {
    if (!confirm("Yakin ingin menolak surat ini?")) return;

    setSaving(true);

    const { error } = await supabase
      .from("surat")
      .update({
        status: "Ditolak",
        updated_at: new Date().toISOString(),
      })
      .eq("id", surat.id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
    loadData();
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        Memuat...
      </div>
    );
  }

  if (!surat) {
    return (
      <div className="p-10 text-center">
        Surat tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Detail Pengajuan Surat
      </h1>

      <div className="bg-white rounded-xl shadow border p-6 space-y-4">

        <div>
          <strong>Nama</strong>
          <br />
          {surat.nama_lengkap}
        </div>

        <div>
          <strong>NIK</strong>
          <br />
          {surat.identitas}
        </div>

        <div>
          <strong>Jenis Surat</strong>
          <br />
          {surat.jenis_surat}
        </div>

        <div>
          <strong>Status</strong>
          <br />
          {surat.status}
        </div>

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={setujuiSurat}
          disabled={saving}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          {saving ? "Memproses..." : "Setujui Surat"}
        </button>

        <button
          onClick={tolakSurat}
          disabled={saving}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Tolak
        </button>

        <button
          onClick={() => router.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
        >
          Kembali
        </button>

      </div>

    </div>
  );
}