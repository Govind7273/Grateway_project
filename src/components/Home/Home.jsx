import { useEffect, useState } from "react";
import AiMl from "../../assets/videos/AI_ML.mp4";
import Service from "../../assets/videos/IT_Service.mp4";
import Crm from "../../assets/videos/CRM.mp4";
import Testing from "../../assets/videos/Testing.mp4";
import Staffing from "../../assets/videos/IT_Staffing.mp4";
import Services from "./Services";
import Special from "./Special";
// import Tech from "./Tech";
import Testimonials from "./Testimonials";
import Features from "./Features";
import About from "./About";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"
import { InfiniteMovingCardsDemo } from "./Clients";
import ChooseUs from "./ChooseUs";
import Collaboration from "./Collaboration";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";


const VideoComponent = ({ video, title, desc, link, isVisible }) => (
  <div className={`relative ${isVisible ? "" : "hidden"} h-[30rem] md:h-full w-[100vw]`}>
    <video
      className="w-full h-full object-cover opacity-50"
      src={video}
      loop
      autoPlay
      muted
    />
    <div className="absolute items-center left-1 h-full top-0 flex w-full p-2 md:p-5">
      <div className="md:max-w-[45rem] w-full flex flex-col gap-2 space-y-3">
        <motion.h1 variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="loop_video_title md:text-TopHeading text-TopHeading-sm max-w-[50rem] font-extrabold font-headingFont">
          {title}
        </motion.h1>
        <motion.p variants={fadein("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} className="loop_video_desc max-w-[30rem] text-sm md:text-lg font-medium text-white font-navlistFont">
          {desc}
        </motion.p>
        <Link to={link} className="loop_video_btn items-start w-fit bg-cyan-300 px-3 py-1 mt-10 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out hover:border">
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
    desc: "Our AI solutions leverage ML to revolutionize industries, optimize processes, enhance decision-making, and deliver tangible results globally, unlocking transformative change worldwide.",
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
    desc: "Enhance customer relationships with our comprehensive CRM solution, empowering you to streamline interactions, optimize sales processes, and deliver personalized experiences.",
    link: "/Service-crm",
  },
  {
    video: Testing,
    title: "Testing And Quality Analysis",
    desc: "Ensure the highest quality for your software products with our expert testing and quality analysis services, guaranteeing performance, reliability, and user satisfaction.",
    link: "/Service-testingAndQA",
  },
  {
    video: Staffing,
    title: "IT Staffing",
    desc: "Augment your team with skilled IT professionals tailored to your project needs, ensuring expertise, flexibility, and seamless integration.",
    link: "/Service-Staffing",
  },
];

const Home = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
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
      <main>
        <section className="flex relative bg-black">
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
      </main>
      <About />

      <Services />

      <Features />

      <Testimonials />

      <Special />

      <ChooseUs />

      <InfiniteMovingCardsDemo />

      <Collaboration />

      {/*technologies used in site */}
      {/* <Tech /> */}
    </>
  );
};

export default Home;