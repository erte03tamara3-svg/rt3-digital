type Props = {
  surat: any;
};

export default function IsiSurat({ surat }: Props) {
  const keperluan =
    surat.jenis_surat === "Lain-lain"
      ? surat.surat_lainnya
      : surat.jenis_surat;

  return (
    <div
      className="mt-5 text-[13pt] leading-[1.45] text-justify"
      style={{
        breakInside: "avoid",
        pageBreakInside: "avoid",
      }}
    >
      <p className="mb-4">
        Berdasarkan data administrasi kependudukan yang ada serta keterangan
        yang diberikan oleh yang bersangkutan, dengan ini diterangkan bahwa
        nama tersebut di atas benar merupakan warga RT 003 RW 024 Perumahan
        Taman Raya Tahap III, Kelurahan Belian, Kecamatan Batam Kota,
        Kota Batam.
      </p>

      <p className="mb-3">
        Surat keterangan ini diterbitkan untuk keperluan:
      </p>

      <div
        className="mb-4 text-center"
        style={{
          breakInside: "avoid",
          pageBreakInside: "avoid",
        }}
      >
        <span className="inline-block min-w-[320px] border-b-2 border-black px-4 py-[2px] font-bold uppercase">
          {keperluan || "-"}
        </span>
      </div>

      <p className="m-0">
        Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat
        dipergunakan sebagaimana mestinya. Apabila di kemudian hari terdapat
        kekeliruan dalam surat ini, maka akan dilakukan perbaikan sesuai
        dengan ketentuan peraturan perundang-undangan yang berlaku.
      </p>
    </div>
  );
}