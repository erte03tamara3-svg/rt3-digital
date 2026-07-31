export async function generateHashSurat(data: {
  id: number | string;
  nomorSurat?: string | null;
  nama?: string | null;
  nik?: string | null;
}) {
  const text = [
    data.id,
    data.nomorSurat ?? "",
    data.nama ?? "",
    data.nik ?? "",
  ].join("|");

  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);

  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}