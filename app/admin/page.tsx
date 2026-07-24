import Link from "next/link";

export default function AdminDashboard() {
  const menus = [
    { title: "Galeri", href: "/admin/galeri", icon: "🖼️" },
    { title: "Pengumuman", href: "/admin/pengumuman", icon: "📢" },
    { title: "Agenda", href: "/admin/agenda", icon: "📅" },
    { title: "Data Warga", href: "/admin/warga", icon: "👥" },
    { title: "Surat", href: "/admin/surat", icon: "📄" },
    { title: "Transparansi", href: "/admin/transparansi", icon: "💰" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard Admin RT3 Digital
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="border rounded-xl p-8 shadow hover:shadow-lg transition bg-white"
          >
            <div className="text-5xl">{menu.icon}</div>
            <h2 className="mt-4 text-2xl font-bold">{menu.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}