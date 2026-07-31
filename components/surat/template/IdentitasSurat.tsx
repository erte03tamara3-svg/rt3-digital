import { formatTanggal } from "@/lib/formatTanggal";

type Props = {
  surat: any;
};

export default function IdentitasSurat({ surat }: Props) {
  const rows = [
    ["Nama Lengkap", surat.nama_lengkap],
    ["NIK", surat.identitas],
    [
      "Tempat / Tanggal Lahir",
      `${surat.tempat_lahir}, ${formatTanggal(surat.tanggal_lahir)}`,
    ],
    ["Jenis Kelamin", surat.jenis_kelamin],
    ["Agama", surat.agama],
    ["Pekerjaan", surat.pekerjaan],
    ["Status Perkawinan", surat.status_perkawinan],
    ["Alamat", surat.alamat],
  ];

  return (
    <table className="w-full mt-6 text-[14pt] leading-8 border-collapse">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={String(label)} className="align-top">
            <td className="w-[230px] py-[2px]">{label}</td>
            <td className="w-5 py-[2px]">:</td>
            <td className="py-[2px]">{value || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}