type Props = {
  nomor: string;
  judul?: string;
};

export default function JudulSurat({
  nomor,
  judul = "SURAT KETERANGAN",
}: Props) {
  return (
    <div className="mt-5 text-center">

      <h2 className="text-[22px] font-bold uppercase underline tracking-wide">
        {judul}
      </h2>

      <p className="mt-1 text-[15px]">
        Nomor : {nomor}
      </p>

    </div>
  );
}