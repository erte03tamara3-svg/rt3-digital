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

  const pemasukan =
    data
      ?.filter((x) => x.jenis === "Pemasukan")
      .reduce((a, b) => a + b.nominal, 0) || 0;

  const pengeluaran =
    data
      ?.filter((x) => x.jenis === "Pengeluaran")
      .reduce((a, b) => a + b.nominal, 0) || 0;

  const saldo = pemasukan - pengeluaran;

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Transparansi Keuangan
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-green-600 text-white rounded-xl p-5">
          <p>Total Pemasukan</p>
          <h2 className="text-2xl font-bold">{rupiah(pemasukan)}</h2>
        </div>

        <div className="bg-red-600 text-white rounded-xl p-5">
          <p>Total Pengeluaran</p>
          <h2 className="text-2xl font-bold">{rupiah(pengeluaran)}</h2>
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-5">
          <p>Saldo</p>
          <h2 className="text-2xl font-bold">{rupiah(saldo)}</h2>
        </div>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Tanggal</th>
            <th className="p-3">Uraian</th>
            <th className="p-3">Jenis</th>
            <th className="p-3 text-right">Nominal</th>
          </tr>
        </thead>

        <tbody>

          {data?.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="p-3">{item.tanggal}</td>

              <td className="p-3">{item.uraian}</td>

              <td className="p-3">{item.jenis}</td>

              <td className="p-3 text-right">
                {rupiah(item.nominal)}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}