import React from "react";
import { Helmet } from "react-helmet-async";
import InstituteHero from "./instituteComponents/InstituteHero";
import InstituteSeminar from "./instituteComponents/InstituteSeminar";
import InstituteGuest from "./instituteComponents/InstituteGuest";
import InstituteWorkshop from "./instituteComponents/InstituteWorkshop";
import InstituteInternship from "./instituteComponents/InstituteInternship";
import FDP from "./instituteComponents/FDP";

const InstitueAcademicServices = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

      <main className=" text-black pt-12">
        <InstituteHero />
        <InstituteSeminar />
        <InstituteGuest />
        <InstituteWorkshop />
        <InstituteInternship />
        <FDP />
      </main>
    </>
  );
};

export default InstitueAcademicServices;
