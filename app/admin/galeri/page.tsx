"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { uploadGaleri } from "@/lib/uploadGaleri";

export default function GaleriAdmin() {

    const [judul, setJudul] = useState("");

    const [deskripsi, setDeskripsi] = useState("");

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    async function simpan() {

        if (!file) {

            alert("Pilih foto");

            return;
        }

        setLoading(true);

        try {

            const url = await uploadGaleri(file);

            const { error } = await supabase

                .from("galeri")

                .insert({

                    judul,

                    deskripsi,

                    gambar: url

                });

            if (error) throw error;

            alert("Upload berhasil");

            setJudul("");

            setDeskripsi("");

            setFile(null);

        } catch (e) {

            console.log(e);

            alert("Upload gagal");

        }

        setLoading(false);

    }

    return (

        <div className="max-w-xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-6">

                Upload Galeri

            </h1>

            <input

                className="border w-full p-3 mb-4"

                placeholder="Judul"

                value={judul}

                onChange={(e)=>setJudul(e.target.value)}

            />

            <textarea

                className="border w-full p-3 mb-4"

                placeholder="Deskripsi"

                value={deskripsi}

                onChange={(e)=>setDeskripsi(e.target.value)}

            />

            <input

                type="file"

                accept="image/*"

                onChange={(e)=>{

                    if(e.target.files)

                    setFile(e.target.files[0]);

                }}

            />

            <button

                onClick={simpan}

                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"

            >

                {loading ? "Uploading..." : "Upload"}

            </button>

        </div>

    );

}