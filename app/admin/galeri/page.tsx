import GalleryUploader from "@/components/admin/GalleryUploader";
import GalleryList from "@/components/admin/GalleryList";

export default function GaleriPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <GalleryUploader />
      <GalleryList />
    </div>
  );
}