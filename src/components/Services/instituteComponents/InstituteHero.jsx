import React from "react";
import { Link } from "react-router-dom";
import clgImage from "./images/clgHero.jpg";
import { motion } from "framer-motion";
const InstituteHero = () => {
  return (
    <>
      <section className="relative w-full md:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${clgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-55 z-0"></div>

        <div className="relative z-10 flex items-center justify-start h-full px-4 py-32 sm:px-6 lg:px-8">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-3xl font-extrabold sm:text-5xl text-white">
              We Make Students Truly
              <strong className="block font-extrabold text-[#67e8f9]">
                Job Ready.
              </strong>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="mt-4 max-w-lg sm:text-xl text-white">
              We make students truly job-ready by providing practical training,
              hands-on experience, and industry-relevant education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"

              }}
              className="mt-8 flex flex-wrap gap-4 justify-start sm:justify-start">
              <Link
                to={"/ContactUs"}
                className="block w-[60%] rounded bg-[#67e8f9] px-12 py-3 text-sm font-medium transition-all ease-in text-black shadow hover:bg-[#58d2e2] focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
              >
                Connect With Us
              </Link>
              <Link
                to={"/AboutUs"}
                className="block w-[60%] rounded bg-[#67e8f9] px-12 py-3 text-sm font-medium transition-all ease-in text-black shadow hover:bg-[#58d2e2] focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
              >
                About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstituteHero;
