import Image from "next/image";

export default function KopSurat() {
  return (
    <div>
      <div className="flex items-center border-b-[3px] border-black pb-4">
        {/* Logo Perumahan (Kiri) */}
        <div className="relative w-[90px] h-[90px] flex-shrink-0">
          <Image
            src="/logo/logoperumahan.png"
            alt="Logo Perumahan Taman Raya Tahap III"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Judul */}
        <div className="flex-1 text-center px-6 leading-tight">
          <h2 className="text-[16pt] font-bold uppercase">
            Pemerintah Kota Batam
          </h2>

          <h1 className="text-[22pt] font-bold uppercase mt-1">
            Rukun Tetangga (RT) 003 / RW 024
          </h1>

          <h2 className="text-[16pt] font-semibold uppercase mt-1">
            Perumahan Taman Raya Tahap III
          </h2>

          <p className="text-[12pt] mt-2">
            Kelurahan Belian, Kecamatan Batam Kota
          </p>

          <p className="text-[11pt]">
            Kota Batam • Kepulauan Riau • Indonesia
          </p>
        </div>

        {/* Logo Pemerintah Kota Batam (Kanan) */}
        <div className="relative w-[90px] h-[90px] flex-shrink-0">
          <Image
            src="/logo/logopemkobatam.png"
            alt="Logo Pemerintah Kota Batam"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}