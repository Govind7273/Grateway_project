import React from 'react'

const FAQ = ({ Technology_Program }) => {
    const FAQ = Technology_Program?.FAQ;
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-MainHeading text-center font-extrabold text-golden1">
                    Frequently Asked Questions
                </h2>
                <div className="divide-y ">
                    {FAQ.map((faq) => {
                        return (
                            <div
                                data-aos="zoom-in"
                                key={faq.ques}
                                className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0"
                            >
                                <h3 className="text-subHeading font-bold md:col-span-5 text-bold">{faq?.ques}</h3>
                                <p className="md:pl-0 md:col-span-7 text-paragraph text-black">{faq?.ans}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQ;