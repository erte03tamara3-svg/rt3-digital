export default function TransparansiPage() {
  const data = [
    {
      title: "Saldo Awal April 2026",
      amount: "Rp 8.543.000",
      color: "bg-blue-600",
    },
    {
      title: "Uang Masuk Mei 2026",
      amount: "Rp 3.350.000",
      color: "bg-green-600",
    },
    {
      title: "Uang Keluar Mei 2026",
      amount: "Rp 3.493.000",
      color: "bg-red-600",
    },
    {
      title: "Saldo Akhir Mei 2026",
      amount: "Rp 8.400.000",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Transparansi Keuangan RT 003 RW 024
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        {/* Card Ringkasan */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {data.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl shadow-lg overflow-hidden border"
            >
              <div className={`${item.color} text-white p-4`}>
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>

              <div className="p-6 bg-white">
                <p className="text-3xl font-bold text-gray-900">
                  {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-4 text-left">Keterangan</th>
                <th className="p-4 text-right">Jumlah</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4">Saldo Awal April 2026</td>
                <td className="p-4 text-right font-semibold">
                  Rp 8.543.000
                </td>
              </tr>

              <tr className="border-b bg-green-50">
                <td className="p-4">Uang Masuk Mei 2026</td>
                <td className="p-4 text-right font-semibold text-green-700">
                  Rp 3.350.000
                </td>
              </tr>

              <tr className="border-b bg-red-50">
                <td className="p-4">Uang Keluar Mei 2026</td>
                <td className="p-4 text-right font-semibold text-red-700">
                  Rp 3.493.000
                </td>
              </tr>

              <tr className="bg-blue-50">
                <td className="p-4 font-bold">
                  Saldo Akhir Mei 2026
                </td>
                <td className="p-4 text-right font-bold text-blue-700 text-xl">
                  Rp 8.400.000
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Keterangan */}
        <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">
          <h2 className="font-bold text-yellow-800 mb-2">
            Keterangan
          </h2>

          <p className="text-gray-700 leading-7">
            Laporan keuangan ini disajikan sebagai bentuk komitmen
            pengurus RT 003 RW 024 terhadap prinsip transparansi dan
            akuntabilitas dalam pengelolaan keuangan lingkungan. Informasi
            akan diperbarui secara berkala sesuai dengan kondisi dan
            perkembangan keuangan RT.
          </p>
        </div>

      </div>
    </section>
  );
}