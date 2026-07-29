"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function StatistikForm() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [jumlahKK, setJumlahKK] = useState(0);
  const [jumlahRumah, setJumlahRumah] = useState(0);
  const [jumlahWarga, setJumlahWarga] = useState(0);
  const [suratDiproses, setSuratDiproses] = useState(0);
  const [agenda, setAgenda] = useState(0);

  async function loadData() {
    setLoading(true);

    const { data, error } = await supabase
      .from("statistik")
      .select("*")
      .eq("id", 1)
      .single();

    if (!error && data) {
      setJumlahKK(data.jumlah_kk);
      setJumlahRumah(data.jumlah_rumah);
      setJumlahWarga(data.jumlah_warga);
      setSuratDiproses(data.surat_diproses);
      setAgenda(data.agenda);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function simpan() {
    setSaving(true);

    const { error } = await supabase
      .from("statistik")
      .update({
        jumlah_kk: jumlahKK,
        jumlah_rumah: jumlahRumah,
        jumlah_warga: jumlahWarga,
        surat_diproses: suratDiproses,
        agenda,
      })
      .eq("id", 1);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Statistik berhasil diperbarui.");
  }

  if (loading) {
    return <p>Memuat data...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h1 className="text-3xl font-bold mb-6">
        Edit Statistik Landing Page
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        <Input
          label="Jumlah KK"
          value={jumlahKK}
          onChange={setJumlahKK}
        />

        <Input
          label="Jumlah Rumah"
          value={jumlahRumah}
          onChange={setJumlahRumah}
        />

        <Input
          label="Jumlah Warga"
          value={jumlahWarga}
          onChange={setJumlahWarga}
        />

        <Input
          label="Surat Diproses"
          value={suratDiproses}
          onChange={setSuratDiproses}
        />

        <Input
          label="Agenda"
          value={agenda}
          onChange={setAgenda}
        />

      </div>

      <button
        onClick={simpan}
        disabled={saving}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
      >
        {saving ? "Menyimpan..." : "Simpan Perubahan"}
      </button>

    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="font-semibold">{label}</label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border rounded-lg p-3 mt-2"
      />
    </div>
  );
}