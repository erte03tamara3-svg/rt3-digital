"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import StatusBadge from "@/components/admin/surat/StatusBadge";
import { generateNomorSurat } from "@/lib/generateNomorSurat";

type Surat = {
  id: number;
  nomor_pengajuan: string;
  nomor_surat: string | null;
  nama_lengkap: string;
  identitas: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  pekerjaan: string;
  status_perkawinan: string;
  alamat: string;
  no_hp: string;
  jenis_surat: string;
  surat_lainnya: string | null;
  keperluan: string;
  status: string;
  catatan_admin: string | null;
};

export default function DetailSuratPage() {
  const params = useParams();

  const [surat, setSurat] = useState<Surat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data } = await supabase
      .from("surat")
      .select("*")
      .eq("id", params.id)
      .single();

    if (data) setSurat(data);

    setLoading(false);
  }

  async function approveSurat() {
    const { data: last } = await supabase
      .from("surat")
      .select("nomor_surat")
      .not("nomor_surat", "is", null)
      .order("id", { ascending: false })
      .limit(1)
      .single();

    const nomorSurat = generateNomorSurat(last?.nomor_surat);

    await supabase
      .from("surat")
      .update({
        status: "Disetujui",
        nomor_surat: nomorSurat,
        tanggal_disetujui: new Date().toISOString(),
        tanggal_surat: new Date().toISOString(),
      })
      .eq("id", params.id);

    loadData();
  }

  async function updateStatus(status: string) {
    await supabase
      .from("surat")
      .update({ status })
      .eq("id", params.id);

    loadData();
  }

  if (loading) return <div className="p-6">Memuat data...</div>;

  if (!surat) return <div className="p-6">Data tidak ditemukan.</div>;

  return (
    <div className="p-6 max-w-5xl">

      <h1 className="text-3xl font-bold mb-6">
        Detail Pengajuan Surat
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <div className="flex justify-between">
          <span>No. Pengajuan</span>
          <strong>{surat.nomor_pengajuan}</strong>
        </div>

        <div className="flex justify-between">
          <span>Nomor Surat</span>
          <strong>{surat.nomor_surat || "-"}</strong>
        </div>

        <div className="flex justify-between">
          <span>Nama</span>
          <strong>{surat.nama_lengkap}</strong>
        </div>

        <div className="flex justify-between">
          <span>NIK</span>
          <strong>{surat.identitas}</strong>
        </div>

        <div className="flex justify-between">
          <span>Jenis Surat</span>
          <strong>{surat.jenis_surat}</strong>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <StatusBadge status={surat.status.toLowerCase()} />
        </div>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={approveSurat}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Setujui
        </button>

        <button
          onClick={() => updateStatus("Revisi")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Revisi
        </button>

        <button
          onClick={() => updateStatus("Ditolak")}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Tolak
        </button>

        <Link
          href={`/admin/surat/${surat.id}/preview`}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Preview Surat
        </Link>

      </div>

    </div>
  );
}