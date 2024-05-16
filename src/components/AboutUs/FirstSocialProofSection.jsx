import { FaHandshake } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const FirstSocialProofSection = () => {

  const[counterOn, setCounterOn]= useState(false);
  return (
    <div className="mt-10 sm:mt-20  md:h-[230px] h-[400px] overflow-hidden relative sm:p-4 bg-transparent  flex items-center justify-center w-[100vw]">
      
      {/* content */}
      <div className="w-[100%] md:h-[230px] h-[400px] z-10 flex-wrap gap-4 text-white flex justify-around items-center">
        
          <div className="flex flex-col gap-2 justify-center items-center hover:scale-110 cursor-pointer">
            <span className=" text-5xl"><FaHandshake/></span>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <h1 className="text-4xl font-headingFont font-bold">
              {counterOn && <CountUp start={0} end={4} duration={4} delay={0}/>}
              +
            </h1>
            </ScrollTrigger>
            <p className="text-xl font-headingFont font-bold">
            Years In Helping Business
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center hover:scale-110 cursor-pointer">
            <span className="text-5xl"><FaUsers/></span>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <h1 className="text-4xl font-headingFont font-bold">
              {counterOn && <CountUp start={0} end={30} duration={4} delay={0}/>}
              +
            </h1>
            </ScrollTrigger>
            <p className="text-xl font-headingFont font-bold">
            Employees
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center hover:scale-110 cursor-pointer">
            <span className="text-5xl"><MdLibraryAddCheck/></span>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <h1 className="text-4xl font-headingFont font-bold">
              {counterOn && <CountUp start={0} end={12} duration={4} delay={0}/>}
              +
            </h1>
            </ScrollTrigger>
            <p className="text-xl font-headingFont font-bold">
            Complete Projects
            </p>
          </div>
        
      </div>
        {/* bg image */}
      <span className="imgPara w-[100%] absolute md:h-[230px] h-[400px] z-0">
        
      </span>
    </div>
  );
};
