export default function Announcement() {
  const announcements = [
    {
      title: "Gotong Royong Bulanan",
      date: "19 Juli 2026",
      description:
        "Seluruh warga diharapkan hadir pukul 07.00 WIB untuk membersihkan lingkungan RT."
    },
    {
      title: "Rapat Warga",
      date: "25 Juli 2026",
      description:
        "Rapat membahas program kerja RT dan evaluasi kegiatan semester pertama."
    },
    {
      title: "Pembayaran Iuran",
      date: "31 Juli 2026",
      description:
        "Mohon seluruh warga melakukan pembayaran iuran RT sebelum akhir bulan."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Pengumuman
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Informasi terbaru RT 003 RW 024
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {announcements.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <p className="text-sm text-green-700 font-semibold">
                {item.date}
              </p>

              <h3 className="text-xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

              <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                Selengkapnya
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}