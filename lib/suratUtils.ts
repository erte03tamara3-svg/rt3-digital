import { formatTanggal } from "./formatTanggal";
import { getNamaJenisSurat } from "./jenisSurat";
import { parseNomorSurat } from "./nomorSuratParser";
import { getStatusBadge } from "./statusSurat";

export function getSuratInfo(surat: any) {
  return {
    nomor: surat?.nomor_surat ?? "-",
    nomorParsed: parseNomorSurat(surat?.nomor_surat),
    jenis: getNamaJenisSurat(surat),
    status: getStatusBadge(surat?.status),
    tanggalDibuat: formatTanggal(surat?.created_at),
    tanggalDiubah: formatTanggal(surat?.updated_at),
    tanggalLahir: formatTanggal(surat?.tanggal_lahir),
    nama: surat?.nama_lengkap ?? "-",
    nik: surat?.identitas ?? "-",
    alamat: surat?.alamat ?? "-",
  };
}