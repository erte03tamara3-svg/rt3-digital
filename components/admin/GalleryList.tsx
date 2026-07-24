"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

type GalleryItem = {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
};

export default function GalleryList() {
  const [galeri, setGaleri] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("tanggal", { ascending: false });

    if (!error && data) {
      setGaleri(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function hapusFoto(item: GalleryItem) {
    const yakin = confirm(
      `Yakin ingin menghapus "${item.judul}"?`
    );

    if (!yakin) return;

    try {
      // hapus data database
      const { error } = await supabase
        .from("galeri")
        .delete()
        .eq("id", item.id);

      if (error) throw error;

      // hapus file storage (jika memungkinkan)
      try {
        const url = new URL(item.gambar);
        const fileName = url.pathname.split("/").pop();

        if (fileName) {
          await supabase.storage
            .from("galeri")
            .remove([fileName]);
        }
      } catch (_) {}

      alert("Foto berhasil dihapus.");

      loadData();

    } catch (err: any) {
      alert(err.message);
    }
  }

  if (loading) {
    return <p>Memuat data...</p>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">
        Daftar Foto
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {galeri.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >

            <Image
              src={item.gambar}
              alt={item.judul}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold text-lg">
                {item.judul}
              </h3>

              <p className="text-gray-600 mb-4">
                {item.deskripsi}
              </p>

              <div className="flex gap-3">

                <button
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
                  onClick={() => alert("Fitur Edit akan dibuat berikutnya")}
                >
                  ✏️ Edit
                </button>

                <button
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg"
                  onClick={() => hapusFoto(item)}
                >
                  🗑️ Hapus
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}