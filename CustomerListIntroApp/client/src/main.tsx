import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToasterProvider from "./context/ToasterProvider";
import ThemeProvider from "./context/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
