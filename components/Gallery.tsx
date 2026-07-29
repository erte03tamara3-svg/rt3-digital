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
        <h2 className="text-4xl font-bold mb-10">
          TEST GALERI
        </h2>

        {photos.map((item) => (
          <div key={item.id} className="mb-10 border p-4">
            <p><strong>Judul:</strong> {item.judul}</p>

            <img
              src={item.gambar}
              alt={item.judul}
              width={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
}