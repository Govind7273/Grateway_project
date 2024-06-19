"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards2 } from "../ui/infinite-moving-cards2";
import { Helmet } from "react-helmet-async";
import JobsCard from "./JobsCard";
import ModalForm from "./ModalForm";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { fadein } from "../../../src/variants";
import CareerSect2_1 from "../../assets/Images/CareerSect2_1.jpg";
import CareerSect2_2 from "../../assets/Images/CareerSect2_2.jpg";
import CareerAdv from "../../assets/Images/CareerAdv.jpg";
import CareerHead1 from "../../assets/Images/CareerHead1.jpg";
import CareerHead2 from "../../assets/Images/CareerHead2.jpg";
import CareerHead3 from "../../assets/Images/CareerHead3.jpg";

const testimonials = [
  {
    quote:
      "GreateWay Software is not just a workplace; it's a community where your ideas are heard, your skills are honed. Proud to be a part of a company that not only excels in its industry but also cares deeply about its most valuable asset.",
    name: "Harshal Kharche",
    title: "",
  },
  {
    quote:
      "Working at GreateWay Software has been a rewarding experience. The dynamic work environment, focus on learning and collaborative spirit make it an excellent place for professional growth. While there are areas for improvement.",
    name: "Pankaj Bhagat",
    title: "",
  },
  {
    quote:
      "My experience at GreateWay Software India Pvt.Ltd was outstanding, thanks to its innovative culture, focus on employee development and excellent work-life balance. Grateful for the enriching opportunities.",
    name: "Prashik Kambale",
    title: "",
  },
  {
    quote:
      "Serving DevOps role at GreateWay Software, thanks to its cooperative culture, focus on employee development and excellent work balance. Grateful for the enriching opportunities and collaborative environment.",
    name: "Shantanu Arvindekar",
    title: "",
  },
  {
    quote:
      "GreateWay Software is recognized foe its good work culture and job stability. The organization provided me numerous opportunities to learn new things to enhance my existing knowledge. That is all I felt.",
    name: "Vishnu Jadhav",
    title: "",
  },
];

const CareersPage = ({ Meta_Data }) => {
  const { Title, Description, link } = Meta_Data;
  const scrollTo = () => {
    scroll.scrollTo(2600); // Scrolling to 2600px from the top of the page.
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [CareerHead1, CareerHead2, CareerHead3];

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={link} />
      </Helmet>

      <div className="md:pt-16 text-white overflow-x-hidden h-auto ">
        {/* First header section */}
        <section>
          <div className="flex flex-col items-center gap-6  absolute z-10 lg:h-auto w-auto h-auto lg:w-[700px] lg:top-[60%] lg:left-[50%] transform lg:-translate-y-1/2 lg:-translate-x-1/2 -translate-y-1/2 -translate-x-1/2 top-[50%] left-[50%] px-2">
            <motion.h1
              className="md:text-TopHeading text-TopHeading-sm text-center font-extrabold"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Elevate your career with Us!
            </motion.h1>
            <motion.h4
              className="lg:w-[550px] font-bold text-center text-xs lg:text-xl text-white"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              We believe purposeful technology has the potential to address the
              most significant challenges of our era. Join the team and unlock
              your future career with us.
            </motion.h4>
            <button
              onClick={scrollTo}
              className="loop_video_btn items-start w-fit bg-cyan-300 px-3 py-1 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out hover:border"
            >
              Apply now
            </button>
          </div>
          <div className="hero-section relative overflow-hidden lg:h-[91vh] h-[80vh] bg-black ">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 flex items-center justify-center ${index === currentIndex ? "block" : "hidden"
                  }`}
                initial="hidden"
                animate="visible"
                variants={slideVariants} // Use simplified slideVariants
                transition={{ duration: 0.8 }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full lg:h-full h-full object-cover opacity-45"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Second Section */}
        <section className="py-8">
          <div className="lg:h-screen lg:w-screen flex flex-col gap-2 justify-center items-center">
            <div className="py-4 flex items-center justify-center">
              <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#06b6d4_0deg,#06b6d4_180deg,transparent_180deg,transparent_360deg)]">
                <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#2c3493_0deg,#2c3493_180deg,transparent_180deg,transparent_360deg)]"></span>
              </div>

              <motion.h1
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="md:text-MainHeading text-lg  text-center font-extrabold px-2 uppercase"
              >
                Welcome to Greateway Softwares, India
              </motion.h1>
            </div>

            <div className="lg:h-[80vh] lg:w-[80vw] flex md:justify-center md:flex-row flex-col gap-10 py-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                className="lg:h-full lg:w-[40%] px-2"
              >
                <img
                  className="h-[60%] w-full object-fill"
                  src={CareerSect2_1}
                  alt="Image not Found"
                />
                <p className="h-[40%] lg:text-Paragraph text-[#1a2229] leading-Paragraph  text-sm w-full shadow-lg text-center flex items-center px-4 py-4 border-2">
                  Join our community if you value meaningful connections and are
                  passionate about driving technological progress. We're looking
                  for self-starters who embrace challenges, taking ownership of
                  their contributions as we collectively shape the future
                  landscape.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                className="lg:h-full lg:w-[40%] px-2"
              >
                <img
                  className="h-[60%] w-full object-cover"
                  src={CareerSect2_2}
                  alt="Image not Found"
                />
                <p className="h-[40%] lg:text-Paragraph text-[#1a2229] leading-Paragraph text-sm w-full shadow-lg flex items-center text-center px-4 py-4 border-2">
                  We places a high premium on personal development, recognizing
                  its direct correlation with the company's success. Our
                  energetic and flexible work atmosphere enables individuals to
                  collaborate harmoniously, striving towards collective goals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="w-full py-12 bg-slate-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden object-cover object-center sm:w-full lg:order-last"
                height="310"
                src={CareerAdv}
                width="550"
              />
              <div className="flex flex-col justify-center">
                <div className="">
                  <motion.h1
                    variants={fadein("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.8 }}
                    className="text-MainHeading font-extrabold capitalize pb-4"
                  >
                    Step into the Future of{" "}
                    Technology
                  </motion.h1>
                  <motion.p
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="max-w-[600px] text-Paragraph leading-Paragraph md:text-lg pb-4"
                  >
                    We believe in pioneering the future of technology. Join us
                    on a transformative journey where creativity meets
                    cutting-edge innovation. Dive into a world where ideas turn
                    into reality and every challenge is an opportunity for
                    growth. As part of our team, you'll collaborate with
                    visionary minds, push the boundaries of what's possible and
                    make a lasting impact on the world. Step into the future of
                    technology with us and together, let's shape tomorrow's
                    world.
                  </motion.p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Link to={"/ContactUs"}>
                    <button className="bg-zinc-900 rounded-[7px] tex-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section>
          <div className="flex justify-center items-center gap-2 py-6">
            <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#06b6d4_0deg,#06b6d4_180deg,transparent_180deg,transparent_360deg)]">
              <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#2c3493_0deg,#2c3493_180deg,transparent_180deg,transparent_360deg)]"></span>
            </div>
            <motion.h1
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="md:text-MainHeading text-lg text-[#3c4c54]  text-center font-extrabold px-2 uppercase"
            >
              Hear it from our Team
            </motion.h1>
          </div>
          <div className="h-[25rem] w-full  bg-slate-50  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white opacity-35"></div>

            <div className="flex flex-col gap-12 items-center bg-transparent h-[60vh] justify-center">
              <InfiniteMovingCards2
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </section>

        {/* Fifth Section */}
        <section>
          <div className="w-full flex flex-wrap justify-center items-center   ">
            <JobsCard setModal={setIsOpen} />
          </div>
        </section>

        {/* Modal Code */}
        {isOpen && <ModalForm setModal={setIsOpen} />}
      </div>
    </>
  );
};

export default CareersPage;
