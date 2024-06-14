import React from "react";
import { Link } from "react-router-dom";
import work1 from "./images/work1.jpg";
import work2 from "./images/work2.jpg";
import work3 from "./images/work3.jpg";
import work4 from "./images/work4.jpg";

const InstituteWorkshop = () => {
  return (
    <div class="bg-white  h-full py-6 sm:py-8 lg:py-8">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center flex-col justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center flex-col gap-4">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
              Unlock Your Creativity with Our Workshops
            </h2>

            <p class=" max-w-screen-lg text-gray-500 md:block">
              At Greateway, we believe that learning should be an engaging and
              transformative experience. Our college workshops are designed to
              ignite creativity, foster innovation, and enhance practical
              skills.
            </p>
          </div>

          <Link
            to={"/ContactUs"}
            className="block w-full rounded bg-blue-600  px-12 py-3 text-center text-sm font-medium transition-all ease-in text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
          >
            Connect With Us
          </Link>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default InstituteWorkshop;
