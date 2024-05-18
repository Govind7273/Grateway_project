import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import React from "react";

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function TelecomIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function NewspaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2c3493"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
export const Secondsection = () => {
  return (
    <>
      {/*Our Solutions*/}
      <section className="w-full md:h-[30vh] h-[20vh] py-12 md:py-24 lg:py-16 overflow-x-hidden overflow-y-hidden">
        <div className="container  px-4 md:px-6">
          <div className=" text-center">
            <motion.h1
              variants={fadein("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#504d69]"
            >
              Our solutions are tailored to meet the unique needs of businesses
              across a wide range of industries.
            </motion.h1>
          </div>
        </div>
      </section>
      {/*Whole card section*/}
      <section className="w-full md:py-24 lg:py-10 bg-gray-200 dark:bg-gray-800 overflow-x-hidden px-3">
        <div className="py-10 px-2">
          <motion.h1
            variants={fadein("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:text-4xl text-center font-bold text-3xl text-[#504d69]"
          >
            Discover Solution For Your Industry
          </motion.h1>
        </div>
        {/*Sub card section*/}
        <div className="container pb-5 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {/*Construction below */}
          <motion.div
            variants={fadein("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className=" group relative overflow-hidden rounded-lg bg-white shadow-md hover:cursor-pointer transition-all ease-linear hover:shadow-xl hover:scale-125 dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <BuildingIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4 ">
              <h3 className=" text-center text-CardHeading font-bold ">
                Construction
              </h3>
              <p className="mt-2 text-Paragraph-sm line-clamp-3 dark:text-gray-400">
                Your trusted partner for construction IT, delivering reliability
                and innovation, Maximizing construction project success through
                strategic IT implementations.
              </p>
            </div>
          </motion.div>
          {/*Banking below */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <BriefcaseIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4">
              <h3 className="text-center text-CardHeading font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                Banking
              </h3>
              <p className="mt-2 text-Paragraph-sm line-clamp-3 dark:text-gray-400">
                From online banking to mobile payments, we enable seamless
                customer experiences, Transforming banking compliance and risk
                management.
              </p>
            </div>
          </motion.div>
          {/*field Services below*/}
          <motion.div
            variants={fadein("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <TruckIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4">
              <h3 className="text-center text-CardHeading font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                Field Services
              </h3>
              <p className="mt-2 text-Paragraph-sm  line-clamp-3 dark:text-gray-400">
                Streamlining field service workflows with custom-built IT
                solutions, Enabling real-time communication and collaboration for
                field service teams.
              </p>
            </div>
          </motion.div>
          {/*Pharmaceutical below */}
          <motion.div
            variants={fadein("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <BeakerIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4">
              <h3 className="text-center text-CardHeading font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                Pharmaceutical
              </h3>
              <p className="mt-2 text-Paragraph-sm line-clamp-3 dark:text-gray-400">
                Maximizing efficiency in manufacturing and supply chain
                management with IT innovation, Enabling personalized medicine and
                patient care with tailored IT services.
              </p>
            </div>
          </motion.div>
          {/*Professional services below */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <NewspaperIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4">
              <h3 className="text-center text-CardHeading font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                Professional Services
              </h3>
              <p className="mt-2 text-Paragraph-sm  line-clamp-3 dark:text-gray-400">
                Transforming professional services operations with cutting-edge
                technology, Driving efficiency and profitability in professional
                services through advanced IT services.
              </p>
            </div>
          </motion.div>
          {/*finance Below */}
          <motion.div
            variants={fadein("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              amount: 0.1,
            }}
            className=" group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950"
          >
            <div className="flex h-24 items-center justify-center bg-gray-100 p-4 dark:bg-gray-800">
              <TelecomIcon className="h-8 w-8  group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
            </div>
            <div className="p-4">
              <h3 className="text-center text-CardHeading font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                Finance
              </h3>
              <p className="mt-2 text-Paragraph-sm  line-clamp-3 dark:text-gray-400">
                Ensuring security and compliance in financial IT systems, From
                banking to investments, we optimize every aspect with IT
                excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Secondsection;
