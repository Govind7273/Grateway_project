import React from "react";
import { GiTeacher } from "react-icons/gi";
import seminarImg from "./images/seminar.jpg";
import { motion } from "framer-motion";
const InstituteSeminar = () => {
  return (
    <section class=" bg-blueGray-200 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-10 w-full md:w-4/12 px-4 text-center">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
              <div class="px-4 flex-auto"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-16">
          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="mb-4 text-MainHeading tracking-tight font-extrabold ">
              Seminar
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
              class="text-Paragraph  leading-relaxed mt-4 mb-4">
              We offer comprehensive seminar services designed to enhance your
              team's skills and knowledge. Our expert-led sessions provide
              valuable insights and practical tips across various topics.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }} class="text-Paragraph leading-relaxed mt-0 mb-4">
              Our seminars are tailored to meet the specific needs of your
              organization. Each session is interactive, engaging, and packed
              with useful information that your team can immediately apply in
              their roles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }} class="text-Paragraph leading-relaxed mt-0 mb-4">
              Contact us to schedule a seminar and take the first step towards
              empowering your team with the latest industry knowledge and
              skills. Let us help you achieve your professional development
              goals.
            </motion.p>
          </div>

          <div class="w-full md:w-4/12 px-4 sm:p-6 mr-auto ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              class="relative flex flex-col   min-w-0 break-words bg-white text-black w-full mb-2 shadow-lg rounded-xl ">
              <img
                alt="seminar_image"
                src={seminarImg}
                class="w-full align-middle rounded-t-lg rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteSeminar;
