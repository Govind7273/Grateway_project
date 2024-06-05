import React from "react";
import { Outlet } from "react-router-dom";
import Herol from "./Sections/Herol";
import Chooseusl from "./Sections/Chooseusl";
import Servicesl from "./Sections/Servicesl";
import Clientl from "./Sections/Clientl";
import Pricingl from "./Sections/Pricingl";
import Contactl from "./Sections/Contactl";
const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Outlet />
      <Herol />
      <Servicesl />
      <Clientl />
      <Chooseusl/>
      <Pricingl />
      <Contactl />
    </main>
  );
};

export default LandingPage;
