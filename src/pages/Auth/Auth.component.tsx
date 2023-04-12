import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <Outlet />
    </main>
  );
};

export default Auth;
