export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg text-green-700">
            RT 003 RW 024
          </h1>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/">Beranda</a>
          <a href="/profil">Profil</a>
          <a href="/pengumuman">Pengumuman</a>
          <a href="/galeri">Galeri</a>
          <a href="/agenda">Agenda</a>
          <a href="/transparansi">Transparansi</a>
          <a href="/kontak">Kontak</a>
        </div>
      </div>
    </nav>
  );
}