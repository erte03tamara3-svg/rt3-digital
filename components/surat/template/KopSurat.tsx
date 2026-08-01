import Image from "next/image";

export default function KopSurat() {
  return (
    <div className="border-b-[3px] border-black pb-2">
      <div className="flex items-center">
        {/* Logo Kiri */}
        <div className="w-[90px] flex justify-center flex-shrink-0">
          <Image
            src="/logo/logoperumahan.png"
            alt="Logo Perumahan"
            width={100}
            height={100}
            priority
            className="object-cover"
          />
        </div>

        {/* Judul */}
        <div className="flex-1 text-center leading-tight px-3">
          <h2 className="text-[15pt] font-bold uppercase">
            Pemerintah Kota Batam
          </h2>

          <h1 className="text-[20pt] font-bold uppercase mt-[1px]">
            Rukun Tetangga (RT) 003 / RW 024
          </h1>

          <h2 className="text-[15pt] font-bold uppercase mt-[1px]">
            Perumahan Taman Raya Tahap III
          </h2>

          <p className="text-[11pt] mt-1">
            Kelurahan Belian, Kecamatan Batam Kota
          </p>

          <p className="text-[10pt]">
            Kota Batam • Kepulauan Riau • Indonesia
          </p>
        </div>

        {/* Logo Kanan */}
        <div className="w-[90px] flex justify-center flex-shrink-0">
          <Image
            src="/logo/logopemkobatam.png"
            alt="Logo Pemerintah Kota Batam"
            width={90}
            height={90}
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="mt-1 border-b-[1px] border-black"></div>
    </div>
  );
}