import React from 'react';
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import { Link } from 'react-router-dom';

function Collaboration() {
  return (
    <div className='md:py-12 p-4 text-center md:px-40'>
      <motion.h1 variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} className='md:text-MainHeading text-MainHeading-sm font-extrabold md:py-2 py-1'>Interested in collaborating with us?</motion.h1>
      <motion.h4 variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} className='text-2xl md:text-SubHeading text-SubHeading-sm font-bold italic md:py-2 py-1'>Let's collaborate and create something extraordinary!</motion.h4>
      <motion.p variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} className='md:text-Paragraph text-Paragraph-sm py-3'>At Greateway Software Pvt. Ltd., embark on a journey of endless possibilities. Join our dynamic team to immerse yourself in innovative projects, thrive in a collaborative environment, benefit from ongoing learning opportunities and pave the way for your career growth. Discover the perfect setting to unleash your full potential in the ever-evolving realm of IT.</motion.p>
      <motion.div variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} className="flex justify-center items-center">
        <Link to='/ContactUs'><button
          className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
        >
          Apply Now
        </button></Link>
      </motion.div>
    </div>
  )
}

export default Collaboration;