import ThemeContext from "./contexts/ThemeContext";
import HomePage from "./pages/Home";
import React, { useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HomePage />
    </ThemeContext.Provider>
    </>
  );
}

export default App;
