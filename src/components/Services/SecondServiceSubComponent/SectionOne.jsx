import { motion } from "framer-motion";

const SectionOne = ({obj}) => {
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
          animate={{
            y: ['-100%', '0%'],
            transition: {
                duration: 1,
            }
          }}
         >
        <div className="relative flex items-center justify-center sm:-translate-y-1/3">
          <div className="relative h-[10rem] w-[86%] lg:w-[70%] bg-blue-900  opacity-90">
          <div className="absolute inset-0 flex items-center justify-center p-10 text-center uppercase text-TopHeading-sm md:text-TopHeading opacity-100 cursor-pointer">{obj.content?.title}</div>
          </div>
        </div>
        </motion.div> 
        <div className=" p-4 sm:px-4 md:px-[5rem] lg:px-[10rem] sm:pb-20 text-Paragraph font-semibold text-center cursor-pointer">{obj.content.description}</div>
      </div>
    </section>
    </>
  )
}

export default SectionOne;