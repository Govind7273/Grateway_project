import { motion } from "framer-motion";
import { fadein } from "../../../../src/components/Internship/variant";
import { Link } from "react-router-dom";

const Section5 = ({ obj }) => {
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
            viewport={{ once: false, amount: 0.5 }}
            className="text-MainHeading font-headingFont font-bold">
            {obj.content.heading}
          </motion.h3>

          <motion.p
            variants={fadein("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="text-md font-navlistFont text-Paragraph">
            {obj.content.description}
          </motion.p>

          <ul className="text-gray-800 flex flex-wrap font-headingFont">
            {
              obj.content.list?.map((item) => (

                <motion.li
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="border border-gray-700 my-2 mx-4 px-6 py-1 rounded-xl text-Paragraph"
                  key={Math.random()}>{item}
                </motion.li>
              ))
            }
          </ul>
        </div>

        {/* Right side of the section */}
        <div className="z-10 w-[100%] h-fit flex-1 flex justify-center items-center rounded-xl shadow-black shadow-lg">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="w-[100%] h-auto rounded-xl"
            src={obj.imageUrl}
            alt=""
          />
        </div>
      </div>

      <section className="py-10 md:w-[75%] w-[90%]">

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className="container flex flex-col md:flex-row gap-5 bg-white items-center justify-between py-5 px-6 rounded-tr-[20%] rounded-bl-[20%]">
          <h2 className="text-MainHeading font-medium">Discover what we can do for you.</h2>

          <Link to="/ContactUs" className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border">
            Contact Us
          </Link>
        </motion.div>
      </section>

    </main>
  )
}

export default Section5