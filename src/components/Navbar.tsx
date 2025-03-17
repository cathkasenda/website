
import { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";

interface NavbarProps {
  openChat: () => void;
}

const Navbar = ({ openChat }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Photos", href: "#photos" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-pixel-softWhite/90 dark:bg-pixel-navy/90 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="font-pixel text-lg text-pixel-softBlack dark:text-pixel-softWhite hover:text-primary transition-colors"
          >
            CK.DEV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-pixel-softBlack dark:text-pixel-softWhite hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={openChat}
              className="font-mono text-pixel-softBlack dark:text-pixel-softWhite hover:text-primary dark:hover:text-primary transition-colors flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Chat
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden pixel-btn px-2 py-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-pixel-softWhite dark:bg-pixel-navy z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-pixel text-pixel-softBlack dark:text-pixel-softWhite text-2xl"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              openChat();
            }}
            className="font-pixel text-pixel-softBlack dark:text-pixel-softWhite text-2xl flex items-center"
          >
            <MessageSquare className="w-6 h-6 mr-2" />
            Chat
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
