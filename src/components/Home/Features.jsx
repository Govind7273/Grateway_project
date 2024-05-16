import React from 'react';
import features from "./assets/image/Features.jpg";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";

const FeaturesSection = () => {
  return (
    <section className="bg-slate-100">
      <div className="container max-w-xl p-6 mx-auto space-y-6 lg:px-8 lg:max-w-7xl">
        <div>
          <motion.h2 variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="text-MainHeading-sm md:text-MainHeading font-extrabold text-center">Features of our company</motion.h2>
          <motion.p variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="max-w-3xl mx-auto mt-4 md:text-SubHeading text-SubHeading-sm md:text-center text-start font-bold">
            Discover the latest enhancements that enrich your experience with our company and make it more exciting.
          </motion.p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="md:mt-4 md:space-y-12 space-y-5">
              <motion.div variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-rocket"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg text-base font-medium leading-6">Compatibility and Integration</h4>
                  <p className="mt-2 md:text-lg text-sm">Ensure compatibility across devices/platforms and support integration with third-party services.</p>
                </div>
              </motion.div>
              <motion.div variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bookmark-plus"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      <line x1="12" x2="12" y1="7" y2="13"></line>
                      <line x1="15" x2="9" y1="10" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg text-base font-medium leading-6">Security and Data Protection</h4>
                  <p className="mt-2 md:text-lg text-sm">Employing strong security protocols to safeguard user data and prevent unauthorized access.</p>
                </div>
              </motion.div>
              <motion.div variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-rocket"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg text-base font-medium leading-6">Scalability and Performance</h4>
                  <p className="mt-2 md:text-lg text-sm">Ensure the software can scale efficiently and maintains optimal performance.</p>
                </div>
              </motion.div>
              <motion.div variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bookmark-plus"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      <line x1="12" x2="12" y1="7" y2="13"></line>
                      <line x1="15" x2="9" y1="10" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg text-base font-medium leading-6">User-Centric Design</h4>
                  <p className="mt-2 md:text-lg text-sm">Focus on intuitive UX/UI design for a positive user experience.</p>
                </div>
              </motion.div>
              <motion.div variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-rocket"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="md:text-lg text-base font-medium leading-6">Regular Updates and Support</h4>
                  <p className="mt-2 md:text-lg text-sm">Deliver prompt updates, bug fixes, and responsive customer assistance.</p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src={features}
              alt="Feature"
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 md:h-[85vh]"
              style={{ color: 'transparent' }}
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;