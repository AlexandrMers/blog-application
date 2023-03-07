import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "app/App";

import { ThemeProvider } from "app/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

import "app/styles/index.scss";

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
