import { supabase } from "@/lib/supabase";

export interface Galeri {
  id: string;
  judul: string;
  deskripsi: string;
  gambar: string;
  tanggal: string;
  created_at: string;
}

export async function getGaleri(): Promise<Galeri[]> {
  const { data, error } = await supabase
    .from("galeri")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as Galeri[];
}j