
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import { useState } from "react"; // Import useState hook for managing state
import { useEffect } from "react"; // Import useEffect hook for side effects
import { motion } from "framer-motion";

const Corporate_hero = ({ TechnologyProgram }) => {
    const [bgStyle, setBgStyle] = useState(""); // Initialize state for background style

    useEffect(() => {
        setBgStyle(TechnologyProgram?.id); // Set background style from prop when component mounts
    }, [TechnologyProgram]);

    return (
        <main className="bg-white overflow-hidden">
            <section className="bg-white">
                <div className="flex items-center">
                    <section
                        id={bgStyle}
                        className="bg-cover bg-center py-20 md:py-6 md:h-[36rem] w-full flex justify-between items-center"
                    >
                        <div className="md:container px-4 mx-auto text-left text-black">
                            <div className="flex items-center md:p-5">
                                <div className="md:w-1/2 w-full">
                                    <motion.h1
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            x: { type: "spring", stiffness: 30 },
                                            opacity: { duration: 0.6 },
                                            ease: "easeInOut"
                                        }}
                                        className="text-MainHeading font-extrabold mb-6"
                                    >
                                        Welcome to Our {TechnologyProgram?.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.2,
                                            x: { type: "spring", stiffness: 30 },
                                            opacity: { duration: 0.6 },
                                            ease: "easeInOut"
                                        }}
                                        className="text-paragraph font-medium mb-8"
                                    >
                                        Unlock your team's potential with our advanced corporate training programs. Master new tech trends and software through expert-led, hands-on sessions. Tailored to keep your team ahead, our courses ensure your organization thrives.
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            y: { type: "spring", stiffness: 30 },
                                            opacity: { duration: 0.6 },
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Link
                                            to={"/ContactUs"} // Use 'to' prop instead of 'href' for routing with react-router-dom
                                            className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
                                        >
                                            Connect with us
                                        </Link>
                                    </motion.div>
                                </div>
                                <div className="w-1/2 pl-16 hidden md:flex">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            scale: { type: "spring", stiffness: 30 },
                                            opacity: { duration: 0.6 },
                                            ease: "easeInOut"
                                        }}
                                        src={TechnologyProgram?.img1}
                                        className="h-[20rem] w-full object-cover rounded-xl"
                                        alt="Layout Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Corporate_hero