export default function SuccessSection() {
  const benefits = [
    "Proses pembangunan yang lebih tenang",
    "Semua progress terlihat jelas tanpa harus pulang",
    "Rumah impianmu terlihat jelas sebelum memulai",
    "Laporan progress real time",
    "Pekerjaan sesuai standar",
    "Biaya terukur dari awal",
    "Tim yang profesional",
    "Rumah berdiri tanpa stres dan drama",
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 text-center">
          Inilah yang Akan Anda Dapatkan
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-red-600/30 dark:hover:border-red-600/30 transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagine Section */}
        <div className="bg-red-600/10 dark:bg-red-600/10 border border-red-600/30 dark:border-red-600/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">Bayangkan…</h3>
          <p className="text-lg sm:text-xl text-gray-900 dark:text-white leading-relaxed">
            Rumah Anda pelan-pelan terbentuk, setiap minggunya Anda menerima
            <span className="text-red-600 font-bold"> video progress,</span> dan Anda bisa
            <span className="text-red-600 font-bold"> fokus bekerja tanpa cemas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
