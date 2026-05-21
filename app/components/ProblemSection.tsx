export default function ProblemSection() {
  const problems = [
    "Kontraktor atau tukang yang sulit dipercaya",
    "Biaya tiba-tiba membengkak",
    "Hasil akhirnya tidak sesuai janji",
    "Harus bolak-balik pulang mengawasi",
    "Risiko ditipu saat sedang bekerja di luar negeri",
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Kami tahu apa yang sering membuat Anda takut bangun rumah
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Masalah-masalah ini nyata dan sering terjadi
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-red-600/30 dark:border-red-600/30 rounded-lg p-6 hover:border-red-600/60 dark:hover:border-red-600/60 transition-all duration-200"
            >
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-red-600/20 dark:bg-red-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-red-600 dark:text-red-500 font-bold text-sm">!</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{problem}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Question */}
        <div className="bg-red-600/10 dark:bg-red-600/10 border border-red-600/30 dark:border-red-600/30 rounded-lg p-8 mt-12">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
            Dan jauh di dalam hati, mungkin Anda bertanya:
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white italic">
            "Kalau aku tidak bisa pulang, apakah rumahku bisa benar-benar jadi dan rapi?"
          </p>
        </div>

        {/* Belief */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest mb-3">
            Douha Konstruksi Percaya:
          </p>
          <p className="text-lg sm:text-xl text-gray-900 dark:text-white leading-relaxed max-w-2xl mx-auto">
            Setiap keluarga berhak memiliki rumah yang dibangun dengan jujur dan transparan,
            <span className="text-red-600 font-bold"> tanpa drama dan tanpa stres.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
