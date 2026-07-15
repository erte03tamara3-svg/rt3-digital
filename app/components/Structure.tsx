export default function Structure() {
  const officers = [
    {
      name: "Rahman Yasir, S.H.",
      position: "Ketua RT 003 RW 024",
    },
    {
      name: "Suprihatma",
      position: "Administrasi & Surat Menyurat",
    },
    {
      name: "Shokhib",
      position: "Keuangan RT",
    },
    {
      name: "Seksi Sosial",
      position: "Kegiatan Warga",
    },
    {
      name: "Seksi Keamanan",
      position: "Ketertiban Lingkungan",
    },
    {
      name: "Seksi Kebersihan",
      position: "Lingkungan & Gotong Royong",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Struktur Pengurus RT
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {officers.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl bg-white p-6 text-center shadow"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">
                👤
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {person.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {person.position}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}