import React from "react";

import { Layout } from "shared/ui";

import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { SwitchTheme } from "widgets/SwitchTheme";

import { AppRoute } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout.Container>
        <Layout.SideBar>
          <SideBar endCellRender={<SwitchTheme />} />
        </Layout.SideBar>

        <Layout.Content>
          <AppRoute />
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default App;
