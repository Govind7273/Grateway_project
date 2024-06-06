import React from 'react'
import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';

const Pricingl = () => {
  return (
    <section className="bg-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-600 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/*  */}
          <div id='about' className="hover:cursor-pointer hover:scale-105 transition-transform flex flex-col p-6 mx-auto max-w-lg border-y-4 hover:border-x-2 hover:border-x-blue-600 
          border-y-blue-700 rounded-xl text-center text-gray-900 hover:bg-white  border bg-slate-100 border-gray-700 shadow">

            <h3 className="mb-4 text-2xl text-blue-800 font-semibold">Starter</h3>
            <p className="font-light text-gray-500 sm:text-lg">Best option for personal use & for your next project.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">24,999</span>
              <span className="text-gray-500">/Project</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />

                <span>Basic project tools</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Up to 5 website pages</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>10 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Access to basic templates</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Standard support</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Email support</span>
              </li>
            </ul>
            <Link
               to="/ContactUs"
              className="relative group inline-block w-full py-4 px-6 text-center text-gray-50  bg-gray-900 font-semibold rounded-full overflow-hidden transition duration-200"
            >
              <div
                className="absolute top-0 right-full w-full h-full bg-orange-500 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
              ></div>
              <span className="relative">Get Now</span>
            </Link>
          </div>
          {/*  */}



          <div className="hover:cursor-pointer hover:scale-105 transition-transform relative flex flex-col p-6 mx-auto max-w-lg border-y-4 border-x-2 hover:border-x-2 border-x-orange-500 border-y-orange-500 rounded-xl text-center text-gray-900 border bg-white hover:bg-slate-100 border-gray-700 shadow">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-tr rounded-bl-xl ">Most Popular</div>
             <h3 className="mb-4 text-2xl text-blue-800 font-semibold">Pro Plan</h3> 
            
            <p className="font-light text-gray-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">49,999</span>
              <span className="text-gray-500">/Project</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
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
            </ul>
            <Link  to="/ContactUs" className="relative group inline-block w-full py-4 px-6 text-center text-gray-100 hover:text-gray-50 bg-gray-900 font-semibold rounded-full overflow-hidden transition duration-200">
              <div className="absolute top-0 right-full w-full h-full bg-orange-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">Get Now</span>
            </Link>
          </div>

          {/*  */}

          <div className="hover:cursor-pointer hover:scale-105 transition-transform flex flex-col p-6 mx-auto max-w-lg border-y-4 hover:border-x-2 hover:border-x-blue-600 
          border-y-blue-700 rounded-xl text-center text-gray-900 hover:bg-white  border bg-slate-100 border-gray-700 shadow">

            <h3 className="mb-4 text-2xl text-blue-800 font-semibold">Business Plan</h3>
            <p className="font-light text-gray-500 sm:text-lg">Best for large scale uses and extended redistribution rights.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">74,999</span>
              <span className="text-gray-500">/Project</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />

                <span>Comprehensive project suite</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Up to 20 website pages</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>100 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Advanced security features</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center space-x-3">

                <MdVerified className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                <span>Custom software development tools</span>
              </li>
            </ul>
            <Link
              to="/ContactUs"
              className="relative group inline-block w-full py-4 px-6 text-center text-gray-50 bg-gray-900 font-semibold rounded-full overflow-hidden transition duration-200"
            >
              <div
                className="absolute top-0 right-full w-full h-full bg-orange-500 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
              ></div>
              <span className="relative">Get Now</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pricingl;