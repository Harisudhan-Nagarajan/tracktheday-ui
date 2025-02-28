import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export function Dashboard() {
  const navigate = useNavigate();
//   useEffect(() => {
//     navigate("/login");
//   }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the Dashboard page.</p>
    </div>
  );
}
