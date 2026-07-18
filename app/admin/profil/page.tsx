export default function AdminProfilRT() {
  return (
    <main className="min-h-screen bg-slate-100">

      <header className="bg-green-700 text-white shadow">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Kelola Profil RT
          </h1>

          <a
            href="/admin"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold"
          >
            Dashboard
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Profil Ketua RT
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">
                Nama
              </label>

              <input
                defaultValue="Rahman Yasir, S.H., CPLA"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Jabatan
              </label>

              <input
                defaultValue="Ketua RT 003 RW 024"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Periode
              </label>

              <input
                defaultValue="2022 - 2027"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Pendidikan
              </label>

              <input
                defaultValue="Sarjana Hukum (S.H.)"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="font-semibold">
              Biografi
            </label>

            <textarea
              rows={12}
              defaultValue={`Rahman Yasir, S.H., CPLA merupakan Ketua RT 003 RW 024 Perumahan Taman Raya Tahap III Kelurahan Belian Kecamatan Batam Kota.

Beliau aktif membangun pelayanan masyarakat berbasis digital melalui RT3 Digital serta mengedepankan transparansi, pelayanan, dan kebersamaan warga.`}
              className="w-full border rounded-lg p-4 mt-2"
            />

          </div>

          <div className="mt-8">

            <label className="font-semibold">
              Upload Foto Ketua RT
            </label>

            <input
              type="file"
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div className="mt-10 flex gap-4">

            <button
              className="bg-green-700 text-white px-8 py-3 rounded-xl"
            >
              Simpan
            </button>

            <button
              className="bg-gray-600 text-white px-8 py-3 rounded-xl"
            >
              Reset
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}