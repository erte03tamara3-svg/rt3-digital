type Props = {
  surat: any;
};

export default function IdentitasSurat({ surat }: Props) {
  const rows = [
    ["Nama Lengkap", surat.nama_lengkap],
    ["NIK", surat.identitas],
    ["Tempat / Tanggal Lahir", `${surat.tempat_lahir}, ${surat.tanggal_lahir}`],
    ["Jenis Kelamin", surat.jenis_kelamin],
    ["Agama", surat.agama],
    ["Pekerjaan", surat.pekerjaan],
    ["Status Perkawinan", surat.status_perkawinan],
    ["Alamat", surat.alamat],
  ];

  return (
    <table className="w-full mt-6 border-collapse">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="align-top">
            <td className="w-[260px] py-1">{label}</td>
            <td className="w-5 py-1">:</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}