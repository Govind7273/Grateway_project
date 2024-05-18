import { motion } from "framer-motion";
import { fadein } from "../../../../src/components/Internship/variant";
import { Link } from "react-router-dom";

const Section5 = ({obj}) => {
  return (
    <main
    id="section3"
     className="w-[100%] relative sm:pt-10 px-10 flex flex-col justify-center items-center p-4 bg-stone-100 ">
        <div className="relative  w-[100%] md:py-10 py-4 flex  flex-wrap md:flex-row flex-col gap-10">
          {/* left side of the section */}
          <div className="z-10 w-[100%] px-5 flex-1 flex flex-col justify-center gap-4">

            <motion.h3
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once:false, amount: 0.5 }}
              className="text-3xl font-headingFont text-violet-700 font-bold">
              {obj.content.heading}
            </motion.h3>

            <motion.p
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once:false, amount: 0.5 }} 
              className="text-md font-navlistFont text-gray-800 ">
              {obj.content.description}
            </motion.p>

            <ul className="text-gray-800 flex flex-wrap font-headingFont">
             {
              obj.content.list?.map((item)=>(

                <motion.li 
                  variants={fadein("right", 0.1)}
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

          {/* Right side of the section */}
          <div className="z-10 w-[100%] h-fit flex-1 flex justify-center items-center rounded-xl shadow-black shadow-lg">
            <img
              className="w-[100%] h-auto cursor-pointer rounded-xl"
              src={obj.imageUrl}
              alt=""
            />
          </div>
        </div>

        <section className="py-10 md:w-[60%] w-[90%]">
        
          <div className="container flex flex-col md:flex-row gap-5 bg-white items-center justify-between py-5 px-6 rounded-tr-[20%] rounded-bl-[20%]">
            <h2 className="text-MainHeading-sm font-light text-gray-800">Discover what we can do for you.</h2>
             
            <Link to="/ContactUs" className="bg-blue-900  hover:bg-blue-800 w-fit text-white py-2 px-6 rounded-xl focus:outline-none focus:shadow-outline">
             Contact Us
            </Link>
          </div>
        </section>
       
    </main>
  )
}

export default Section5