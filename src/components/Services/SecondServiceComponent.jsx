import { Helmet } from "react-helmet-async";
import SectionFour from "./SecondServiceSubComponent/SectionFour";
import SectionOne from "./SecondServiceSubComponent/SectionOne";
import SectionThree from "./SecondServiceSubComponent/SectionThree";
import SectionTwo from "./SecondServiceSubComponent/SectionTwo";

const SecondServiceComponent = ({data,Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
     <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
    <div className="w-[100vw] bg-black overflow-x-hidden pt-16">
         {/* Section one  code */}
         <SectionOne obj={data.first} />

         {/* Second section code */}
         <SectionTwo obj={data.second} />

         {/* Third section Code */}
         <SectionThree obj={data.third} />

         {/* Section Four Code */}
         <SectionFour obj={data.fourth} />
    </div>
    </>
  )
}

export default SecondServiceComponent;