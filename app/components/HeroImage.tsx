export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="flex flex-col items-center w-full">
        {/* Trust Badge overlap bagian atas kiri lingkaran */}
        <div className="w-full flex justify-start max-w-md pl-2 md:pl-6" style={{ position: 'relative', zIndex: 30 }}>
          <div
            className="absolute left-0 top-8 sm:top-12 px-5 py-2 rounded-full border-2 border-yellow-500 shadow-lg flex items-center gap-2"
            style={{
              background: 'linear-gradient(90deg, #FFD600 0%, #FFB800 100%)',
              boxShadow: '0 6px 24px 0 rgba(255, 193, 7, 0.18)',
              filter: 'drop-shadow(0 2px 8px rgba(255,193,7,0.18))',
            }}
          >
            {/* Icon Shield */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L17 5V9C17 14 13.5 17 10 18C6.5 17 3 14 3 9V5L10 2Z" fill="#fff176" stroke="#fbc02d" strokeWidth="1.5"/>
              <path d="M8.5 10.5L10 12L12 9.5" stroke="#fbc02d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs sm:text-sm font-bold text-yellow-900 tracking-wide drop-shadow">TERPERCAYA</span>
          </div>
        </div>
        {/* Lingkaran hanya foto */}
        <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-full shadow-xl bg-white dark:bg-gray-900 flex items-center justify-center">
          <img
            src="/foto-serah-terima/ANANG.png"
            alt="Foto Testimoni ANANG"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Info Text overlap bagian bawah lingkaran */}
        <div className="w-full flex justify-center max-w-md relative" style={{ zIndex: 30 }}>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-11/12 bg-white/90 dark:bg-gray-900/90 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-800 flex gap-4 items-center backdrop-blur max-w-md">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center shrink-0">
              <img
                src="/logo/DOUHA%20KONSTRUKSI.png"
                alt="Logo Douha"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <div className="font-bold text-gray-900 dark:text-white">Douha Konstruksi</div>
              <div className="text-gray-600 dark:text-gray-400">Bangun Rumah dari Jauh</div>
              <div className="text-red-600 dark:text-red-500 font-bold pt-1">Terpercaya & Transparan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
