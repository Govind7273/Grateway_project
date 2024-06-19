import React from 'react'
import Choose from "./assets/image/Choose.jpg";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";

function ChooseUs() {
    return (
        <div className="w-[100%] h-[100%] md:p-0 p-4 col-span-1 text-white flex flex-col md:bg-black justify-center items-center relative overflow-hidden">
            <img src={Choose} alt="" className="w-full h-full md:opacity-35" />
            <motion.div variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} className="md:absolute md:w-[80%] w-full flex-row py-4">
                <div className=" w-full md:py-2 md:px-2 p-0">
                    <h1 className="md:text-6xl md:text-white text-MainHeading-sm font-extrabold md:text-start text-center">Why Choose Us?</h1>
                </div>
                <div className="md:w-[65%] w-full md:pt-4 md:pb-6 p-3 md:px-2">
                    <h1 className="md:text-2xl md:text-white text-SubHeading-sm font-bold text-center md:text-start">Empowering Your Vision with Smart Software Solutions.</h1>
                </div>
                <div className=''>
                    <motion.ul variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }} className="md:text-white text-Paragraph-sm rounded-lg list-disc w-auto px-2">
                        <li data-aos="fade-left" className="md:px-2  md:py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-[#2c3493] list-disc md:text-nowrap">
                            <b>Innovative Solutions: </b>We are at the forefront of innovation, developing cutting-edge software solutions that redefine industry standards.
                        </li>
                        <li data-aos="fade-right" className="md:px-2  md:py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Global Impact:  </b>Our solutions empower businesses globally to thrive in the digital age, driving efficiency and growth.
                        </li>
                        <li data-aos="fade-left" className="md:px-2  md:py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Commitment to Excellence: </b>We are committed to delivering excellence in every project, ensuring tangible value and long-term success for our clients.
                        </li>
                        <li data-aos="fade-left" className="md:px-2  md:py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Proven Expertise: </b>Our experienced team crafts customized software solutions tailored to your unique needs.
                        </li>
                        <li data-aos="fade-left" className="md:px-2  md:py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Reliability and Support: </b>We offer continuous support and maintenance to ensure your software runs smoothly and adapts to your evolving needs.
                        </li>
                        <li data-aos="fade-right" className="md:px-2  md:py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Client-Centric Focus: </b>Your satisfaction is our priority. We work closely with you to exceed your expectations throughout the development process.
                        </li>
                    </motion.ul>
                </div>
            </motion.div>
        </div>
    )
}

export default ChooseUs;