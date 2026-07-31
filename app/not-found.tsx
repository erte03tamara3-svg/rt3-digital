import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full text-center">

        <div className="text-6xl mb-5">
          ❌
        </div>

        <h1 className="text-3xl font-bold text-red-600">
          Surat Tidak Ditemukan
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Nomor atau data surat yang Anda akses tidak ditemukan pada
          sistem RT3 Digital, atau surat tersebut sudah tidak berlaku.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Kembali ke Beranda
        </Link>

      </div>
    </main>
  );
}