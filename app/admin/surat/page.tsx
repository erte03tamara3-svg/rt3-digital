"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import StatusBadge from "@/components/admin/surat/StatusBadge";

type Surat = {
  id: number;
  nomor_pengajuan: string;
  nomor_surat: string | null;
  nama: string;
  nama_lengkap: string;
  jenis_surat: string;
  status: string;
  created_at: string;
};

export default function AdminSuratPage() {
  const [data, setData] = useState<Surat[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);

    const { data, error } = await supabase
      .from("surat")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setData(data as Surat[]);
    }

    setLoading(false);
  }

  const filtered = useMemo(() => {
    const key = keyword.toLowerCase().trim();

    if (!key) return data;

    return data.filter((item) => {
      const nama = (
        item.nama_lengkap ||
        item.nama ||
        ""
      ).toLowerCase();

      const nomorPengajuan = (
        item.nomor_pengajuan || ""
      ).toLowerCase();

      const nomorSurat = (
        item.nomor_surat || ""
      ).toLowerCase();

      const jenis = (
        item.jenis_surat || ""
      ).toLowerCase();

      return (
        nama.includes(key) ||
        nomorPengajuan.includes(key) ||
        nomorSurat.includes(key) ||
        jenis.includes(key)
      );
    });
  }, [data, keyword]);

  const total = data.length;
  const menunggu = data.filter(
    (x) => x.status === "Menunggu"
  ).length;
  const disetujui = data.filter(
    (x) => x.status === "Disetujui"
  ).length;
  const ditolak = data.filter(
    (x) => x.status === "Ditolak"
  ).length;

  return (
    <div className="p-6 space-y-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Data Pengajuan Surat
          </h1>

          <p className="text-gray-500 mt-1">
            Kelola seluruh pengajuan surat warga RT 003 RW 024.
          </p>
        </div>

        <input
          type="text"
          placeholder="Cari nama, nomor surat, jenis surat..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full lg:w-96 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500 text-sm">
            Total
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {total}
          </h2>
        </div>

        <div className="bg-yellow-50 rounded-xl shadow p-5 border border-yellow-200">
          <p className="text-yellow-700 text-sm">
            Menunggu
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {menunggu}
          </h2>
        </div>

        <div className="bg-green-50 rounded-xl shadow p-5 border border-green-200">
          <p className="text-green-700 text-sm">
            Disetujui
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {disetujui}
          </h2>
        </div>

        <div className="bg-red-50 rounded-xl shadow p-5 border border-red-200">
          <p className="text-red-700 text-sm">
            Ditolak
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {ditolak}
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">No. Pengajuan</th>
              <th className="p-4 text-left">No. Surat</th>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">Jenis Surat</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>

          </thead>

          <tbody>

            {loading && (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-8"
                >
                  Memuat data...
                </td>
              </tr>
            )}

            {!loading && filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-8"
                >
                  Data tidak ditemukan.
                </td>
              </tr>
            )}

            {filtered.map((item, index) => (

              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  {index + 1}
                </td>

                <td className="p-4">
                  {item.nomor_pengajuan}
                </td>

                <td className="p-4">
                  {item.nomor_surat || "-"}
                </td>

                <td className="p-4 font-medium">
                  {item.nama_lengkap || item.nama}
                </td>

                <td className="p-4">
                  {item.jenis_surat}
                </td>

                <td className="p-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="p-4 whitespace-nowrap">
                  {new Date(
                    item.created_at
                  ).toLocaleDateString("id-ID")}
                </td>

                <td className="p-4">
                  <div className="flex gap-2 justify-center">

                    <Link
                      href={`/admin/surat/${item.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Detail
                    </Link>

                    {item.status === "Disetujui" && (
                      <Link
                        href={`/admin/surat/${item.id}/preview`}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Preview
                      </Link>
                    )}

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