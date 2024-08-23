import { motion } from "framer-motion";
 const SecondSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: "easeInOut"
      }}
      className="flex w-[90%]  flex-wrap gap-10 sm:p-6 sm:mt-10 bg-slate-200">
      {/* right side part */}
      <div className="flex-1 w-[90%] md:w-[50%] items-center flex justify-center flex-col gap-2 md:gap-10 ">
        {/* heading of component */}
        <h1 className="text-MainHeading-sm md:text-MainHeading text-center font-bold pt-4 md:p-4 cursor-pointer">
          Our Corporate Social Responsibility
        </h1>

        {/* paragraph */}
        <p className="text-Paragraph text-center cursor-pointer">
          Corporate Social Responsibility (CSR) holds significant importance for IT companies, providing them with the unique opportunity to use their technological capabilities and influence to benefit society and the environment. Here are several key areas where IT companies can concentrate their CSR initiatives
        </p>
      </div>
    </motion.div>
  );
};
export default SecondSection;