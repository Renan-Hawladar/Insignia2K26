import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import StarBackground from "@/components/StarBackground";
import FloatingCrewmates from "@/components/FloatingCrewmates";
import AudioToggle from "@/components/AudioToggle";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import AboutSection from "@/components/AboutSection";
import RoundsSection from "@/components/RoundsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setLoaded(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SplashScreen show={showSplash} onComplete={handleSplashComplete} />
      
      {!showSplash && (
        <>
          <StarBackground />
          <FloatingCrewmates />
          <AudioToggle />
          
          <div className="relative z-10">
            <Navbar />
            <HeroSection />
            <CountdownTimer />
            <AboutSection />
            <RoundsSection />
            <TeamSection />
            <ContactSection />
            <FAQSection />
            <FooterSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
