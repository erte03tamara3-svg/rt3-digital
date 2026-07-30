"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import StatusBadge from "@/components/admin/surat/StatusBadge";

type Surat = {
  id: number;
  nomor_pengajuan: string;
  nama: string;
  jenis_surat: string;
  status: string;
  created_at: string;
};

export default function AdminSuratPage() {
  const [data, setData] = useState<Surat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data, error } = await supabase
      .from("surat")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setData(data);
    }

    setLoading(false);
  }

  return (
    <div className="p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Data Pengajuan Surat
          </h1>

          <p className="text-gray-500">
            Kelola seluruh pengajuan surat warga.
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">No</th>
              <th className="text-left p-4">No. Pengajuan</th>
              <th className="text-left p-4">Nama</th>
              <th className="text-left p-4">Jenis Surat</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Aksi</th>

            </tr>

          </thead>

          <tbody>

            {loading && (
              <tr>
                <td colSpan={6} className="text-center p-6">
                  Memuat data...
                </td>
              </tr>
            )}

            {!loading && data.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-6">
                  Belum ada pengajuan surat.
                </td>
              </tr>
            )}

            {data.map((item, index) => (

              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {index + 1}
                </td>

                <td className="p-4">
                  {item.nomor_pengajuan}
                </td>

                <td className="p-4">
                  {item.nama}
                </td>

                <td className="p-4">
                  {item.jenis_surat}
                </td>

                <td className="p-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="p-4">
                  <Link
                    href={`/admin/surat/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Lihat
                  </Link>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}