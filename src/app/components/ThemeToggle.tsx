"use client";

import { Button } from "@heroui/react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
} 