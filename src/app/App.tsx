import React from "react";

import { Navbar } from "widgets/Navbar";

import { useTheme } from "./providers/theme";
import { AppRoute } from "./providers/router";
import { SwitchTheme } from "../features/SwitchTheme";

const App = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <SwitchTheme toggleTheme={setTheme} />
      <Navbar />
      <AppRoute />
    </>
  );
};

export default App;
