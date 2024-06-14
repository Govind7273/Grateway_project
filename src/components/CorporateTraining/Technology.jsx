import React from 'react';

const Technology = ({ Technology_Program }) => {
    const tech = Technology_Program?.Technology;
    return (
        <main>
            {tech && (
                <div className="bg-slate-100">
                    <h2
                        data-aos="fade-down"
                        className="text-MainHeading font-extrabold md:p-6 p-2 text-center capitalize"
                    >
                        Skills covered in this course
                    </h2>
                    <div className="flex flex-wrap gap-5 justify-center md:p-5 p-2">
                        {tech.map((t, index) => (
                            <div
                                key={index}
                                data-aos="zoom-out"
                                className="flex flex-col justify-center items-center gap-4 px-8 py-2"
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
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}

export default Technology;
