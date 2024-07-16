import React from "react";
import aicteLogo from "../../assets/Images/aicteLogo.png";
import isoLogo from "../AboutUs/images/isoLogo.png";
import { MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";
export const CertifiedLogo = () => {
  return (
    <>
      <section className="w-full py-12 md:py-6 lg:py-6 overflow-hidden">
      <div className="h-[25rem] w-full dark:bg-black   dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black"></div>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-xl bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              <div
                className="flex items-center py-2 gap-2">
                <MdVerifiedUser className="text-green-600"/>
                <span className="font-semibold">Certified Industry</span>
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-MainHeading-sm md:py-4 font-bold tracking-tighter sm:text-MainHeading md:text-MainHeading capitalize">
              Accredited by Top Certifying Organizations
            </motion.h2>
            <div className="flex justify-center gap-10">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                src={aicteLogo}
                width="1000"
                height="1000"
                alt="AICTE Logo"
                className="h-32 w-32  object-cover"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                src={isoLogo}
                width="1000"
                height="1000"
                alt="ISO Logo"
                className="h-32 w-32 object-cover"
              />
            </div>
          </div>
        </div>
    </div>
      </section>

      
    </>
  );
};

export default CertifiedLogo;
