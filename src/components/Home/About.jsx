import React from 'react';
import AboutUs from './assets/image/AboutUs.jpeg';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='overflow-hidden'>
            <section className="bg-slate-100 py-4">
                <div className="container mx-auto md:py-4 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-2xl">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 0.5 },
                                        ease: "easeInOut"
                                    }}
                                    className="font-extrabold md:text-MainHeading text-MainHeading-sm pb-4">About Us</motion.h2>
                                <motion.h4
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 0.5 },
                                        ease: "easeInOut"
                                    }}
                                    className='md:text-xl font-bold md:text-SubHeading text-SubHeading-sm'>We empower businesses and individuals with innovative software solutions guided by our commitment to excellence and customer satisfaction.</motion.h4>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.5 },
                                    ease: "easeInOut"
                                }}
                            >
                                <p className="md:text-Paragraph text-Paragraph-sm font-base py-4">Greateway Software Pvt. Ltd. specializes in custom software solutions for global businesses. Our dedicated team delivers innovative, high-quality products tailored to client needs including custom development and mobile/web applications using cutting-edge technologies for business growth and success.</p>
                                <div className="">
                                    <Link to="/AboutUs" className="md:text-hyperlinks text-hyperlinks-sm hover:text-blue-600 font-medium py-4">Learn more about us
                                        <span className="ml-2">&#8594;</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        <div className="md:mt-0 p-5">
                            <motion.img
                                initial={{ opacity: 0, scale: 1.3 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.3,
                                    scale: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.4 },
                                    ease: "easeInOut"
                                }}
                                src={AboutUs} alt="About Us Image" className="object-cover rounded-xl shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;