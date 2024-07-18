import { motion } from "framer-motion";
const SectionTwo = ({ obj }) => {

  return (
    <>
      <section className="bg-slate-200">
        <div className="flex items-center justify-center">
          <div className="w-[100%] px-4 py-4 pt-6 sm:pt-0">

            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-MainHeading capitalize md:text-MainHeading font-bold cursor-pointer text-center">
              Why to choose us for premium {obj.titleName} Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-Paragraph font-semibold cursor-pointer py-2 text-center">
              {obj.description}
            </motion.p>

            <div className="flex flex-wrap items-center justify-center pt-10 gap-6 md:gap-0">
              {obj.circleItems?.map((item) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut"
                  }}
                  className="flex flex-col items-center justify-center w-[100%] md:w-1/3 p-2 group hover:bg-blue-200 hover:scale-105 rounded-3xl cursor-pointer">
                  <img className="rounded-3xl " src={item?.image}></img>
                  <h4 className="text-CardHeading py-2 sm:text-CardHeading md:h-[4.5rem] lg:h-full">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default SectionTwo;
