export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-blue-700">
            RT3 Digital
          </h1>

          <p className="text-sm text-gray-500">
            RT 003 RW 024 • Kelurahan Belian
          </p>
        </div>

        <nav className="hidden gap-6 md:flex">
          <a href="#" className="hover:text-blue-600">Beranda</a>
          <a href="#" className="hover:text-blue-600">Profil</a>
          <a href="#" className="hover:text-blue-600">Layanan</a>
          <a href="#" className="hover:text-blue-600">Pengumuman</a>
          <a href="#" className="hover:text-blue-600">Kontak</a>
        </nav>
      </div>
    </header>
  );
}