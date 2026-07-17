export default function Finance() {
  const data = [
    {
      bulan: "Juli 2026",
      pemasukan: "Rp 17.500.000",
      pengeluaran: "Rp 11.250.000",
      saldo: "Rp 6.250.000",
    },
    {
      bulan: "Juni 2026",
      pemasukan: "Rp 16.900.000",
      pengeluaran: "Rp 10.100.000",
      saldo: "Rp 6.800.000",
    },
    {
      bulan: "Mei 2026",
      pemasukan: "Rp 17.200.000",
      pengeluaran: "Rp 9.750.000",
      saldo: "Rp 7.450.000",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Transparansi Keuangan
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Laporan keuangan RT yang dapat diakses seluruh warga.
        </p>

        <div className="overflow-x-auto mt-10 rounded-2xl shadow-lg">
          <table className="w-full bg-white">

            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left">Bulan</th>
                <th className="p-4 text-right">Pemasukan</th>
                <th className="p-4 text-right">Pengeluaran</th>
                <th className="p-4 text-right">Saldo</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.bulan}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">{item.bulan}</td>
                  <td className="p-4 text-right text-green-700 font-semibold">
                    {item.pemasukan}
                  </td>
                  <td className="p-4 text-right text-red-600">
                    {item.pengeluaran}
                  </td>
                  <td className="p-4 text-right font-bold">
                    {item.saldo}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}