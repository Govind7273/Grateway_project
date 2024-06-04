import React from "react";

const cardData = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "This is the first card.",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "This is the second card.",
  },
  {
    id: 3,
    title: "Website maintenance and support",
    description: "This is the third card.",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "This is the fourth card.",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "This is the fifth card.",
  },
  {
    id: 6,
    title: "Web Hosting Services",
    description: "This is the sixth card.",
  },
  {
    id: 7,
    title: "Digital Marketing",
    description: "This is the seventh card.",
  },
  {
    id: 8,
    title: "Consultancy & Strategy",
    description: "This is the eighth card.",
  },
  {
    id: 9,
    title: "UI/UX Design",
    description: "This is the ninth card.",
  },
];

const Card = ({ title, description }) => (
  <div className="w-96 h-80 mx-auto bg-gray-100 rounded-xl shadow-xl m-4">
    <div className="flex items-center p-3">
      <div className="px-1">
        <span className="w-4 h-4 rounded-full inline-block bg-violet-500 cursor-pointer"></span>
      </div>
      <div className="px-1">
        <span className="w-4 h-4 rounded-full inline-block bg-cyan-400 cursor-pointer"></span>
      </div>
      <div className="px-1">
        <span className="w-4 h-4 rounded-full inline-block bg-black cursor-pointer"></span>
      </div>
    </div>
    <div className="p-4 flex flex-col justify-center items-center">
      <h3 className="font-bold text-2xl text-[#6B37BD]">{title}</h3>
      <p className="mt-4">{description}</p>
    </div>
  </div>
);

const Servicesl = () => {
  return (
    <main>
      {/* Rewamp section */}
      <section className="mx-auto max-w-fullxl px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="font-headline text-2xl font-extrabold sm:text-3xl text-center">
          Revamp Your Website in Three Steps
        </h2>
        <div className="grid sm:grid-cols-3 gap-16 sm:gap-10 mt-16 sm:mt-16 shadow-xl md:p-8">
          <div className="text-center border-r-2 border-violet-300">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="text-cyan-500 w-1/2 h-1/2"
                  alt="Import icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-700 rounded-full"></div>
            </div>
            {/* Reimagine */}
            <h3 className="font-bold text-xl text-[#6B37BD] sm:text-2xl mt-6 sm:mt-10">
              1. Reimagine
            </h3>
            <p className="leading-relaxed mt-4">
              Begin by envisioning the new look and features for your website.
            </p>
          </div>
          <div className="text-center border-l-2 border-r-2 border-violet-300">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="text-cyan-500 w-1/2 h-1/2"
                  alt="Translate icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>{" "}
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-700 rounded-full"></div>
            </div>
            {/* redesign */}
            <h3 className="font-bold text-xl text-[#6B37BD] sm:text-2xl mt-6 sm:mt-10">
              2. Redesign
            </h3>
            <p className="leading-relaxed mt-4">
              Collaborate with your design and development team to give your
              website a fresh and modern design.
            </p>
          </div>
          <div className="text-center border-l-2 border-violet-300">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="currentColor"
                  className="text-cyan-500 w-1/2 h-1/2"
                  alt="Export icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-700 rounded-full"></div>
            </div>
            {/* Relaunch */}
            <h3 className="font-bold text-xl text-[#6B37BD] sm:text-2xl mt-6 sm:mt-10">
              3. Relaunch
            </h3>
            <p className="leading-relaxed mt-4">
              After the redesign, relaunch your website and welcome your
              audience to the new experience.
            </p>
          </div>
        </div>
      </section>
      {/* Our services */}
      <section className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="p-2 py-4 font-extrabold md:text-5xl ">Our Services</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  w-screen">
          {cardData.map(({ id, title, description }) => (
            <Card key={id} title={title} description={description} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Servicesl;
