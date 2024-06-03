import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Outlet />
      <div id='section3' className="h-screen bg-red-500">Landingpage</div>
    </>
  );
};

export default LandingPage;
