"use client";

import Link from "next/link";

export default function AdminDashboard() {
  const menu = [
    {
      title: "Profil RT",
      href: "/admin/profil",
      color: "bg-blue-600",
      icon: "👤",
    },
    {
      title: "Pengumuman",
      href: "/admin/pengumuman",
      color: "bg-red-600",
      icon: "📢",
    },
    {
      title: "Galeri",
      href: "/admin/galeri",
      color: "bg-green-600",
      icon: "🖼️",
    },
    {
      title: "Agenda",
      href: "/admin/agenda",
      color: "bg-purple-600",
      icon: "📅",
    },
    {
      title: "Transparansi",
      href: "/admin/transparansi",
      color: "bg-orange-600",
      icon: "💰",
    },
    {
      title: "Kontak",
      href: "/admin/kontak",
      color: "bg-cyan-600",
      icon: "☎️",
    },
    {
      title: "Data Warga",
      href: "/admin/warga",
      color: "bg-emerald-700",
      icon: "🏠",
    },
    {
      title: "Surat",
      href: "/admin/surat",
      color: "bg-slate-700",
      icon: "📄",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-green-700 text-white shadow">
        <div className="max-w-7xl mx-auto h-16 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Dashboard Admin RT3 Digital
          </h1>

          <Link
            href="/"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold"
          >
            Website
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="text-gray-500">KK</h2>
            <p className="text-4xl font-bold text-green-700 mt-2">350</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="text-gray-500">Rumah</h2>
            <p className="text-4xl font-bold text-green-700 mt-2">340</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="text-gray-500">Warga</h2>
            <p className="text-4xl font-bold text-green-700 mt-2">1180</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h2 className="text-gray-500">Surat</h2>
            <p className="text-4xl font-bold text-green-700 mt-2">287</p>
          </div>

        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          Menu Admin
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${item.color} text-white rounded-2xl p-8 text-center hover:scale-105 transition`}
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <div className="mt-4 font-bold text-lg">
                {item.title}
              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}