import Image from "next/image";

export default function ComponentProfileRT() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Foto Ketua RT */}
        <div className="flex justify-center mb-8">
          <div className="p-2 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 shadow-2xl">
            <Image
              src="/images/
              
              ketuaRT.png"
              alt="Rahman Yasir, S.H., CPLA"
              width={220}
              height={220}
              priority
              className="rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Nama */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Rahman Yasir, S.H., CPLA
          </h1>

          <p className="mt-3 text-xl font-semibold text-blue-700">
            Ketua RT 003 RW 024
          </p>

          <p className="text-gray-600 mt-2">
            Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        {/* Biodata */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Nama</h3>
            <p>Rahman Yasir, S.H., CPLA</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Jabatan</h3>
            <p>Ketua RT 003 RW 024</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Periode</h3>
            <p>2022 – 2027</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Pendidikan</h3>
            <p>Sarjana Hukum (S.H.)</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Sertifikasi</h3>
            <p>Certified Paralegal and Legal Aid (CPLA)</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="font-semibold text-blue-700">Profesi</h3>
            <p>Sales Consultant PT Agung Automall Batam</p>
          </div>

        </div>

        <hr className="my-8" />

        {/* Biografi */}
        <div className="space-y-6 text-gray-700 leading-8 text-justify">

          <h2 className="text-3xl font-bold text-gray-900">
            Biografi Ketua RT
          </h2>

          <p>
            <strong>Rahman Yasir, S.H., CPLA</strong> merupakan Ketua RT
            003 RW 024 Perumahan Taman Raya Tahap III, Kelurahan Belian,
            Kecamatan Batam Kota, Kota Batam. Sejak dipercaya oleh warga
            pada tahun 2022, beliau berkomitmen membangun lingkungan yang
            aman, nyaman, tertib, transparan, dan berorientasi pada
            pelayanan masyarakat.
          </p>

          <p>
            Dalam menjalankan amanah sebagai Ketua RT, Rahman Yasir
            mengedepankan prinsip kepemimpinan yang terbuka, partisipatif,
            dan responsif terhadap kebutuhan warga. Baginya, keberhasilan
            sebuah lingkungan tidak hanya diukur dari pembangunan fisik,
            tetapi juga dari kuatnya kebersamaan, kepedulian sosial,
            dan partisipasi masyarakat.
          </p>

          <p>
            Di bidang pendidikan, beliau menyelesaikan pendidikan
            <strong> Sarjana Hukum (S.H.)</strong> dan memiliki
            sertifikasi
            <strong> Certified Paralegal and Legal Aid (CPLA)</strong>.
            Bekal tersebut memperkuat kemampuannya dalam memberikan
            pelayanan kepada masyarakat serta membantu penyelesaian
            berbagai persoalan sosial melalui pendekatan musyawarah.
          </p>

          <p>
            Selain mengemban amanah sebagai Ketua RT, Rahman Yasir
            dipercaya sebagai
            <strong> Humas Lembaga Pemberdayaan Masyarakat (LPM)
            Kelurahan Belian</strong> serta
            <strong> Paralegal Pos Bantuan Hukum (Posbankum)
            Kelurahan Belian</strong>.
          </p>

          <p>
            Dalam dunia profesional, beliau memiliki pengalaman lebih
            dari satu dekade sebagai
            <strong> Sales Consultant Toyota di PT Agung Automall
            Batam</strong>. Pengalaman tersebut membentuk karakter
            pelayanan yang profesional, komunikatif, dan berorientasi
            pada kepuasan masyarakat.
          </p>

          <p>
            Rahman Yasir juga aktif sebagai kreator konten digital yang
            menyampaikan informasi mengenai kegiatan kemasyarakatan,
            pelayanan publik, edukasi hukum, serta berbagai isu sosial
            yang bermanfaat bagi masyarakat.
          </p>

          <p>
            Selama masa kepemimpinannya, berbagai program telah
            dilaksanakan bersama warga, mulai dari peningkatan
            keamanan lingkungan, kegiatan gotong royong, pelayanan
            administrasi yang lebih baik, hingga pengembangan website
            <strong> RT3 Digital</strong> sebagai media informasi dan
            pelayanan masyarakat berbasis teknologi.
          </p>

          <p>
            Rahman Yasir meyakini bahwa kepemimpinan merupakan amanah
            yang harus dijalankan dengan integritas, kejujuran,
            tanggung jawab, dan semangat melayani. Dengan dukungan
            seluruh warga, beliau berharap RT 003 RW 024 terus
            berkembang menjadi lingkungan yang maju, harmonis,
            inovatif, dan menjadi kebanggaan masyarakat.
          </p>

        </div>

        {/* Motto */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-2xl p-8 shadow-lg">
          <p className="text-2xl italic font-semibold text-center">
            “Melayani dengan Integritas,
            <br />
            Membangun dengan Kebersamaan.”
          </p>
        </div>

      </div>
    </section>
  );
}