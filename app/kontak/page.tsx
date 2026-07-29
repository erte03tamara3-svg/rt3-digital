"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Kontak = {
  id: number;
  nama: string;
  jabatan: string;
  nomor: string;
  icon: string;
};

export default function KontakPage() {
  const [contacts, setContacts] = useState<Kontak[]>([]);

  useEffect(() => {
    loadKontak();
  }, []);

  async function loadKontak() {
    const { data, error } = await supabase
      .from("kontak_penting")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setContacts(data || []);
  }

  function formatWhatsapp(nomor: string) {
    let no = nomor.replace(/\D/g, "");

    if (no.startsWith("0")) {
      no = "62" + no.substring(1);
    }

    return no;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Kontak Penting
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            RT 003 RW 024 Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
                    {contacts.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="bg-blue-700 text-white px-6 py-4">
                <h2 className="text-lg font-bold">
                  {item.nama}
                </h2>

                {item.jabatan && (
                  <p className="text-sm text-blue-100 mt-1">
                    {item.jabatan}
                  </p>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">
                  Nomor Kontak
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1 break-all">
                  {item.nomor}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  <a
                    href={`tel:${item.nomor}`}
                    className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                  >
                    📞 Telepon
                  </a>

                  <a
                    href={`https://wa.me/${formatWhatsapp(item.nomor)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
                  >
                    💬 WhatsApp
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            Informasi
          </h2>

          <p className="text-gray-700 leading-8">
            Daftar kontak di atas dikelola langsung oleh pengurus RT melalui
            sistem RT3 Digital. Apabila terdapat perubahan nomor atau
            penambahan kontak penting, informasi akan diperbarui secara
            otomatis tanpa perlu memperbarui aplikasi.
          </p>
        </div>

      </div>
    </section>
  );
}