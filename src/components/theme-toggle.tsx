"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import type { VariantProps } from "class-variance-authority";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button, type buttonVariants } from "@/components/ui";
import { Theme } from "@/types";
import { cn } from "@/utils";

const THEME_KEYBOARD_SHORTCUT = "m";

interface ThemeToggleProps {
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
}

export function ThemeToggle({ buttonVariant = "outline" }: ThemeToggleProps) {
  const { theme, themes, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const getNextTheme = (current: Theme): Theme => {
      const idx = themes.indexOf(current);
      return themes[(idx + 1) % themes.length] as Theme;
    };

    setTheme(getNextTheme(theme as Theme));
  }, [setTheme, theme, themes]);

  // theme toggle event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === THEME_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  if (!mounted) return null;

  return (
    <Button
      variant={buttonVariant}
      size="icon"
      onClick={toggleTheme}
    >
      <SunIcon
        className={cn(
          "absolute transition-all",
          theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <MoonIcon
        className={cn(
          "absolute transition-all",
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <LaptopIcon
        className={cn(
          "absolute transition-all",
          theme === "system" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <span className="sr-only absolute">Toggle Theme</span>
    </Button>
  );
}
