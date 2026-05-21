import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import GuideSection from "./components/GuideSection";
import PlanSection from "./components/PlanSection";
import CTAStrong from "./components/CTAStrong";
import SuccessSection from "./components/SuccessSection";
import FailureSection from "./components/FailureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <CTAStrong />
      <SuccessSection />
      <FailureSection />
      <Footer />
    </div>
  );
}
