import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../providers/auth-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
