"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TransparansiForm() {
  const [tanggal, setTanggal] = useState("");
  const [uraian, setUraian] = useState("");
  const [jenis, setJenis] = useState("Pemasukan");
  const [nominal, setNominal] = useState("");
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);

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

      setTanggal("");
      setUraian("");
      setJenis("Pemasukan");
      setNominal("");

      window.location.reload();

    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

      <h2 className="text-3xl font-bold mb-6">
        Tambah Data Transparansi
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="font-semibold">
            Tanggal
          </label>

          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Jenis
          </label>

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

        <label className="font-semibold">
          Uraian
        </label>

        <input
          type="text"
          value={uraian}
          onChange={(e) => setUraian(e.target.value)}
          placeholder="Contoh: Saldo Awal Juli 2026 / Iuran Bulanan RT"
          className="w-full border rounded-lg p-3 mt-2"
        />

      </div>

      <div className="mt-4">

        <label className="font-semibold">
          Nominal
        </label>

        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
          placeholder="0"
          className="w-full border rounded-lg p-3 mt-2"
        />

      </div>

      <button
        onClick={simpanData}
        disabled={loading}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold disabled:bg-gray-400"
      >
        {loading ? "Menyimpan..." : "Simpan Data"}
      </button>

    </div>
  );
}