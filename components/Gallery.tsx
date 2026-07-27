import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Gallery() {
  const { data: photos, error } = await supabase
    .from("galeri")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          TEST GALERI
        </h2>

        {photos?.map((item) => (
          <div key={item.id} className="mb-10 border p-4">

            <p><strong>Judul:</strong> {item.judul}</p>

            <p><strong>URL:</strong></p>

            <pre className="text-xs break-all bg-gray-100 p-2">
              {item.gambar}
            </pre>

            <img
              src={item.gambar}
              alt=""
              width={400}
            />

          </div>
        ))}

      </div>
    </section>
  );
}