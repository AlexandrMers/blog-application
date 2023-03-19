import React from "react";

import { Box, FlexContainer, Layout } from "shared/ui";

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

      <Layout.Container>
        <Layout.SideBar>this is sidebar)</Layout.SideBar>

        <Layout.Content>
          <AppRoute />
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default App;
