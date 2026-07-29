"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type DataTransparansi = {
  id: number;
  tanggal: string;
  uraian: string;
  jenis: string;
  nominal: number;
};

export default function TransparansiList() {
  const [data, setData] = useState<DataTransparansi[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    const { data: hasil, error } = await supabase
      .from("transparansi")
      .select("*")
      .order("tanggal", { ascending: false });

    if (!error && hasil) {
      setData(hasil);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function hapusData(item: DataTransparansi) {
    const yakin = confirm(
      `Yakin ingin menghapus data "${item.uraian}"?`
    );

    if (!yakin) return;

    const { error } = await supabase
      .from("transparansi")
      .delete()
      .eq("id", item.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Data berhasil dihapus.");
    loadData();
  }

  const totalPemasukan = data
    .filter((d) => d.jenis === "Pemasukan")
    .reduce((a, b) => a + b.nominal, 0);

  const totalPengeluaran = data
    .filter((d) => d.jenis === "Pengeluaran")
    .reduce((a, b) => a + b.nominal, 0);

  const saldo = totalPemasukan - totalPengeluaran;

  function rupiah(nilai: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(nilai);
  }

  if (loading) {
    return <p>Memuat data...</p>;
  }

  return (
    <div className="mt-8">

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-green-600 text-white rounded-xl p-5 shadow">
          <p>Total Pemasukan</p>
          <h2 className="text-2xl font-bold">
            {rupiah(totalPemasukan)}
          </h2>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-5 shadow">
          <p>Total Pengeluaran</p>
          <h2 className="text-2xl font-bold">
            {rupiah(totalPengeluaran)}
          </h2>
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-5 shadow">
          <p>Saldo</p>
          <h2 className="text-2xl font-bold">
            {rupiah(saldo)}
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Uraian</th>
              <th className="p-3 text-left">Jenis</th>
              <th className="p-3 text-right">Nominal</th>
              <th className="p-3 text-center">Aksi</th>

            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-3">
                  {item.tanggal}
                </td>

                <td className="p-3">
                  {item.uraian}
                </td>

                <td className="p-3">
                  <span
                    className={
                      item.jenis === "Pemasukan"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {item.jenis}
                  </span>
                </td>

                <td className="p-3 text-right">
                  {rupiah(item.nominal)}
                </td>

                <td className="p-3">

                  <div className="flex gap-2 justify-center">

                    <button
                      onClick={() =>
                        alert("Fitur Edit akan kita aktifkan pada langkah berikutnya.")
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => hapusData(item)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                    >
                      🗑 Hapus
                    </button>

                  </div>

                </td>

              </tr>

            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-6 text-gray-500"
                >
                  Belum ada data transparansi.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}