"use client";

import { useEffect, useState } from "react";
import "./themeToggle.css";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : getPreferredTheme();

    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme !== "light" && currentTheme !== "dark") {
      document.documentElement.dataset.theme = initialTheme;
      setTheme(initialTheme);
      return;
    }

    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <label className="theme-toggle" aria-label="Toggle light and dark mode">
      <span className="theme-label">Light</span>
      <input
        className="theme-toggle-input"
        checked={theme === "dark"}
        onChange={toggleTheme}
        type="checkbox"
      />
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
      </span>
      <span className="theme-label">Dark</span>
    </label>
  );
}
