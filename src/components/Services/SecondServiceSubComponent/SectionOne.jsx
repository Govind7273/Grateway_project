import { motion } from "framer-motion";

const SectionOne = ({ obj }) => {
  return (
    <>
      <section className="bg-slate-200">
        <div className="mt-[5rem] sm:mt-[4rem] w-[100%]">
          <div className="flex sm:flex-row">
            <div className="w-[100%] cursor-pointer">
              <img className="object-fill w-full" src={obj.imageUrl}></img>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
          >
            <div className="relative flex items-center justify-center sm:-translate-y-1/3">
              <div className="relative h-[10rem] w-[86%] lg:w-[70%] bg-blue-900  opacity-90">
                <div className="absolute inset-0 flex items-center justify-center text-center uppercase text-TopHeading-sm md:text-TopHeading opacity-100">{obj.content?.title}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="px-8 -top-8 relative text-Paragraph font-semibold text-center">{obj.content.description}</motion.div>
        </div>
      </section>
    </>
  )
}

export default SectionOne;