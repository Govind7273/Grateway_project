import { Helmet } from "react-helmet-async";
import ContractImage from "./Images/ServiceSupport/ContractDeal.jpg";
import ManWithClipboardImage from "./Images/ServiceSupport/ManWithClipboard.jpg";
import MenWorkInOffice from "./Images/ServiceSupport/MenWorkInOffice.jpg";
import ProgramingBg from './Images/ServiceSupport/ProgrammingBg.jpg';
import WomenWorkImage from "./Images/ServiceSupport/WomenWork.jpg";
import WorkMenImage from "./Images/ServiceSupport/WorkMen.jpg";
const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-[10px] shadow-lg shadow-violet-500">
      <img src={image} alt={title} className="mb-4 rounded-t-[10px]" />
      <h2 className="text-xl font-semibold mb-4 px-6">{title}</h2>
      <p className="text-gray-700 mb-4 px-6">{description}</p>
    </div>
  );
};
const ServicesStaffing = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
    <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

    <section className="w-[100vw] relative overflow-x-hidden pt-0 bg-black">
      
      {/* First Section */}
      <div className="w-full relative flex  flex-wrap justify-center items-center bg-gray-100 min-h-screen">
        <span className="absolute w-[180px]  h-[80px] md:w-[450px] md:h-[450px] md:bg-gradient-to-tr from-violet-600 to-cyan-300 md:top-32 top-20 right-5 md:left-10 rounded-[10px] md:rounded-[0%_100%_31%_69%_/_46%_42%_58%_54%] flex justify-center items-center font-headingFont text-[5rem] z-10">
          &#x1F3C6;
        </span>
        {/* Left */}
        <div className="absolute md:bottom-0 bottom-10 z-10 w-[95%]   md:w-3/5 lg:w-2/5 md:p-8 p-2 bg-white shadow-lg rounded-[10px]">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            IT Staffing Services
          </h1>
          <p className="text-gray-700 text-lg mb-8 md:mt-0 mt-10">
            "Transform your IT landscape with our bespoke staffing solutions. We
            meticulously match your needs with top-notch talent, ensuring
            seamless project execution. Let us elevate your workforce, driving
            innovation and success in a rapidly evolving technological
            landscape."
          </p>
        </div>

        {/* Right */}
        <img
          className=" absolute right-0  md:w-1/2 md:h-[80vh] h-full w-full   object-cover"
          src={ProgramingBg}
          alt="IT Staffing Image"
        />
      </div>

      {/* second section */}
      <div className="bg-gray-100  min-h-screen py-20">
        <div className="container mx-auto">
          <h1 className="text-[3rem] text-violet-900 text-center font-bold font-headingFont mb-8 capitalize">
            What we offers in IT staffing?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Temporary Staffing"
              description="Quickly fill short-term positions with skilled IT professionals."
              image={ManWithClipboardImage}
            />
            <ServiceCard
              title="Permanent Placement"
              description="Find the right IT talent for your organization's long-term needs."
              image={MenWorkInOffice}
            />
            <ServiceCard
              title="Contract-to-Hire"
              description="Assess candidates before making a permanent commitment."
              image={ContractImage}
            />
          </div>
        </div>
      </div>


      {/* Third Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 border-b border-slate-400 bg-gray-200">
           {/* left */}
           <div className="col-span-2 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-violet-700">Executive Search</h1>
            <p className="text-md font-navlistFont text-violet-700">We assist in identifying and recruiting senior-level executives and leaders who possess the expertise and vision to drive your organization forward. Our executive search services focus on finding exceptional talent that aligns with your strategic goals.</p>
           </div>

           {/* Right */}
           <div className="col-span-1 p-8">
              <img src={WorkMenImage} alt="" />
           </div>
      </div>

     
{/* Fourth section */}
<div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-gray-200">
           {/* left */}
           <div className="col-span-1 p-8">
              <img src={WomenWorkImage} alt="" />
           </div>
          

           {/* Right */}
           <div className="col-span-1 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-violet-700">Managed Services</h1>
            <p className="text-md font-navlistFont text-violet-700">We offer managed staffing solutions to handle the entire staffing process, from recruitment and onboarding to performance management and retention. Our managed services ensure a streamlined and efficient staffing experience for your organization.</p>
           </div>
      </div>
    </section>
    </>
  );
};

export default ServicesStaffing;
