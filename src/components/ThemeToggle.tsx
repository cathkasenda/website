
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-pixel-softWhite dark:bg-pixel-navy pixel-border rounded-none"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-pixel-softBlack dark:text-pixel-softWhite animate-pixel-fade-in" />
      ) : (
        <Sun className="w-5 h-5 text-pixel-softBlack dark:text-pixel-softWhite animate-pixel-fade-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
