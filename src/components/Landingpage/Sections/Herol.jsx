import React from "react";
import hero from "../hero1.jpg";
import GTW from "../GTW.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

const words = `Next-Generation Web Development
for Modern Businesses`;
const Herol = () => {
  return (
    <>
      <div className="h-full w-full">
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
            <Link
              href={"/contact"}
              className="hover:bg-gray-400 p-3 rounded-xl font-bold shadow-md animate-pulse shadow-blue-400"
            >
              Reach Out
            </Link>
            <Link
              href={"/about"}
              className="hover:bg-gray-400 p-3 rounded-xl font-bold shadow-md animate-pulse shadow-blue-400"
            >
              About Us
            </Link>
          </div>
        </div>
        {/* Heading section */}
        <section className="h-full w-full relative">
          <div className="relative w-full h-[70vh] md:h-[75vh]">
            <img
              src={hero}
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
            <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col items-center justify-center h-full text-center text-white xl:text-left xl:flex-row">
                  <div className="w-full xl:pr-16">
                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-6xl sm:leading-none">
                      <TextGenerateEffect words={words} />
                    </h2>
                    <p className="max-w-xl mb-4 text-base sm:text-lg">
                      Partner with Us to Create User-Centric Websites that
                      Captivate Audiences and Drive Results. We transform your
                      vision into captivating websites.
                    </p>
                    <button className="px-8 py-2  motion-reduce:animate-bounce rounded-xl bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                      Discover us
                    </button>
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
