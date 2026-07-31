import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-xl text-center">

        <div className="text-7xl mb-5">
          🔍
        </div>

        <h1 className="text-3xl font-bold text-red-600">
          Surat Tidak Ditemukan
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Surat yang Anda cari tidak terdaftar pada sistem RT3 Digital
          atau tautan verifikasi yang digunakan sudah tidak valid.
        </p>

        <div className="mt-8">
          <Link
            href="/verifikasi"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Kembali ke Halaman Verifikasi
          </Link>
        </div>

      </div>
    </main>
  );
}