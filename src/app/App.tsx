import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

// ~ shared layout
import { FlexContainer, Layout } from "shared/ui";
import "shared/config/i18";

// ~ widgets layout
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { SwitchTheme } from "widgets/SwitchTheme";
import { SelectLanguage } from "widgets/SelectLanguage";

import { AppRoute } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Suspense fallback="translation loading ...">
      <SelectLanguage />
      <Navbar />
      <Layout.Container>
        <Layout.SideBar>
          <SideBar
            endCellRender={
              <FlexContainer>
                <SwitchTheme />
                // Уйдет в шапку профиля
                <button onClick={handleChangeLanguage}>change language</button>
              </FlexContainer>
            }
          />
        </Layout.SideBar>

        <Layout.Content>
          <AppRoute />
        </Layout.Content>
      </Layout.Container>
    </Suspense>
  );
};

export default App;
