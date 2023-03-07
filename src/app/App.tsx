import React, { Suspense } from "react";

import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "app/theme";

const MainPage = React.lazy(() => import("pages/MainPage"));
const AboutPage = React.lazy(() => import("pages/AboutPage"));

const App = () => {
  const { setTheme } = useTheme();
  const toggleTheme = () => setTheme();

  return (
    <>
      <button onClick={toggleTheme}>Switch Theme</button>

      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>

      <Suspense fallback={"Loading ..."}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
