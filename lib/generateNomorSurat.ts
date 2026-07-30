"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FormSurat() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    identitas: "",
    jenis_kelamin: "",
    agama: "",
    pekerjaan: "",
    status_perkawinan: "",
    alamat: "",
    no_hp: "",
    jenis_surat: "",
    surat_lainnya: "",
    keperluan: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function simpanSurat() {
    if (
      !form.nama_lengkap ||
      !form.tempat_lahir ||
      !form.tanggal_lahir ||
      !form.identitas ||
      !form.jenis_kelamin ||
      !form.agama ||
      !form.pekerjaan ||
      !form.status_perkawinan ||
      !form.alamat ||
      !form.no_hp ||
      !form.jenis_surat ||
      !form.keperluan
    ) {
      alert("Semua data wajib diisi.");
      return;
    }

    if (
      form.jenis_surat === "Lain-lain" &&
      !form.surat_lainnya.trim()
    ) {
      alert("Silakan isi jenis surat lainnya.");
      return;
    }

    try {
      setLoading(true);

      // Nomor pengajuan sementara
      const nomorPengajuan = `PGJ-${Date.now()}`;

      const { error } = await supabase.from("surat").insert({
        nomor_pengajuan: nomorPengajuan,
        nomor_surat: null,
        nama_lengkap: form.nama_lengkap,
        tempat_lahir: form.tempat_lahir,
        tanggal_lahir: form.tanggal_lahir,
        identitas: form.identitas,
        jenis_kelamin: form.jenis_kelamin,
        agama: form.agama,
        pekerjaan: form.pekerjaan,
        status_perkawinan: form.status_perkawinan,
        alamat: form.alamat,
        no_hp: form.no_hp,
        jenis_surat: form.jenis_surat,
        surat_lainnya: form.surat_lainnya,
        keperluan: form.keperluan,
        status: "Menunggu",
      });

      if (error) throw error;

      alert(
        `Pengajuan berhasil dikirim.\n\nNomor Pengajuan:\n${nomorPengajuan}`
      );

      setForm({
        nama_lengkap: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        identitas: "",
        jenis_kelamin: "",
        agama: "",
        pekerjaan: "",
        status_perkawinan: "",
        alamat: "",
        no_hp: "",
        jenis_surat: "",
        surat_lainnya: "",
        keperluan: "",
      });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="space-y-5">
        <input
          name="nama_lengkap"
          value={form.nama_lengkap}
          onChange={handleChange}
          placeholder="Nama Lengkap (Sesuai KTP)"
          className="w-full border rounded-xl p-3"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="tempat_lahir"
            value={form.tempat_lahir}
            onChange={handleChange}
            placeholder="Tempat Lahir"
            className="border rounded-xl p-3"
          />

          <input
            type="date"
            name="tanggal_lahir"
            value={form.tanggal_lahir}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />
        </div>

        <input
          name="identitas"
          value={form.identitas}
          onChange={handleChange}
          placeholder="NIK / SIM / Paspor"
          className="w-full border rounded-xl p-3"
        />

        <select
          name="jenis_kelamin"
          value={form.jenis_kelamin}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>

        <input
          name="agama"
          value={form.agama}
          onChange={handleChange}
          placeholder="Agama"
          className="w-full border rounded-xl p-3"
        />

        <input
          name="pekerjaan"
          value={form.pekerjaan}
          onChange={handleChange}
          placeholder="Pekerjaan"
          className="w-full border rounded-xl p-3"
        />

        <select
          name="status_perkawinan"
          value={form.status_perkawinan}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Status Perkawinan</option>
          <option>Belum Kawin</option>
          <option>Kawin</option>
          <option>Cerai Hidup</option>
          <option>Cerai Mati</option>
        </select>

        <textarea
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          rows={3}
          placeholder="Alamat (Blok dan Nomor Rumah)"
          className="w-full border rounded-xl p-3"
        />

        <input
          name="no_hp"
          value={form.no_hp}
          onChange={handleChange}
          placeholder="Nomor HP"
          className="w-full border rounded-xl p-3"
        />

        <select
          name="jenis_surat"
          value={form.jenis_surat}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Pilih Jenis Surat</option>
          <option>KTP/KK Baru/Perubahan</option>
          <option>Surat Domisili Tempat Tinggal</option>
          <option>Surat Keterangan Usaha</option>
          <option>Akta Kelahiran</option>
          <option>SKCK</option>
          <option>Pengantar Surat Nikah</option>
          <option>Surat Pindah</option>
          <option>Surat Keterangan Tidak Mampu</option>
          <option>Surat Kematian</option>
          <option>Lain-lain</option>
        </select>

        {form.jenis_surat === "Lain-lain" && (
          <input
            name="surat_lainnya"
            value={form.surat_lainnya}
            onChange={handleChange}
            placeholder="Tulis jenis surat yang diinginkan"
            className="w-full border rounded-xl p-3"
          />
        )}

        <textarea
          name="keperluan"
          value={form.keperluan}
          onChange={handleChange}
          rows={4}
          placeholder="Keperluan"
          className="w-full border rounded-xl p-3"
        />

        <button
          type="button"
          onClick={simpanSurat}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition"
        >
          {loading ? "Mengirim Pengajuan..." : "AJUKAN SURAT"}
        </button>
      </div>
    </div>
  );
}