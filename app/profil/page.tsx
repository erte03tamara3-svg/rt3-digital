export default function ProfilePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Tentang RT 003 RW 024
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Perumahan Taman Raya Tahap III
          </p>

          <p className="text-gray-500">
            Kelurahan Belian • Kecamatan Batam Kota • Kota Batam
          </p>
        </div>

        {/* Profil */}
        <div className="space-y-6 text-gray-700 leading-8 text-justify">

          <h2 className="text-3xl font-bold text-gray-900">
            Selamat Datang di RT 003 RW 024
          </h2>

          <p>
            RT 003 RW 024 merupakan lingkungan masyarakat yang berada di
            <strong> Perumahan Taman Raya Tahap III, Kelurahan Belian,
            Kecamatan Batam Kota, Kota Batam.</strong>
          </p>

          <p>
            Sebagai bagian dari pemerintahan di tingkat lingkungan,
            RT 003 RW 024 memiliki peran dalam membantu penyelenggaraan
            pelayanan kepada masyarakat, menjaga keamanan dan ketertiban
            lingkungan, memperkuat kebersamaan antarwarga, serta menjadi
            penghubung antara masyarakat dengan pemerintah.
          </p>

          <p>
            Pengurus RT berkomitmen memberikan pelayanan yang cepat,
            ramah, transparan, akuntabel, dan bertanggung jawab,
            sekaligus mendorong terciptanya lingkungan yang aman,
            nyaman, bersih, harmonis, serta menjunjung tinggi nilai
            kebersamaan dan gotong royong.
          </p>

        </div>

        <hr className="my-10" />

        {/* Visi */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Visi
          </h2>

          <p className="text-lg text-gray-700 italic leading-8">
            "Mewujudkan RT 003 RW 024 sebagai lingkungan yang tertib,
            aman, nyaman, transparan, maju, dan berdaya melalui pelayanan
            masyarakat yang profesional serta semangat gotong royong."
          </p>
        </div>

        {/* Misi */}
        <div className="mb-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Misi
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-gray-50 rounded-xl border p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                1. Pelayanan Prima
              </h3>
              <p className="text-gray-600">
                Memberikan pelayanan administrasi kepada warga secara
                cepat, mudah, ramah, dan transparan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                2. Komunikasi
              </h3>
              <p className="text-gray-600">
                Meningkatkan komunikasi dan koordinasi antara pengurus,
                warga, dan pemerintah.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                3. Gotong Royong
              </h3>
              <p className="text-gray-600">
                Menumbuhkan budaya gotong royong, kepedulian sosial,
                dan kebersamaan di lingkungan masyarakat.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                4. Lingkungan
              </h3>
              <p className="text-gray-600">
                Mendukung terciptanya lingkungan yang bersih, sehat,
                aman, tertib, dan nyaman.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border p-5 md:col-span-2">
              <h3 className="font-semibold text-blue-700 mb-2">
                5. Transformasi Digital
              </h3>
              <p className="text-gray-600">
                Memanfaatkan teknologi digital untuk meningkatkan
                kualitas pelayanan, penyebaran informasi, dan
                keterbukaan kepada masyarakat melalui RT3 Digital.
              </p>
            </div>

          </div>

        </div>

        {/* Nilai */}
        <div className="mb-10">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nilai-Nilai Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                Pelayanan
              </h3>
              <p className="text-gray-600">
                Mengutamakan kebutuhan serta kepentingan masyarakat.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                Transparansi
              </h3>
              <p className="text-gray-600">
                Menyampaikan informasi secara terbuka dan dapat
                dipertanggungjawabkan.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                Gotong Royong
              </h3>
              <p className="text-gray-600">
                Menumbuhkan semangat kebersamaan dalam membangun
                lingkungan.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-blue-700 mb-2">
                Integritas
              </h3>
              <p className="text-gray-600">
                Menjalankan amanah dengan jujur, adil,
                profesional, dan bertanggung jawab.
              </p>
            </div>

            <div className="border rounded-xl p-5 md:col-span-2">
              <h3 className="font-semibold text-blue-700 mb-2">
                Inovasi
              </h3>
              <p className="text-gray-600">
                Terus berinovasi dalam meningkatkan kualitas pelayanan
                melalui pemanfaatan teknologi digital.
              </p>
            </div>

          </div>

        </div>

        {/* RT3 Digital */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            RT3 Digital
          </h2>

          <p className="leading-8">
            Website <strong>RT3 Digital</strong> hadir sebagai media
            informasi dan pelayanan bagi seluruh warga RT 003 RW 024.
            Melalui website ini, masyarakat dapat mengakses pengumuman,
            agenda kegiatan, galeri dokumentasi, transparansi,
            profil pengurus, serta berbagai layanan administrasi
            secara lebih mudah, cepat, dan terbuka.
          </p>

          <p className="mt-6 leading-8">
            Kami percaya bahwa lingkungan yang maju dibangun melalui
            partisipasi aktif seluruh warga. Dengan semangat
            kebersamaan, mari bersama-sama mewujudkan RT 003 RW 024
            sebagai lingkungan yang semakin tertib, aman, nyaman,
            harmonis, dan membanggakan.
          </p>

        </div>

      </div>
    </section>
  );
}