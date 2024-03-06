import { useEffect, useState } from "react";
import dnatrim from "../../assets/videos/hand-trim.mp4";
import robottrim from "../../assets/videos/robot-Trim.mp4";
import vrtrim from "../../assets/videos/vr-Trim.mp4";
import worktrim from "../../assets/videos/work-Trim.mp4";
import Services from "./Services";
import Special from "./Special";
import Tech from "./Tech";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
import {Link} from "react-router-dom"

const VideoComponent = ({ video, title, desc, link, isVisible }) => (
  <div className={`relative ${isVisible ? "" : "hidden"} h-screen md:h-full`}>
    <video
      className="w-full h-full object-cover opacity-50"
      src={video}
      loop
      autoPlay
      muted
    />
    <div className="absolute items-center left-1 h-full top-0 flex w-full  p-2 md:p-5">
      <div className="md:max-w-[40rem] w-full flex flex-col gap-2  space-y-3">
        <h1 className="loop_video_title text-4xl md:text-6xl text-cyan-300 max-w-[50rem] font-bold font-headingFont">
          {title}
        </h1>
        <p className="loop_video_desc max-w-[25rem] text-xl md:text-sm font-bold text-white font-navlistFont">
          {desc}
        </p>
        <Link to={link} className="loop_video_btn items-start w-fit bg-cyan-300 px-3 py-1 mt-10 md:px-4 md:py-2 rounded-lg font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out hover:border">
          Explore with us
        </Link>
      </div>
    </div>
  </div>
);

const Video_Array = [
  {
    video: dnatrim,
    title: "AI Revolutionizes Healthcare",
    desc: "Websites, apps that Transforming Diagnostics, Personalized Medicine, and Patient Care ",
    link: "/Service-AI",
  },
  {
    video: robottrim,
    title: "The Transformative Power of Machine Learning",
    desc: "Machine Learning (ML) is revolutionizing industries across the globe, and healthcare is no exception.",
    link: "/Service-bigData",
  },
  {
    video: vrtrim,
    title: "Harnessing the Potential of Virtual Reality",
    desc: "Creating immersive gaming and movie experiences.",
    link: "/Service-cloud",
  },
  {
    video: worktrim,
    title: "Creates projects considering the future scope",
    desc: "AI algorithms analyze project data to provide insights, predictions, and recommendations",
    link: "//Service-crm",
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
      {/*3 speciality of site  */}

      <Special />

      {/*service provided by site in short */}

      <Services />

      {/*technologies used in site */}

      <Tech />

      {/*reviews for the site */}

      <Testimonials />
    </>
  );
};

export default Home;
