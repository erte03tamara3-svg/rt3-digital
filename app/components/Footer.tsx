export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold">
              RT3 Digital
            </h3>
            <p className="mt-3 text-blue-100">
              Portal informasi dan layanan digital
              RT 003 RW 024 Kelurahan Belian.
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Alamat
            </h3>
            <p className="mt-3 text-blue-100">
              Perumahan Taman Raya Tahap III<br />
              Kelurahan Belian<br />
              Kecamatan Batam Kota
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Kontak
            </h3>
            <p className="mt-3 text-blue-100">
              Ketua RT 003 RW 024
            </p>
            <p className="text-blue-100">
              WhatsApp: 0812-7481-2032
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
          ©️ 2026 RT3 Digital. Semua hak dilindungi.
        </div>

      </div>
    </footer>
  );
}