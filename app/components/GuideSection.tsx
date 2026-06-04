    export default function GuideSection() {
    const authorities = [
        "Berpengalaman",
        "Menangani klien dari dalam kota, luar kota & luar negeri serta pekerja sibuk",
        "Sistem kerja profesional",
        "Tim ahli & legalitas PT yang terpercaya",
        "Portfolio project yang nyata",
    ];

    return (
        <section className="bg-white dark:bg-black py-16 md:py-24 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 text-center">
            Kami Pemandu Anda
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Kami memahami kesulitan Anda dan punya solusinya
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Empathy Section */}
            <div>
                <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Empati</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Kami memahami betapa beratnya membangun rumah dari jauh.
                </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Klien kami banyak yang bekerja sebagai
                    <span className="text-red-600 dark:text-red-500 font-semibold"> TKI, pegawai sibuk, dan pengusaha</span>.
                    Mereka tidak punya waktu untuk mengurus detail kecil pembangunan, dan kami tahu itu.
                </p>
                </div>
            </div>

            {/* Authority Section */}
            <div>
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authority</h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Inilah alasan mereka memilih Douha Konstruksi:
                                    </p>
                                </div>

                <div className="space-y-3">
                {authorities.map((authority, index) => (
                    <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:border-red-600/30 dark:hover:border-red-600/30 transition-all duration-200 flex items-start gap-3"
                    >
                    <div className="w-5 h-5 bg-red-600 rounded-full shrink-0 mt-1"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{authority}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }
