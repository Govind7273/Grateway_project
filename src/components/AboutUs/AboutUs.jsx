import { Helmet } from "react-helmet-async";
import { CardSection } from "./CardSection";
import { FirstSocialProofSection } from "./FirstSocialProofSection";
import { FoundersNote } from "./FoundersNote";
import { SecondSection } from "./SecondSection";
import { ServiceInfoSection } from "./ServiceInfoSection";
import { Ours } from "./Ours";
import { Info } from "./Info";
import { CTA } from "./CTA";
import {CertifiedLogo} from "../ui/CertifiedLogo"

const AboutUs = ({Meta_Data}) => {
  
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
    
    <div className="flex w-[100vw] overflow-hidden relative  bg-white pt-12  justify-center items-center flex-col">
      {/* first section which will be to show the it service info */}
      {ServiceInfoSection()}

      { Info() }
      {FirstSocialProofSection()}

      {/* Second Section is for 'our social responsibility' section */}
      {SecondSection()}

      {/* Third section is for 'Features of our organization' */}
      {CardSection()}

      {/* Founders Note Section */}
      {FoundersNote()}
      
      {/* {Our Values Section}
      {OurValues()} */}
      {Ours()}

      {/* Certified Logo */}
      {CertifiedLogo()}

      { CTA ()}

    </div>
    </>
  );
};

export default AboutUs;
