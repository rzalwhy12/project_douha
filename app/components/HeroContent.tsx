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

      {/* Trust Badges - lebih menarik dengan icon dan badge */}
      <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400/90 border border-yellow-500 shadow text-yellow-900 font-bold gap-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1"><path d="M10 2L17 5V9C17 14 13.5 17 10 18C6.5 17 3 14 3 9V5L10 2Z" fill="#fff176" stroke="#fbc02d" strokeWidth="1.2"/><path d="M8.5 10.5L10 12L12 9.5" stroke="#fbc02d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Legalitas PT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400/90 border border-yellow-500 shadow text-yellow-900 font-bold gap-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1"><path d="M10 2L17 5V9C17 14 13.5 17 10 18C6.5 17 3 14 3 9V5L10 2Z" fill="#fff176" stroke="#fbc02d" strokeWidth="1.2"/><path d="M8.5 10.5L10 12L12 9.5" stroke="#fbc02d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Klien Dalam & Luar Negri
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400/90 border border-yellow-500 shadow text-yellow-900 font-bold gap-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1"><path d="M10 2L17 5V9C17 14 13.5 17 10 18C6.5 17 3 14 3 9V5L10 2Z" fill="#fff176" stroke="#fbc02d" strokeWidth="1.2"/><path d="M8.5 10.5L10 12L12 9.5" stroke="#fbc02d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Progress Laporan Rutin
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400/90 border border-yellow-500 shadow text-yellow-900 font-bold gap-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1"><path d="M10 2L17 5V9C17 14 13.5 17 10 18C6.5 17 3 14 3 9V5L10 2Z" fill="#fff176" stroke="#fbc02d" strokeWidth="1.2"/><path d="M8.5 10.5L10 12L12 9.5" stroke="#fbc02d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Kontrak Aman
          </span>
        </div>
      </div>
    </div>
  );
}
