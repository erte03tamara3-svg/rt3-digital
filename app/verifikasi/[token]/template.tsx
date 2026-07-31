type Props = {
  nomorSurat: string;
  nama: string;
  jenisSurat: string;
  tanggal: string;
  status: string;
};

export default function TemplateVerifikasi({
  nomorSurat,
  nama,
  jenisSurat,
  tanggal,
  status,
}: Props) {
  const valid = status?.toLowerCase() === "disetujui";

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

      <div
        className={`p-6 text-center text-white ${
          valid ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <h1 className="text-3xl font-bold">
          {valid
            ? "SURAT TERVERIFIKASI"
            : "SURAT TIDAK VALID"}
        </h1>

        <p className="mt-2">
          RT 003 RW 024 • RT3 Digital
        </p>
      </div>

      <div className="p-8">

        <table className="w-full">

          <tbody>

            <tr className="border-b">
              <td className="py-3 font-semibold w-56">
                Nomor Surat
              </td>
              <td>{nomorSurat}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Nama Pemohon
              </td>
              <td>{nama}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Jenis Surat
              </td>
              <td>{jenisSurat}</td>
            </tr>

            <tr className="border-b">
              <td className="py-3 font-semibold">
                Tanggal Terbit
              </td>
              <td>{tanggal}</td>
            </tr>

            <tr>
              <td className="py-3 font-semibold">
                Status
              </td>
              <td
                className={
                  valid
                    ? "font-bold text-green-700"
                    : "font-bold text-red-700"
                }
              >
                {status}
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}