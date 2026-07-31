export function parseNomorSurat(nomor?: string | null) {
  if (!nomor) {
    return {
      nomorUrut: "-",
      kode: "-",
      wilayah: "-",
      bulan: "-",
      tahun: "-",
    };
  }

  const bagian = nomor.split("/");

  return {
    nomorUrut: bagian[0] ?? "-",
    kode: bagian[1] ?? "-",
    wilayah: bagian[2] ?? "-",
    bulan: bagian[3] ?? "-",
    tahun: bagian[4] ?? "-",
  };
}