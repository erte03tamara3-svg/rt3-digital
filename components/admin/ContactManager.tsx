"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Contact = {
  id: number;
  nama: string;
  jabatan: string;
  nomor: string;
  icon: string;
};

export default function ContactManager() {
  const [data, setData] = useState<Contact[]>([]);

  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [nomor, setNomor] = useState("");
  const [icon, setIcon] = useState("phone");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data } = await supabase
      .from("kontak_penting")
      .select("*")
      .order("id");

    if (data) setData(data);
  }

  async function tambah() {
    if (!nama || !nomor) {
      alert("Nama dan nomor wajib diisi.");
      return;
    }

    const { error } = await supabase
      .from("kontak_penting")
      .insert({
        nama,
        jabatan,
        nomor,
        icon,
      });

    if (error) {
      alert(error.message);
      return;
    }

    setNama("");
    setJabatan("");
    setNomor("");
    setIcon("phone");

    loadData();
  }

  async function hapus(id: number) {
    if (!confirm("Hapus kontak ini?")) return;

    await supabase
      .from("kontak_penting")
      .delete()
      .eq("id", id);

    loadData();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Kontak Penting
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Nama"
          value={nama}
          onChange={(e)=>setNama(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Jabatan"
          value={jabatan}
          onChange={(e)=>setJabatan(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Nomor"
          value={nomor}
          onChange={(e)=>setNomor(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Icon"
          value={icon}
          onChange={(e)=>setIcon(e.target.value)}
        />

        <button
          onClick={tambah}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Tambah Kontak
        </button>

      </div>

      <div className="mt-8 space-y-4">

        {data.map((item)=>(
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-lg">
                {item.nama}
              </h2>

              <p>{item.jabatan}</p>

              <p>{item.nomor}</p>

              <p className="text-gray-500">
                {item.icon}
              </p>
            </div>

            <button
              onClick={()=>hapus(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Hapus
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}