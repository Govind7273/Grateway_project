"use client";
import React from "react";
import { motion } from "framer-motion";
import ClassRoom from "./Images/ClassRoom.jpg";
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="max-w-full h-full flex justify-center lg:pt-8 sm:pt-6 pt-20 flex-col items-center relative overflow-x-hidden">
      <motion.div
        animate={{ y: [-100, 0] }}
        className="flex absolute w-full max-w-[800px] flex-col sm:px-12 sm:py-12 z-40"
      >
        <motion.h1
          className="md:text-TopHeading text-TopHeading-sm sm:text-2xl text-center font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 50 }}>
          MOU Signed with Colleges
          </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-center text-xs md:text-lg text-slate-200 px-4 py-2 sm:px-5 sm:pt-6 font-semibold"
        >
          "We are excited to announce the signing of a Memorandum of
          Understanding with leading colleges. This partnership aims to foster
          collaboration, innovation, and shared opportunities. Together, we are dedicated to elevating educational and 
          professional experiences, paving the way for a future defined by excellence and growth."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="flex justify-center sm:pt-4"
        >
          <Link
            smooth
            to="targetsection"
            className="items-start w-fit bg-cyan-300 px-3 py-1 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out capitalize cursor-pointer"
          >
            Know More
          </Link>
        </motion.div>
      </motion.div>

      <div className="md:h-screen h-[50vh] w-full bg-black bg-cover">
        <img
          className="h-full w-full object-fill opacity-40"
          src={ClassRoom}
          alt="HeroSectionImage"
        />
      </div>
    </section>
  );
};

export default HeroSection;
