"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Firstsection() {
  const images = [
    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?t=st=1715511183~exp=1715514783~hmac=254b4754a838fc3cd6b3bfa4c16d8edb5efd5f4ca3ea742ea2be32a00f6ee8b6&w=900",
    "https://img.freepik.com/free-photo/shiny-night-city_1127-8.jpg?t=st=1715511290~exp=1715514890~hmac=d583c4b68e4613eb7ac77d998af9bcae2903dba6293af63edf45e1b48e7648d1&w=900",
    "https://img.freepik.com/free-photo/modern-business-building-with-glass-wall-from-empty-floor_1127-3091.jpg?t=st=1715511346~exp=1715514946~hmac=5af31894d2b04c194037e4228d1d63b27ffe338cf3fa3e9ad93271a772dd0de1&w=740",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
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
}
