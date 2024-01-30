"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeChanger = () => {
  const [currentThemeState, setCurrentThemeState] = useState<string | null>(
    localStorage.getItem("theme")
  );

  function getSystemTheme() {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

  useEffect(() => {
    const theme = getSystemTheme();

    if (typeof window !== "undefined") {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme) {
        document
          .querySelector("html")
          ?.setAttribute("data-theme", currentTheme);
      } else {
        document.querySelector("html")?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        setCurrentThemeState(theme);
      }
    }
  }, []);
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      if (
        document.querySelector("html")?.getAttribute("data-theme") === "dark"
      ) {
        document.querySelector("html")?.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        setCurrentThemeState("light");
      } else {
        setCurrentThemeState("dark");
        document.querySelector("html")?.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 bg-shadow rounded-full flex justify-center items-center text-2xl hover:scale-110 transition-all"
    >
      {typeof window !== "undefined" && (
        <>{currentThemeState === "dark" ? <FaSun /> : <FaMoon />}</>
      )}
    </button>
  );
};

export default ThemeChanger;
