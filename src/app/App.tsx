import React from "react";

import { Link } from "react-router-dom";

import { useTheme } from "./providers/theme";
import { AppRoute } from "./providers/router";

const App = () => {
  const { setTheme } = useTheme();
  const toggleTheme = () => setTheme();

  return (
    <>
      <button onClick={toggleTheme}>Switch Theme</button>

      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>

      <AppRoute />
    </>
  );
};

export default App;
