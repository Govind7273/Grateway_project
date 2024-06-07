import { Helmet } from "react-helmet-async";
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
import ITstaffing from "./Images/ITstaffing.jpg";
import WCU from "./Images/wcu.jpg";
import { PiStarFourFill } from "react-icons/pi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import ScrollTrigger from "react-scroll-trigger";

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
const ServicesStaffing = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;
  const [counterOn, setCounterOn] = useState(false);


  const services=[
    {id:1, title:"Contract Staffing",desc:"Our contract staffing solutions provide you with the flexibility to scale your team based on project demands. We offer skilled professionals ready to contribute to your projects immediately."},
    {id:2, title:"Permanent Staffing",desc:"Finding the perfect full-time employees can be challenging. We leverage our extensive network and rigorous vetting process to match you with candidates who not only have the required technical skills but also fit your company culture."},
    {id:3, title:"Contract-to-Hire",desc:"Our contract-to-hire services allow you to evaluate a candidate's performance and fit within your organization before making a permanent hiring decision. This approach minimizes hiring risks and ensures a seamless transition."},
    {id:4, title:"Executive Search",desc:"For senior-level positions, our executive search service connects you with experienced leaders who can drive strategic initiatives and lead your organization to new heights."},
  ]

  const process=[
    {id:1, title:"Understanding Your Needs",desc:"We start by comprehensively understanding your staffing requirements, company culture, and project objectives."},
    {id:2, title:"Talent Sourcing",desc:"Utilizing our extensive network and advanced sourcing techniques, we identify and attract top talent."},
    {id:3, title:"Screening and Vetting",desc:"Candidates undergo a thorough screening process, including technical assessments and background checks."},
    {id:4, title:"Client Interviews",desc:"We present you with a shortlist of the best candidates, facilitating interviews and evaluations."},
  ]

  const wcu=[
    {id:1,title:"Industry Expertise",desc:"With years of experience in the software solutions industry, we understand the unique challenges and requirements of IT staffing."},
    {id:2,title:"Extensive Network",desc:"Our broad network of IT professionals includes experts in various technologies and domains."},
    {id:3,title:"Customized Solutions",desc:"We tailor our staffing solutions to align with your specific business goals and project needs."},
    {id:4,title:"Quality Assurance",desc:"Our rigorous screening process ensures that you receive only the most qualified candidates."},
    {id:5,title:"Timely Delivery",desc:"We are committed to providing prompt and efficient staffing solutions to keep your projects on track."},
  ]

  const impact=[
    {id:1,icon:RiUserSearchFill,num:75,desc:"active tech resources"},
    {id:2,icon:FaRegCalendarCheck,num:5,desc:"years of service"},
    {id:3,icon:IoIosPeople,num:20,desc:"active clients"},
    {id:4,icon:LuClock2,num:200,desc:"hours completed"},
    {id:5,icon:GiSkills,num:50,desc:"skills served"},
    {id:6,icon:BsStars,num:100,desc:"active tech talent pool"},
  ]
 

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
    {/* first section */}
    <section id="background">
    <div className="flex flex-wrap">
      <div className="w-full md:w-8/12">
        <div className="mx-auto h-full md:p-10 flex flex-col items-center justify-center">
          <header className="px-2 sm:px-4 flex mt-24 items-center justify-center">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold cursor-pointer">IT Staffing Solutions</h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <h2 className="text-2xl lg:text-4xl font-bold py-4 cursor-pointer">Finding the Right Talent for Your Business</h2>
              <p className="text-sm sm:text-xl mb-10 cursor-pointer">In the ever-evolving world of technology, securing the right talent is essential for achieving your business objectives. We excel in delivering premier IT staffing solutions customized to fit your unique requirements. Whether you need temporary, project-based assistance or permanent placements, our dedicated team is ready to support you.</p>
              {/* <button class="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button> */}
            </div>
          </header>
        </div>
      </div>
      <img src={ITstaffing} alt="ITstaffing" className="w-full h-[80vh] object-cover sm:h-screen md:w-4/12 cursor-pointer"></img>
    </div>
    </section>

    {/* services */}
    <section>
    <div className="p-4 md:p-10">
      <div className="max-w-7xl mx-auto h-max px-4 md:px-12 xl:px-6">
      <h2 className="text-black text-2xl md:text-4xl font-semibold p-2 flex items-center justify-center cursor-pointer">What We Offer In IT Staffing?</h2>
        <div
          className="py-5 grid divide-x divide-y  divide-gray-700 overflow-hidden text-gray-600 gap-6 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
          {services.map((feat)=>{
            return(
              <div key={feat.id} className="group relative bg-blue-200 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 rounded-xl cursor-pointer">
                <div className="relative p-8">
                  
                  <div className="space-y-2">
                    <h5 className="text-2xl font-semibold text-blue-950 transition">{feat.title}</h5>
                    <p className="text-gray-800">{feat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
    </section>

    {/* why choose us */}
    <section id="section2" className="p-2 md:p-5">

    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-1 shadow-2xl cursor-pointer">
            <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] " src={WCU} alt="" />
        </div>
        <div className="order-2 p-4 flex flex-col justify-start items-start" >
          <h2 className="text-black text-2xl md:text-4xl font-semibold p-4 cursor-pointer">Why Choose US?</h2>
          <div className="">
            {wcu.map((feat)=>{
              return(
                <div key={feat.id} className="py-2 text-black cursor-pointer">
                <h3 className="flex flex-row items-center justify-start text-xl font-semibold"><span className="px-2"><VscDebugBreakpointLog/></span>{feat.title}</h3>
                <h3 className="flex flex-row items-center justify-start text-md"><span className="px-2 text-transparent"><VscDebugBreakpointLog/></span>{feat.desc}</h3>
                </div>
              );
            })}
            </div>
        </div>
    </div>
    </section>

    {/* process */}
    <section className="md:py-12 py-3">
    <div className="mx-auto w-[95%] px-4 sm:px-6 lg:px-8">
        <h2 className="flex items-center text-black justify-center text-3xl md:text-4xl font-semibold p-4 cursor-pointer">How It Works?</h2>
        <ul className="mx-auto mt-6 md:mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-5">
          {process.map((feat)=>{
            return(
              <li key={feat.id} class="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-blue-200 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-blue-900 group-hover:text-white cursor-pointer">
                    <PiStarFourFill/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10 cursor-pointer">
                    <h3
                        className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        {feat.title}
                    </h3>
                    <h4 className="mt-2 text-base text-gray-700">{feat.desc}</h4>
                </div>
            </li>
            );
          })} 
            <li className="flex-start group relative flex lg:flex-col">
                <div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-blue-200 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-blue-900 group-hover:text-white">
                    <PiStarFourFill/>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Onboarding Support
                    </h3>
                    <h4 className="mt-2 text-base text-gray-700">Once a candidate is selected, we assist with the onboarding process to ensure a smooth integration into your team.</h4>
                </div>
            </li>
        </ul>
    </div>
</section>


    <section className="bg-gray-200">

    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 border-b border-slate-400">
          {/* left */}
          <div className="col-span-2 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-[#267CC3] sm:mt-4 pt-3">
              <TfiReload size={50} className="animate-spin p-1" />
              Executive Search
            </h1>
            <p className="text-lg text-[#4E4D4C]">
              We assist in identifying and recruiting senior-level executives
              and leaders who possess the expertise and vision to drive your
              organization forward. Our executive search services focus on
              finding exceptional talent that aligns with your strategic goals.
            </p>
          </div>

          {/* Right */}
          <div className="col-span-1 p-8 sm:pr-0 bg-gradient-to-r from-[#267CC3] to-indigo-200 ">
            <img src={WorkMenImage} alt="" className=" shadow-indigo-300 " />
          </div>
        </div>

        {/* Fourth section */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-gray-200">
          {/* left */}
          <div className="col-span-1 p-8 bg-gradient-to-r from-[#267CC3] to-indigo-200">
            <img src={WomenWorkImage} alt="" />
          </div>

          {/* Right */}
          <div className="col-span-1 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-sky-950">
              <MdManageAccounts
                size={70}
                color="blue"
                className="animate-pulse"
              />
              Managed Services{" "}
            </h1>
            <p className="text-lg text-sky-950 sm:pb sm:mb-10">
              We offer managed staffing solutions to handle the entire staffing
              process, from recruitment and onboarding to performance management
              and retention. Our managed services ensure a streamlined and
              efficient staffing experience for your organization.
            </p>
          </div>
        </div>

        {/* Fifth Section*/}
        <div id='section2' className="min-h-screen py-20">
          <div className="container mx-auto ">
            <h1 className="text-[3rem] text-[#267CC3] text-center font-bold font-headingFont mb-8 capitalize animate-bounce ">
              OUR IMPACT
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-8 gap-4 flex-wrap shadow-gray-60 shadow-border ">
              <div className=" p-4 row-span-8 flex justify-center shadow-lg flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100 hover:scale-125 transition-all ease-in">
                <RiUserSearchFill size={70} />
                <h1 className="text-orange-700 text-4xl">
                  {counterOn && <CountUp start={0} end={75} duration={10} />}+
                </h1>
                <p>active tech resources</p>
              </div>

              <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100  hover:scale-125 transition-all ease-in">
                <FaRegCalendarCheck size={50} />
                <h1 className="text-orange-700 text-4xl">
                  {counterOn && <CountUp start={0} end={5} duration={10} />}+
                </h1>
                <p>years of service</p>
              </div>

              <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100 hover:scale-125 transition-all ease-in">
                <IoIosPeople size={50} />
                <h1 className="text-orange-700 text-4xl hover:text-indigo-900">
                  {counterOn && <CountUp start={0} end={20} duration={10} />}+
                </h1>
                <p>active clients</p>
              </div>

              <div className="bg-gray-200 p-4 row-span-8 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100 hover:scale-125 transition-all ease-in">
                <LuClock2 size={50} />
                <h1 className="text-orange-700 text-4xl">
                  {counterOn && <CountUp start={0} end={200} duration={10} />}+
                </h1>
                <p>hours completed</p>
              </div>

              <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100 hover:scale-125 transition-all ease-in">
                <GiSkills size={50} />
                <h1 className="text-orange-700 text-4xl">
                  {counterOn && <CountUp start={0} end={50} duration={10} />}+
                </h1>
                <p>skills served</p>
              </div>

              <div className="bg-gray-200 p-4 row-span-4 flex justify-center flex-col items-center pd-4 bg-gradient-to-r from-[#267CC3] to-indigo-100 hover:scale-125 transition-all ease-in">
                <BsStars size={50} />
                <h1 className="text-orange-700 text-4xl">
                  {counterOn && <CountUp start={0} end={100} duration={10} />}+
                </h1>
                <p>active tech talent pool</p>
              </div>
              </div>
              </div>
        </div>
        </section>
    {/* CTA */}
    </>
  );
};

export default ServicesStaffing;
