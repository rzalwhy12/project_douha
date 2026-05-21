    export default function PlanSection() {
    const steps = [
        {
        number: "1",
        title: "Konsultasi Kebutuhan Anda",
        description:
            "Kami pelajari kebutuhan, konsep, dan lokasi Anda dengan detail.",
        },
        {
        number: "2",
        title: "RAB & Desain Disusun dengan Jelas",
        description:
            "Semua biaya dan gambar disetujui di awal. Tidak ada biaya tersembunyi.",
        },
        {
        number: "3",
        title: "Pembangunan Dimulai & Kami Update Rutin",
        description:
            "Laporan harian/weekly berupa foto & video—Anda bisa pantau dari mana saja.",
        },
    ];

    const agreements = [
        "Pembayaran bertahap sesuai progress",
        "Kontrak kerja resmi",
        "Dokumentasi lengkap",
        "Laporan Real Time",
        "Garansi pekerjaan",
        "Tidak ada biaya tersembunyi",
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 text-center">
            Rencana Sederhana
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Hanya 3 langkah sederhana untuk mulai membangun rumah impian Anda
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => (
                <div
                key={index}
                className="bg-white dark:bg-black rounded-lg p-8 border border-gray-200 dark:border-gray-800 hover:border-red-600/30 dark:hover:border-red-600/30 transition-all duration-200"
                >
                <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-xl">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-1">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
            ))}
            </div>

            {/* Agreement/Safety Section */}
            <div className="bg-red-600/10 dark:bg-red-600/10 border border-red-600/30 dark:border-red-600/30 rounded-lg p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Janji Keamanan Kami Untuk Anda
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {agreements.map((agreement, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-600 rounded-full shrink-0 mt-1"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{agreement}</p>
                </div>
                ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-8 italic">
                ✓ Semua ini bukan janji kosong—kami tunjukkan melalui kontrak dan dokumentasi nyata.
            </p>
            </div>
        </div>
        </section>
    );
    }
