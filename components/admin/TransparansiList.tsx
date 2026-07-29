"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { DataTransparansi } from "./TransparansiForm";

type Props = {
  onEdit: (item: DataTransparansi) => void;
};

export default function TransparansiList({ onEdit }: Props) {
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
    if (!confirm(`Yakin ingin menghapus "${item.uraian}"?`)) return;

    const { error } = await supabase
      .from("transparansi")
      .delete()
      .eq("id", item.id);

    if (error) {
      alert(error.message);
      return;
    }

    loadData();
  }

  function rupiah(nilai: number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(nilai);
  }

  if (loading) return <p>Memuat data...</p>;

  return (
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
            <tr key={item.id} className="border-t">

              <td className="p-3">{item.tanggal}</td>

              <td className="p-3">{item.uraian}</td>

              <td className="p-3">{item.jenis}</td>

              <td className="p-3 text-right">
                {rupiah(item.nominal)}
              </td>

              <td className="p-3">

                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => onEdit(item)}
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

        </tbody>

      </table>

    </div>
  );
}