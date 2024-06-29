import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const SectionThree = ({ obj }) => {

  return (
    <>
      <section className="bg-slate-200">
        <div className="flex items-center justify-center">
          <div className="w-[90%] my-4">

            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="font-bold text-MainHeading-sm md:text-MainHeading cursor-pointer">
              Expertise We Offer
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-x-8 md:gap-y-12 gap-y-6 my-8">
              {obj.cards.map((item) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.5 },
                    ease: "easeInOut"
                  }}
                  key={Math.random()} className="flex items-center gap-2  justify-start group hover:-translate-y-2 hover:scale-105 hover:bg-blue-200 hover:shadow-[5px_5px_30px] transition-all duration-300 ease-linear hover:shadow-violet-400 pr-2 rounded-[5px] hover:cursor-pointer border border-blue-900 border-r-4 border-r-[#67e8f9] cursor-pointer">
                  {/* icon */}
                  <FontAwesomeIcon icon={item.icon} className="text-5xl md:text-7xl text-blue-950 bg-[#67e8f9] group-hover:bg-[#4bdcef] p-6 cursor-pointer rounded-[5px]" />
                  {/* heading */}
                  <h3 className="text-CardHeading-sm md:text-CardHeading font-semibold ">{item.text}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default SectionThree;
