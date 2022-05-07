import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ArtContextProvider } from "./components/context/artContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ArtContextProvider>
      <App />
    </ArtContextProvider>
  </React.StrictMode>
);
