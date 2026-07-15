export default function Finance() {
  const data = [
    {
      title: "Saldo Kas RT",
      value: "Rp 8.400.000",
      icon: "💰",
    },
    {
      title: "Pemasukan Bulan Ini",
      value: "Rp 11.893.000",
      icon: "📈",
    },
    {
      title: "Pengeluaran Bulan Ini",
      value: "Rp 3.439.000",
      icon: "📉",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Transparansi Keuangan RT
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-blue-50 p-8 shadow"
            >
              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-blue-700">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}