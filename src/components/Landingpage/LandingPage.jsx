import React from "react";
import { Outlet } from "react-router-dom";
import Herol from "./Sections/Herol";
import Servicesl from "./Sections/Servicesl";
import Clientl from "./Sections/Clientl";
import Pricingl from "./Sections/Pricingl";
import Contactl from "./Sections/Contactl";
const LandingPage = () => {
  return (
    <main id="section3">
      <Outlet />
          <div >Landingpage</div>
          <Herol />
          <Servicesl />
          <Clientl />
          <Pricingl />
          <Contactl/>
          
          
    </main>
  );
};

export default LandingPage;
