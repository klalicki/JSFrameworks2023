import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
// Import something here

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
root.render(
  // Add something here
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
