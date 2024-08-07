import React from "react";
import hero from "../hero1.jpg";
import GTW from "../../Navbar/images/GTW.png";
import { HashLink as Link } from "react-router-hash-link";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { motion } from "framer-motion";
import { fadein } from "../../../variants";
const words = `Next-Generation Web Development
for Modern Businesses`;

const Herol = () => {
  return (
    <>
      {/* Main section */}
      <div className="h-auto w-full">
        {/* Navbar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-center ">
            <div className="flex md:items-center justify-center text-3xl text-true-gray-800">
              <div className="px-6 py-1">
                <Link href="/">
                  <img src={GTW} alt="" className="w-[150px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 justify-center px-2">
            <a smooth href="https://greateway.com/AboutUs">
              <button className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border">
                About Us
              </button>
            </a>
            <a
              href="https://greateway.com/ContactUs"
              className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border"
            >
              Connect with us
            </a>
          </div>
        </div>
        {/* Heading section */}
        <section className="h-full w-full relative">
          <div className="relative w-full h-[70vh] md:h-[90vh]">
            <img
              src={hero}
              className="absolute inset-0 object-cover w-full h-full"
              alt="hero img"
            />
            <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="px-4 mx-auto md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-center h-full text-center text-white xl:text-left xl:flex-row">
                  <div className="w-full">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-6xl sm:leading-none">
                      <TextGenerateEffect words={words} />
                    </h2>
                    <motion.p
                      variants={fadein("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="mb-4 text-Paragraph text-white text-center"
                    >
                      Partner with Us to Create User-Centric Websites that
                      Captivate Audiences and Drive Results. We transform your
                      vision into captivating websites.
                    </motion.p>
                    <div className="flex justify-center items-center">
                      <a href="https://greateway.com/  ">
                        <button className="items-start w-fit bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border">
                          Discover us
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Herol;
