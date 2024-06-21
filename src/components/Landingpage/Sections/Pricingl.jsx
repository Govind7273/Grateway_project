import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Pricingl = () => {
  return (
    <section className="bg-transparent">
      <div className="py-6 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-10">
          <h2 className="mb-3 text-MainHeading font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="mb-4 text-Paragraph">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-6 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
          {/* Starter Plan */}
          <div
            id="about"
            className="hover:cursor-pointer hover:scale-105 transition-transform flex flex-col p-5 mx-auto max-w-lg border-y-4 hover:border-x-2 border-x-[#4c9ddc] border-y-[#4c9ddc] rounded-xl text-center text-gray-900 hover:bg-white border bg-slate-50 border-gray-700 shadow relative"
          >
            <h3 className="mb-3 text-SubHeading text-[#4c9ddc] font-bold">
              Starter
            </h3>
            <p className="font-normal text-gray-500 sm:text-base">
              Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="mr-2 text-4xl font-extrabold">24,999</span>
              <span className="text-gray-500">/Project</span>
            </div>

            <ul
              role="list"
              className="mb-6 space-y-3 text-left text-sm sm:text-base"
            >
              {/* List items */}
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Basic project tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Up to 5 website pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>10 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Access to basic templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Standard support</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Email support</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>SEO basics package</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Monthly performance report</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>1 year of free website hosting</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Link
                to="/ContactUs"
                className="relative group inline-block w-full py-3 px-5 text-center text-gray-50 hover:text-black bg-gray-900 font-semibold rounded-full overflow-hidden transition duration-200"
              >
                <div className="absolute top-0 right-full w-full h-full bg-[#4c9ddc] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Get Now</span>
              </Link>
            </div>
          </div>
          {/* Pro Plan */}
          <div className="hover:cursor-pointer hover:scale-105 transition-transform relative flex flex-col p-5 mx-auto max-w-lg border-y-4 border-x-3 hover:border-x-2 border-x-blue-600 border-y-blue-600 rounded-xl text-center text-gray-900 border bg-white hover:bg-slate-50 border-gray-700 shadow">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-bl-xl rounded-tr-[8px]">
              Most Popular
            </div>
            <h3 className="mb-3 text-SubHeading text-blue-600 font-bold">
              Pro Plan
            </h3>
            <p className="font-normal text-gray-500 sm:text-base">
              Relevant for multiple users, extended & premium support.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="mr-2 text-4xl font-extrabold">49,999</span>
              <span className="text-gray-500">/Project</span>
            </div>
            <ul
              role="list"
              className="mb-6 space-y-3 text-left text-sm sm:text-base"
            >
              {/* List items */}
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Advanced project tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Up to 10 website pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>50 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Custom domain integration</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Access to premium templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>SEO advanced package</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Bi-weekly performance report</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>1 year of free website hosting</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Social media integration</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Basic e-commerce features</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link
                to="/ContactUs"
                className="relative group inline-block w-full py-3 px-5 text-center text-gray-100 bg-gray-900 font-semibold rounded-full overflow-hidden transition duration-200"
              >
                <div className="absolute top-0 right-full w-full h-full bg-blue-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Get Now</span>
              </Link>
            </div>
          </div>

          {/* Business Plan */}
          <div className="hover:cursor-pointer hover:scale-105 transition-transform relative flex flex-col p-5 mx-auto max-w-lg border-y-4 hover:border-x-2 border-x-[#4c9ddc] border-y-[#4c9ddc] rounded-xl text-center text-gray-900 hover:bg-white border bg-slate-50 border-gray-700 shadow">
            <h3 className="mb-3 text-SubHeading text-[#4c9ddc] font-bold">
              Business Plan
            </h3>
            <p className="font-normal text-gray-500 sm:text-base">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className="flex justify-center items-baseline my-6">
              <span className="mr-2 text-4xl font-extrabold">74,999</span>
              <span className="text-gray-500">/Project</span>
            </div>
            <ul
              role="list"
              className="mb-6 space-y-3 text-left text-sm sm:text-base"
            >
              {/* List items */}
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Comprehensive project suite</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Up to 20 website pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>100 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Advanced security features</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Custom software development tools</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>SEO premium package</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Weekly performance report</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>1 year of free website hosting</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Advanced e-commerce features</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Multilingual website support</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Personalized training session</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>Regular backups & maintenance</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link
                to="/ContactUs"
                className="relative group inline-block w-full py-3 px-5 text-center text-gray-50 bg-gray-900 hover:text-black font-semibold rounded-full overflow-hidden transition duration-200"
              >
                <div className="absolute top-0 right-full w-full h-full bg-[#4c9ddc]  transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Get Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricingl;
