import KopSurat from "./KopSurat";
import PembukaSurat from "./PembukaSurat";
import IdentitasSurat from "./IdentitasSurat";
import IsiSurat from "./IsiSurat";
import TandaTangan from "./TandaTangan";
import Image from "next/image";

type Props = {
  surat: any;
};

export default function TemplateSurat({ surat }: Props) {
  const qrUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verifikasi/${surat.verification_token}`;

  return (
    <div
      className="relative bg-white w-[210mm] min-h-[297mm] mx-auto px-[18mm] pt-[14mm] pb-[18mm] text-black print:shadow-none"
      style={{
        fontFamily: "Times New Roman",
      }}
    >
      <KopSurat />

      <div className="mt-8 text-center">
        <h1 className="text-[18pt] font-bold uppercase underline">
          SURAT KETERANGAN
        </h1>

        <p className="mt-2 text-[14pt]">
          Nomor :
          <span className="font-semibold">
            {" "}
            {surat.nomor_surat || "-"}
          </span>
        </p>
      </div>

      <PembukaSurat />

      <IdentitasSurat surat={surat} />

      <IsiSurat surat={surat} />

      <TandaTangan surat={surat} />

      <div className="absolute bottom-[18mm] left-[18mm] flex flex-col items-center">
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
            qrUrl
          )}`}
          alt="QR Verifikasi"
          width={80}
          height={80}
          unoptimized
        />
        <p className="mt-1 text-[8pt] text-center">
          Scan untuk verifikasi
        </p>
      </div>
    </div>
  );
}