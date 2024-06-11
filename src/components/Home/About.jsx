import React from 'react';
import AboutUs from './assets/image/AboutUs.jpeg';
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section className="bg-slate-100">
                <div className="container mx-auto md:py-4 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-2xl">
                            <motion.div variants={fadein("down", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.8 }}>
                                <h2 className="font-extrabold md:text-MainHeading text-MainHeading-sm py-4">About Us</h2>
                                <h4 className='md:text-xl font-bold md:text-SubHeading text-SubHeading-sm'>We empower businesses and individuals with innovative software solutions guided by our commitment to excellence and customer satisfaction.</h4>
                            </motion.div>
                            <motion.div variants={fadein("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.8 }}>
                                <p className="md:text-Paragraph text-Paragraph-sm font-base py-4">Greateway Software Pvt. Ltd. specializes in custom software solutions for global businesses. Our dedicated team delivers innovative, high-quality products tailored to client needs including custom development and mobile/web applications using cutting-edge technologies for business growth and success.</p>
                                <div className="">
                                    <Link to="/AboutUs" className="md:text-hyperlinks text-hyperlinks-sm hover:text-blue-600 font-medium py-4">Learn more about us
                                        <span className="ml-2">&#8594;</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="md:mt-0 p-5">
                            <img src={AboutUs} alt="About Us Image" className="object-cover rounded-xl shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;