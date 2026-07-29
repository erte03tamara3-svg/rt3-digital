"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import Navbar from "@/components/layout/Navbar";
import ProfileRT from "@/components/ProfileRT";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [statistik, setStatistik] = useState({
    jumlah_kk: 350,
    jumlah_rumah: 340,
    jumlah_warga: 1180,
    surat_diproses: 287,
    agenda: 12,
  });

  useEffect(() => {
    loadStatistik();
  }, []);

  async function loadStatistik() {
    const { data } = await supabase
      .from("statistik")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) {
      setStatistik(data);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold">RT 003 RW 024</h1>

            <p className="mt-3 text-xl">
              Perumahan Taman Raya Tahap III
            </p>

            <p className="mt-2 opacity-90">
              Kelurahan Belian • Kecamatan Batam Kota
            </p>
          </div>
        </section>

        {/* Profil RT */}
        <ProfileRT />

        {/* Statistik */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-5">
          {[
            ["Jumlah KK", statistik.jumlah_kk],
            ["Jumlah Rumah", statistik.jumlah_rumah],
            ["Jumlah Warga", statistik.jumlah_warga],
            ["Surat Diproses", statistik.surat_diproses],
            ["Agenda", statistik.agenda],
          ].map(([judul, angka]) => (
            <div
              key={String(judul)}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <h2 className="text-3xl font-bold text-green-700">
                {Number(angka).toLocaleString("id-ID")}
              </h2>

              <p className="mt-2 text-gray-600">{judul}</p>
            </div>
          ))}
        </section>

        {/* Galeri */}
        <Gallery />
      </main>
    </>
  );
}