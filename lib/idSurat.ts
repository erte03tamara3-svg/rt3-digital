const PREFIX = "RT3";

function randomString(length = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

export function generateIdSurat() {
  const now = new Date();

  const tahun = now.getFullYear();

  const bulan = String(now.getMonth() + 1).padStart(2, "0");

  const tanggal = String(now.getDate()).padStart(2, "0");

  return `${PREFIX}-${tahun}${bulan}${tanggal}-${randomString(8)}`;
}

export function generateKodeVerifikasi() {
  return randomString(12);
}