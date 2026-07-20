"use client";

import { Warga } from "./types";

type Props = {
  data: Warga[];
  onEdit: (warga: Warga) => void;
  onDelete: (id: number) => void;
};

export default function WargaTable({
  data,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left">NIK</th>
            <th className="px-4 py-3 text-left">Nama</th>
            <th className="px-4 py-3 text-left">No. KK</th>
            <th className="px-4 py-3 text-left">No. HP</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-8 text-center text-gray-500"
              >
                Belum ada data warga.
              </td>
            </tr>
          ) : (
            data.map((warga) => (
              <tr
                key={warga.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">{warga.nik}</td>
                <td className="px-4 py-3 font-medium">
                  {warga.nama}
                </td>
                <td className="px-4 py-3">{warga.no_kk}</td>
                <td className="px-4 py-3">{warga.no_hp}</td>
                <td className="px-4 py-3">{warga.status}</td>

                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    onClick={() => onEdit(warga)}
                    className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(warga.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}