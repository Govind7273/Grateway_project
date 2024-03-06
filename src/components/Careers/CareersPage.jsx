import { useState } from "react";
import JobsCard from "./JobsCard";
import ModalForm from "./ModalForm";
import { Helmet } from "react-helmet-async";

const CareersPage = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
  
    <div className="md:pt-16 text-white overflow-x-hidden bg-slate-800 ">
      
      {/* First header section */}
      <div className="bg-[#f2ff8b]  gap-8 bg-[linear-gradient(45deg,_#f2ff8b_0%,_#2bd8ff_52%,_#2bffd4_90%)] flex flex-wrap flex-col md:flex-row justify-between items-center ">
        {/* left section */}
        <div className="flex-1 p-6 flex flex-wrap gap-6 flex-col">
          <h1 className="flex flex-col md:text-6xl text-2xl text-slate-800 font-headingFont font-extrabold">
            <span>Create a better</span>
            <marquee behavior="scroll" direction="left" scrollamount="30">#TomorrowWithUs</marquee>
          </h1>
          <p className="text-wrap flex flex-wrap md:text-xl text-md font-navlistFont text-slate-800 font-semibold">
            We believe that technology with purpose has the potential to solve
            the greatest challenges of our time. Join the team and unlock your
            future career with us.
          </p>
        </div>

        {/* Right section */}
        <div className="flex-1 w-[100%] h-[100%] flex justify-end bg-transparent ">
          <img
            className="bg-transparent h-[100%]"
            src="https://img.freepik.com/free-photo/3d-render-abstract-background-with-low-poly-plexus-design-nebula_1048-13110.jpg?size=626&ext=jpg&ga=GA1.1.1383068034.1707312047&semt=ais"
            alt=""
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-[100vw] flex flex-wrap justify-between items-center">
         <JobsCard setModal={setIsOpen}/>
      </div>

      {/* Modal Code */}
      {
        isOpen && <ModalForm setModal={setIsOpen} />
      }
    </div>
    </>
  );
};

export default CareersPage;
