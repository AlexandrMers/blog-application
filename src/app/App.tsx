import React from "react";

import { Navbar } from "widgets/Navbar";
import { SwitchTheme } from "widgets/SwitchTheme";

import { useTheme } from "./providers/theme";
import { AppRoute } from "./providers/router";

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
