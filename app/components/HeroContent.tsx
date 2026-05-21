export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
        Bangun Rumah dari Jauh
        <span className="text-red-600"> Tanpa Ribet.</span>
      </h1>

      {/* Sub-headline */}
      <div className="space-y-3">
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-semibold">
          Solusi kontraktor terpercaya untuk Anda yang sibuk, tinggal di luar kota, atau bekerja di luar negeri.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Semua proses dilakukan transparan, aman, dan terkontrol.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
          Konsultasi Gratis Sekarang
        </button>
        <button className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
          Lihat Portfolio
        </button>
      </div>

      {/* Trust Badges */}
      <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          Legalitas PT
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          Klien Dalam & Luar Negri
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          Progress Laporan Rutin
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          Kontrak Aman
        </div>
      </div>
    </div>
  );
}
