"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GalleryUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [loading, setLoading] = useState(false);

  async function uploadPhoto() {
    if (!file) {
      alert("Pilih foto terlebih dahulu.");
      return;
    }

    try {
      setLoading(true);

      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("galeri")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("galeri")
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from("galeri")
        .insert({
          judul,
          deskripsi,
          gambar: data.publicUrl,
        });

      if (dbError) throw dbError;

      alert("Upload berhasil");

      setJudul("");
      setDeskripsi("");
      setFile(null);
      setPreview("");

      window.location.reload();

    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  function pilihFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      alert("Ukuran maksimal 5 MB.");
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-10">

      <h2 className="text-3xl font-bold mb-6">
        Upload Foto Kegiatan
      </h2>

      <input
        type="text"
        placeholder="Judul Kegiatan"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
      />

      <textarea
        placeholder="Deskripsi kegiatan..."
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
        rows={4}
      />

      <input
        type="file"
        accept="image/*"
        onChange={pilihFile}
        className="mb-5"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full max-w-md rounded-xl shadow mb-5"
        />
      )}

      <button
        onClick={uploadPhoto}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition disabled:opacity-50"
      >
        {loading ? "Mengupload..." : "Upload Foto"}
      </button>

    </div>
  );
}