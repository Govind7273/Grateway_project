import { motion } from "framer-motion";
import { fadein } from "../../../../src/components/Internship/variant";

const Section4 = ({obj}) => {
  return (
    <div
     className="relative w-[100%] bg-white flex justify-center items-center">
      <span className="absolute  bottom-0 right-40 w-[100px] h-[150px] bg-orange-50 rounded-xl -rotate-45"></span>
      <span className="absolute  bottom-0 right-0 w-[150px] h-[200px] bg-blue-50 rounded-xl rotate-45"></span>
        <div className="w-[100%] relative md:py-10 py-10 px-10 grid md:grid-cols-2 grid-cols-1 gap-10 justify-items-center items-center ">
             {/* left side */}
             <div className="col-span-1 rounded-xl shadow-black shadow-sm">
                <img className="w-[100%] max-h-96 cursor-pointer rounded-xl" src={obj.imageUrl} alt="" />
             </div>

             {/* right side */}
             <div className="z-10 px-5 py-5 flex col-span-1 flex-col gap-4">

                <motion.h3 
                 variants={fadein("left", 0.1)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once:false, amount: 0.5 }}
                 className="font-headingFont text-cyan-600 font-bold text-3xl">
                  {obj.content.heading}
                </motion.h3>

                <motion.p
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once:false, amount: 0.5 }}
                  className="font-navlistFont text-md text-gray-800 ">
                  {obj.content.description}
                </motion.p>

              <ul className="text-gray-800 flex flex-wrap font-headingFont">
                {
                  obj.content.list?.map((item)=>(
                    <motion.li
                     variants={fadein("left", 0.1)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once:false, amount: 0.5 }}
                     className="border border-gray-700 my-2 mx-4 px-6 py-1 rounded-xl" 
                     key={Math.random()}>{item}
                    </motion.li>
                  ))
                }
              </ul>
             </div>
             
            
        </div>
      </div>
  )
}

export default Section4