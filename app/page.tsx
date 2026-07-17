import Navbar from "@/components/layout/Navbar";
import ProfileRT from "@/components/ProfileRT";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">

        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold">
              RT 003 RW 024
            </h1>

            <p className="mt-3 text-xl">
              Perumahan Taman Raya Tahap III
            </p>

            <p className="mt-2 opacity-90">
              Kelurahan Belian • Kecamatan Batam Kota
            </p>
          </div>
        </section>

        {/* Profil RT */}
        <ProfileRT />

        {/* Statistik */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-5">
          {[
            ["Jumlah KK", "350"],
            ["Jumlah Rumah", "340"],
            ["Jumlah Warga", "1.180"],
            ["Surat Diproses", "287"],
            ["Agenda", "12"],
          ].map(([judul, angka]) => (
            <div
              key={judul}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <h2 className="text-3xl font-bold text-green-700">
                {angka}
              </h2>

              <p className="mt-2 text-gray-600">
                {judul}
              </p>
            </div>
          ))}
        </section>

        {/* Galeri */}
        <Gallery />

      </main>
    </>
  );
}