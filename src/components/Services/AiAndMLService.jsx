import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AiAndMlImage from "./Images/AIimage.jpeg";
import AiAndMlImage1 from "./Images/ML.jpeg";
import faBrain from "./Images/brain.png";
import faCogs from "./Images/cogs.png";
import faRobot from "./Images/futuristic.png";
import faServer from "./Images/server.png";
import Expansion from "./Images/AIimage.jpeg";
import GenerativeAIIcon from "./Images/GenerativeAi.png";
import DataAnlyticsIcon from "./Images/dataanlytics.png";
import GenerativeAIImage from "./Images/generativeAi1.jpeg";
import DataAnalyticsImage from "./Images/dataanalyticsandML.jpg";
import AIMLFaq from "./ServiceData/AIFAQ";
import { HashLink } from "react-router-hash-link";

const AiAndMLService = ({ Meta_Data }) => {
  const { Title, Description, Link: link } = Meta_Data;

  const percentList = [
    {
      id: 1,
      percent: "83%",
      title: "AI and ML in Business",
      message:
        "Businesses strategically allocate resources towards the development of AI and ML software solutions, recognizing their capacity to unlock transformative opportunities and revolutionize operational efficiency.",
    },
    {
      id: 2,
      percent: "76%",
      title: "High Priority",
      message:
        "Enterprises are placing AI and ML initiatives at the forefront, prioritizing their transformative power above all other IT objectives.",
    },
    {
      id: 3,
      percent: "92%",
      title: "Continous Investment",
      message:
        "Corporate entities steadfastly channel resources into AI consulting services, acknowledging their pivotal role in nurturing and advancing AI and machine learning initiatives.",
    },
  ];

  const aiCards = [
    {
      id: 1,
      icon: faBrain,
      title: "Cognitive AI",
      message:
        "Smart systems to mimic human behaviour and reasoning to solve complex business problems.",
    },
    {
      id: 2,
      icon: faRobot,
      title: "Virtual Assistance",
      message:
        "Build systems that understand the human commands and automate the mundane tasks.",
    },
    {
      id: 3,
      icon: faCogs,
      title: "Next-Gen Solutions",
      message:
        "Make your enterprise stand apart from the competitors with customized next-gen AI solutions.",
    },
    {
      id: 4,
      icon: faServer,
      title: "Data Insights",
      message:
        "Get insights from any source and bring real-time changes to your business operations.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={link} />
      </Helmet>
      <section className="w-[100vw] overflow-x-hidden  bg-white pt-20 md:pt-0">
        {/* First Section */}
        <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:mt-12 bg-white">
          <div className="w-full h-full lg:w-6/10">
            <img className="w-full h-full" src={Expansion} alt="" />
          </div>
          <div className="max-w-lg bg-slate-200 md:max-w-5xl border-2 hover:shadow-md hover:shadow-blue2 md:z-5 md:shadow-lg lg:w-4/5 lg:ml-[-10%] xl:ml-[-20%] flex justify-center items-center pt-5">
            <div className="flex flex-col px-2 py-2 md:px-8 items-center gap-4">
              <h2 className="text-center md:text-MainHeading text-MainHeading-sm font-extrabold lg:text-3xl ">
                AI & Machine Learning Service
              </h2>
              <h3 className="md:text-SubHeading text-SubHeading-sm font-bold text-center">
                Unleashing the Power of AI and Machine Learning: Where
                Innovation Meets Intelligence
              </h3>
              <p className="p-4 md:text-Paragraph text-Paragraph-sm ">
                Step into the Future with our Advanced Artificial Intelligence
                and Machine Learning Services, meticulously crafted to
                revolutionize businesses across diverse sectors. Delve into the
                realm of predictive analytics, where data-driven insights pave
                the way for informed decision-making. Experience the power of
                personalized customer interactions, tailored to enhance
                engagement and loyalty. Our solutions are designed to unleash
                innovation, driving efficiency and growth while shaping the
                landscape of tomorrow's intelligent enterprises. Embrace the
                transformative potential of AI and Machine Learning with us and
                embark on a journey towards unparalleled success.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-[100%] pt-10 bg-white flex flex-col gap-10 text-black justify-center items-center cursor-pointer h-50rem]">
          {/* First */}
          <div className="md:text-MainHeading text-MainHeading-sm  font-extrabold text-center">
            Visualizing AI and Machine Learning Progress
          </div>
          {/* Second */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-[100%] px-5">
            {/* card */}
            {percentList.map((item) => (
              <div
                key={item.id}
                className="bg-[rgba(255,_255,_255,_.06)] p-6 rounded-xl flex flex-col gap-4 justify-center items-center transition-transform transform hover:scale-110 bg-slate-200"
              >
                {/* box */}
                <div className="w-[120px] text-3xl h-[120px] rounded-full border-4  border-blue-600 flex justify-center items-center gap-2">
                  <h1 className="">{item.percent}</h1>
                </div>
                <h2 className="md:text-CardHeading text-CardHeading-sm font-bold ">
                  {item.title}
                </h2>
                <p className="md:text-Paragraph text-Paragraph-sm">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* third section */}
        <div className="w-[100%] col-span-1 pt-10 px-6 bg-white flex flex-col  gap-x-6 py-6 justify-center items-center">
          <div className=" w-full flex md:flex-row flex-col flex-col-2 gap-6 items-center">
            {/*left */}
            <div className="flex-1">
              <h2 className=" md:text-MainHeading text-MainHeading-sm font-extrabold ">
                Why Business Needs AI and Machine Learning?
              </h2>
              <p className="md:text-Paragraph text-Paragraph-sm  pt-4">
                Businesses are increasingly recognizing the unparalleled
                potential of AI and ML to provide tailored insights and optimize
                processes through automation. By leveraging these technologies,
                organizations gain a profound understanding of their data,
                enabling them to uncover actionable insights that drive informed
                decision-making. Moreover, AI and ML serve as catalysts for
                operational efficiency, streamlining workflows and enhancing
                productivity across various sectors. From automating routine
                tasks to predicting market trends, this transformative
                technology empowers businesses to adapt and thrive in an
                ever-evolving marketplace.
              </p>
            </div>
            {/*right */}
            <div className="w-full h-full flex-1">
              <img src={AiAndMlImage1} alt="" className="w-full h-full"/>
            </div>
          </div>
        </div>

        {/* fourth section*/}
        <div className="w-[100%] col-span-1 pt-8 px-6 bg-white flex flex-col text-black gap-x-6 py-6 justify-center items-center">
          <div className="flex flex-col py-2 md:px-8 items-center ">
            <h2 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
              Our Services
            </h2>
          </div>
          <div className="w-screen flex justify-evenly flex-col md:flex-row flex-col-2 gap-6 md:gap-96 items-center">
            <div className="flex gap-2 flex-row flex-col-2">
              <div className=" flex-1">
                <img
                  src={GenerativeAIIcon}
                  width={30}
                  height={30}
                  alt=""
                  className=" "
                />
              </div>
              <div className="flex-2 gap-2  flex justify-center items-center">
                <h2 className=" md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue-800 items-center">
                  <HashLink to={"#AI"}>Generative AI</HashLink>
                </h2>
              </div>
            </div>
            <div className="flex flex-row flex-col-2">
              <div className=" flex-1">
                <img
                  src={DataAnlyticsIcon}
                  width={30}
                  height={30}
                  alt=""
                  className=" "
                />
              </div>
              <div className="flex-2  flex px-4 justify-center items-center ">
                <h2 className=" md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue-800">
                  <HashLink to={"#ML"}>Data Analytics and AI/ML</HashLink>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/*fifth section */}
        <div></div>
        {/* sixth Section */}
        <div className=" w-full flex flex-col py-5 justify-center  items-center">
          <h2 className="text-center md:text-MainHeading text-MainHeading-sm font-extrabold">
            Discover Our Offerings
          </h2>
          <p className="md:text-Paragraph text-Paragraph-sm w-4/5   pt-6">
            At our software company, we harness the power of artificial
            intelligence and machine learning to revolutionize industries and
            drive innovation. Our expertise in AI and ML enables us to develop
            intelligent solutions that adapt, learn and evolve with your
            business needs. From predictive analytics to natural language
            processing, our team of data scientists and AI engineers leverages
            advanced algorithms and state-of-the-art technology to unlock
            actionable insights from your data. Whether you're looking to
            automate processes, optimize decision-making or enhance customer
            experiences, our AI and ML solutions empower you to stay ahead in
            today's data-driven world. Partner with us to explore the endless
            possibilities of AI and machine learning and transform your business
            for the future
          </p>
        </div>

        {/* Sixth Section */}

        {/*seventh section /generative AI section*/}
        <div
          id="AI"
          className="w-[100%] col-span-1 pt-8 px-6 bg-white flex flex-col text-black gap-x-6 py-4 justify-center items-center"
        >
          <div className=" w-full flex  flex-col md:flex-row flex-col-4 gap-6 items-center">
            {/*left */}
            <div className="w-full h-full flex-1 ">
              <img src={GenerativeAIImage} alt="" className="w-full h-full " />
            </div>
            {/*right */}
            <div className="flex-1 px-2">
              <h2 className=" md:text-MainHeading text-MainHeading-sm font-extrabold">
                Generative AI
              </h2>
              <p className="md:text-SubHeading text-SubHeading-sm font-bold  pt-4">
                Redefining the Boundaries of What's Possible
              </p>
              <h3 className="md:text-Paragraph text-Paragraph-sm pt-4">
                Unleash the power of Generative AI with Greatway. From artistic
                creations to innovative problem-solving, we help generate
                creative content formats like text, code and images using
                cutting-edge AI models.
              </h3>
              <Link to="/GenerativeAi">
                <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*ML Section*/}
        <div
          id="ML"
          className="w-[100%] col-span-1  px-6 pt-4 bg-white flex flex-col text-black gap-x-6 pb-10 justify-center items-center"
        >
          <div className=" w-full flex flex-col md:flex-row flex-col-2 gap-6 items-center">
            {/*left */}
            <div className="flex-1 px-2">
              <h2 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
                Data Analytics and AI/Ml
              </h2>
              <p className="md:text-SubHeading text-SubHeading-sm font-bold  pt-4">
                Animating your data for enhanced insights
              </p>
              <h3 className="md:text-Paragraph text-Paragraph-sm pt-4">
                Leverage Greatway's extensive proficiency in Data Analytics and
                AI/ML to propel your business forward. Our tailored approach
                encompasses the creation of bespoke machine learning models and
                the delivery of holistic AI consulting services, ensuring that
                your data transcends into tangible, strategic insights. With our
                transformative capabilities, we empower your organization to
                unlock the full potential of your data, facilitating informed
                decision-making and driving sustainable growth.
              </h3>
              <Link to="/DataAnalytics">
                <button className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                  View All
                </button>
              </Link>
            </div>
            {/*right */}
            <div className="w-full h-full flex-1 ">
              <img
                src={DataAnalyticsImage}
                alt=""
                className="w-full h-[60%] "
              />
            </div>
          </div>
        </div>
        <AIMLFaq />
      </section>
    </>
  );
};

export default AiAndMLService;
