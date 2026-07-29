"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Photo = {
  id: number;
  judul: string;
  gambar: string;
};

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    const { data } = await supabase
      .from("galeri")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setPhotos(data);
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Galeri
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.judul}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}