import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import ContactUs1 from "./image/ContactUs1.jpg";

const AddressMap = lazy(() => import("./AddressMap"));
const ContactForm = lazy(() => import("./ContactForm"));

const ContactUs = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

      <div className="w-full overflow-x-hidden pt-5 px-3 flex flex-col justify-center items-center gap-4 bg-white dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.3 },
              ease: "easeInOut",
            }}
            className="md:text-MainHeading text-MainHeading-sm font-extrabold"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.3 },
              ease: "easeInOut",
            }}
            className="pt-4 pb-4 text-Paragraph max-w-2xl text-center m-auto"
          >
            Want to contact us? Fill the below form and we'll be happy to show
            you how we can transform your experience.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut",
            }}
            className="flex gap-2 sm:items-center text-slate-900"
          >
            <IoLocationSharp className="text-2xl " />
            <p className="text-Paragraph">
              Office No: 503, 06th Floor, Stellar Spaces, <br />
              Opposite Zensar IT Park, Kharadi, Pune 411014
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut",
            }}
            className="flex gap-2 sm:items-center text-slate-900"
          >
            <div className="flex flex-wrap items-center justify-start gap-4">
              <div className="flex items-center space-x-2">
                <IoIosCall className="text-2xl mt-1" />
                <span className="text-Paragraph  pr-4">
                  +91 9172077273
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <IoIosCall className="text-2xl mt-1" />
                <span className="text-Paragraph pr-4">
                  +91 7620446750
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut",
            }}
            className="flex gap-2 sm:items-center text-slate-900"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <IoIosMail className="text-2xl mr-2" />
                <a href="mailto:hr@greateway.com" className="text-Paragraph">
                  hr@greateway.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <hr className="my-4 w-full border-t-2 border-gray-400" />
        <div className="flex w-[100%] overflow-x-hidden mt-4 md:flex-row flex-col flex-wrap justify-center bg-white">
          {/* left section */}
          <div className="flex md:w-[40%] w-full flex-col flex-wrap gap-0 p-6 bg-white">
            {/* first part */}
            <div className="mb-2 rounded-lg">
              <div className="mb-2">
                {/* Adding the image here */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.5 },
                    ease: "easeInOut",
                  }}
                  src={ContactUs1}
                  alt="Contact Us"
                  className="w-full shadow-xl border-2 border-sky-500 rounded-2xl"
                />
              </div>
            </div>
            {/* second part */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut",
              }}
              className="text-lg font-bold text-center mt-5"
            >
              <p className="mb-2 text-Paragraph">Follow Us On</p>
              <div className="flex flex-col items-center">
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-400 text-3xl cursor-pointer"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/greateway-software-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-blue-700 text-3xl cursor-pointer"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-red-600 text-3xl cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          {/* right section */}
          <Suspense fallback={<div>Loading Contact Form...</div>}>
            <ContactForm />
          </Suspense>
          <hr className="w-full border-t-2 border-gray-400" />
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: "easeInOut",
          }}
          className="inline-block rounded-lg text-blue-900 my-5 bg-blue-100 px-2 p-2 text-xl relative font-semibold"
        >
          Let the map be your guide to finding us
        </motion.span>

        <Suspense fallback={<div>Loading Map...</div>}>
          <AddressMap />
        </Suspense>
      </div>
    </>
  );
};

export default ContactUs;

// Pankaj.kandhare@greateway.com
// +917620446750
