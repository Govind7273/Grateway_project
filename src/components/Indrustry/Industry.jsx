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
    designation: "Greateway Software Pvt.Ltd",
    content: (
      <>
        <h1 className="font-bold text-CardHeading text-center">Construction</h1>
        <p className="pt-2 text-Paragraph ">
          At Greateway, we deliver solutions streamline project management,
          enhance collaboration and boost productivity on and off-site, From
          advanced software integration to robust cybersecurity, we empower
          construction.
        </p>
      </>
    ),
  },
  {
    id: 1,
    name: "Banking",
    designation: "Greateway Software Pvt.Ltd",
    content: (
      <>
        <h1 className="font-bold text-CardHeading text-center">
          Banking & Finance
        </h1>
        <p className="pt-2">
          We deliver specialized IT services tailored for the banking and
          finance sector. Our solutions include secure transaction processing,
          advanced data analytics and compliance management.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Education",
    designation: "Greateway Software Pvt.Ltd",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">Education</h1>
        <p className="pt-2">
          robust learning management systems, secure digital classrooms and
          advanced data analytics, all designed to enhance teaching and
          learning. Partner with us to leverage technology
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "Professional Services",
    designation: "Greateway Software Pvt.Ltd",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">
          Professional Services
        </h1>
        <p className="pt-2 ">
          Our advanced project management tools, secure data handling and
          seamless collaboration platforms, designed to enhance efficiency and
          client satisfaction.
        </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Field Services",
    designation: "Greateway Software Pvt.Ltd",
    content: (
      <>
        <h1 className=" font-bold text-CardHeading text-center">
          Field Services
        </h1>
        <p className="pt-2">
          Our comprehensive solutions include mobile workforce management,
          real-time data analytics and secure communication platforms, ensuring
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
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="md:text-TopHeading text-TopHeading-sm font-extrabold text-wrap"
            >
              Industries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="text-xl font-bold text-white text-center md:w-[70vw] "
            >
              Navigating the complexities of modern industries demands versatile
              IT solutions. From marketing to logistics, we offer comprehensive
              services tailored to your business's specific needs.
            </motion.p>
          </div>
        </section>


        {/*CardsSlider Section*/}{" "}
        <section className="md:h-[50vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="min-h-[50vh] w-full overflow-x-hidden md:gap-10  flex flex-col md:flex-row justify-evenly px-2">
            <div className="flex justify-center md:w-auto  py-10 px-2">
              <CardStack items={CARDS} /> {/* Card component */}
            </div>
            <motion.div className="w-full md:w-auto flex flex-col pb-3 md:py-7">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className=" text-center font-extrabold py-4 text-MainHeading"
              >
                Industry-specific IT,
                <span className="text-MainHeading font-extrabold text-center">
                  &nbsp;Infinite possibilities
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="text-Paragraph md:text-lg md:text-center w-full md:w-[60vw] px-2"
              >
                With a proven track record of success and a team of experienced
                professionals, we understand the unique challenges and
                opportunities facing in industry. Trust us to be your strategic
                IT partner, guiding you towards greater success and helping you
                navigate the complexities with confidence.
              </motion.p>
            </motion.div>
          </div>
        </section>


        {/* {Education section} */}
        <section className="h-full w-full">
          <div className="relative h-[40vh] md:h-[70vh] w-full flex items-center justify-center text-white bg-black">
            <img
              src={edu2}
              className="absolute h-full w-full object-cover opacity-35"
              alt="linear board demo"
            />
            <div className="flex flex-col justify-center items-center px-2 gap-2">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="relative text-5xl md:text-6xl font-bold text-center pt-3 z-20">
                Education
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="md:w-[60%] text-Paragraph font-bold text-white z-20 text-center">Our IT services enhance education with advanced e-learning platforms, secure data management, and customized solutions for seamless, innovative, and efficient learning experiences.</motion.p>
            </div>
          </div>

          <div className="w-full bg-dot-slate-400">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="text-MainHeading font-extrabold text-center w-full pt-3">
              Services We Serve
            </motion.h2>
          </div>
          <section className="px-3 bg-dot-slate-400">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-6 gap-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
            >
              {/* First card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="relative  hover:scale-105 transition-transform text-black bg-slate-100 overflow-hidden border p-2 h-auto md:h-auto shadow-xl">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-CardHeading font-semibold text-center"
                    >
                      Learning Management System
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-Paragraph text-center"
                    >
                      Empower your organization with our cutting-edge Learning
                      Management System (LMS) solutions. At our IT services
                      company, we understand the critical role that technology
                      plays in modern education and training. Our customizable
                      LMS platforms are tailored to meet your specific needs.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Second card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative hover:scale-105 transition-transform text-black bg-slate-100 overflow-hidden border p-2 h-auto md:h-auto">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-CardHeading font-semibold text-center"
                    >
                      Virtual Classroom Solutions
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      Cultivate engaging virtual learning experiences with our
                      specialized IT services tailored for virtual classrooms.
                      We offer comprehensive solutions designed to seamlessly
                      integrate virtual classrooms into your educational or
                      corporate environment.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Third card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative hover:scale-105 transition-transform text-black bg-slate-100 overflow-hidden border p-2 h-auto md:h-auto">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-CardHeading font-semibold text-center"
                    >
                      Online Assessment and Proctoring
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      Our advanced assessment platforms incorporate robust
                      proctoring features such as live monitoring, AI-based
                      behavior analysis and secure exam environments. With a
                      focus on preventing cheating and maintaining exam
                      integrity.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </section>


        {/*Telecom Section */}
        <section className="h-full w-full bg-white bg-dot-slate-400">
          <div className="relative h-[40vh] md:h-[70vh] w-full flex items-center justify-center text-white bg-black">
            <img
              src={tele}
              className="absolute h-full w-full object-cover opacity-35"
              alt="linear board demo"
            />
            <div className="flex justify-center items-center flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="relative text-5xl md:text-6xl font-bold text-center pt-3 z-20">
                Telecom Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="md:w-[60%] text-center z-20 font-semibold">Our IT services for telecom enhance network performance, security, and customer engagement with advanced solutions for seamless, reliable, and efficient communication.</motion.p>
            </div>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="text-MainHeading font-extrabold text-center w-full pt-3">
              Services We Serve
            </motion.h2>
          </div>
          <section className="h-full px-3">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-6 gap-10 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 h-auto"
            >
              {/* First card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative  hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-2 h-auto">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Network Management
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      Ensuring reliability and uptime with proactive network
                      monitoring and management. Your partner in network
                      excellence, delivering scalable solutions tailored to your
                      needs. Guarding your network against cyber threats with
                      robust security measures.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Second card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative  hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-2 h-auto">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Wireless Communication
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      Revolutionizing wireless communication landscapes, we
                      engineer seamless connectivity solutions that transcend
                      boundaries and empower businesses to thrive in a
                      hyper-connected world. Crafting bespoke wireless
                      communication ecosystems.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Third card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-2 h-auto">
                <div className="flex flex-col justify-between rounded-md p-6 h-full">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Virtualization And Cloud
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      At the nexus of virtualization and cloud, we architect
                      digital ecosystems that defy gravity, empowering
                      businesses to transcend limitations, accelerate growth and
                      achieve unprecedented levels of agility and scalability.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </section>


        {/* healthcare Section */}
        <section className="h-full w-full bg-white bg-dot-slate-400">
          <div className="md:h-[70vh] h-[40vh] w-full flex items-center justify-center text-white bg-black">
            <img
              src={doc}
              className="absolute md:h-[70vh] h-[40vh] w-full object-cover opacity-35"
              alt="linear board demo"
            />
            <div className="flex flex-col justify-center items-center gap-4">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="relative md:text-6xl text-4xl font-bold text-center pt-3 z-20">
                Healthcare
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="md:w-[60%] text-center z-20 font-semibold">Our IT services for healthcare improve patient care, data security, and operational efficiency with advanced, reliable, and secure healthcare technology solutions.</motion.p>
            </div>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="text-MainHeading font-extrabold text-center text-3xl w-screen pt-3">
              Services We Serve
            </motion.h2>
          </div>
          <section className="h-full px-3">
            <div
              data-aos="zoom-out"
              className="mx-auto grid justify-center py-8 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem] h-auto"
            >
              {/* First card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative  hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-4 min-h-[30vh]">
                <div className="flex flex-col justify-between rounded-md p-4">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Healthcare Cloud Solutions
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      From patient records to remote consultations, their
                      platforms unite, fostering innovations. Securing data with
                      encryption's might, they ensure privacy, day and night. In
                      the cloud's embrace, healthcare finds wings, IT providers
                      empower, as progress sings.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Second card*/}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-4 min-h-[30vh]">
                <div className="flex flex-col justify-between rounded-md p-4">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Remote Monitoring Solutions
                    </motion.h3>
                    <motion.p
                      variants={fadein("left", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center "
                    >
                      Systems empower, ensuring no wrecks. Remote monitoring, a
                      lifeline they extend, keeping patients connected on health
                      they depend. With real-time alerts and data insights
                      clear, they empower clinicians, dispelling fear. In the
                      landscape of health, their role profound, IT service
                      providers, care's champions found.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              {/* Third card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.5 },
                  ease: "easeInOut"
                }}
                className="shadow-lg relative hover:scale-105 bg-slate-100 text-black transition-all overflow-hidden border p-4 min-h-[30vh]">
                <div className="flex flex-col justify-between rounded-md p-4">
                  <div className="space-y-4">
                    <motion.h3
                      variants={fadein("left", 0.5)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.8 }}
                      className="font-semibold text-center text-CardHeading px-2"
                    >
                      Healthcare Analytics
                    </motion.h3>
                    <motion.p
                      variants={fadein("right", 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="text-Paragraph text-center"
                    >
                      We provide to empower, driving innovation. Healthcare
                      analytics, a beacon they ignite, guiding decisions,
                      shining light. With predictive models and deep dives into
                      stats, they empower providers, narrowing knowledge gaps.
                      In the landscape of health, their role profound, IT
                      service providers, where wisdom's found.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
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
