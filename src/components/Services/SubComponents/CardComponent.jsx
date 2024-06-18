import { motion } from "framer-motion";

const CardComponent = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.5 },
        ease: "easeInOut"
      }}
      className="h-full w-[100%] pb-2 flex flex-col justify-between bg-white rounded-xl text-slate-700 shadow-lg shadow-gray-900 transition-all duration-200 ease-linear">
      <img className="w-[100%] lg:h-40 h-auto rounded-t-xl" src={card.imageUrl} alt="" />
      <div className="-mt-5 w-full h-full bg-white  rounded-t-3xl flex flex-col px-2 justify-between items-center py-6 gap-4">
        <h2 className="text-CardHeading text-xl text-center font-headingFont font-semibold">{card.heading}</h2>
        <p className="text-[14px] text-center font-navlistFont text-black">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CardComponent;
