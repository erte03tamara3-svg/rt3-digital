import { supabase } from "@/lib/supabase";

export async function deleteGaleri(
  id: string,
  gambar: string
) {
  const fileName = gambar.split("/").pop();

  if (!fileName) {
    throw new Error("Nama file tidak ditemukan.");
  }

  const { error: storageError } = await supabase.storage
    .from("galeri")
    .remove([fileName]);

  if (storageError) {
    throw storageError;
  }

  const { error: dbError } = await supabase
    .from("galeri")
    .delete()
    .eq("id", id);

  if (dbError) {
    throw dbError;
  }
}