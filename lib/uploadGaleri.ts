import { supabase } from "./supabase";

export async function uploadGaleri(file: File) {

  const ext = file.name.split(".").pop();

  const fileName = `${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from("galeri")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("galeri")
    .getPublicUrl(fileName);

  return data.publicUrl;
}