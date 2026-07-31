import Link from "next/link";

export default function VerifikasiPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-center mb-3">
          Verifikasi Surat
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Silakan scan QR Code yang terdapat pada surat
          atau buka tautan verifikasi yang diberikan.
        </p>

        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <div className="text-6xl mb-4">
            📄
          </div>

          <p className="text-gray-600 leading-7">
            Setiap surat yang diterbitkan oleh
            <br />
            <strong>RT 003 RW 024</strong>
            <br />
            memiliki QR Code unik yang mengarah ke halaman verifikasi.
          </p>

        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4">

          <h2 className="font-semibold text-green-700">
            Cara Verifikasi
          </h2>

          <ol className="list-decimal list-inside mt-3 space-y-2 text-gray-700">
            <li>Scan QR Code pada surat.</li>
            <li>Halaman verifikasi akan terbuka otomatis.</li>
            <li>Pastikan status surat adalah <strong>VALID</strong>.</li>
            <li>Cocokkan Nomor Surat dan Nama Pemohon.</li>
          </ol>

        </div>

        <div className="mt-8 text-center">

          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Kembali ke Beranda
          </Link>

        </div>

      </div>
    </main>
  );
}