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
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        <h1 className="font-bold text-lg text-green-700">
          RT 003 RW 024
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-green-700"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.link}
            onClick={() => setOpen(false)}
            className="block px-6 py-4 border-b text-gray-700 hover:bg-green-50"
          >
            {menu.name}
          </a>
        ))}
      </div>
    </nav>
  );
}