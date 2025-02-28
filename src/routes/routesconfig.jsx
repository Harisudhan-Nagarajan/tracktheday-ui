import { About } from "../main/About";
import { LoginPage } from "../main/LoginPage";
import { Dashboard } from "../main/Dashboard";
import { Layout } from "../main/Layout"; // Main Layout with Navigation

export const allRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
    id: "login-page",
    routeType: "login",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    id: "dashboard-page",
    routeType: "private",
  },
  {
    path: "/about",
    element: <About />,
    id: "about-page",
    routeType: "public",
  },
];
