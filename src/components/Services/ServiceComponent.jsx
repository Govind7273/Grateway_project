import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

// Lazy loading the sections
const Section1 = lazy(() => import('./SubComponents/Section1'));
const Section2 = lazy(() => import('./SubComponents/Section2'));
const Section3 = lazy(() => import('./SubComponents/Section3'));
const Section4 = lazy(() => import('./SubComponents/Section4'));
const Section5 = lazy(() => import('./SubComponents/Section5'));

const ServiceComponent = ({ data, Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      <div className="bg-[#333] overflow-x-hidden text-white pt-[-40px] md:pt-[24px]">
        {/* First Section Of the Service Page */}
        <Suspense fallback={<div>Loading...</div>}>
          <Section1 obj={data.first} />
        </Suspense>

        {/* Second Section of the Service Page */}
        <Suspense fallback={<div>Loading...</div>}>
          <Section2 obj={data.cards} />
        </Suspense>

        {/* Third Section In The Service Page */}
        <Suspense fallback={<div>Loading...</div>}>
          <Section3 obj={data.third} />
        </Suspense>

        {/* Fourth Section In The Service Page */}
        <Suspense fallback={<div>Loading...</div>}>
          <Section4 obj={data.fourth} />
        </Suspense>

        {/* Fifth Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <Section5 obj={data.fifth} />
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceComponent;
