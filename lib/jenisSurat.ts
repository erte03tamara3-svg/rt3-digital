export function getNamaJenisSurat(surat: any): string {
  if (!surat) return "-";

  if (surat.jenis_surat === "Lain-lain") {
    return surat.surat_lainnya || "Lain-lain";
  }

  const mapping: Record<string, string> = {
    "Domisili": "Surat Keterangan Domisili",
    "Usaha": "Surat Keterangan Usaha",
    "Tidak Mampu": "Surat Keterangan Tidak Mampu",
    "Pengantar Nikah": "Surat Pengantar Nikah",
    "Kehilangan": "Surat Keterangan Kehilangan",
    "Belum Menikah": "Surat Keterangan Belum Menikah",
    "Kematian": "Surat Keterangan Kematian",
    "Pindah": "Surat Keterangan Pindah",
  };

  return mapping[surat.jenis_surat] ?? surat.jenis_surat;
}