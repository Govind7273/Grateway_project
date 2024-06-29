import React from "react";
import lec1 from "./images/lec1.jpg";
import lec2 from "./images/lec2.jpg";
import { motion } from "framer-motion";
const InstituteGuest = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="lg:order-2 order-1 sm:text-lg">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="mb-4 text-MainHeading tracking-tight font-extrabold">
            Guest Lectures
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
            className="mb-4 text-Paragraph">
            We offer engaging and insightful guest lectures delivered by
            industry experts and seasoned professionals. Our lectures are
            designed to inspire and educate, providing attendees with valuable
            knowledge and perspectives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="mb-4 text-Paragraph">
            Whether you're looking to enrich your curriculum or provide your
            audience with fresh insights, our guest lectures are tailored to
            meet your needs. Our speakers cover a wide range of topics, ensuring
            relevant and up-to-date content.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="text-Paragraph">
            Contact us to schedule a guest lecture and enhance your educational
            offerings. Let us help you bring new perspectives and expertise to
            your audience.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className="lg:order-1 order-2 grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={lec1}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={lec2}
            alt="office content 2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteGuest;
