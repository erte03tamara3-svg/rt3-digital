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
    <div
      className="mx-auto bg-white text-black print:shadow-none"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "12mm 18mm 12mm 18mm",
        fontFamily: '"Times New Roman", serif',
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      <KopSurat />

      <div className="mt-5 text-center">
        <h1
          style={{
            fontSize: "18pt",
            fontWeight: 700,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            letterSpacing: "0.5px",
          }}
        >
          SURAT KETERANGAN
        </h1>

        <p
          style={{
            fontSize: "13pt",
            marginTop: "5mm",
          }}
        >
          Nomor :
          <span style={{ fontWeight: 700 }}>
            {" "}
            {surat.nomor_surat || "-"}
          </span>
        </p>
      </div>

      <div style={{ marginTop: "5mm" }}>
        <PembukaSurat />
      </div>

      <div style={{ marginTop: "4mm" }}>
        <IdentitasSurat surat={surat} />
      </div>

      <div style={{ marginTop: "4mm" }}>
        <IsiSurat surat={surat} />
      </div>

      <div
        style={{
          marginTop: "10mm",
          pageBreakInside: "avoid",
          breakInside: "avoid",
        }}
      >
        <TandaTangan surat={surat} />
      </div>
    </div>
  );
}