"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menus = [
  { name: "Dashboard", href: "/admin" },
  { name: "Profil", href: "/admin/profil" },
  { name: "Pengumuman", href: "/admin/pengumuman" },
  { name: "Agenda", href: "/admin/agenda" },
  { name: "Galeri", href: "/admin/galeri" },
  { name: "Transparansi", href: "/admin/transparansi" },
  { name: "Kontak", href: "/admin/kontak" },
  { name: "Data Warga", href: "/admin/warga" },
  { name: "Surat", href: "/admin/surat" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const login = localStorage.getItem("admin-login");

    if (login !== "true") {
      window.location.href = "/login";
      return;
    }

    setLoading(false);
  }, []);

  function logout() {
    localStorage.removeItem("admin-login");
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-semibold">
        Memuat Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">
        <div className="p-6 text-2xl font-bold border-b border-blue-800">
          RT3 DIGITAL
        </div>

        <nav className="p-4 space-y-2">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`block rounded-lg px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-white text-blue-900 font-semibold"
                  : "hover:bg-blue-800"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Konten */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Admin</h1>
            <p className="text-gray-500 text-sm">
              RT 003 RW 024 - Taman Raya Tahap III
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-semibold">Rahman Yasir</div>
              <div className="text-sm text-gray-500">Administrator</div>
            </div>

            <button
              type="button"
              onClick={logout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}