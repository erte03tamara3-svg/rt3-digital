type Props = {
  surat: any;
};

export default function TandaTangan({ surat }: Props) {
  const tanggal = surat?.updated_at || surat?.created_at || new Date();

  const tanggalFormat = new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mt-14 flex justify-end">
      <div className="w-[280px] text-center">
        <p>Batam, {tanggalFormat}</p>
        <p>Ketua RT 003 RW 024</p>

        <div className="h-24" />

        <p className="font-bold underline uppercase">
          RAHMAN YASIR, S.H., CPLA
        </p>
      </div>
    </div>
  );
}