import App from "@/App";
import { USER_ROLE } from "@/constant/constant.global";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role={[USER_ROLE.user, USER_ROLE.admin]}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute role={[USER_ROLE.user, USER_ROLE.admin]}>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
