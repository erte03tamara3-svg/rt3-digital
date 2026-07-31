"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">

        <div className="text-6xl mb-5">
          ⚠️
        </div>

        <h1 className="text-3xl font-bold text-red-600">
          Terjadi Kesalahan
        </h1>

        <p className="mt-4 text-gray-600 leading-7">
          Maaf, terjadi kesalahan saat memverifikasi surat.
          Silakan coba beberapa saat lagi.
        </p>

        <div className="mt-8 flex justify-center gap-3">

          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Coba Lagi
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
          >
            Beranda
          </button>

        </div>

        {process.env.NODE_ENV === "development" && (
          <pre className="mt-8 text-left bg-gray-100 p-4 rounded-lg text-xs overflow-auto">
            {error.message}
          </pre>
        )}

      </div>
    </main>
  );
}