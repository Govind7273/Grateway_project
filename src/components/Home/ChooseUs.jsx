import React from 'react'
import Choose from "./assets/image/Choose.jpg";

function ChooseUs() {
    return (
        <div className="w-[100%] h-[100%] col-span-1 text-white flex flex-col bg-black justify-center items-center relative">
            <img src={Choose} alt="" className="w-full h-full opacity-35" />
            <div className="absolute w-[80%] flex-row">
                <div className="w-[65%] py-4 px-2">
                    <h1 className="text-6xl text-white font-extrabold">Why Choose Us?</h1>
                </div>
                <div className="w-[65%] pt-4 pb-12 px-2">
                    <h1 className="text-2xl text-white">Empowering Your Vision with Smart Software Solutions.</h1>
                </div>
                <div>
                    <ul className="text-white rounded-lg list-inside list-disc w-auto">
                        <li data-aos="fade-left" className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-[#2c3493] list-disc md:text-nowrap">
                            <b>Innovative Solutions: </b>We are at the forefront of innovation, developing cutting-edge software solutions that redefine industry standards.
                        </li>
                        <li data-aos="fade-right" className="px-6 py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Global Impact:  </b>Our solutions empower businesses globally to thrive in the digital age, driving efficiency and growth.
                        </li>
                        <li data-aos="fade-left" className="px-6 py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Commitment to Excellence: </b>We are committed to delivering excellence in every project, ensuring tangible value and long-term success for our clients.
                        </li>
                        <li data-aos="fade-left" className="px-6 py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Proven Expertise: </b>Our experienced team crafts customized software solutions tailored to your unique needs.
                        </li>
                        <li data-aos="fade-left" className="px-6 py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Reliability and Support: </b>We offer continuous support and maintenance to ensure your software runs smoothly and adapts to your evolving needs.
                        </li>
                        <li data-aos="fade-right" className="px-6 py-2 border-b border-gray-400 w-full hover:bg-[#2c3493]">
                            <b>Client-Centric Focus: </b>Your satisfaction is our priority. We work closely with you to exceed your expectations throughout the development process.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;