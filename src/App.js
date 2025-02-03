import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

export default function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
