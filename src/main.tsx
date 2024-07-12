import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          position="bottom-right"
          toastOptions={{
            className:
              "bg-[#262626] px-4 py-2 rounded border border-gray-500 text-green-400",
          }}
        />
      </ReduxPersistProvider>
    </ReduxProvider>
  </React.StrictMode>
);
