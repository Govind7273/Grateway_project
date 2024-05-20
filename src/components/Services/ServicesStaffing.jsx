import { Helmet } from "react-helmet-async";
import ContractImage from "./Images/ServiceSupport/ContractDealNew.jpg";
import ManWithClipboardImage from "./Images/ServiceSupport/ManWithClipboard.jpg";
import MenWorkInOffice from "./Images/ServiceSupport/MenWorkInOffice.jpg";
import WomenWorkImage from "./Images/ServiceSupport/ProgrammingbgNew.jpg";
import WorkMenImage from "./Images/ServiceSupport/WorkMen.jpg";
import { RiUserSearchFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { LuClock2 } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";

const ServiceCard = ({ title, description, image }) => {

  return (
    <div className="bg-white rounded-[10px] shadow-lg shadow-gray-500">
      <img src={image} alt={title} className="sm-4 rounded-t-[5px]" />
      <h2 className="text-xl font-semibold mb-4 px-6">{title}</h2>
      <p className="text-gray-700 mb-4 px-6">{description}</p>
      <></>
    </div>
  );
};
const ServicesStaffing = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;
  const [counterOn, setCounterOn] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can set a threshold here for when to toggle the counterOn state
      // For example, if you want it to trigger when scrolling down by a certain amount
      if (scrollPosition > 100) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

    <section className="w-[100vw] relative overflow-x-hidden pt-0 bg-black">
      
      {/* First Section */}
      <div className="py-20 sm:py-32 bg-gradient-to-r from-blue-700 to-pink-500">
       
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-7xl py-1 lg:mx-0  w-[100%] ">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-100 sm:text-xl justify-center lg:items-center sm:mr-64 sm:ml-3 lg:pl-56 lg:ml-52 ">What is IT staffing ?</h2>
    </div>
    <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-100 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between sm:mb-1">

        <div className="group relative ">
          <p className="mt-0 text-blue-200 text-justify font-bold leading-6 md:text-xl text-md drop-shadow-lg hover:animate-pulse">"Transform your IT landscape with our bespoke staffing solutions."
           </p>
           
        </div>
        <div className="relative mt-1 flex items-center gap-x-4 shadow hover: ">
          <div className="text-sm leading-6 mb-10 hover:shadow-2xl mt-1 sm:mt-1 sm:mb-1 shadow-lg  shadow-indigo-300 hover:bg-white ">
          <img src="https://dis-blog.thalesgroup.com/wp-content/uploads/2018/10/IoT-in-2030-part-3-1140x760.jpg" alt="" className="w-  h-"></img>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative sm:mt-0 sm:pt">
        
          <p className="mt-0 text-blue-100 text-justify font-bold leading-6 md:text-xl text-md drop-shadow-lg hover:animate-pulse">"We meticulously match your needs with top-notch talent, ensuring seamless project execution." 
           </p>
           
        </div>
        <div className="relative mt-1 flex items-center gap-x-4">
          <div className="text-sm leading-6 mb-10 hover:shadow-2xl mt-1 sm:mt-1 sm:mb-1 shadow-lg  shadow-indigo-300">
          <img src="/src/components/Services/Images/ServiceSupport/ProjectExecution.jpg" alt="" className="w-  h-"></img>
          </div>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
        
          <p className="mt-0 text-blue-100 text-justify font-bold leading-6 md:text-xl text-md drop-shadow-lg hover:animate-pulse">"Let us elevate your workforce, driving
            innovation and success."</p>
           
        </div>
        <div className="relative mt-1 flex items-center gap-x-4">
          <div className="text-sm leading-6 mb-10 hover:shadow-2xl mt-1 sm:mt-1 sm:mb-1 shadow-lg shadow-indigo-300">
          <img src="/src/components/Services/Images/ServiceSupport/ContractDeal.jpg" alt="" className="w-  h-"></img>
          </div>
        </div>
      </article>

    </div>
  </div>
      </div>



      {/* second section */}
      <div className="bg-gray-100  min-h-screen py-20">
        <div className="container mx-auto">
          <h1 className="text-[3rem] text-indigo-800 text-center font-bold font-headingFont mb-8 capitalize underline">
            What we offer in IT staffing?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            <ServiceCard 
              title="Temporary Staffing " 
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
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 border-b border-slate-400 bg-indigo-900">
           {/* left */}
           <div className="col-span-2 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-white sm:mt-4 pt-3"><TfiReload size={50} className="animate-spin"/>Executive Search</h1>
            <p className="text-lg text-violet-100">We assist in identifying and recruiting senior-level executives and leaders who possess the expertise and vision to drive your organization forward. Our executive search services focus on finding exceptional talent that aligns with your strategic goals.</p>
           </div>

           {/* Right */}
           <div className="col-span-1 p-8 sm:pr-0 bg-gradient-to-r from-indigo-500 to-indigo-200 ">
              <img src={WorkMenImage} alt="" className=" shadow-indigo-300 "/>
           </div>
      </div>

     
      {/* Fourth section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-gray-200">
           {/* left */}
           <div className="col-span-1 p-8 bg-gradient-to-r from-indigo-500 to-indigo-200">
              <img src={WomenWorkImage} alt="" />
           </div>
          

           {/* Right */}
           <div className="col-span-1 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-sky-950"><MdManageAccounts size={70} color="blue" className="animate-pulse"/>Managed Services </h1>
            <p className="text-lg text-sky-950 sm:pb sm:mb-10">We offer managed staffing solutions to handle the entire staffing process, from recruitment and onboarding to performance management and retention. Our managed services ensure a streamlined and efficient staffing experience for your organization.</p>
           </div>
      </div>

      {/* Fifth Section*/}
      <div className="bg-indigo-900 min-h-screen py-20">
        <div className="container mx-auto ">
          <h1 className="text-[3rem] text-white text-center font-bold font-headingFont mb-8 capitalize animate-bounce ">
            OUR IMPACT
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-8 gap-4 flex-wrap shadow-gray-60 shadow-border ">
   
    <div className=" p-4 row-span-8 flex justify-center shadow-lg flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200 hover:scale-125 transition-all ease-in"><RiUserSearchFill size={70} />
    <h1 className="text-orange-700 text-4xl">{ counterOn && <CountUp start={0} end={75} duration={10} />}+</h1>
    <p>active tech resources</p>
    </div>
   
    <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200  hover:scale-125 transition-all ease-in"><FaRegCalendarCheck  size={50}/>
    <h1 className="text-orange-700 text-4xl">{ counterOn && <CountUp start={0} end={5} duration={10} />}+</h1>
    <p>years of service</p>
    </div>
    
    <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200 hover:scale-125 transition-all ease-in"><IoIosPeople size={50}/>
    <h1 className="text-orange-700 text-4xl hover:text-indigo-900">{ counterOn && <CountUp start={0} end={20} duration={10} />}+</h1>
    <p>active clients</p>
    </div>

    <div className="bg-gray-200 p-4 row-span-8 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200 hover:scale-125 transition-all ease-in"><LuClock2 size={50}/>
    <h1 className="text-orange-700 text-4xl">{ counterOn && <CountUp start={0} end={200} duration={10} />}+</h1>
    <p>hours completed</p>

    </div>
    
    <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200 hover:scale-125 transition-all ease-in"><GiSkills size={50}/>
    <h1 className="text-orange-700 text-4xl">{ counterOn && <CountUp start={0} end={50} duration={10} />}+</h1>
    <p>skills served</p>
    </div>

    <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-indigo-500 to-indigo-200 hover:scale-125 transition-all ease-in"><BsStars size={50}/>
    <h1 className="text-orange-700 text-4xl">{ counterOn && <CountUp start={0} end={100} duration={10} />}+</h1>
    <p>active tech talent pool</p>
    </div>
   
        </div>
       </div>
 </div>




    </section>
    </>
  );
};

export default ServicesStaffing;
