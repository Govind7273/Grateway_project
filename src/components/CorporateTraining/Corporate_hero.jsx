
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import { useState } from "react"; // Import useState hook for managing state
import { useEffect } from "react"; // Import useEffect hook for side effects


const Corporate_hero = ({ TechnologyProgram }) => {
    const [bgStyle, setBgStyle] = useState(""); // Initialize state for background style

    useEffect(() => {
        setBgStyle(TechnologyProgram?.id); // Set background style from prop when component mounts
    }, [TechnologyProgram]);

    return (
        <main className="bg-white">
            <section className="bg-white">
                <div className="flex items-center">
                    <section
                        id={bgStyle}
                        className="bg-cover bg-center py-16 md:py-6 md:h-[36rem] w-full flex justify-between items-center"
                    >
                        <div className="container mx-auto text-left text-black">
                            <div className="flex items-center p-5">
                                <div className="md:w-1/2 w-full">
                                    <h1
                                        className="text-MainHeading font-extrabold mb-6"
                                    >
                                        Welcome to Our {TechnologyProgram?.title}
                                    </h1>
                                    <p
                                        className="text-paragraph font-medium mb-8"
                                    >
                                        Unlock your team's potential with our advanced corporate training programs. Master new tech trends and software through expert-led, hands-on sessions. Tailored to keep your team ahead, our courses ensure your organization thrives.
                                    </p>
                                    <Link
                                        to={"/ContactUs"} // Use 'to' prop instead of 'href' for routing with react-router-dom
                                        className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
                                    >
                                        Connect with us
                                    </Link>
                                </div>
                                <div className="w-1/2 pl-16 hidden md:flex">
                                    <img
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