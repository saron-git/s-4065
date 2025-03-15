
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all duration-300" />
      ) : (
        <Moon className="h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all duration-300" />
      )}
    </Button>
  );
}
