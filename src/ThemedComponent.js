import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1 className="text-3xl font-bold">{theme.toUpperCase()} MODE</h1>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
