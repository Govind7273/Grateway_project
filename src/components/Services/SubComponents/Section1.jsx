import { fadein } from "../../../../src/components/Internship/variant";
import { motion } from "framer-motion";
import { TbRectangle } from "react-icons/tb";
import { Link } from "react-router-dom";


const Section1 = ({ obj }) => {
  const parentBg = `w-[100%] relative md:py-10 pt-28 flex justify-center items-center md:mt-10`;
  const subParentBG = `"w-[100%] p-2 md:p-10 grid md:grid-cols-2 grid-cols-1 gap-10 items-center ${obj.secondBgClass}`;
  return (
    <div
      id="section2"
      className={parentBg}>
      <div className={subParentBG}>
        {/* left or the image section of the first section */}
        <div className="col-span-1 rounded-xl  flex shadow-black shadow-lg justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="w-[100%] z-10 rounded-xl"
            src={obj.imageUrl}
            alt=""
          />
          <motion.div
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [360, 0, 0, 0, 0]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="text-blue-900 flex absolute z-0 left-0 top-[30px] text-[100px]">   <TbRectangle />
          </motion.div>
        </div>

        {/* right or content section of the first section */}
        <div
          className="flex justify-end">
          <div className="flex absolute flex-col mt-[-70px] z-0">
            <div className="from-blue-50 via-blue-900 to-cyan-700 bg-gradient-to-t  h-16 w-16 rounded-br-full rounded-tl-full"></div>
            <div className="to-blue-50  via-blue-900 from-cyan-700 bg-gradient-to-t sm:h-8 h-4 sm:w-8 w-4 rounded-bl-full rounded-tr-full"></div>
          </div>
          <div className="col-span-1 py-6 md:py-0 w-full grid  grid-cols-1 justify-center items-center ">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-MainHeading mb-4 font-headingFont  text-center md:text-start font-bold ">
              {obj.content.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-Paragraph font-navlistFont md:text-start text-center font-semibold">{obj.content.message}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="flex md:justify-start py-3 justify-center sm:pt-4">
              <Link to={`/ContactUs`} className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border">
                Connect with Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1