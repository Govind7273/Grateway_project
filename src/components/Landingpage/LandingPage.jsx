import React from "react";
import { Outlet } from "react-router-dom";
import Herol from "./Sections/Herol";
import Chooseusl from "./Sections/Chooseusl";
import Servicesl from "./Sections/Servicesl";
import Clientl from "./Sections/Clientl";
import Pricingl from "./Sections/Pricingl";
import Contactl from "./Sections/Contactl";
import { Helmet } from "react-helmet-async";
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
        <Clientl />
        <Chooseusl />
        <Pricingl />
        <Contactl />
      </main>
    </>
  );
};

export default LandingPage;
