import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { SearchProvider } from "./context/Search";
import { CardProvider } from "./context/card";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CardProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CardProvider>
    </SearchProvider>
  </AuthProvider>
);

reportWebVitals();
