import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Collaboration() {
  return (
    <div className='md:py-12 p-4 text-center md:px-40'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut'
        }}
        className='md:text-MainHeading text-MainHeading-sm font-extrabold md:py-2 py-1 capitalize'>Interested in collaborating with us?</motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.4 },
          ease: "easeInOut"
        }}
        className='text-2xl md:text-SubHeading text-SubHeading-sm font-bold italic md:py-2 py-1'>Let's collaborate and create something extraordinary!</motion.h4>
      <motion.p
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut'
        }}
        className='md:text-Paragraph text-Paragraph-sm py-3'>At Greateway Software Pvt. Ltd., embark on a journey of endless possibilities. Join our dynamic team to immerse yourself in innovative projects, thrive in a collaborative environment, benefit from ongoing learning opportunities and pave the way for your career growth. Discover the perfect setting to unleash your full potential in the ever-evolving realm of IT.</motion.p>
      <div className="flex justify-center items-center">
        <Link to='/ContactUs'><motion.button
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut"
          }}
          className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
        >
          Apply Now
        </motion.button></Link>
      </div>
    </div>
  )
}

export default Collaboration;