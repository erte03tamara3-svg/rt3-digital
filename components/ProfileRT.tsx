"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function ComponentProfileRT() {
  const [profil, setProfil] = useState({
    nama: "",
    jabatan: "",
    wilayah: "",
    alamat: "",
    periode: "",
    pendidikan: "",
    sertifikasi: "",
    profesi: "",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
    paragraf5: "",
    paragraf6: "",
    paragraf7: "",
    paragraf8: "",
    motto: "",
  });

  useEffect(() => {
    loadProfil();
  }, []);

  async function loadProfil() {
    const { data } = await supabase
      .from("profil_rt")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) {
      setProfil({
        nama: data.nama ?? "",
        jabatan: data.jabatan ?? "",
        wilayah: data.wilayah ?? "",
        alamat: data.alamat ?? "",
        periode: data.periode ?? "",
        pendidikan: data.pendidikan ?? "",
        sertifikasi: data.sertifikasi ?? "",
        profesi: data.profesi ?? "",
        paragraf1: data.paragraf1 ?? "",
        paragraf2: data.paragraf2 ?? "",
        paragraf3: data.paragraf3 ?? "",
        paragraf4: data.paragraf4 ?? "",
        paragraf5: data.paragraf5 ?? "",
        paragraf6: data.paragraf6 ?? "",
        paragraf7: data.paragraf7 ?? "",
        paragraf8: data.paragraf8 ?? "",
        motto: data.motto ?? "",
      });
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        <div className="flex justify-center mb-8">
          <div className="p-2 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 shadow-2xl">
            <Image
              src="/images/ketuaRT.png"
              alt={profil.nama}
              width={220}
              height={220}
              priority
              className="rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            {profil.nama}
          </h1>

          <p className="mt-3 text-xl font-semibold text-blue-700">
            {profil.jabatan}
          </p>

          <p className="text-gray-600 mt-2">
            {profil.wilayah}
          </p>

          <p className="text-gray-500">
            {profil.alamat}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">

          <Card title="Nama" value={profil.nama} />
          <Card title="Jabatan" value={profil.jabatan} />
          <Card title="Periode" value={profil.periode} />
          <Card title="Pendidikan" value={profil.pendidikan} />
          <Card title="Sertifikasi" value={profil.sertifikasi} />
          <Card title="Profesi" value={profil.profesi} />

        </div>

        <hr className="my-8" />

        <div className="space-y-6 text-gray-700 leading-8 text-justify">

          <h2 className="text-3xl font-bold text-gray-900">
            Biografi Ketua RT
          </h2>
                    <p>{profil.paragraf1}</p>

          <p>{profil.paragraf2}</p>

          <p>{profil.paragraf3}</p>

          <p>{profil.paragraf4}</p>

          <p>{profil.paragraf5}</p>

          <p>{profil.paragraf6}</p>

          <p>{profil.paragraf7}</p>

          <p>{profil.paragraf8}</p>

        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-2xl p-8 shadow-lg">
          <p className="text-2xl italic font-semibold text-center">
            {profil.motto}
          </p>
        </div>

      </div>
    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border">
      <h3 className="font-semibold text-blue-700">
        {title}
      </h3>

      <p>{value}</p>
    </div>
  );
}