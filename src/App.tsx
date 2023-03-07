import React, { Suspense } from "react";

import { Link, Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
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
