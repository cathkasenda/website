
import { useState, useEffect } from "react";
import PixelButton from "./PixelButton";

interface GameStartProps {
  onStart: () => void;
}

const GameStart = ({ onStart }: GameStartProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 800);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(onStart, 500); // Slight delay for animation
  };

  return (
    <div
      className={`fixed inset-0 bg-pixel-softWhite dark:bg-pixel-navy z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl mb-8 text-pixel-softBlack dark:text-pixel-softWhite">
          CATHLEEN KASENDA
        </h1>
        <div className="mb-12">
          <p className="font-mono text-lg text-pixel-softBlack dark:text-pixel-softWhite mb-1">
            ECE Student • Developer • Engineer
          </p>
          <p className="font-mono text-pixel-softBlack dark:text-pixel-softWhite opacity-70">
            Specializing in Embedded Systems & Computing
          </p>
        </div>
        
        <div className="mt-16">
          <PixelButton 
            onClick={handleStart}
            size="lg"
            className="animate-pixel-pulse"
          >
            START GAME
          </PixelButton>
          
          <p className={`mt-8 font-pixel text-sm text-pixel-softBlack dark:text-pixel-softWhite ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            PRESS START TO CONTINUE
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
