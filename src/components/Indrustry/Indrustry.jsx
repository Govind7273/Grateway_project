import { Helmet } from "react-helmet-async";
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../../variants";
import edu2 from "./images/edu2.jpg";
import tele from "./images/tele.jpg";
import doc from "./images/doc.jpg";
import { cn } from "../../utils/cn";
import { CardStack } from "../ui/Card-Stack";
import { Firstsection } from "./Firstsection";
import { Secondsection } from "./Sectionsection";
import { Thirdsection } from "./Thirdsection";
function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
}
const CARDS = [
  {
    id: 0,
    name: "Construction",
    designation: "Greateway Software Solutions",
    content: (
      <>
        <h1 className="font-bold text-CardHeading text-center">
          Construction
        </h1>
        <p className="pt-2 text-Paragraph ">
          At Greateway, we deliver solutions streamline project management,
          enhance collaboration, and boost productivity on and off-site,From advanced software integration to robust cybersecurity, we empower construction.
        </p>
      </>
    ),
  },
  {
    id: 1,
    name: "Banking",
    designation: "Greateway Software Solutions",
    content: (
      <>
        <h1 className="font-bold text-CardHeading text-center">
          Banking & Finance
        </h1>
        <p className="pt-2">
          We deliver specialized IT services tailored for the banking and
          finance sector. Our solutions include secure transaction processing,
          advanced data analytics, and compliance management.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Education",
    designation: "Greateway Software Solutions",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">
          Education
        </h1>
        <p className="pt-2">
          robust learning management systems, secure digital classrooms, and
          advanced data analytics, all designed to enhance teaching and
          learning. Partner with us to leverage technology
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Professional Services",
    designation: "Greateway Software Solutions",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">
          Professional Services
        </h1>
        <p className="pt-2 ">
          Our advanced project management tools, secure data handling, and
          seamless collaboration platforms, designed to enhance efficiency and
          client satisfaction.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Field Services",
    designation: "Greateway Software Solutions",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">
          Field Services
        </h1>
        <p className="pt-2">
          Our comprehensive solutions include mobile workforce management,
          real-time data analytics, and secure communication platforms, ensuring
          seamless coordination.
        </p>
      </>
    ),
  },
];
export { Highlight };

const Indrustry = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;
  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      {/*Main div*/}
      <main className="overflow-x-hidden">
        {/*landing section*/}
        <section className="relative w-full h-full overflow-x-hidden">
          <Firstsection /> {/*Images slider section */}
          <div className="absolute overflow-hidden top-0 w-screen left-0 p-4 flex-col h-full gap-4 flex justify-center items-center">
            <motion.h1
              variants={fadein("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className="md:text-TopHeading text-TopHeading-sm font-extrabold text-wrap"
            >
              Industries
            </motion.h1>
            <motion.p
              variants={fadein("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl font-bold text-white text-center w-[70vw] "
            >
              Navigating the complexities of modern industries demands versatile
              IT solutions. From marketing to logistics,we offer comprehensive
              services tailored to your business's specific needs.
            </motion.p>
          </div>
        </section>
        {/*CardsSlider Section*/}
        <section className="min-h-[50vh] w-full overflow-x-hidden bg-gray-100 flex flex-col md:flex-row justify-evenly gap-10 px-4">
          <div className="flex w-full md:w-auto py-10 px-4">
            <CardStack items={CARDS} /> {/* Card component */}
          </div>
          <motion.div className="w-full md:w-auto flex flex-col py-7">
            <motion.h1
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className=" text-center font-extrabold py-4 text-MainHeading"
            >
              Industry-specific IT,
              <span className="text-MainHeading font-extrabold text-center">
                Infinite possibilities
              </span>
            </motion.h1>
            <motion.p
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="text-Paragraph md:text-lg md:text-center w-full md:w-[60vw] px-2"
            >
              With a proven track record of success and a team of experienced
              professionals, we understand the unique challenges and
              opportunities facing financial institutions. Trust us to be your
              strategic IT partner, guiding you towards greater success and
              helping you navigate the complexities of digital finance with
              confidence.
            </motion.p>
          </motion.div>
        </section>
        {/* {Education section} */}
        <section className="h-full w-full">
          <div className="md:h-[70vh] h-[40vh] w-full  flex items-center justify-center text-white bg-black">
            <img
              src={edu2}
              className="absolute md:h-[70vh] h-[40vh] w-full object-cover opacity-55"
              alt="linear board demo"
            />
            <h1 className="relative md:text-6xl text-5xl font-bold  text-center pt-3 z-20">
              Education
            </h1>
          </div>
          <div className="">
            <h2 className="text-MainHeading font-extrabold text-center  w-screen pt-3">
              Services We Serve
            </h2>
          </div>
          <section className="px-3 ">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-6 gap-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
            >
              {/*first card*/}
              <div className=" shadow-lg relative  hover:cursor-pointer hover:scale-105 text-black bg-stone-100 hover: transition-all overflow-hidden  border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="font-bold text-xl text-[#1a2229]"
                    >
                      Learning Management system
                    </motion.h3>

                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#646464]"
                    >
                      Empower your organization with our cutting-edge Learning
                      Management System (LMS) solutions. At our IT services
                      company, we understand the critical role that technology
                      plays in modern education and training,our customizable
                      LMS platforms are tailored to meet your specific needs.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*Second card*/}
              <div className="shadow-lg  relative  hover:cursor-pointer hover:scale-105  text-black bg-stone-100  hover:transition-all overflow-hidden border bg-background p-2 px-3 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-xl text-[#1a2229]"
                    >
                      Virtual Classroom Solutions
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-[#646464]"
                    >
                      Cultivate engaging virtual learning experiences with our
                      specialized IT services tailored for virtual classrooms.
                      We offer comprehensive solutions designed to seamlessly
                      integrate virtual classrooms into your educational or
                      corporate envronment.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*third card */}
              <div className="relative hover:cursor-pointer hover:scale-105  text-black bg-stone-100  hover: transition-all overflow-hidden  border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-xl text-[#1a2229]"
                    >
                      Online Assessment and Proctoring
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-[#646464]"
                    >
                      Our advanced assessment platforms incorporate robust
                      proctoring features such as live monitoring, AI-based
                      behavior analysis, and secure exam environments. With a
                      focus on preventing cheating and maintaining exam
                      integrity.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/*Telecom Section */}
        <section className="h-full w-full">
          <div className="md:h-[70vh] h-[40vh] w-full  flex items-center justify-center text-white bg-black">
            <img
              src={tele}
              className="absolute md:h-[70vh] h-[40vh] w-full object-cover opacity-55 "
              alt="linear board demo"
            />
            <h1 className="relative md:text-6xl text-5xl font-bold  text-center pt-3 z-20">
              Telecom Services
            </h1>
          </div>
          <div>
            <h2 className="text-MainHeading font-extrabold text-center text-3xl  w-screen pt-3">
              Services We Serve
            </h2>
          </div>
          <section className="h-full px-3">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-6 gap-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 h-auto"
            >
              {/*first card */}
              <div className="shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden  border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-center text-xl px-2 text-[#1a2229]"
                    >
                      Network Management
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-[#646464] "
                    >
                      Ensuring reliability and uptime with proactive network
                      monitoring and management,Your partner in network
                      excellence, delivering scalable solutions tailored to your
                      needs,Guarding your network against cyber threats with
                      robust security measures.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*Second card */}
              <div className=" shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex  flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="font-bold  text-xl px-2 text-[#1a2229]"
                    >
                      Wireless communication
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-[#646464]"
                    >
                      Revolutionizing wireless communication landscapes, we
                      engineer seamless connectivity solutions that transcend
                      boundaries and empower businesses to thrive in a
                      hyper-connected world.Crafting bespoke wireless
                      communication ecosystems.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*third card */}
              <div className="shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-xl text-center px-2 text-[#1a2229]"
                    >
                      Virtualization And Cloud
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-[#646464] "
                    >
                      At the nexus of virtualization and cloud, we architect
                      digital ecosystems that defy gravity, empowering
                      businesses to transcend limitations, accelerate growth,
                      and achieve unprecedented levels of agility and
                      scalability.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* healthcare Section */}
        <section>
          <div className="md:h-[70vh] h-[40vh] w-full  flex items-center justify-center text-white bg-black">
            <img
              src={doc}
              className="absolute md:h-[70vh] h-[40vh] w-full object-cover opacity-55 "
              alt="linear board demo"
            />
            <h1 className="relative md:text-6xl text-4xl font-bold  text-center pt-3 z-20">
              Healthcare
            </h1>
          </div>
          <div>
            <h2 className="text-MainHeading font-extrabold text-center text-3xl  w-screen pt-3 ">
              Services We Serve
            </h2>
          </div>
          <section className="h-full px-3">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-6 gap-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 h-auto"
            >
              {/*first card */}
              <div className="shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-xl px-2 text-[#1a2229]"
                    >
                      Healthcare Cloud Solutions
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph"
                    >
                      From patient records to remote consultations, Their
                      platforms unite, fostering innovations. Securing data with
                      encryption's might, They ensure privacy, day and night. In
                      the cloud's embrace, healthcare finds wings, IT providers
                      empower, as progress sings.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*Second card*/}
              <div className="shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex  flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="font-bold text-xl px-2 text-[#1a2229]"
                    >
                      Remote Monitoring
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph"
                    >
                      Systems empower, ensuring no wrecks. Remote monitoring, a
                      lifeline they extend, Keeping patients connected, on
                      health they depend. With real-time alerts and data
                      insights clear, They empower clinicians, dispelling fear.
                      In the landscape of health, their role profound, IT
                      service providers, care's champions found.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/*third card */}
              <div className=" shadow-lg relative hover:cursor-pointer hover:scale-105 bg-stone-100 text-black transition-all overflow-hidden border bg-background p-2 md:h-[60vh] h-[40vh]">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-bold text-xl px-2 text-[#1a2229]"
                    >
                      Healthcare Analytics
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph"
                    >
                      We Provide to empower, driving innovation. Healthcare
                      analytics, a beacon they ignite, Guiding decisions,
                      shining light. With predictive models and deep dives into
                      stats, They empower providers, narrowing knowledge gaps.
                      In the landscape of health, their role profound, IT
                      service providers, where wisdom's found.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Secondsection />
      <Thirdsection />
    </>
  );
};

export default Indrustry;
