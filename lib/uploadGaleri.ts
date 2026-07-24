import { supabase } from "./supabase";

export async function uploadGaleri(file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}.${ext}`;

  const result = await supabase.storage
    .from("galeri")
    .upload(fileName, file);

  console.log("UPLOAD RESULT:", result);

  if (result.error) {
    throw result.error;
  }

  const { data } = supabase.storage
    .from("galeri")
    .getPublicUrl(fileName);

  return data.publicUrl;
}