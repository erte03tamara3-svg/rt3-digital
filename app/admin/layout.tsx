"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPreview = pathname.includes("/preview");

  if (isPreview) {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}