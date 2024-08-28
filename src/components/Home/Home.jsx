import React, { useEffect, useState, Suspense, lazy } from "react";
import AiMl from "../../assets/videos/AI_ML.mp4";
import Service from "../../assets/videos/IT_Service.mp4";
import Crm from "../../assets/videos/CRM.mp4";
import Testing from "../../assets/videos/Testing.mp4";
import Staffing from "../../assets/videos/IT_Staffing.mp4";

// import Tech from "./Tech";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import CertifiedLogo from "../ui/CertifiedLogo";
import isoLogo from "../../components/AboutUs/images/isoLogo1.jpg";
import aicteLogo from "../../assets/Images/aicteLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

// lazy loading
const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Features = lazy(() => import("./Features"));
const Testimonials = lazy(() => import("./Testimonials"));
const Special = lazy(() => import("./Special"));
const ChooseUs = lazy(() => import("./ChooseUs"));
const InfiniteMovingCardsDemo = lazy(() => import("./Clients"));
const Collaboration = lazy(() => import("./Collaboration"));

const VideoComponent = ({ video, title, desc, link, isVisible }) => (
  <div
  className={`relative ${isVisible ? "" : "hidden"} h-[30rem] md:h-full w-[100vw] overflow-hidden`}
>
  <video
    className="w-full h-full object-cover opacity-50"
    src={video}
    loop
    autoPlay
    muted
  />
  <div className="absolute top-0 left-0 w-full h-full flex flex-col p-2 md:p-5">
    <div className="flex flex-row justify-start items-start gap-6 absolute top-0 left-0 p-2 md:p-5 mt-20">
      <img
        src={isoLogo}
        alt="ISO Certification"
        width={130}
        height={130}
        className="object-contain bg-white md:h-28 md:w-28 h-20 w-20 rounded-full"
      />
      <img
        src={aicteLogo}
        alt="AICTE Certification"
        width={130}
        height={130}
        className="object-contain bg-white md:h-28 md:w-28 h-20 w-20 rounded-full"
      />
    </div>
    <div className="flex flex-col md:justify-center justify-end items-start w-full h-full gap-2 md:max-w-[45rem] space-y-3">
      <motion.h1
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
        className="loop_video_title md:text-TopHeading text-TopHeading-sm max-w-[50rem] font-extrabold font-headingFont"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
        className="loop_video_desc max-w-[40rem] text-sm md:text-lg font-medium text-white font-navlistFont"
      >
        {desc}
      </motion.p>
      <Link
        to={link}
        className="loop_video_btn items-start w-fit bg-cyan-300 px-3 py-1 mt-10 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out hover:border"
      >
        Explore with us
      </Link>
    </div>
  </div>
</div>


);

const Video_Array = [
  {
    video: AiMl,
    title: "AI & Machine Learning",
    desc: "Our AI solutions leverage ML to revolutionize industries, optimize processes, enhance decision-making and deliver tangible results globally, unlocking transformative change worldwide.",
    link: "/Service-AI",
  },
  {
    video: Service,
    title: "IT Service Support",
    desc: "Our IT service support ensures your software systems operate smoothly, resolving issues promptly and optimizing performance for your business.",
    link: "/Service-Support",
  },
  {
    video: Crm,
    title: "Customer Relationship Management",
    desc: "Enhance customer relationships with our comprehensive CRM solution, empowering you to streamline interactions, optimize sales processes and deliver personalized experiences.",
    link: "/Service-crm",
  },
  {
    video: Testing,
    title: "Testing And Quality Analysis",
    desc: "Ensure the highest quality for your software products with our expert testing and quality analysis services, guaranteeing performance, reliability and user satisfaction.",
    link: "/Service-testingAndQA",
  },
  {
    video: Staffing,
    title: "IT Staffing",
    desc: "Augment your team with skilled IT professionals tailored to your project needs, ensuring expertise, flexibility and seamless integration.",
    link: "/Service-Staffing",
  },
];

const Home = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      AOS.init({ offset: 100, duration: 800, delay: 100 });
      setIndex((prevIndex) => (prevIndex + 1) % Video_Array.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      <main className="overflow-hidden">
        <section className="flex relative bg-black overflow-hidden">
          {Video_Array.map((vid, idx) => (
            <VideoComponent
              key={vid.video}
              video={vid.video}
              title={vid.title}
              desc={vid.desc}
              link={vid.link}
              isVisible={idx === index}
            />
          ))}
        </section>

        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
 
        <Suspense fallback={<div>Loading Services...</div>}>
          <Services />
        </Suspense>
 
        <Suspense fallback={<div>Loading Features...</div>}>
          <Features />
        </Suspense>
 
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>
 
        <Suspense fallback={<div>Loading Special...</div>}>
          <Special />
        </Suspense>
 
        <Suspense fallback={<div>Loading Choose Us...</div>}>
          <ChooseUs />
        </Suspense>
 
        <Suspense fallback={<div>Loading Certified Logo...</div>}>
          <CertifiedLogo />
        </Suspense>
 
        <Suspense fallback={<div>Loading Clients...</div>}>
          <InfiniteMovingCardsDemo />
        </Suspense>
 
        <Suspense fallback={<div>Loading Collaboration...</div>}>
          <Collaboration />
        </Suspense>

        {/*technologies used in site */}
        {/* <Tech /> */}
      </main>
    </>
  );
};

export default Home;
