export default function AdminDashboard() {
  const cards = [
    {
      title: "Total Warga",
      value: "0",
      color: "bg-blue-600",
    },
    {
      title: "Pengumuman",
      value: "0",
      color: "bg-green-600",
    },
    {
      title: "Agenda",
      value: "0",
      color: "bg-yellow-500",
    },
    {
      title: "Galeri",
      value: "0",
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Selamat Datang di Dashboard Admin
        </h2>
        <p className="text-gray-600 mt-2">
          Kelola seluruh konten website RT 003 RW 024 dari halaman ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.color} text-white rounded-xl shadow-lg p-6`}
          >
            <div className="text-lg">{card.title}</div>
            <div className="text-4xl font-bold mt-3">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">
            Pengajuan Surat Terbaru
          </h3>

          <div className="border rounded-lg p-4 text-gray-500 text-center">
            Belum ada pengajuan surat.
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">
            Aktivitas Terbaru
          </h3>

          <div className="border rounded-lg p-4 text-gray-500 text-center">
            Belum ada aktivitas.
          </div>
        </div>
      </div>
    </div>
  );
}