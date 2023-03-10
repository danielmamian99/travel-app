import React from "react";
import ReactDOM from "react-dom/client";
import WonderApp from "./WonderApp";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WonderApp />
  </React.StrictMode>
);
