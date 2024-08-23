"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import build1 from "../Indrustry/images/build1.jpg";
import build2 from "../Indrustry/images/build2.jpg";
import build3 from "../Indrustry/images/build3.jpg";

 const Firstsection = () => {
  const images = [build1, build2, build3];
  return (
    <ImagesSlider className="md:h-[100vh] h-[70vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <br />
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
};
export default Firstsection;