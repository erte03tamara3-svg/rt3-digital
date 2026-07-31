export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-xl px-10 py-8 text-center">

        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto" />

        <h2 className="mt-6 text-xl font-semibold">
          Memverifikasi Surat...
        </h2>

        <p className="text-gray-500 mt-2">
          Mohon tunggu sebentar.
        </p>

      </div>
    </main>
  );
}