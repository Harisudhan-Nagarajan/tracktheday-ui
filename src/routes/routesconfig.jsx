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
    // element: <Dashboard />,
    children: [
      {
        path: "about",
        element: <Dashboard />,
      },
      {
        index: true,
        path: "*",
        element: <About />,
      },
    ],
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
