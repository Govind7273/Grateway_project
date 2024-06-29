import React from "react";
import internshipimg from "../../Internship/Image/culture.jpg";
import { motion } from "framer-motion";
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
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 40 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="mb-4 text-MainHeading tracking-tight font-extrabold">
              Internship
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="mt-4 text-Paragraph">
              "To gain invaluable hands-on experience, mentorship and networking
              opportunities that will propel your career forward. Discover your
              potential and build the foundation for a successful career with
              us." Explore all internships
            </motion.p>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              href="#"
              className="mt-8 inline-block rounded bg-[#67e8f9] px-12 py-3 text-sm font-medium text-black transition hover:bg-[#58d2e2] focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Explore Internships
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteInternship;
