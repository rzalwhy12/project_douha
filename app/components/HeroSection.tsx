import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-black py-12 md:py-20 lg:py-28 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <HeroContent />
          </div>
          <div className="flex justify-center order-1 md:order-2 mb-10 md:mb-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
