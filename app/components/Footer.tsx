    export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors">
        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Douha Konstruksi</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Solusi bangun rumah dari jauh tanpa ribet. Terpercaya, transparan, dan profesional.
                </p>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm">
                <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Konstruksi Bangunan
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Renovasi Rumah
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Konsultasi Gratis
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Portfolio
                    </a>
                </li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-4">Kontak</h4>
                <ul className="space-y-3 text-sm">
                <li>
                    <a
                    href="https://wa.me/6285755518055"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-2"
                    >
                    <span>📱</span> 0857-4647-8187
                    </a>
                </li>
                <li>
                    <a
                    href="mailto:douhakonstrulsi@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-2"
                    >
                    <span>📧</span> douhakonstrulsi@gmail.com
                    </a>
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                    <span>📍</span> Jl. Metropol Megah No. 04, Sumbergempol, Tulungagung
                </li>
                </ul>
            </div>

            {/* Service Area */}
            <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-4">Area Layanan</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Tulungagung • Kediri • Blitar • Trenggalek
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-600 italic">
                Diluar kota tersebut? Silahkan konsultasi gratis dahulu.
                </p>
            </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                © {currentYear} Douha Konstruksi. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Portfolio
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Layanan
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    Kontak
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    }
