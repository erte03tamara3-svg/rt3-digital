"use client";

import { useState } from "react";
import TransparansiForm, {
  DataTransparansi,
} from "@/components/admin/TransparansiForm";
import TransparansiList from "@/components/admin/TransparansiList";

export default function TransparansiPage() {
  const [editData, setEditData] =
    useState<DataTransparansi | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Transparansi Keuangan
      </h1>

      <TransparansiForm
        editData={editData}
        onSelesaiEdit={() => setEditData(null)}
      />

      <TransparansiList
        onEdit={(item) => setEditData(item)}
      />

    </div>
  );
}