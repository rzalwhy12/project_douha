    export default function CTAStrong() {
    return (
        <section className="bg-white dark:bg-black py-16 md:py-24 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main CTA */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
            Siap mulai bangun rumah?
            </h2>

            <button className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 mb-12">
            Konsultasi Gratis Sekarang
            </button>

            {/* Secondary CTA */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Belum yakin? Lihat dulu hasil pekerjaan kami:</p>
            <button className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
                Lihat Portfolio Proyek
            </button>
            </div>
        </div>
        </section>
    );
    }
