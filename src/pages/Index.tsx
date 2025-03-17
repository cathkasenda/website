
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GameStart from "@/components/GameStart";
import AIChat from "@/components/AIChat";
import PhotoSlideshow from "@/components/PhotoSlideshow";

const Index = () => {
  const [showStart, setShowStart] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Add the pixel cursor class to the body
    document.body.classList.add("pixel-cursor");
    
    // Cleanup function
    return () => {
      document.body.classList.remove("pixel-cursor");
    };
  }, []);

  const handleStartGame = () => {
    setShowStart(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Game Start Screen */}
        {showStart && <GameStart onStart={handleStartGame} />}
        
        {/* Main Content */}
        {showContent && (
          <>
            <Navbar openChat={openChat} />
            
            <main className="pt-24">
              <ProfileSection />
              <ExperienceSection />
              <SkillsSection />
              <ProjectsSection />
              <PhotoSlideshow />
              <ContactSection />
              <Footer />
            </main>
            
            {/* AI Chat */}
            <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Index;
