export function formatPekerjaan(
  pekerjaan?: string | null
): string {
  if (!pekerjaan) return "-";

  return pekerjaan
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .split(" ")
    .map(
      (kata) =>
        kata.charAt(0).toUpperCase() +
        kata.slice(1)
    )
    .join(" ");
}

export function isPekerjaanValid(
  pekerjaan?: string | null
): boolean {
  return !!pekerjaan?.trim();
}

export function kelompokPekerjaan(
  pekerjaan?: string | null
): string {
  if (!pekerjaan) return "Lainnya";

  const value = pekerjaan.toLowerCase();

  if (
    value.includes("pns") ||
    value.includes("asn") ||
    value.includes("pegawai negeri")
  ) {
    return "Pemerintah";
  }

  if (
    value.includes("wirausaha") ||
    value.includes("usaha") ||
    value.includes("pedagang")
  ) {
    return "Wiraswasta";
  }

  if (
    value.includes("karyawan") ||
    value.includes("pegawai") ||
    value.includes("buruh")
  ) {
    return "Karyawan";
  }

  if (
    value.includes("pelajar") ||
    value.includes("mahasiswa")
  ) {
    return "Pelajar";
  }

  if (
    value.includes("ibu rumah tangga")
  ) {
    return "Ibu Rumah Tangga";
  }

  return "Lainnya";
}

export function pekerjaanDisplay(
  pekerjaan?: string | null
): string {
  return formatPekerjaan(pekerjaan);
}