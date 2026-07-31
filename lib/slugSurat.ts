export function slugSurat(jenis?: string | null): string {
  if (!jenis) return "surat";

  return jenis
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function namaFileSurat(
  nomorSurat?: string | null,
  jenisSurat?: string | null
) {
  const nomor = (nomorSurat || "000")
    .replace(/[\/\\:*?"<>|]/g, "-");

  return `${slugSurat(jenisSurat)}-${nomor}.pdf`;
}