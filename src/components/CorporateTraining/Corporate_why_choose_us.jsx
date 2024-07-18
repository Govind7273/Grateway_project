import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const Corporate_why_choose_us = ({ Technology_Program }) => {
    const whychooseus = Technology_Program?.whychooseus;
    return (
        <main>
            <section>
                <div className="bg-slate-100 py-4 ">
                    <div className="container mx-auto py-4 px-2 md:px-0 md:flex md:justify-between md:items-center">
                        <div className="md:max-w-[45%] md:mr-4 md:px-6 p-3 flex flex-col gap-4 order-2">
                            <motion.h1
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                className="text-MainHeading font-bold"
                            >
                                {Technology_Program?.secondSection?.heading}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.2,
                                    x: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                className="text-paragraph text-black">
                                {Technology_Program?.secondSection?.subheading}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                            >
                                <Link to={"/AboutUs"} className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700">
                                    About Us
                                </Link>
                            </motion.div>
                        </div>
                        <div className="p-3 order-1">
                            <motion.img
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 40 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut"
                                }}
                                src={Technology_Program?.secondSection?.image}
                                alt="corporate_image"
                                className="w-full md:h-[500px] h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* why choose us  */}

            <section className="bg-white bg-dot-slate-300 py-14 order-1">
                <div className="container mx-auto md:px-4 px-2">
                    <div className="mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                y: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className="text-MainHeading font-extrabold"
                        >
                            Why Choose Us
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                y: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className="text-paragraph text-black font-medium mb-10"
                        >
                            We provide tailored training sessions designed to equip your team
                            with the latest skills necessary to thrive in the digital age.
                            Through hands-on learning experiences and expert guidance, we
                            empower your workforce to bridge skill gaps and unlock their full
                            potential.
                        </motion.p>
                    </div>
                    <div className="flex flex-wrap -mx-4 mt-10 md:px-4">
                        {whychooseus?.map((feat,index) => {
                            return (
                                <div
                                key={index}
                                 className="w-full  md:w-1/3 px-4 mb-8 transition-all ease-linear">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            scale: { type: "spring", stiffness: 30 },
                                            opacity: { duration: 0.6 },
                                            ease: "easeInOut",
                                        }}
                                        className="rounded-xl h-full bg-slate-200  hover:shadow-lg md:px-8 px-2 py-4 flex justify-between items-center flex-col gap-2"
                                    >
                                        <h3 className="text-2xl font-bold mb-4 text-center">
                                            {feat?.title}
                                        </h3>
                                        <p className="text-Paragraph text-center mb-2">
                                            {feat?.description}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Corporate_why_choose_us