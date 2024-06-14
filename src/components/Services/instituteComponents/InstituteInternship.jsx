import React from "react";
import internshipimg from "../../Internship/Image/culture.jpg";

const InstituteInternship = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src={internshipimg}
              className="absolute inset-0 h-full rounded-lg w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Internship
            </h2>

            <p className="mt-4 text-gray-600">
              "To gain invaluable hands-on experience, mentorship and networking
              opportunities that will propel your career forward. Discover your
              potential and build the foundation for a successful career with
              us." Explore all internships
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Explore Internships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteInternship;
