import { supabase } from "@/lib/supabase";

function toRoman(month: number) {
  const roman = [
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

  return roman[month - 1];
}

export async function generateNomorSurat() {
  const now = new Date();

  const bulan = now.getMonth() + 1;
  const tahun = now.getFullYear();

  const awalBulan = new Date(tahun, bulan - 1, 1)
    .toISOString()
    .split("T")[0];

  const akhirBulan = new Date(tahun, bulan, 0)
    .toISOString()
    .split("T")[0];

  const { count } = await supabase
    .from("surat")
    .select("*", {
      count: "exact",
      head: true,
    })
    .gte("created_at", awalBulan)
    .lte("created_at", `${akhirBulan}T23:59:59`);

  const nomorUrut = String((count ?? 0) + 1).padStart(3, "0");

  return `${nomorUrut}/SK/RT003-RW024/${toRoman(bulan)}/${tahun}`;
}

export const generateNomorSuratResmi = generateNomorSurat;