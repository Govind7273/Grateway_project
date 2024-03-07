import ai from "./assets/svg/ai.svg";
import cloud from "./assets/svg/cloud.svg";
import devop from "./assets/svg/devop.svg";
import software from "./assets/svg/software.svg";
import testing from "./assets/svg/testing.svg";
import web from "./assets/svg/web.svg";
import { Link } from "react-router-dom";

const Services = () => {

  const Services_List = [
    {
      logo: software,
      title: "Software Development",
      desc: "Our software development services encompass a comprehensive range of technologies, platforms, and programming languages to deliver effective and efficient solutions for your business needs.",
      link: "/Service-softDev",
      theme: "#a31532",
    },
    { 
      logo: web, 
      title: "Web Development", 
      desc: "From design to deployment, our web development services are tailored to meet the needs of both startups and established businesses. We specialize in building responsive and user-friendly web applications.",
      link: "/Service-webDev", 
      theme: "#6c914c" 
    },
    { 
      logo: ai, 
      title: "Artificial Intelligence", 
      desc: "Leverage the power of AI to automate processes, gain insights from data, and optimize your business operations. Our AI services cover machine learning, natural language processing, computer vision, and more.",
      link: "Service-AI", 
      theme: "#ad9171" 
    },
    { 
      logo: cloud, 
      title: "Cloud Computing", 
      desc: "Embrace the scalability, flexibility, and cost-efficiency of cloud computing. Our cloud services include cloud migration, architecture design, and managed cloud solutions.",
      link: "/Service-cloud", 
      theme: "purple" 
    },
    { 
      logo: devop, 
      title: "DevOps", 
      desc: "Ensure seamless collaboration between development and operations teams to accelerate software delivery and improve product quality. Our DevOps services include continuous integration, continuous deployment, and infrastructure automation.",
      link: "/Service-devOps", 
      theme: "orange" 
    },
    { 
      logo: testing, 
      title: "Testing and QA", 
      desc: "Ensure the quality and reliability of your software products through rigorous testing and QA practices. Our testing services include functional testing, performance testing, security testing, and more.",
      link: "/Service-testingAndQA", 
      theme: "#0394fc" 
    },
  ];
  
  return (
    <main className="bg-gray-700">
      <div className="flex p-5 justify-center text-white">

        <h1 className="text-4xl font-black">Our services</h1>
      </div>
      <div className="flex flex-wrap  gap-10 justify-center overflow-hidden bg-gray-700">
        {Services_List.map((service)=>{

        return  <div key={service.title} className="group relative overflow-hidden p-8 bg-white  px- pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span style={{background:`${service.theme}`}} className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-${service.theme}-500 transition-all duration-300 group-hover:scale-[10]`}></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className={`grid h-20 w-20 place-items-center rounded-full transition-all duration-300 group-hover:bg-${service.theme}-400`}>
                <img src={service.logo} width={30} alt="" />
              </span>
              <div className="space-y-2  text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h1 className="text-xl p-1 font-bold text-purple-600">{service.title}</h1>
                <p>
                 {service.desc}
                </p>
              </div>
              <div className="pt-2 text-base font-semibold leading-7">
                <p>
                  <Link
                    to={service.link}
                    className="text-purple-600 transition-all duration-300 group-hover:text-white"
                  >
                    Read more &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
      })
    }
      </div>
    </main>
  );
};

export default Services;
