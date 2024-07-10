import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ReduxPersistProvider from "./providers/ReduxPersistProvider.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import router from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <ReduxPersistProvider>
        <RouterProvider router={router} />
      </ReduxPersistProvider>
    </ReduxProvider>
  </React.StrictMode>
);
