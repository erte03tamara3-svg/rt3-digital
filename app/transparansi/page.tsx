import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

function rupiah(nilai: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nilai);
}

export default async function TransparansiPage() {
  const { data } = await supabaseServer
    .from("transparansi")
    .select("*")
    .order("tanggal", { ascending: false });

  const saldoAwal =
    data
      ?.filter((x) => x.jenis === "Saldo Awal")
      .reduce((a, b) => a + b.nominal, 0) || 0;

  const pemasukan =
    data
      ?.filter((x) => x.jenis === "Pemasukan")
      .reduce((a, b) => a + b.nominal, 0) || 0;

  const pengeluaran =
    data
      ?.filter((x) => x.jenis === "Pengeluaran")
      .reduce((a, b) => a + b.nominal, 0) || 0;

  const saldoAkhir = saldoAwal + pemasukan - pengeluaran;

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Transparansi Keuangan
      </h1>

      {/* Ringkasan */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-left">Ringkasan Keuangan</th>
              <th className="p-4 text-right">Nominal</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium">Saldo Awal</td>
              <td className="p-4 text-right">
                {rupiah(saldoAwal)}
              </td>
            </tr>

            <tr className="border-b bg-green-50">
              <td className="p-4 font-medium text-green-700">
                Uang Masuk
              </td>
              <td className="p-4 text-right font-semibold text-green-700">
                {rupiah(pemasukan)}
              </td>
            </tr>

            <tr className="border-b bg-red-50">
              <td className="p-4 font-medium text-red-700">
                Uang Keluar
              </td>
              <td className="p-4 text-right font-semibold text-red-700">
                {rupiah(pengeluaran)}
              </td>
            </tr>

            <tr className="bg-blue-50">
              <td className="p-4 font-bold text-blue-700">
                Saldo Akhir
              </td>
              <td className="p-4 text-right font-bold text-blue-700 text-xl">
                {rupiah(saldoAkhir)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Detail Transaksi */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Uraian</th>
              <th className="p-3 text-left">Jenis</th>
              <th className="p-3 text-right">Nominal</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{item.tanggal}</td>

                <td className="p-3">{item.uraian}</td>

                <td
                  className={`p-3 font-semibold ${
                    item.jenis === "Pemasukan"
                      ? "text-green-600"
                      : item.jenis === "Pengeluaran"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {item.jenis}
                </td>

                <td className="p-3 text-right">
                  {rupiah(item.nominal)}
                </td>
              </tr>
            ))}

            {data?.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-gray-500"
                >
                  Belum ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}