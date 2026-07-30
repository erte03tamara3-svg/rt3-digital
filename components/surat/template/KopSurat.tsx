import Image from "next/image";

export default function KopSurat() {
  return (
    <>
      <div className="grid grid-cols-[110px_1fr_110px] items-center gap-2">

        {/* Logo Kiri */}
        <div className="flex justify-center">
          <div className="relative w-[95px] h-[95px]">
            <Image
              src="/logo/logoperumahan.png"
              alt="Logo Perumahan"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Judul */}
        <div className="text-center">

          <h1 className="text-[18px] font-bold uppercase tracking-wide leading-tight">
            RUKUN TETANGGA 003 RUKUN WARGA 024
          </h1>

          <h2 className="text-[17px] font-bold uppercase leading-tight mt-1">
            KELURAHAN BELIAN
          </h2>

          <h2 className="text-[17px] font-bold uppercase leading-tight">
            KECAMATAN BATAM KOTA
          </h2>

          <p className="text-[12px] mt-2">
            Alamat Sekretariat : Jl. Tengku Sulung, Perumahan Taman Raya Tahap III Blok HE No.08
          </p>

          <p className="text-[12px]">
            No. HP/WA : 081274812032 &nbsp;&nbsp;|&nbsp;&nbsp;
            Email : erte003024@gmail.com
          </p>

        </div>

        {/* Logo Kanan */}
        <div className="flex justify-center">
          <div className="relative w-[95px] h-[95px]">
            <Image
              src="/logo/logopemkobatam.png"
              alt="Logo Kota Batam"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>

      <div className="mt-2">
        <div className="h-[3px] bg-black"></div>
        <div className="h-[1px] bg-black mt-[2px]"></div>
      </div>
    </>
  );
}