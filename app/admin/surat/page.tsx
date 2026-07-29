"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Surat = {
  id: number;
  nomor_pengajuan: string;
  nama_lengkap: string;
  jenis_surat: string;
  surat_lainnya: string | null;
  no_hp: string;
  status: string;
  created_at: string;
};

export default function AdminSuratPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Surat[]>([]);

  async function loadData() {
    setLoading(true);

    const { data: hasil, error } = await supabase
      .from("surat")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && hasil) {
      setData(hasil);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function ubahStatus(id: number, status: string) {
    const { error } = await supabase
      .from("surat")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadData();
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold">Memuat Data...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Pengajuan Surat Warga
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3 text-left">Nomor</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Jenis Surat</th>
              <th className="p-3 text-left">HP</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  Belum ada pengajuan surat.
                </td>
              </tr>
            )}

            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.nomor_pengajuan}</td>

                <td className="p-3">{item.nama_lengkap}</td>

                <td className="p-3">
                  {item.jenis_surat === "Lain-lain"
                    ? item.surat_lainnya
                    : item.jenis_surat}
                </td>

                <td className="p-3">{item.no_hp}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === "Menunggu Persetujuan"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "Disetujui"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() =>
                        ubahStatus(item.id, "Disetujui")
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
                    >
                      ✔ Setujui
                    </button>

                    <button
                      onClick={() =>
                        ubahStatus(item.id, "Ditolak")
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                    >
                      ✖ Tolak
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}