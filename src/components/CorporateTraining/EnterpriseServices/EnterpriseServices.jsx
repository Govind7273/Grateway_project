import React from "react";
import { motion } from "framer-motion";
import { GrTest } from "react-icons/gr";
import { RiMicrosoftLine, RiOpenSourceLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Helmet } from 'react-helmet-async';
import enterpriseExpertise from "../Images/enterpriseExpertise.jpg";
import softwareTesting from "../Images/softwareTesting.jpg";
import softwareDevelopment from "../Images/softwareDevelopment.jpg";
import productLifeCycle from "../Images/productLifeCycle.jpg";
import businessIntelligence from "../Images/businessIntelligence.jpg";
import technicalExpertise from "../Images/technicalExpertise.jpg";

const EnterpriseServices = ({ Meta_Data }) => {
    const { Title, Description, Link } = Meta_Data;
    const technical_Exp = [
        {
            id: 1,
            title: "Software Testing",
            description: "Ensuring software quality and reliability through rigorous testing processes.",
            logo: GrTest,
        },
        {
            id: 2,
            title: "Microsoft",
            description: "Expertise in Microsoft technologies including Office 365 and Azure.",
            logo: RiMicrosoftLine,
        },
        {
            id: 3,
            title: "Java",
            description: "Proficient in Java programming and enterprise solutions.",
            logo: FaJava,
        },
        {
            id: 4,
            title: "Open Source",
            description: "Skilled in various open-source technologies and platforms.",
            logo: RiOpenSourceLine,
        },
        {
            id: 5,
            title: "Data Warehouse",
            description: "Specializing in data warehousing solutions and analytics.",
            logo: BsDatabaseAdd,
        },
        {
            id: 6,
            title: "Web Development",
            description: "Creating responsive and dynamic websites using the latest web technologies.",
            logo: CgWebsite,
        },
    ];

    const captive_Course = [
        {
            id: 1,
            title: "Software Testing",
            description: "Master principles of software development.",
            image: softwareTesting,
        },
        {
            id: 2,
            title: "Software Development",
            description: "Learn latest web development technologies.",
            image: softwareDevelopment,
        },
        {
            id: 3,
            title: "Product Life Cycle",
            description: "Understand product development stages.",
            image: productLifeCycle,
        },
        {
            id: 4,
            title: "Business Intelligence",
            description: "Analyze data for informed decisions.",
            image: businessIntelligence,
        },
    ];

    return (
        <>
            <Helmet>
                <title>{Title}</title>
                <meta name="description" content={Description} />
                <link rel="canonical" href={Link} />
            </Helmet>
            <main className="pt-16 overflow-x-hidden">
                {/* Hero section */}
                <section>
                    <div className="flex flex-col md:flex-row bg-dot-slate-300 md:h-[90vh]">
                        {/* Left side */}
                        <div className="w-full sm:w-8/12 mb-6">
                            <div className="container mx-auto h-full sm:p-10">
                                <header className="container px-2 lg:flex pt-16 items-center h-full lg:mt-0">
                                    <div className="w-full">
                                        <motion.h1
                                            initial={{ opacity: 0, scale: 1.3 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.2,
                                                scale: { type: "spring", stiffness: 30 },
                                                opacity: { duration: 0.6 },
                                                ease: "easeInOut",
                                            }}
                                            className="text-MainHeading font-extrabold"
                                        >
                                            Empower Your
                                            <span className=""> Enterprise </span> with Our Enterprise Services
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.2,
                                                y: { type: "spring", stiffness: 30 },
                                                opacity: { duration: 0.6 },
                                                ease: "easeInOut",
                                            }}
                                            className="text-paragraph mb-6 text-black"
                                        >
                                            At Greateway Software , we connect talented professionals with the dynamic job market. Our tailored enterprise services ensure businesses have the skilled candidates they need to thrive. From permanent to contract and part-time staffing, we offer flexible solutions to meet your unique needs. Partner with us to build a capable and dedicated workforce.
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.2,
                                                scale: { type: "spring", stiffness: 30 },
                                                opacity: { duration: 0.6 },
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <a
                                                href="/ContactUs"
                                                className="bg-zinc-900 rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
                                            >
                                                Contact us
                                            </a>
                                        </motion.div>
                                    </div>
                                </header>
                            </div>
                        </div>

                        {/* Right side */}
                        <img
                            src={enterpriseExpertise}
                            alt="enterprise_page"
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Captive job-oriented courses */}
                <section className="bg-slate-100">
                    <div className="mx-auto py-6 md:py-12 max-w-6xl text-center p-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className="mb-8 text-center text-MainHeading font-extrabold"
                        >
                            Our Job Oriented Courses
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left sm:text-center">
                            {captive_Course.map((course) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="flex flex-col items-center rounded-xl border bg-white border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg sm:hover:shadow-2xl"
                                >
                                    <img
                                        className="w-20 h-16 sm:w-32 sm:h-32 rounded-lg mb-4"
                                        src={course.image}
                                        alt={course.title}
                                    />
                                    <div>
                                        <div className="font-semibold text-black text-cardHeading mb-2">{course.title}</div>
                                        <div className="text-paragraph opacity-75">{course.description}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12">
                    <div className="container flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 40 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className="mb-2 text-MainHeading font-extrabold leading-tight text-center md:text-left"
                        >
                            Staffing
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 40 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className="mb-6 text-SubHeading font-bold text-black text-center md:text-left"
                        >
                            Here are a few of the Staffing Services we provide.
                        </motion.p>
                        <div className="w-full">
                            <div className="flex flex-col w-full mb-10 sm:flex-row gap-6">
                                {/* Left side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 40 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="w-full sm:w-1/2"
                                >
                                    <div className="relative h-full ml-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                        <div className="relative h-full p-8 bg-white border-2 border-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center -mt-1">
                                                <h3 className="my-2 ml-3 text-lg font-bold text-black">
                                                    Permanent Staffing
                                                </h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                                                ------------
                                            </p>
                                            <p className="mb-2 text-gray-700 text-paragraph">
                                                Offering long-term employment solutions to fill essential
                                                and strategic roles within your organization, helping you
                                                build a stable and dedicated workforce.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Right side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.3 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 40 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="w-full sm:w-1/2"
                                >
                                    <div className="relative h-full ml-0 md:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                        <div className="relative h-full p-8 bg-white border-2 border-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center -mt-1">
                                                <h3 className="my-2 ml-3 text-lg font-bold text-black">
                                                    Contract Staffing
                                                </h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                                                ------------
                                            </p>
                                            <p className="mb-2 text-gray-700 text-paragraph">
                                                Supplying specialized skills and expertise for
                                                project-based requirements on a contractual basis, allowing
                                                you to complete projects efficiently and on time.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Second row cards */}
                            <div className="flex flex-col w-full mb-5 sm:flex-row gap-6">
                                {/* First section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 30 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="w-full sm:w-1/2"
                                >
                                    <div className="relative h-full ml-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                        <div className="relative h-full p-8 bg-white border-2 border-blue-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center -mt-1">
                                                <h3 className="my-2 ml-3 text-lg font-bold text-black">
                                                    Contract to Hire
                                                </h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                                                ------------
                                            </p>
                                            <p className="mb-2 text-gray-700 text-paragraph">
                                                Offering a hybrid staffing solution where employees start
                                                on a contract basis with the potential for permanent hire,
                                                allowing you to evaluate their performance and fit within
                                                the company before making a long-term commitment.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Second section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.4 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 40 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="w-full sm:w-1/2"
                                >
                                    <div className="relative h-full ml-0 sm:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                        <div className="relative h-full p-8 bg-white border-2 border-yellow-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center -mt-1">
                                                <h3 className="my-2 ml-3 text-lg font-bold text-black">
                                                    Part-Time Staffing
                                                </h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                                                ------------
                                            </p>
                                            <p className="mb-2 text-gray-700 text-paragraph">
                                                Recruiting employees for part-time positions to meet varying
                                                business demands and schedules, providing you with the
                                                flexibility to adjust workforce levels as needed.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Third section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 40 },
                                        opacity: { duration: 0.6 },
                                        ease: "easeInOut",
                                    }}
                                    className="w-full sm:w-1/2"
                                >
                                    <div className="relative h-full ml-0 md:mr-10">
                                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                        <div className="relative h-full p-8 bg-white border-2 border-green-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center -mt-1">
                                                <h3 className="my-2 ml-3 text-lg font-bold text-black">
                                                    Assessment Services
                                                </h3>
                                            </div>
                                            <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                                                ------------
                                            </p>
                                            <p className="mb-2 text-gray-700 text-paragraph">
                                                Providing comprehensive assessment services to evaluate
                                                candidates' skills, aptitude, and cultural fit, ensuring you
                                                hire the best talent for your organization.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical expertise section */}
                <section className=" bg-slate-100 bg-dot-slate-300 text-black p-5">
                    <div className="container max-w-xl p-4 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                className="text-MainHeading font-extrabold text-center"
                            >
                                Our Technical Expertise
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: "spring", stiffness: 40 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                className="max-w-3xl mx-auto text-subHeading text-center font-bold capitalize"
                            >
                                We specialize in bridging the gap between talented students and the dynamic job market by emphasizing technical expertise.
                            </motion.p>
                        </div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div>
                                <div className="mt-4 space-y-6">
                                    {technical_Exp.map((exp) => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, x: -100 }}
                                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                            transition={{
                                                delay: 0.2,
                                                scale: { type: "spring", stiffness: 40 },
                                                x: { type: "spring", stiffness: 70 },
                                                opacity: { duration: 0.3 },
                                            }}
                                            key={exp.id}
                                            className="flex"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center rounded-md p-2">
                                                    <exp.logo size={30} color="golden1" />
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-subHeading font-bold text-black">{exp.title}</h4>
                                                <p className="mt-2 text-black text-paragraph">{exp.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 1.4 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 40 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                aria-hidden="true"
                                className="mt-10 lg:mt-0"
                            >
                                <img
                                    alt="technical_img"
                                    src={technicalExpertise}
                                    className="mx-auto rounded-lg shadow-lg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EnterpriseServices;