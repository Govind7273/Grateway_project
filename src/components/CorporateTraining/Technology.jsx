import React from 'react';
import { motion } from "framer-motion";
const Technology = ({ Technology_Program }) => {
    const tech = Technology_Program?.Technology;
    return (
        <main>
            {tech && (
                <div className="bg-slate-100">
                    <motion.h2
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut"
                        }}
                        className="text-MainHeading font-extrabold md:p-6 p-2 text-center capitalize"
                    >
                        Skills covered in this course
                    </motion.h2>
                    <div className="flex flex-wrap gap-5 justify-center md:p-5 p-2">
                        {tech.map((t, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                key={index}
                                className="flex flex-col justify-center items-center gap-4 md:px-8 px-4 py-2"
                            >
                                <div className="rounded-full border-4 border-SubHeading p-3">
                                    <img
                                        src={t.icons}
                                        alt={t.title}
                                        className="w-14 h-14"
                                    />
                                </div>
                                <h3 className="text-subHeading capitalize text-black text-center">
                                    {t?.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}

export default Technology;
