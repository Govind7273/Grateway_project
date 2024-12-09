import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
const CardSection = lazy(() => import("./CardSection"));
const FirstSocialProofSection = lazy(() => import("./FirstSocialProofSection"));
const FoundersNote = lazy(() => import("./FoundersNote"));
const SecondSection = lazy(() => import("./SecondSection"));
const ServiceInfoSection = lazy(() => import("./ServiceInfoSection"));
const Ours = lazy(() => import("./Ours"));
const Info = lazy(() => import("./Info"));
const CTA = lazy(() => import("./CTA"));
import CertifiedLogo from "../ui/CertifiedLogo";

const AboutUs = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

      <div className="flex w-[100vw] overflow-hidden relative bg-white pt-12 justify-center items-center flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          {/* First section which will be to show the IT service info */}
          <ServiceInfoSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Info />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <FirstSocialProofSection />
        </Suspense>

        {/* Second Section is for 'our social responsibility' section */}
        <Suspense fallback={<div>Loading...</div>}>
          <SecondSection />
        </Suspense>

        {/* Third section is for 'Features of our organization' */}
        <Suspense fallback={<div>Loading...</div>}>
          <CardSection />
        </Suspense>

        {/* Founders Note Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <FoundersNote />
        </Suspense>

        {/* {Our Values Section}
        {OurValues()} */}
        <Suspense fallback={<div>Loading...</div>}>
          <Ours />
        </Suspense>

        {/* Certified Logo */}
        <CertifiedLogo />

        <Suspense fallback={<div>Loading...</div>}>
          <CTA />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutUs;
