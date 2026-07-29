"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { InputField, TextAreaField } from "./ProfileFields";

export default function ProfileForm() {
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nama: "",
    jabatan: "",
    wilayah: "",
    alamat: "",
    periode: "",
    pendidikan: "",
    sertifikasi: "",
    profesi: "",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
    paragraf5: "",
    paragraf6: "",
    paragraf7: "",
    paragraf8: "",
    motto: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data } = await supabase
      .from("profil_rt")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) {
      setForm({
        nama: data.nama ?? "",
        jabatan: data.jabatan ?? "",
        wilayah: data.wilayah ?? "",
        alamat: data.alamat ?? "",
        periode: data.periode ?? "",
        pendidikan: data.pendidikan ?? "",
        sertifikasi: data.sertifikasi ?? "",
        profesi: data.profesi ?? "",
        paragraf1: data.paragraf1 ?? "",
        paragraf2: data.paragraf2 ?? "",
        paragraf3: data.paragraf3 ?? "",
        paragraf4: data.paragraf4 ?? "",
        paragraf5: data.paragraf5 ?? "",
        paragraf6: data.paragraf6 ?? "",
        paragraf7: data.paragraf7 ?? "",
        paragraf8: data.paragraf8 ?? "",
        motto: data.motto ?? "",
      });
    }

    setLoading(false);
  }

  async function simpan() {
    const { error } = await supabase
      .from("profil_rt")
      .update(form)
      .eq("id", 1);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profil berhasil diperbarui");
  }

  if (loading) return <p>Memuat...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-5">
      <h1 className="text-3xl font-bold">Profil Ketua RT</h1>

      <InputField label="Nama" value={form.nama} onChange={(v)=>setForm({...form,nama:v})}/>
      <InputField label="Jabatan" value={form.jabatan} onChange={(v)=>setForm({...form,jabatan:v})}/>
      <InputField label="Wilayah" value={form.wilayah} onChange={(v)=>setForm({...form,wilayah:v})}/>
      <InputField label="Alamat" value={form.alamat} onChange={(v)=>setForm({...form,alamat:v})}/>
      <InputField label="Periode" value={form.periode} onChange={(v)=>setForm({...form,periode:v})}/>
      <InputField label="Pendidikan" value={form.pendidikan} onChange={(v)=>setForm({...form,pendidikan:v})}/>
      <InputField label="Sertifikasi" value={form.sertifikasi} onChange={(v)=>setForm({...form,sertifikasi:v})}/>
      <InputField label="Profesi" value={form.profesi} onChange={(v)=>setForm({...form,profesi:v})}/>

      <TextAreaField label="Paragraf 1" value={form.paragraf1} onChange={(v)=>setForm({...form,paragraf1:v})}/>
      <TextAreaField label="Paragraf 2" value={form.paragraf2} onChange={(v)=>setForm({...form,paragraf2:v})}/>
      <TextAreaField label="Paragraf 3" value={form.paragraf3} onChange={(v)=>setForm({...form,paragraf3:v})}/>
      <TextAreaField label="Paragraf 4" value={form.paragraf4} onChange={(v)=>setForm({...form,paragraf4:v})}/>
      <TextAreaField label="Paragraf 5" value={form.paragraf5} onChange={(v)=>setForm({...form,paragraf5:v})}/>
      <TextAreaField label="Paragraf 6" value={form.paragraf6} onChange={(v)=>setForm({...form,paragraf6:v})}/>
      <TextAreaField label="Paragraf 7" value={form.paragraf7} onChange={(v)=>setForm({...form,paragraf7:v})}/>
      <TextAreaField label="Paragraf 8" value={form.paragraf8} onChange={(v)=>setForm({...form,paragraf8:v})}/>

      <TextAreaField label="Motto" value={form.motto} onChange={(v)=>setForm({...form,motto:v})}/>

      <button
        onClick={simpan}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Simpan Perubahan
      </button>
    </div>
  );
}