import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Collaborte = () => {
  return (
    <section id='section3'>
      <div className='md:py-12 p-4 text-center md:px-40 overflow-x-hidden'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut'
        }}
        className='md:text-MainHeading text-CardHeading font-extrabold md:py-2 py-1 capitalize'>Interested In Collaborating With Us?</motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.4 },
          ease: "easeInOut"
        }}
        className='text-2xl md:text-SubHeading text-SubHeading-sm font-bold italic md:py-2 py-1'>Let's collaborate and create something extraordinary!        </motion.h4>
      <motion.p
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: 'spring', stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: 'easeInOut'
        }}
        className='md:text-Paragraph text-Paragraph-sm py-3'>Our company has established strategic Memorandums of Understanding (MOUs) with a diverse array of colleges, marking a significant step towards mutual growth and innovation in education. These partnerships aim to leverage each institution's strengths, fostering a dynamic environment for knowledge sharing, research collaboration, and student development. Together, we aim to redefine educational paradigms, creating opportunities that transcend boundaries and empower future generations.</motion.p>
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
          Contact Us
        </motion.button></Link>
      </div>
    </div>
      </section>
  )
}

export default Collaborte