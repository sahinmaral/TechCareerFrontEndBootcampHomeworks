import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToasterProvider from "./context/ToasterProvider";
import ThemeProvider from "./context/ThemeProvider.tsx";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
