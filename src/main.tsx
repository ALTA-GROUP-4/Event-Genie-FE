import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes";
import "./style/index.css";
import "preline";
import { Provider } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
