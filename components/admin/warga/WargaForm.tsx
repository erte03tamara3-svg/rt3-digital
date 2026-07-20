"use client";

import { useState, useEffect } from "react";
import { Warga } from "./types";

type Props = {
  initialData?: Warga | null;
  onSubmit: (data: Partial<Warga>) => Promise<void>;
  onCancel: () => void;
};

const emptyForm: Partial<Warga> = {
  nik: "",
  no_kk: "",
  nama: "",
  no_hp: "",
  alamat: "",
  status: "Aktif",
};

export default function WargaForm({
  initialData,
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState<Partial<Warga>>(emptyForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(emptyForm);
    }
  }, [initialData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await onSubmit(form);

    setLoading(false);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-xl bg-white p-6 shadow space-y-4"
    >
      <h2 className="text-xl font-bold">
        {initialData ? "Edit Warga" : "Tambah Warga"}
      </h2>

      <input
        name="nik"
        placeholder="NIK"
        value={form.nik ?? ""}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />

      <input
        name="no_kk"
        placeholder="Nomor KK"
        value={form.no_kk ?? ""}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />

      <input
        name="nama"
        placeholder="Nama Lengkap"
        value={form.nama ?? ""}
        onChange={handleChange}
        className="w-full rounded border p-3"
        required
      />

      <input
        name="no_hp"
        placeholder="Nomor HP"
        value={form.no_hp ?? ""}
        onChange={handleChange}
        className="w-full rounded border p-3"
      />

      <textarea
        name="alamat"
        placeholder="Alamat"
        value={form.alamat ?? ""}
        onChange={handleChange}
        className="w-full rounded border p-3"
        rows={3}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-700 px-5 py-2 text-white hover:bg-blue-800"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded bg-gray-300 px-5 py-2"
        >
          Batal
        </button>
      </div>
    </form>
  );
}