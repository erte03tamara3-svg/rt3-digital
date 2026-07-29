import { supabase } from "@/lib/supabase";

const ROMAWI = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

export async function generateNomorSuratResmi() {
  const sekarang = new Date();

  const tahun = sekarang.getFullYear();
  const bulan = ROMAWI[sekarang.getMonth() + 1];

  // Ambil counter tahun berjalan
  const { data: counter, error } = await supabase
    .from("nomor_surat_counter")
    .select("*")
    .eq("tahun", tahun)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const nomorBaru = counter.nomor_terakhir + 1;

  // Update counter
  const { error: updateError } = await supabase
    .from("nomor_surat_counter")
    .update({
      nomor_terakhir: nomorBaru,
    })
    .eq("tahun", tahun);

  if (updateError) {
    throw new Error(updateError.message);
  }

  const nomorSurat =
    nomorBaru.toString().padStart(3, "0") +
    "/TR3/RT-003/RW-024/" +
    bulan +
    "/" +
    tahun;

  return nomorSurat;
}