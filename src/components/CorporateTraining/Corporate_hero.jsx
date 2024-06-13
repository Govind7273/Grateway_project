
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
                                        className="text-4xl md:text-5xl font-extrabold mb-6"
                                    >
                                        Welcome to Our {TechnologyProgram?.title}
                                    </h1>
                                    <p
                                        className="text-paragraph font-medium mb-8"
                                    >
                                        Unlock the full potential of your team with our specialized
                                        corporate training programs.
                                    </p>
                                    <Link
                                        to={"/ContactUs"} // Use 'to' prop instead of 'href' for routing with react-router-dom
                                        className="bg-golden2 px-4 py-2 text-button rounded-md hover:bg-golden3 transition-all duration-300 ease-linear text-white hover:text-black"
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