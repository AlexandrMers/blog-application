import React from "react";

// ~ shared layout
import { Layout } from "shared/ui";

// ~ widgets layout
import { Header } from "../widgets/Header";
import { SideBar } from "widgets/SideBar";
import { SwitchTheme } from "widgets/SwitchTheme";
import { SelectLanguage } from "widgets/SelectLanguage";

// ~ app layer
import { AppRoute } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Header leftElement={<SelectLanguage />} />
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
