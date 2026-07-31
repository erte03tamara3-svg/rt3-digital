export function formatAlamat(alamat?: string | null): string {
  if (!alamat) return "-";

  return alamat
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ");
}

export function alamatLengkap(alamat?: string | null): string {
  const base = formatAlamat(alamat);

  if (base === "-") return base;

  return `${base}, RT 003 RW 024, Perumahan Taman Raya Tahap III, Kelurahan Belian, Kecamatan Batam Kota, Kota Batam, Kepulauan Riau`;
}

export function alamatSingkat(alamat?: string | null): string {
  return formatAlamat(alamat);
}

export function containsAlamat(
  alamat: string | null | undefined,
  keyword: string
): boolean {
  if (!alamat) return false;

  return alamat.toLowerCase().includes(keyword.toLowerCase());
}

export function normalizeAlamat(
  alamat?: string | null
): string {
  if (!alamat) return "";

  return alamat
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}