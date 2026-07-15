export default function Statistics() {
  const stats = [
    { title: "Jumlah KK", value: "128" },
    { title: "Jumlah Warga", value: "356" },
    { title: "Pengumuman", value: "15" },
    { title: "Surat Diproses", value: "124" },
  ];

  return (
    <section className="-mt-12 relative z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-xl"
            >
              <p className="text-4xl font-bold text-blue-700">
                {item.value}
              </p>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}