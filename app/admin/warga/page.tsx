"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function AdminWargaPage() {
 const [warga, setWarga] = useState<any[]>([]);
useEffect(() => {
  loadWarga();
  async function tambahWarga() {
  const nama = prompt("Nama Warga");

  if (!nama) return;

  const nik = prompt("NIK") || "";
  const noKK = prompt("Nomor KK") || "";
  const noHP = prompt("Nomor HP") || "";

  const { error } = await supabase
    .from("warga")
    .insert({
      nama,
      nik,
      no_kk: noKK,
      no_hp: noHP,
      status: "Aktif",
    });

  if (error) {
    alert(error.message);
    return;
  }

  await loadWarga();
}
}, []);

async function loadWarga() {
  const { data, error } = await supabase
    .from("warga")
    .select("*")
    .order("nama");

  if (error) {
    console.error(error);
    return;
  }

  setWarga(data ?? []);
}
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Data Warga</h1>
          <p className="text-gray-600">
            Kelola seluruh data warga RT 003 RW 024.
          </p>
        </div>

        <button className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800">
          + Tambah Warga
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3 text-left">NIK</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">No KK</th>
              <th className="p-3 text-left">No HP</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {warga.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.nik}</td>
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.no_kk}</td>
                <td className="p-3">{item.no_hp}</td>
                <td className="p-3">{item.status}</td>
                <td className="p-3 text-center">
                  <button className="mr-2 rounded bg-yellow-500 px-3 py-1 text-white">
                    Edit
                  </button>

                  <button
  onClick={tambahWarga}
  className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
>
  + Tambah Warga
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}