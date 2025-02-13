import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("couldn't find root element");
}
const root = ReactDOM.createRoot(rootElem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
