import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import EcosystemSection from "@/components/EcosystemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommandsSection from "@/components/CommandsSection";
import SafetySection from "@/components/SafetySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <EcosystemSection />
        <HowItWorksSection />
        <CommandsSection />
        <SafetySection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
