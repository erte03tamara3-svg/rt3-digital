export default function Announcement() {
  const announcements = [
    {
      date: "14 Juli 2026",
      title: "Gotong Royong Lingkungan",
      description:
        "Warga RT 003 dimohon hadir dalam kegiatan gotong royong kebersihan lingkungan."
    },
    {
      date: "20 Juli 2026",
      title: "Rapat Warga Bulanan",
      description:
        "Rapat evaluasi kegiatan RT dan penyampaian informasi terbaru."
    },
    {
      date: "Akhir Bulan",
      title: "Laporan Keuangan RT",
      description:
        "Transparansi laporan pemasukan dan pengeluaran RT."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Pengumuman Warga
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {announcements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <p className="text-sm font-semibold text-blue-600">
                {item.date}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}