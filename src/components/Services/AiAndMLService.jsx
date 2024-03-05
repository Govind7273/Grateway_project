
import { Link } from "react-router-dom";
import faBrain from "./Images/brain.png";
import faCogs from "./Images/cogs.png";
import faRobot from "./Images/futuristic.png";
import faServer from "./Images/server.png";
const AiAndMLService = () => {
  const percentList = [
    {
      id: 1,
      percent: "83%",
      title: "AI in Business",
      message:
        "Companies have invested in AI software development as a business strategy.",
    },
    {
      id: 2,
      percent: "76%",
      title: "High Priority",
      message:
        "Enterprises have prioritized the AI and ML initiatives over other IT goals.",
    },
    {
      id: 3,
      percent: "92%",
      title: "Continous Investment",
      message:
        "Business invest on artificial intelligence consulting services in an ongoing basis.",
    },
  ];

  const aiCards = [
    {
      id: 1,
      icon:faBrain,
      title: "Cognitive AI",
      message:
        "Smart systems to mimic human behaviour and reasoning to solve complex business problems.",
    },
    {
      id: 2,
      icon:faRobot,
      title: "Virtual Assistance",
      message:
        "Build systems that understand the human commands and automate the mundane tasks.",
    },
    {
      id: 3,
      icon: faCogs
      ,
      title: "Next-Gen Solutions",
      message:
        "Make your enterprise stand apart from the competitors with customized next-gen AI solutions.",
    },
    {
      id: 4,
      icon:faServer
      ,
      title: "Data Insights",
      message:
        "Get insights from any source and bring real-time changes to your business operations.",
    },
  ];
  return (
    <section className="w-[100vw] overflow-x-hidden bg-black">
      {/* First Section */}
      <div className="w-[100%] relative flex justify-center items-center ">
        {/* left */}
        <div className=" absolute z-10 w-[100%] h-[100vh] gap-0 flex justify-center items-start flex-col pt-20">
          <h1 className="text-white md:text-[2.5rem]  text-md font-extrabold p-2">
            Artificial Intelligence (AI) Services
          </h1>
          <p className="text-white md:text-md text-sm p-4 md:w-[50%]">
            We provide cutting-edge Artificial Intelligence services tailored to empower businesses across industries. From predictive analytics to personalized customer experiences, our solutions unlock new
            possibilities for growth and efficiency, driving innovation and
            intelligent decision-making.
          </p>
          <Link
            className="ml-4 px-4 py-2 rounded-[5px] bg-white hover: font-bold hover:bg-cyan-300 hover:cursor-pointer transition-colors duration-200 ease-in-out"
            to={"/Career"}
          >
            Apply Now <span className="text-xl ml-2">&#10132;</span>
          </Link>
        </div>

        {/* right */}
        <img
          className="md:h-[100vh] h-[65vh] sm:h-[70vh] w-[100%] z-0 opacity-80"
          src="https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-125206.jpg?t=st=1709274543~exp=1709278143~hmac=23ac9f8ae955ee35f3217e19997995ba9d71f129532d13965091ffcc8484b39f&w=740"
          alt=""
        />
      </div>

      {/* Second Section */}
      <div className="w-[100%] py-20 bg-blue-900/55 flex flex-col gap-10 text-white justify-center items-center cursor-pointer">
        {/* First */}
        <div className="text-3xl font-bold text-cyan-300 p-4 text-center">
          How Fast Is the Growth of Artificial Intelligence
        </div>
        {/* Second */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-[100%] p-10">
          {/* card */}
          {percentList.map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(255,_255,_255,_.06)] p-6 rounded-xl flex flex-col gap-4 justify-center items-center"
            >
              {/* box */}
              <div className="w-[120px] text-3xl h-[120px] rounded-full border-2 border-white flex justify-center items-center gap-2">
                <h1 className="">{item.percent}</h1>
              </div>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-center">{item.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="w-[100%] md:h-[100vh] grid md:grid-cols-3 grid-cols-1 justify-center items-center bg-white gap-x-8 py-10">
        {/* left */}
        <div className="col-span-1 p-4 flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-violet-400">
            Why Your Business Needs Artificial Intelligence?
          </h2>
          <p>
            By offering business-specific insights and process automation tools
            to companies, AI has become the most revolutionary and much-needed
            technology for the global industries. AI solutions have transformed
            industries globally by enhancing the customer experience and
            automating tedious and mundane tasks. From education to healthcare
            and the supply chain, industries worldwide have invested in AI
            development services. Are you ready to implement enterprise AI
            solutions in your business?
          </p>
        </div>

        {/* right */}
        <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 p-4">
          {aiCards.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center gap-2 hover:border-b-4 hover:shadow-[0_0_20px] transition-all duration-200 ease-linear hover:cursor-pointer hover:shadow-cyan-300 hover:border-violet-400 p-4 rounded-sm">
              <img className="w-[50px] " src={item.icon} alt="" />
              <h2 className="text-xl font-bold text-violet-400">{item.title}</h2>
              <p className="text-slate-400">
               {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAndMLService;
