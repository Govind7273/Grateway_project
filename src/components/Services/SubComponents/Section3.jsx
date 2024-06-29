import { motion } from "framer-motion";
import { fadein } from "../../../../src/components/Internship/variant";

const Section3 = ({ obj }) => {
  return (
    <div
      className="w-[100%]  relative flex flex-col justify-center items-center bg-white">
      <span className="absolute left-0 mt-72 w-[100px] h-full bg-cyan-50 rounded-xl rotate-45"></span>
      <div className="relative  w-[100%] px-10 -mt-14 md:py-10 py-5 flex from-blue-200 via-blue-50 to-blue-300 bg-gradient-to-t rounded-bl-full rounded-tr-full flex-wrap md:flex-row flex-col gap-10">
        <div className="absolute h-full right-0 -mt-10 w-[90%] px-10  md:py-10 py-5 flex from-blue-100 via-blue-50 to-blue-50 bg-gradient-to-t rounded-bl-full rounded-tr-full flex-wrap md:flex-row flex-col gap-10"></div>
        {/* left side of the section */}
        <div className="z-10 w-[100%] px-5 py-5 flex-1 flex flex-col justify-center md:items-start items-center gap-4">

          <motion.h3
            variants={fadein("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-MainHeading font-headingFont font-bold">
            {obj.content.heading}
          </motion.h3>

          <motion.p
            variants={fadein("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-Paragraph font-navlistFont">
            {obj.content.description}
          </motion.p>

          <ul className=" text-gray-800 flex flex-wrap font-headingFont  ml-0">
            {obj.content?.list.map((item) => (

              <motion.li
                variants={fadein("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-gray-700 text-Paragraph my-2 mx-4 px-6 py-1 rounded-xl" key={Math.random()}>{item}</motion.li>
            ))}
          </ul>
        </div>

        {/* Right side of the section */}
        <div className="z-10 w-[100%] flex-1 flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="w-[100%] rounded-xl"
            src={obj.imageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
