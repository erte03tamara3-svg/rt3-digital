import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default async function Galeri() {

    const { data } = await supabase

        .from("galeri")

        .select("*")

        .order("tanggal",{ascending:false});

    return (

        <div className="max-w-7xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">

                Galeri Kegiatan

            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                {data?.map((item)=> (

                    <div

                        key={item.id}

                        className="border rounded overflow-hidden shadow"

                    >

                        <Image

                            src={item.gambar}

                            alt={item.judul}

                            width={600}

                            height={400}

                            className="w-full h-60 object-cover"

                        />

                        <div className="p-4">

                            <h2 className="font-bold">

                                {item.judul}

                            </h2>

                            <p>

                                {item.deskripsi}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}