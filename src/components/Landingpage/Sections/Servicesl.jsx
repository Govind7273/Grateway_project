import React from "react";
import { Button } from "../../ui/moving-border";
import { motion } from "framer-motion";
import { fadein } from "../../../variants";
const cardData = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Tailor-made web development services that cater to your specific business needs, ensuring functionality, scalability, and a seamless user experience across various devices and platforms.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description:
      "Design websites that adapt seamlessly to any screen size or device, providing an optimal viewing experience and improved user engagement for desktop, tablet, and mobile users.",
  },
  {
    id: 3,
    title: "Website maintenance and support",
    description:
      "Ongoing maintenance and support to keep your website updated, secure, and running smoothly, including regular backups, software updates, and troubleshooting.",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Enhance your website's visibility on search engines like Google and Bing through comprehensive on-page and off-page SEO strategies to drive organic traffic and improve search rankings.",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Enhance your website's speed and performance through code optimization, image compression, caching techniques, and other best practices to ensure a fast, reliable user experience.",
  },
  {
    id: 6,
    title: "Web Hosting Services",
    description:
      "Reliable and secure web hosting solutions that provide the necessary resources, uptime, and support for your website, ensuring it remains accessible and performs well under varying traffic loads.",
  },
  {
    id: 7,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing services, including social media management, content marketing, PPC campaigns, and email marketing, designed to enhance your online presence and drive conversions.",
  },
  {
    id: 8,
    title: "Consultancy & Strategy",
    description:
      "Expert consulting services to develop and implement effective digital strategies, helping you achieve your business goals through informed decision-making and innovative solutions.",
  },
  {
    id: 9,
    title: "UI/UX Design",
    description:
      "User Interface (UI) and User Experience (UX) design services that focus on creating intuitive, visually appealing, and user-friendly interfaces, ensuring a satisfying experience for your website visitors.",
  },
];

const Card = ({ title, description }) => (
  <>
    <section className="px-4 py-8">
      {/* Our services cards*/}
      {/*  moving border */}
      <Button borderRadius="1px">
        {/* Main cards section */}
        <div className="w-full md:w-86  hover:cursor-pointer hover:scale-105 transition-transform  mx-auto p-1 bg-stone-50 py-10 border flex flex-col md:h-[50vh]">
          {/* Three Dots */}
          <div className="flex md:items-start justify-center md:justify-start p-2">
            <div className="px-1">
              <span className="w-4 h-4 rounded-full inline-block bg-cyan-500 cursor-pointer"></span>
            </div>
            <div className="px-1">
              <span className="w-4 h-4 rounded-full inline-block bg-[#BAD08C] cursor-pointer"></span>
            </div>
            <div className="px-1">
              <span className="w-4 h-4 rounded-full inline-block bg-black cursor-pointer"></span>
            </div>
          </div>
          {/* cards title description */}
          <div className=" dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex-grow flex flex-col justify-center">
            <div className="p-2 flex flex-col justify-center items-center flex-grow">
              <h3 className="font-bold text-CardHeading text-center">
                {title}
              </h3>
              <p className="mt-4 text-Paragraph text-center text-md">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Button>
    </section>
  </>
);

const Servicesl = () => {
  return (
    <main>
      {/* Rewamp section */}
      <section className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-4 relative">
        <motion.h2
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="font-headline md:text-MainHeading text-MainHeading-sm font-extrabold text-center py-5"
        >
          Revamp Your Website in Three Steps
        </motion.h2>
        <div className="grid sm:grid-cols-3 bg-stone-50 gap-16 sm:gap-10 py-3 shadow-lg shadow-gray-500 md:p-8">
          {/* Reimagine */}
          <div className="text-center hover:cursor-pointer hover:scale-105 transition-transform md:border-r-2 xs:border-b-2 border-[#4c9ddc] py-2 px-2">
            <div className="relative  w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full shadow-lg shadow-slate-500 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.9 "
                  stroke="currentColor"
                  className="text-cyan-700 w-1/2 h-1/2"
                  alt="Import icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#BAD08C] rounded-full"></div>
            </div>
            <h3 className="font-bold text-CardHeading mt-6 sm:mt-10">
              1. Reimagine
            </h3>
            <p className="leading-relaxed mt-4 text-Paragraph text-center px-2">
              Begin by envisioning the new look and visually captivating website
              that seamlessly blends aesthetics and functionality.
            </p>
          </div>
          {/* Redesign */}
          <div className="text-center hover:cursor-pointer hover:scale-105 transition-transform md:border-l-2 xs:border-b-2 py-2 md:border-r-2 border-[#4c9ddc]">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full shadow-lg shadow-slate-500 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.9"
                  stroke="currentColor"
                  className="text-cyan-700 w-1/2 h-1/2"
                  alt="Translate icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>{" "}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#BAD08C] rounded-full"></div>
            </div>
            <h3 className="font-bold text-CardHeading mt-6 sm:mt-10">
              2. Redesign
            </h3>
            <p className="leading-relaxed mt-4 text-Paragraph text-center px-2">
              Collaborate with your design and development team to give your
              website a fresh and modern design.
            </p>
          </div>
          {/* Relaunch */}
          <div className="text-center hover:cursor-pointer hover:scale-105 transition-transform md:border-l-2 xs:border-b-2 py-2 border-[#4c9ddc]">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full shadow-lg shadow-slate-500 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.9"
                  stroke="currentColor"
                  className="text-cyan-700 w-1/2 h-1/2"
                  alt="Export icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-[#BAD08C] rounded-full"></div>
            </div>
            <h3 className="font-bold text-CardHeading mt-6 sm:mt-10">
              3. Relaunch
            </h3>
            <p className="leading-relaxed mt-4 text-Paragraph text-center px-2">
              After the redesign, relaunch your website and welcome your
              audience to the new experience.
            </p>
          </div>
        </div>
      </section>
      {/* Our services map */}
      <section className="flex flex-col justify-center items-center h-full w-full">
        <motion.h1
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="p-2 py-4 text-MainHeading font-extrabold "
        >
          Our Services
        </motion.h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 h-full w-full">
          {cardData.map(({ id, title, description }) => (
            <Card key={id} title={title} description={description} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Servicesl;
