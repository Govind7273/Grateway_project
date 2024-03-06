import { Helmet } from "react-helmet-async";
import { CardSection } from "./CardSection";
import { FirstSocialProofSection } from "./FirstSocialProofSection";
import { FoundersNote } from "./FoundersNote";
import { SecondSection } from "./SecondSection";
import { SecondSocialProof } from "./SecondSocialProof";
import { ServiceInfoSection } from "./ServiceInfoSection";


const AboutUs = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
    
    <div className="flex w-[100vw] relative overflow-hidden bg-black pt-12  justify-center items-center flex-col">
      {/* first section which will be to show the it service info */}
      <h2 className="mt-10 text-2xl uppercase font-bold text-violet-400 font-headingFont">
        About Our Company
      </h2>
      {ServiceInfoSection()}

      {/* Second Section is for 'our social responsibility' section */}
      {SecondSection()}

      {/* Third section is for 'Features of our organization' */}
      {CardSection()}

      {/* First social proof section */}
      {FirstSocialProofSection()}

      {/* Founders Note Section */}
      {FoundersNote()}

      {/* Second Social Proof */}
      {SecondSocialProof()}
    </div>
    </>
  );
};

export default AboutUs;
