import React from "react";
import hero from "../hero1.jpg";
import GTW from "../GTW.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";

const Herol = () => {
  return (
    <>
      <div className="h-full w-full">
        {/* Navbar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-center ">
            <div className="flex md:items-center justify-center text-3xl  text-true-gray-800">
              <div className="px-6 py-2">
                <Link href="/">
                  <img src={GTW} alt="" className="w-[150px]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Link
              href={"/contact"}
              className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
            >
              Reach Out
            </Link>
            <Link
              href={"/about"}
              className="px-6 py-3 rounded-3xl font-medium text-orange outline-none focus:outline-none shadow-md from-true-gray-900 transition duration-200 ease-in-out"
            >
              About Us
            </Link>
          </div>
        </div>
        {/* Heading section */}
        <section className="h-full w-full">
          <section className="w-full  dark:from-gray-800 dark:to-gray-900">
            <div className="container grid items-center justify-center gap-6 md:py-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Next-Generation Web Development for Modern Buisnesses
                </h2>
                <p className="max-w-[600px] text-[#6B37BD] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Schedule a consultation with our data experts to unlock the
                  full potential of your data and drive your business forward.
                </p>
                <Button
                  href="/ContactUs"
                  className="inline-flex h-10 items-center justify-center rounded-3xl bg-gray-900 px-8 text-sm font-medium text-gray-50 hover:text-violet-500 shadow transition-colors hover:bg-transparent focus-visible:outline outline focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Schedule Consultation
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[url('/subtle-pattern.svg')] bg-repeat opacity-20 dark:opacity-30" />
                <img
                  src={hero}
                  width="550"
                  height="310"
                  alt="Analytics"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Herol;
