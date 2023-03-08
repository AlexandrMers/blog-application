import React from "react";

import { Box, FlexContainer } from "shared/ui";

import { Navbar } from "widgets/Navbar";
import { SwitchTheme } from "widgets/SwitchTheme";

import { Theme, useTheme } from "./providers/theme";
import { AppRoute } from "./providers/router";

const App = () => {
  const { theme, setTheme } = useTheme();
  const isDarkAppliedTheme = theme === Theme.DARK;

  return (
    <>
      <FlexContainer justifyContent="end">
        <Navbar />

        <Box insideSize="l">
          <SwitchTheme checked={isDarkAppliedTheme} toggleTheme={setTheme} />
        </Box>
      </FlexContainer>

      <AppRoute />
    </>
  );
};

export default App;
