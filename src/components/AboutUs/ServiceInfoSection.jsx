import { motion } from "framer-motion";
import head from "./images/head.jpg";

 export const  ServiceInfoSection=()=> {
    return (
      <div className="flex flex-col items-center justify-center">

      <div className='relative flex mt-[2rem] sm:mt-0 lg:mt-[-10rem] h-full lg:h-[50rem] overflow-hidden items-center justify-center'>
          <img className='object-fill lg:mt-[20rem]' src={head} ></img>
          <span className="absolute inset-0 bg-gradient-to-br from-blue-950 via-transparent to-transparent opacity-100"></span>            
          
        </div>
        <motion.div 
          animate={{
            y: ['-100%', '0%'],
            transition: {
                duration: 1,
            }
          }}
         >
        <div className='relative'>
          <div className="bg-blue-900 w-[20rem] h-[12rem] sm:h-[8rem] sm:w-[40rem] md:w-[50rem] md:h-[18rem] lg:h-[14rem] lg:w-[70rem] flex flex-col items-center justify-center px-[1rem] md:px-[5rem] opacity-90 -translate-y-1/2"></div>
          <h1 className="absolute inset-0 text-TopHeading-sm px-4 sm:p-4 md:p-12 md:text-TopHeading cursor-pointer -translate-y-1/2">
            Providing your business with a quality IT service is our passion.
          </h1>
        </div>
        </motion.div>
      </div>
    );
  };