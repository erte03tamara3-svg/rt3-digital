export default function PengumumanPage() {
  const pengumuman = [
    {
      tanggal: "17 Juli 2026",
      judul: "Website RT3 Digital Resmi Diluncurkan",
      kategori: "Informasi",
      isi: "RT3 Digital kini resmi digunakan sebagai media informasi, pelayanan, transparansi, dan komunikasi antara pengurus RT dengan seluruh warga RT 003 RW 024.",
    },
    {
      tanggal: "15 Juli 2026",
      judul: "Imbauan Menjaga Kebersihan Lingkungan",
      kategori: "Imbauan",
      isi: "Seluruh warga diimbau menjaga kebersihan lingkungan, tidak membuang sampah sembarangan, serta menjaga saluran drainase agar tetap bersih dan lancar.",
    },
    {
      tanggal: "10 Juli 2026",
      judul: "Jadwal Gotong Royong Bulanan",
      kategori: "Kegiatan",
      isi: "Kegiatan gotong royong dilaksanakan pada hari Minggu pukul 07.00 WIB. Diharapkan seluruh warga dapat berpartisipasi demi terciptanya lingkungan yang bersih, sehat, dan nyaman.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Pengumuman RT 003 RW 024
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        {/* Daftar Pengumuman */}
        <div className="space-y-6">
          {pengumuman.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="bg-green-700 text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-xl font-bold">
                  {item.judul}
                </h2>

                <span className="text-sm bg-white text-green-700 px-3 py-1 rounded-full mt-2 md:mt-0 font-semibold">
                  {item.kategori}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-4">
                  📅 {item.tanggal}
                </p>

                <p className="text-gray-700 leading-8">
                  {item.isi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informasi */}
        <div className="mt-10 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            Informasi
          </h2>

          <p className="text-gray-700 leading-8">
            Seluruh pengumuman resmi dari Pengurus RT 003 RW 024 akan dipublikasikan
            melalui halaman ini. Warga diharapkan secara berkala mengunjungi
            website RT3 Digital agar memperoleh informasi terbaru mengenai
            kegiatan, pelayanan, maupun pemberitahuan penting lainnya.
          </p>
        </div>

      </div>
    </section>
  );
}