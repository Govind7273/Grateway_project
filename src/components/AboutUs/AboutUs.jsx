import { Helmet } from "react-helmet-async";
import { CardSection } from "./CardSection";
import { FirstSocialProofSection } from "./FirstSocialProofSection";
import { FoundersNote } from "./FoundersNote";
import { SecondSection } from "./SecondSection";
import { SecondSocialProof } from "./SecondSocialProof";
import { ServiceInfoSection } from "./ServiceInfoSection";
import { Ours } from "./Ours";
import { Info } from "./Info";

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

      <div className="w-[70%] p-6 md:p-12 md:pb-[10rem]">
            <div className=" text-black flex flex-col text-right items-end ">
              <div className=" flex sm:text-xl md:text-2xl ">
                "As a co-founder, I'm amazed by our organization's journey, a
                    testament to collaborative spirit, determination, and shared
                    aspirations."
              </div>
              <div className=" pt-2">
                <div className="tracking-[2px] font-semibold text-xl">Nilam Rathod</div>
                <div className="text-[0.8rem] tracking-[0.8px]">
                Co-Founder, CTO
                </div>
              </div>
              <div className="w-[6%] h-[0.5rem] bg-blue-700 rounded-full"></div>
            </div>
          </div>

      {/* Second Social Proof */}
      {SecondSocialProof()}
    </div>
    </>
  );
};

export default AboutUs;
