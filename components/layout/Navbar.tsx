"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Beranda", link: "/" },
    { name: "Profil RT", link: "/profil" },
    { name: "Pengumuman", link: "/pengumuman" },
    { name: "Galeri", link: "/galeri" },
    { name: "Agenda", link: "/agenda" },
    { name: "Transparansi", link: "/transparansi" },
    { name: "Kontak", link: "/kontak" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="font-bold text-xl text-green-700">
          RT 003 RW 024
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.link}
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* Tombol HP */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-700"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-5">

          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.link}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-700 border-b hover:text-green-700"
            >
              {menu.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}