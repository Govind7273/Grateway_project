import React from "react";
import { Outlet } from "react-router-dom";
import Herol from "./Sections/Herol";
import Chooseusl from "./Sections/Chooseusl";
import Servicesl from "./Sections/Servicesl";
import Pricingl from "./Sections/Pricingl";
import Contactl from "./Sections/Contactl";
import InfiniteMovingCardsDemo from "../Home/Clients"
import { Helmet } from "react-helmet-async";
import CertifiedLogo from "../ui/CertifiedLogo";
const LandingPage = ({ Meta_Data }) => {
  const { Title, Description, Link1 } = Meta_Data;
  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link1} />
      </Helmet>
      <main className="overflow-x-hidden h-screen scrollbar-thin overflow-y-scroll">
        <Outlet />
        <Herol />
        <Servicesl />
        <InfiniteMovingCardsDemo />
        <Chooseusl />
        <CertifiedLogo />
        <Pricingl />
        <Contactl />
      </main>
    </>
  );
};

export default LandingPage;
