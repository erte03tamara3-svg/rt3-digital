type Props = {
  surat: any;
};

export default function IsiSurat({ surat }: Props) {
  const keperluan =
    surat.jenis_surat === "Lain-lain"
      ? surat.surat_lainnya
      : surat.jenis_surat;

  return (
    <div className="mt-8 text-[14pt] leading-8 text-justify">
      <p>
        Berdasarkan data administrasi kependudukan yang ada serta keterangan
        yang diberikan oleh yang bersangkutan, dengan ini diterangkan bahwa
        nama tersebut di atas benar merupakan warga RT 003 RW 024 Perumahan
        Taman Raya Tahap III, Kelurahan Belian, Kecamatan Batam Kota,
        Kota Batam.
      </p>

      <p className="mt-6">
        Surat keterangan ini diterbitkan untuk keperluan:
      </p>

      <div className="my-6 text-center">
        <span className="inline-block min-w-[350px] border-b-2 border-black px-6 py-1 text-center font-bold uppercase">
          {keperluan || "-"}
        </span>
      </div>

      <p>
        Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat
        dipergunakan sebagaimana mestinya. Apabila di kemudian hari terdapat
        kekeliruan dalam surat ini, maka akan dilakukan perbaikan sesuai
        dengan ketentuan peraturan perundang-undangan yang berlaku.
      </p>
    </div>
  );
}