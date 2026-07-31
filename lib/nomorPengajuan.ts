export function generateNomorPengajuan() {
  const now = new Date();

  const tahun = now.getFullYear();

  const bulan = String(now.getMonth() + 1).padStart(2, "0");
  const tanggal = String(now.getDate()).padStart(2, "0");

  const jam = String(now.getHours()).padStart(2, "0");
  const menit = String(now.getMinutes()).padStart(2, "0");
  const detik = String(now.getSeconds()).padStart(2, "0");

  const random = Math.floor(Math.random() * 9000 + 1000);

  return `PGJ-${tahun}${bulan}${tanggal}-${jam}${menit}${detik}-${random}`;
}

export function isNomorPengajuanValid(
  nomor?: string | null
): boolean {
  if (!nomor) return false;

  return /^PGJ-\d{8}-\d{6}-\d{4}$/.test(nomor);
}