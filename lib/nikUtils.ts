export function formatNIK(nik?: string | null): string {
  if (!nik) return "-";

  const value = nik.replace(/\D/g, "");

  if (value.length !== 16) {
    return value;
  }

  return [
    value.slice(0, 2),
    value.slice(2, 4),
    value.slice(4, 6),
    value.slice(6, 12),
    value.slice(12, 16),
  ].join(" ");
}

export function isValidNIK(nik?: string | null): boolean {
  if (!nik) return false;

  return /^\d{16}$/.test(nik.replace(/\D/g, ""));
}

export function maskNIK(nik?: string | null): string {
  if (!nik) return "-";

  const value = nik.replace(/\D/g, "");

  if (value.length !== 16) {
    return value;
  }

  return `${value.substring(0, 6)}******${value.substring(12)}`;
}

export function getKodeProvinsi(nik?: string | null): string {
  if (!nik) return "-";

  return nik.replace(/\D/g, "").substring(0, 2);
}

export function getKodeKabupaten(nik?: string | null): string {
  if (!nik) return "-";

  return nik.replace(/\D/g, "").substring(0, 4);
}

export function getKodeKecamatan(nik?: string | null): string {
  if (!nik) return "-";

  return nik.replace(/\D/g, "").substring(0, 6);
}