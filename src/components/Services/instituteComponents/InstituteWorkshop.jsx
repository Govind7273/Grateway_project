import React from "react";
import { Link } from "react-router-dom";
import work1 from "./images/work1.jpg";
import work2 from "./images/work2.jpg";
import work3 from "./images/work3.jpg";
import work4 from "./images/work4.jpg";
import { motion } from "framer-motion";
const InstituteWorkshop = () => {
  return (
    <div class="bg-white  h-full py-6 sm:py-8 lg:py-8">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center flex-col justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              class="text-MainHeading font-bold">
              Unlock Your Creativity with Our Workshops
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"

              }}
              class=" max-w-screen-lg text-Paragraph text-center md:block">
              At Greateway, we believe that learning should be an engaging and
              transformative experience. Our college workshops are designed to
              ignite creativity, foster innovation, and enhance practical
              skills.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
          >
            <Link
              to={"/ContactUs"}
              className="block w-[60%] rounded bg-[#67e8f9] px-12 py-3 text-sm font-medium transition-all ease-in text-black shadow hover:bg-[#58d2e2] focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
            >
              Connect With Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img
              src={work1}
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img
              src={work2}
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img
              src={work3}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <div class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img
              src={work4}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
          </div>
          {/* <!-- image - end --> */}
        </motion.div>
      </div>
    </div>
  );
};

export default InstituteWorkshop;
