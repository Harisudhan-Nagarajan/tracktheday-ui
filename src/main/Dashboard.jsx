import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export function Dashboard() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  //   useEffect(() => {
  //     navigate("/login");
  //   }, []);
  return (
    <div>
      <h1>Dashboard : {username}</h1>
      <p>This is the Dashboard page.</p>
    </div>
  );
}
