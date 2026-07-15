export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          Selamat Datang di RT3 Digital
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
          RT 003 RW 024
        </h1>

        <p className="mt-5 text-2xl font-light">
          Kelurahan Belian • Kecamatan Batam Kota
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-blue-100">
          Portal pelayanan warga yang modern, transparan, cepat,
          dan mudah diakses kapan saja.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:scale-105">
            Ajukan Surat
          </button>

          <button className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-700">
            Hubungi RT
          </button>
        </div>
      </div>
    </section>
  );
}