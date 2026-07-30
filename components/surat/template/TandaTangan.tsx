type Props = {
  surat: any;
};

export default function TandaTangan({ surat }: Props) {
  return (
    <div className="flex justify-end mt-20">
      <div className="text-center w-64">

        <p>
          Batam, {surat.tanggal_surat || "...................."}
        </p>

        <p className="mt-2">
          Ketua RT 003 RW 024
        </p>

        <div className="h-24"></div>

        <p className="font-bold underline">
          Rahman Yasir, S.H., CPLA
        </p>

      </div>
    </div>
  );
}