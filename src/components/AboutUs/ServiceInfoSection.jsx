import { motion } from "framer-motion";
import head from "./images/head.jpg";

export const ServiceInfoSection = () => {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: "easeInOut",
          }}
          className='relative'>
          <div className="bg-blue-900 w-[20rem] h-[12rem] sm:h-[8rem] sm:w-[40rem] md:w-[50rem] md:h-[14rem] lg:h-[10rem] lg:w-[70rem] flex flex-col items-center justify-center px-[1rem] md:px-[5rem] opacity-90 -translate-y-1/2"></div>
          <h1 className="absolute inset-0 text-TopHeading-sm px-4 sm:p-4 md:text-TopHeading font-extrabold -translate-y-1/2">
            Delivering high-quality IT services to your business is our commitment.
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};