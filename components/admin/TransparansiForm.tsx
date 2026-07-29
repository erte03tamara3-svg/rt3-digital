"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export type DataTransparansi = {
  id: number;
  tanggal: string;
  uraian: string;
  jenis: string;
  nominal: number;
};

type Props = {
  editData?: DataTransparansi | null;
  onSelesaiEdit?: () => void;
};

export default function TransparansiForm({
  editData,
  onSelesaiEdit,
}: Props) {
  const [tanggal, setTanggal] = useState("");
  const [uraian, setUraian] = useState("");
  const [jenis, setJenis] = useState("Pemasukan");
  const [nominal, setNominal] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setTanggal(editData.tanggal);
      setUraian(editData.uraian);
      setJenis(editData.jenis);
      setNominal(String(editData.nominal));
    } else {
      resetForm();
    }
  }, [editData]);

  function resetForm() {
    setTanggal("");
    setUraian("");
    setJenis("Pemasukan");
    setNominal("");
  }

  async function simpanData() {
    if (!tanggal) {
      alert("Tanggal wajib diisi.");
      return;
    }

    if (!uraian.trim()) {
      alert("Uraian wajib diisi.");
      return;
    }

    if (!nominal) {
      alert("Nominal wajib diisi.");
      return;
    }

    setLoading(true);

    try {
      if (editData) {
        const { error } = await supabase
          .from("transparansi")
          .update({
            tanggal,
            uraian,
            jenis,
            nominal: Number(nominal),
          })
          .eq("id", editData.id);

        if (error) throw error;

        alert("Data berhasil diperbarui.");
      } else {
        const { error } = await supabase
          .from("transparansi")
          .insert({
            tanggal,
            uraian,
            jenis,
            nominal: Number(nominal),
          });

        if (error) throw error;

        alert("Data berhasil disimpan.");
      }

      resetForm();

      if (onSelesaiEdit) {
        onSelesaiEdit();
      } else {
        window.location.reload();
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

      <h2 className="text-3xl font-bold mb-6">
        {editData ? "Edit Data Transparansi" : "Tambah Data Transparansi"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="font-semibold">Tanggal</label>

          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">Jenis</label>

          <select
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option value="Saldo Awal">Saldo Awal</option>
            <option value="Pemasukan">Pemasukan</option>
            <option value="Pengeluaran">Pengeluaran</option>
          </select>
        </div>

      </div>

      <div className="mt-4">
        <label className="font-semibold">Uraian</label>

        <input
          type="text"
          value={uraian}
          onChange={(e) => setUraian(e.target.value)}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      <div className="mt-4">
        <label className="font-semibold">Nominal</label>

        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={simpanData}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
        >
          {loading
            ? "Menyimpan..."
            : editData
            ? "Update Data"
            : "Simpan Data"}
        </button>

        {editData && (
          <button
            onClick={() => {
              resetForm();
              onSelesaiEdit?.();
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl"
          >
            Batal
          </button>
        )}

      </div>

    </div>
  );
}