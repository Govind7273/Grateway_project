import React from "react";
import { Link } from "react-router-dom";

const InstituteHero = () => {
  return (
    <>
      <section className="relative bg-[url(https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-2xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We Make Students Truly
              <strong className="block font-extrabold text-blue-900">
                {" "}
                Job Ready.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              We make students truly job-ready by providing practical training,
              hands-on experience and industry-relevant education.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/ContactUs"}
                className="block w-full rounded bg-blue-600  px-12 py-3 text-sm font-medium transition-all ease-in text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
              >
                Connect With Us
              </Link>
              <Link
                to={"/AboutUs"}
                className="block w-full rounded bg-blue-600  px-12 py-3 text-sm font-medium transition-all ease-in text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstituteHero;
