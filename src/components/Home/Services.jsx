import ai from "./assets/svg/ai.svg";
import cloud from "./assets/svg/cloud.svg";
import devop from "./assets/svg/devop.svg";
import software from "./assets/svg/software.svg";
import testing from "./assets/svg/testing.svg";
import web from "./assets/svg/web.svg";
import crm from "./assets/svg/Crm.png";
import service from "./assets/svg/Service.png";
import staffing from "./assets/svg/Staffing.png";
import { Link } from "react-router-dom";

const Services = () => {

  const Services_List = [
    {
      logo: software,
      title: "Software Development",
      desc: "Our software development services encompass a comprehensive range of technologies, platforms and programming languages to deliver effective and efficient solutions for your business needs.",
      link: "/Service-softDev",
      theme: "#a6a55b",
    },
    { 
      logo: crm, 
      title: "Customer Relationship Management",  
      desc: "Improve customer relationships and business performance with our CRM solutions. We offer customized implementations, data management, reporting and ongoing support to maximize satisfaction and retention.",
      link: "/Service-testingAndQA", 
      theme: "#518bb5" 
    },
    { 
      logo: cloud, 
      title: "Cloud Computing", 
      desc: "Embrace the scalability, flexibility and cost-efficiency of cloud computing with our comprehensive cloud services, which encompass cloud migration, architecture design and managed solutions.",
      link: "/Service-cloud", 
      theme: "#9c6e68" 
    },
    { 
      logo: ai, 
      title: "AI & Machine Learning", 
      desc: "Utilize AI to automate tasks, extract insights from data and boost operational efficiency. Our AI and machine learning services include natural language processing, computer vision and more.",
      link: "Service-AI", 
      theme: "#ad9171" 
    },
    { 
      logo: testing, 
      title: "Testing and QA", 
      desc: "Ensure the quality and reliability of your software products with our comprehensive testing and QA services. We offer functional testing, performance testing, security testing and more to validate and enhance your software solutions.",
      link: "/Service-testingAndQA", 
      theme: "#688f9c" 
    },
    { 
      logo: service, 
      title: "IT Staffing", 
      desc: "Enhance your workforce and business outcomes with our IT staffing services. We provide customized staffing solutions, recruitment, onboarding and ongoing support to meet your technology talent needs effectively.",
      link: "/Service-testingAndQA", 
      theme: "#765f9c" 
    },
    { 
      logo: web, 
      title: "Web Development", 
      desc: "Our web development services are expertly designed to meet the distinct needs of both startups and established businesses. We focus on delivering responsive and user-friendly web applications, from concept to deployment.",
      link: "/Service-webDev", 
      theme: "#7b9665" 
    },
    { 
      logo: devop, 
      title: "DevOps", 
      desc: "Facilitate collaboration between development and operations to accelerate software delivery and improve product quality with our DevOps services, including continuous integration, deployment and infrastructure automation.",
      link: "/Service-devOps", 
      theme: "#689c89" 
    },
    { 
      logo: staffing, 
      title: "IT Service Support", 
      desc: "Boost your team's efficiency and business performance with our IT service support. We provide tailored support, proactive maintenance and responsive assistance to keep your systems running smoothly.",
      link: "/Service-testingAndQA", 
      theme: "#9c5f82" 
    },
  ];
  
  return (
    <main className="bg-white p-5">
      <div className="flex justify-center md:p-5 p-2 text-gray-700">

        <h1 className="text-3xl md:text-5xl font-black">Our Services</h1>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center overflow-hidden bg-white">
        {Services_List.map((service)=>{

        return  <div key={service.title} className="group relative overflow-hidden md:p-8 p-2 bg-slate-200 pt-10 md:pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:px-10 rounded-[10px]">
            <span style={{background:`${service.theme}`}} className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-${service.theme}-500 transition-all duration-300 group-hover:scale-[10]`}></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className={`grid h-20 w-20 place-items-center rounded-full transition-all duration-300 group-hover:bg-${service.theme}-400`}>
                <img src={service.logo} width={30} alt="" />
              </span>
              <div className="space-y-2  text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h1 className="md:text-xl text-lg p-1 font-bold text-black">{service.title}</h1>
                <p className="md:text-lg text-sm">
                 {service.desc}
                </p>
              </div>
              <div className="pt-2 text-base font-semibold leading-7">
                <p>
                  <Link
                    to={service.link}
                    className="text-black transition-all duration-300 group-hover:text-white"
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
