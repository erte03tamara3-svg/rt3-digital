"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";

type Props = {
  token: string;
};

export default function QRCodeSurat({ token }: Props) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    if (!token) return;

    const url = `${process.env.NEXT_PUBLIC_APP_URL}/verifikasi/${token}`;

    QRCode.toDataURL(url, {
      width: 200,
      margin: 1,
    }).then(setQr);
  }, [token]);

  if (!qr) return null;

  return (
    <div className="flex flex-col items-center">
      <Image
        src={qr}
        alt="QR Code Verifikasi"
        width={90}
        height={90}
        unoptimized
      />

      <p className="mt-2 text-center text-[9px] leading-3 text-gray-600">
        Scan QR Code untuk
        <br />
        memverifikasi
        <br />
        keaslian surat
      </p>
    </div>
  );
}