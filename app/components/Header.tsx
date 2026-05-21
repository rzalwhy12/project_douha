import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white px-3 py-1 rounded-sm font-bold text-sm">
            DOUHA
          </div>
          <div className="bg-red-600 text-white px-3 py-1 rounded-sm font-bold text-sm">
            KONSTRUKSI
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">Tentang</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">Layanan</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">Portfolio</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">Blog</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </header>
  );
}
