import cta from "./images/cta.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <div className="relative flex flex-col md:bottom-8 lg:flex-row items-center justify-center sm:py-[2rem] lg:translate-x-40">
      <div className="relative ">
        <img
          className="object-contain opacity-95 cursor-pointer rounded-xl"
          src={cta}
          height={1000}
          width={2000}
        ></img>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.5 },
          ease: "easeInOut",
        }}
        className=" flex items-center justify-center "
      >
        <div className=" relative flex flex-col items-start justify-center text-left bg-[#b3cb80] p-6 md:-translate-y-1/2 lg:translate-y-0 md:-mb-[10rem] lg:mb-0 lg:-translate-x-1/2 cursor-pointer hover:scale-105 transition-all ease-linear rounded-xl">
          <h2 className="text-MainHeading-sm md:text-MainHeading font-bold">
            Ready to experience software solutions that redefine excellence?{" "}
          </h2>
          <p className="text-Paragraph-sm md:text-Paragraph pt-6">
            Contact us today to discover how our expert team can transform your
            vision into reality.
          </p>
          <p className="text-Paragraph-sm md:text-Paragraph py-6">
            {" "}
            Let's collaborate to unlock the full potential of your business with
            cutting-edge software solutions tailored to your unique needs. Reach
            out now to start your journey towards innovation and success.
          </p>
          <div className="relative flex group">
            <Link to={"/ContactUs"}>
              <button className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border">
                <span className="">Contact US</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default CTA;
