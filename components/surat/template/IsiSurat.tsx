type Props = {
  surat: any;
};

export default function IsiSurat({ surat }: Props) {
  return (
    <>
      <div className="mt-8 text-justify">
        Dengan ini menerangkan bahwa nama tersebut di atas benar merupakan
        warga RT 003 RW 024 Perumahan Taman Raya Tahap III, Kelurahan
        Belian, Kecamatan Batam Kota.
      </div>

      <div className="mt-5 text-justify">
        Surat keterangan ini dipergunakan untuk:
      </div>

      <div className="mt-3 border rounded-md p-4 font-semibold">
        {surat.keperluan}
      </div>

      <div className="mt-5 text-justify">
        Demikian surat keterangan ini dibuat agar dapat dipergunakan
        sebagaimana mestinya.
      </div>
    </>
  );
}