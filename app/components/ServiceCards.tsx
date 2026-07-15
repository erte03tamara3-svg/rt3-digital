export default function ServiceCards() {
  const services = [
    {
      title: "Layanan Surat",
      icon: "📝",
      description: "Pengajuan surat pengantar dan administrasi warga."
    },
    {
      title: "Pengumuman",
      icon: "📢",
      description: "Informasi terbaru untuk seluruh warga RT."
    },
    {
      title: "Transparansi RT",
      icon: "💰",
      description: "Informasi kas dan laporan keuangan RT."
    },
    {
      title: "Galeri Kegiatan",
      icon: "📸",
      description: "Dokumentasi kegiatan warga dan lingkungan."
    },
    {
      title: "Agenda RT",
      icon: "📅",
      description: "Jadwal rapat, gotong royong dan kegiatan."
    },
    {
      title: "Kontak RT",
      icon: "☎️",
      description: "Hubungi pengurus RT dengan mudah."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-gray-900">
        Layanan RT3 Digital
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-4xl">
              {service.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold">
              {service.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}