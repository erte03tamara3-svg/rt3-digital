import KopSurat from "./KopSurat";
import PembukaSurat from "./PembukaSurat";
import IdentitasSurat from "./IdentitasSurat";
import IsiSurat from "./IsiSurat";
import TandaTangan from "./TandaTangan";

type Props = {
  surat: any;
};

export default function TemplateSurat({ surat }: Props) {
  return (
    <div className="bg-white w-[210mm] min-h-[297mm] mx-auto px-[18mm] pt-[14mm] pb-[18mm] text-black text-[14px] leading-8 shadow-lg print:shadow-none">

      <KopSurat />

      <div className="mt-5 text-center">
        <h2 className="text-[22px] font-bold uppercase underline">
          SURAT KETERANGAN
        </h2>

        <p className="mt-1 text-[16px]">
          Nomor : {surat.nomor_surat || surat.nomor_pengajuan}
        </p>
      </div>

      <PembukaSurat />

      <IdentitasSurat surat={surat} />

      <IsiSurat surat={surat} />

      <TandaTangan surat={surat} />

    </div>
  );
}