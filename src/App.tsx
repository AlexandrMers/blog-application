import React, { Suspense, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

import "./styles/index.scss";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const handleSwitchTheme = () => {
    setTheme((theme) => (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleSwitchTheme}>Switch Theme</button>

      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>

      <Suspense fallback={"Loading ..."}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
