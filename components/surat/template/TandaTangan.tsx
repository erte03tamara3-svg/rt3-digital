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
    <div
      className="mt-4"
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      <div className="flex items-start justify-between">
        {/* Ketua RW */}
        <div className="w-[250px] text-center">
          <p className="text-[13pt] leading-6">
            Mengetahui,
          </p>

          <p className="text-[13pt] leading-6">
            Ketua RW 024
          </p>

          <div className="h-16" />

          <p className="text-[13pt] font-bold underline uppercase">
            DARMAN
          </p>
        </div>

        {/* Ketua RT */}
        <div className="w-[250px] text-center">
          <p className="text-[13pt] leading-6">
            Batam, {tanggalFormat}
          </p>

          <p className="text-[13pt] leading-6">
            Ketua RT 003 RW 024
          </p>

          <div className="h-16" />

          <p className="text-[13pt] font-bold underline uppercase">
            RAHMAN YASIR, S.H., CPLA
          </p>
        </div>
      </div>
    </div>
  );
}