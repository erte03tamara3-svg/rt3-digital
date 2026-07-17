export default function KontakPage() {
  const contacts = [
    {
      title: "Ketua RT 003 RW 024",
      phone: "081274812032",
      whatsapp: "6281274812032",
      color: "bg-blue-600",
    },
    {
      title: "Bhabinkamtibmas Kelurahan Belian",
      phone: "081268160009",
      whatsapp: "6281268160009",
      color: "bg-green-600",
    },
    {
      title: "Babinsa Kelurahan Belian",
      phone: "082170078692",
      whatsapp: "6282170078692",
      color: "bg-emerald-600",
    },
    {
      title: "Pemadam Kebakaran",
      phone: "08127001978",
      whatsapp: "628127001978",
      color: "bg-red-600",
    },
    {
      title: "Ambulan",
      phone: "081364232374",
      whatsapp: "6281364232374",
      color: "bg-orange-600",
    },
    {
      title: "Pos Bantuan Hukum",
      phone: "081274812032",
      whatsapp: "6281274812032",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Kontak Penting
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            RT 003 RW 024 Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        {/* Daftar Kontak */}
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((item) => (
            <div
              key={item.title}
              className="border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className={`${item.color} text-white px-6 py-4`}>
                <h2 className="text-lg font-bold">
                  {item.title}
                </h2>
              </div>

              <div className="p-6">

                <p className="text-sm text-gray-500">
                  Nomor Telepon / WhatsApp
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {item.phone}
                </p>

                <a
                  href={`https://wa.me/${item.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  💬 Chat WhatsApp
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Informasi */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-3">
            Informasi
          </h2>

          <p className="text-gray-700 leading-8">
            Apabila terjadi keadaan darurat, gangguan keamanan, kebakaran,
            membutuhkan bantuan hukum, maupun keperluan administrasi lingkungan,
            silakan menghubungi kontak yang tersedia di atas. Pengurus RT 003
            RW 024 berkomitmen memberikan pelayanan yang cepat, ramah, dan
            responsif kepada seluruh warga.
          </p>
        </div>

      </div>
    </section>
  );
}