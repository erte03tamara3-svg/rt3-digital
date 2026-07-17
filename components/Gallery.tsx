export default function Gallery() {
  const photos = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Galeri Kegiatan
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Dokumentasi kegiatan RT 003 RW 024
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              <img
                src={photo}
                alt={`Galeri ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}