import { supabase } from "@/lib/supabase";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Gallery() {
  let photos: any[] = [];

  try {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("tanggal", { ascending: false })
      .limit(6);

    if (error) {
      console.error(error);
    } else {
      photos = data ?? [];
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Galeri Kegiatan
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Dokumentasi kegiatan RT 003 RW 024
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {photos.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl shadow-lg bg-white hover:shadow-xl transition"
            >
              <Image
                src={item.gambar}
                alt={item.judul}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {item.judul}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}