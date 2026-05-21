export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-full max-w-md aspect-square">
        {/* Background glow */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full -z-10 blur-3xl opacity-40 dark:opacity-30"></div>

        {/* Main hero circle */}
        <div className="relative w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 dark:from-yellow-600 dark:to-yellow-700 rounded-full flex items-end justify-center overflow-hidden">
          <div className="w-full h-full bg-gray-700 rounded-full opacity-20"></div>
        </div>

        {/* Trust Badge - Top Left */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 px-4 py-2 bg-black/60 dark:bg-white/10 backdrop-blur rounded-full border border-yellow-400/30 dark:border-yellow-500/20">
          <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400">TERPERCAYA</div>
        </div>

        {/* Info Card - Bottom Right */}
        <div className="absolute -bottom-10 -right-10 sm:-bottom-12 sm:-right-12 bg-white dark:bg-gray-900 rounded-lg p-4 w-80 shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex gap-4">
            {/* Logo/Icon */}
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-red-600 rounded flex flex-col items-center justify-center shrink-0">
              <div className="text-white font-black text-lg sm:text-xl">D</div>
            </div>

            {/* Info Text */}
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
