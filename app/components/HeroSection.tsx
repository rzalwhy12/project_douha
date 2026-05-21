import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-24 lg:py-32 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
