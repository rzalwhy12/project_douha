    export default function FailureSection() {
    const risks = [
        "Bangunan tidak sesuai dengan rencana",
        "Over-budget tanpa kontrol yang ketat",
        "Pekerjaan mangkrak dan tertunda",
        "Harus pulang mendadak untuk mengawasi",
        "Waktu & uang terbuang sia-sia",
        "Potensi penipuan atau kontraktor kabur",
    ];

    return (
        <section className="bg-white dark:bg-black py-16 md:py-24 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 text-center">
            Jika Salah Memilih Kontraktor...
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Risiko-risiko ini nyata, terutama untuk klien yang tinggal jauh
            </p>

            {/* Risks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {risks.map((risk, index) => (
                <div
                key={index}
                className="bg-red-600/5 dark:bg-red-600/5 rounded-lg p-6 border border-red-600/20 dark:border-red-600/20 hover:border-red-600/40 dark:hover:border-red-600/40 hover:bg-red-600/10 dark:hover:bg-red-600/10 transition-all duration-200"
                >
                <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600/30 dark:bg-red-600/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-red-600 dark:text-red-500 text-lg">✕</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{risk}</p>
                </div>
                </div>
            ))}
            </div>

            {/* Warning Message */}
            <div className="bg-red-600/20 dark:bg-red-600/10 border border-red-600/40 dark:border-red-600/30 rounded-lg p-8 md:p-12">
            <div className="flex gap-4">
                <div className="text-3xl shrink-0">⚠️</div>
                <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dan Itu Sering Terjadi</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Terutama pada klien yang tinggal jauh dan tidak bisa mengawasi langsung.
                    Mereka mempercayai kontraktor, tetapi komunikasi buruk dan transparansi minim
                    menyebabkan proyek berantakan. Biaya naik, waktu tunda, hasil jelek—dan pada akhirnya
                    klien rugi secara finansial dan emosional.
                </p>
                </div>
            </div>

            <p className="text-red-600 dark:text-red-500 text-sm font-semibold mt-6 italic">
                Itulah mengapa Anda membutuhkan partner yang bisa dipercaya. Bukan hanya janji—tapi bukti nyata.
            </p>
            </div>
        </div>
        </section>
    );
    }
