import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./scss/main.scss";
import React from "react";

const container = document.getElementById("root");

if (!container) {
  console.error("Błąd: Nie znaleziono elementu #root w index.html");
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
