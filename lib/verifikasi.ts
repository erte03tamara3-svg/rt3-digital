import { supabase } from "@/lib/supabase";

export async function verifikasiSurat(token: string) {
  const { data, error } = await supabase
    .from("surat")
    .select("*")
    .eq("verification_token", token)
    .single();

  if (error || !data) {
    return {
      valid: false,
      data: null,
    };
  }

  const valid =
    data.status === "Disetujui" ||
    data.status === "disetujui";

  return {
    valid,
    data,
  };
}