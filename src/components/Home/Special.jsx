import React from "react";
import Quality from "./assets/image/quality.png";
import Solution from "./assets/image/Solution.png";
import Team from "./assets/image/Team.png";
import ClientCentric from "./assets/image/ClientCentric.png";
import Communication from "./assets/image/Communication.png";
import Track from "./assets/image/Track.png";
import Methodology from "./assets/image/Methodology.png";
import Improvement from "./assets/image/Improvement.png";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";

const best = [
  {
    id: 1,
    img: Team,
    title: "Expert Team",
  },
  {
    id: 2,
    img: ClientCentric,
    title: "Client-Centric Approach",
  },
  {
    id: 3,
    img: Quality,
    title: "Quality Assurance",
  },
  {
    id: 4,
    img: Solution,
    title: "Innovative Solutions",
  },
  {
    id: 5,
    img: Communication,
    title: "Transparent Communication",
  },
  {
    id: 6,
    img: Track,
    title: "Proven Track Record",
  },
  {
    id: 7,
    img: Methodology,
    title: "Agile Methodology",
  },
  {
    id: 8,
    img: Improvement,
    title: "Continuous Improvement",
  },
]

const Special = () => {
  return (
    <>
      <section className="text-gray-700 body-font bg-slate-100 md:p-2 p-4">
        <motion.div variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="heading flex justify-center items-center py-5">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold">Why we are best</h1>
        </motion.div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {best?.map((item) => (
              <motion.div
                className="md:p-1 md:w-1/4 sm:w-1/2"
                key={item.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="md:px-4 md:py-6">
                  <div className="flex justify-center items-center">
                    <motion.img
                      src={item.img}
                      alt="Rates"
                      className="mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h2 className="md:text-CardHeading text-CardHeading-sm font-bold text-center">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
