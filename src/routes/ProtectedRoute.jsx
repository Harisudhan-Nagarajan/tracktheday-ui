import { useNavigate, useRoutes } from "react-router";
import { useEffect } from "react";
import { allRoutes } from "../routes/routesconfig";

// Function to check if user is authenticated
const isAuthenticated = () => {
  return true;
};

export const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, []);

  return <>{useRoutes(allRoutes)}</>;
};
