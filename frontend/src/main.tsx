import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/global.css";
import "@/styles/icons.css";
import { PageContextProvider } from "./components/contextProviders/page/PageContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>,
);
