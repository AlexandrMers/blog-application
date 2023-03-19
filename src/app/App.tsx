import React from "react";

import { Box, FlexContainer } from "shared/ui";

import { Navbar } from "widgets/Navbar";
import { SwitchTheme } from "widgets/SwitchTheme";

import { AppRoute } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  return (
    <>
      <FlexContainer justifyContent="end">
        <Navbar />
        <Box insideSize="l">
          <SwitchTheme />
        </Box>
      </FlexContainer>
      <AppRoute />
    </>
  );
};

export default App;
