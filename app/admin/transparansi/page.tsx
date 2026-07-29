import TransparansiForm from "@/components/admin/TransparansiForm";
import TransparansiList from "@/components/admin/TransparansiList";

export default function TransparansiPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Transparansi Keuangan
      </h1>

      <TransparansiForm />

      <TransparansiList />

    </div>
  );
}