
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-pixel text-sm text-pixel-softBlack dark:text-pixel-softWhite">
              © {currentYear} Cathleen Kasenda
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="font-mono text-sm flex items-center">
              Made with 
              <Heart className="w-4 h-4 mx-1 text-pixel-pastelPink animate-pixel-pulse" /> 
              in Seattle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
