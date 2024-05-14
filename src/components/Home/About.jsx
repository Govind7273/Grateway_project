import React from 'react';
import AboutUs from './assets/image/AboutUs.jpeg';

const About = () => {
    return (
        <div>
            <section className="bg-slate-100">
                <div className="container mx-auto md:py-4 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-extrabold text-MainHeading py-4">About Us</h2>
                            <h4 className='md:text-xl font-bold text-[#3e589f]'>We empower businesses and individuals with innovative software solutions, guided by our commitment to excellence and customer satisfaction.</h4>
                            <p className="text-[#1a2229] md:text-lg text-sm py-4">Greatway Software Pvt. Ltd. specializes in custom software solutions for global businesses. Our dedicated team delivers innovative, high-quality products tailored to client needs, including custom development and mobile/web applications, using cutting-edge technologies for business growth and success.</p>
                            <div className="">
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium py-4">Learn more about us
                                    <span className="ml-2">&#8594;</span>
                                </a>
                            </div>
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