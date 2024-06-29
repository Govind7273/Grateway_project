import React from 'react';
import { motion } from "framer-motion";
const FAQ = ({ Technology_Program }) => {
    const FAQ = Technology_Program?.FAQ;
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 py-8">
            <div className="container flex flex-col justify-center px-2 py-8 mx-auto md:p-8">
                <motion.h2
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                    }}
                    className="text-MainHeading text-center font-extrabold text-golden1">
                    Frequently Asked Questions
                </motion.h2>
                <motion.ul
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                    }} className="md:w-[70%] mx-auto mt-6 divide-y shadow shadow-blue-600 rounded-xl">
                    {FAQ.map((faq) => (
                        <li
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.2,
                                scale: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            key={faq.ques}>
                            <details className="group">
                                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                    <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                    <span className='font-bold'>{faq.ques}</span>
                                </summary>
                                <article className="px-4 pb-4 ms-10">
                                    <p className='text-Paragraph'>
                                        {faq.ans}
                                    </p>
                                </article>
                            </details>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}

export default FAQ;
