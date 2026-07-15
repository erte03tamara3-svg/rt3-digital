export default function Gallery() {
  const photos = [
    {
      title: "Gotong Royong Warga",
      image: "🏘️"
    },
    {
      title: "Rapat RT",
      image: "🤝"
    },
    {
      title: "Kegiatan Sosial",
      image: "❤️"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Galeri Kegiatan
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="rounded-2xl bg-white p-8 text-center shadow"
            >
              <div className="text-6xl">
                {photo.image}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {photo.title}
              </h3>

              <p className="mt-2 text-gray-600">
                Dokumentasi kegiatan warga RT 003 RW 024.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}