import React from 'react'

const Technology = ({ Technology_Program }) => {
    const tech = Technology_Program?.Technology;
    return (
        <main>
            {tech && (
                <div className="bg-white">
                    <h2
                        data-aos="fade-down"
                        className="text-MainHeading font-extrabold p-6 text-golden1 text-center capitalize"
                    >
                        Skills covered in this course
                    </h2>
                    <div className="flex gap-5 flex-wrap md:justify-center p-5">
                        {tech.map((t, index) => (
                            <div
                                key={index}
                                data-aos="zoom-out"
                                className="flex flex-col justify-center items-center gap-2"
                            >
                                <div className="rounded-full border-4 border-SubHeading p-3">
                                    <img
                                        src={t.icons}
                                        alt=""
                                        className="w-14 h-14"
                                    />
                                </div>
                                <h3 className="text-subHeading capitalize text-black">
                                    {t?.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    )
}

export default Technology