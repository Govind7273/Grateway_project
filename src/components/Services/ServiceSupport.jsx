import React, { useState } from "react";
import bg from "./Images/bg.jpg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
function Accordion(props) {
  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full flex gap-3 p-4 justify-center md:justify-between items-center md:p-5 font-bold text-left bg-gray-200 hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-45" : "rotate-0"
          }    transition-transform duration-300`}
        >
          &#10011;
        </span>
      </button>
      {props.isOpen && <div className="p-4 bg-white">{props.data}</div>}
    </div>
  );
}

const ServiceSupport = () => {
  const Supports = [
    { id: 1, logo: MdOutlineSupportAgent, text: "Customer Support" },
    { id: 2, logo: BiMessageDots, text: "features Queries" },
    { id: 3, logo: IoTime, text: "Support 24/7" },
  ];

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title:
        "I'm considering software development services. How can you help me?",
      data: `Our software development services are designed to help businesses like yours create custom software solutions tailored to your unique needs. From developing new applications to enhancing existing systems, we can help you every step of the way.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What is the process for testing and quality analysis?",
      data: `Our Testing and Quality Analysis process is comprehensive and rigorous. We start by understanding your project requirements, then develop a testing plan that includes various types of testing such as functional, performance, security, and more. Our quality analysis involves detailed reviews and audits to ensure your project meets the highest standards.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "How can your CRM solutions improve my customer relationships?",
      data: "Our Customer Relationship Management solutions help businesses like yours build stronger, more profitable customer relationships. We can optimize your existing",
    },
    {
      key: 5,
      title: "How can I benefit from your Artificial Intelligence solutions?",
      data: `Our Artificial Intelligence (AI) solutions leverage the latest advancements in machine learning and natural language processing to help businesses like yours automate tasks, gain valuable insights from data, and provide personalized experiences to customers. Our AI solutions are customizable and can be tailored to your unique business needs.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "What are the advantages of Cloud Computing?",
      data: `Cloud Computing offers numerous advantages, including cost savings, scalability, flexibility, and improved collaboration. Our Cloud Computing services can help your business leverage these benefits by migrating your applications and infrastructure to the cloud, designing cloud-native applications, and optimizing your cloud environment for performance and cost efficiency.`,
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <>
      {/* hero section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img class="h-full w-full" src={bg} alt="support_bg" />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-white px-5 font-extrabold text-[3rem] md:text-[4rem]">
            Welcome to GreateWay Support
          </h1>
          <p class="text-lg text-white md:font-bold">
            Need a hand? Our support team is just a click away!
          </p>
        </div>
      </section>
      <div className="flex flex-wrap justify-center items-center gap-10 md:p-5">
        {Supports.map((s) => {
          return (
            <span key={s.id} className="items-center flex flex-col">
              {<s.logo size={50} />}
              <h1>{s.text}</h1>
            </span>
          );
        })}
      </div>

      {/* Accordion for FAQ */}
      <section>
        <div className="p-2 m-4 md:m-8">
          <h2 className=" text-xl md:text-2xl mb-2 mx-auto font-bold p-2 text-center  text-black">
            Have questions? We have answers! Check out our FAQ
          </h2>
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </section>

      <div className="flex justify-center w-full items-center gap-3 flex-col md:fl-row md:gap-6 p-3 md:p-5">
        <h1 className="text-xl w-full font-bold justify-center flex">Need more Assistant</h1>
        <button className="p-3 w-full md:w-fit bg-blue-300 hover:bg-blue-500 transition-all ease-linear font-bold rounded-xl"><Link to={"/ContactUs"}>Contact Us</Link></button>
      </div>
    </>
  );
};

export default ServiceSupport;
