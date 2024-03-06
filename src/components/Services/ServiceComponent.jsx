import { Helmet } from "react-helmet-async";
import Section1 from "./SubComponents/Section1";
import Section2 from "./SubComponents/Section2";
import Section3 from "./SubComponents/Section3";
import Section4 from "./SubComponents/Section4";
import Section5 from "./SubComponents/Section5";

const ServiceComponent = ({data,Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet
      >
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
    <div className="bg-slate-700  overflow-x-hidden text-white pt-[-40px] md:pt-[24px]">
      {/* First Section Of the Service Page */}
        <Section1 obj={data.first} />
      {/* Second Section of the Service Page -->bg-[#f6f5fc] */}
        <Section2 obj={data.cards} />
      {/* Third Section In The Service Page */}
        <Section3 obj={data.third} />
      {/* Fourth Section In The Service Page */}
        <Section4 obj={data.fourth} />
      {/* Fifth Section */}
        <Section5 obj={data.fifth} />
    </div>
    </>
  );
};

export default ServiceComponent;
