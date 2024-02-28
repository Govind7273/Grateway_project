import React from "react";
import bank from "./images/bank.jpg";
import education from "./images/education.jpg";
import field from "./images/field.jpg";
import health from "./images/health.jpg";
import insurance from "./images/insurance.jpg";
import pharma from "./images/pharma.jpg";
import project from "./images/projects.jpg";
import construction from "./images/construction.jpg";
import Finance from "./images/Finance.jpg";
import telecom from "./images/telecom.jpg";

const Indrustry = () => {
  const pharma_list = [
    "Research and Development",
    "Regulatory Compliance",
    "Data Security and Privacy",
    "Quality Assurance and Control",
  ];

  const bank_list = [
    "Core Banking Systems",
    "Digital Transformation",
    "Data Security",
    "Analytics Intelligence",
  ];

  const Insurace_list = [
    "Policy Management System",
    "Customer Relationship",
    "Data Analytics ",
    "Claims Processing ",
  ];

  const health_list = [
    "Health Records",
    "Remote Monitoring",
    "Healthcare Analytics",
    "Medical Imaging",
  ];

  const project_list = [
    "Project Management",
    "Client Relationship",
    "Financial Management",
  ];

  const education_list = [
    "Learning Management System",
    "Virtual Classroom Solutions",
  ];
  const field_list = ["Field Service Management", "IoT and Remote Monitoring"];

  const telecom_list = ["Network Management", "Wireless Communications","Virtualization & Cloud"];
const construction_list=["Energy Efficiency","Network Traffic Management","Predictive Maintenance"]
const Finance_list=["Blockchain and Cryptocurrency","Algorithmic Trading","Financial Inclusion","Cybersecurity"]

  return (
    <main>
      {/* pharmacy section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={pharma}
            alt="Pharmaceutical"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Pharmaceutical
          </h1>
          <p class="text-md md:font-bold">
            Our advanced IT solutions empower pharmaceutical companies to drive
            innovation and optimize operations
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {pharma_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-yellow-500 rounded-md bg-yellow-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bank section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img class="object-cover h-full w-full" src={bank} alt="Banking" />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Banking
          </h1>
          <p class="text-md md:font-bold">
            Our innovative IT solutions empower banks to thrive in the digital
            era.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {bank_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-green-500 rounded-md bg-green-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* insurance section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={insurance}
            alt="Insurance"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Insurance
          </h1>
          <p class="text-md md:font-bold">
            Our cutting-edge IT solutions drive digital transformation in the
            insurance sector.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {Insurace_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-blue-500 rounded-md bg-blue-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* healthcare section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={health}
            alt="Healthcare"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Healthcare
          </h1>
          <p class="text-md md:font-bold">
            Our cutting-edge IT solutions empower healthcare organizations to
            deliver exceptional patient care.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {health_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-red-500 rounded-md bg-red-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={project}
            alt="Professional Services"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Professional Services
          </h1>
          <p class="text-md md:font-bold">
            Our tailored IT solutions empower professional service firms to
            streamline operations and deliver exceptional client experiences.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {project_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-purple-500 rounded-md bg-purple-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={education}
            alt="Education"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Education
          </h1>
          <p class="text-md md:font-bold">
            Our transformative IT solutions empower educational institutions to
            enhance learning experiences.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {education_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-cyan-500 rounded-md bg-cyan-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Services section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={field}
            alt="Field Services"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Field Services
          </h1>
          <p class="text-md md:font-bold">
            Our innovative IT solutions streamline field operations and drive
            efficiency.
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {field_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-orange-500 rounded-md bg-orange-400"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* telecome section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={telecom}
            alt="  Telecome Services"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
            Telecome Services
          </h1>
          <p class="text-md md:font-bold">
          AI-Powered Networks: Transforming Telecommunications with Smart Solutions
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {telecom_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-[#FF3EA5] rounded-md bg-[#FF3EA5]"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* construction section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={construction}
            alt=" construction Services"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
          Construction Services
          </h1>
          <p class="text-md md:font-bold">
          Construction Revolution: How AI and Tech are Reshaping Telecom Infrastructure Deployment
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {construction_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-[#B784B7] rounded-md bg-[#B784B7]"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* finance section */}
      <section class="section relative w-full h-screen md:h-[40rem] overflow-hidden pharma_section">
        <div class="pharma_img h-full w-full">
          <img
            class="object-cover h-full w-full"
            src={Finance}
            alt="Finance Services"
          />
        </div>
        <div class="pahrma_text absolute overflow-hidden top-0 w-full left-0 p-4 gap-5 flex-col h-full flex justify-center items-center">
          <h1 class="text-black px-5 font-bold text-4xl md:text-5xl">
          Finance Services
          </h1>
          <p class="text-md md:font-bold">
          Cyber-Finance Fusion: The Impact of AI and Tech on Financial Sector Evolution
          </p>
          <div class="pharma_subs flex flex-wrap gap-3">
            {Finance_list.map((name, index) => (
              <div
                key={index}
                class="border md:text-xl w-full md:w-fit text-xs px-3 p-3 flex justify-center items-center hover:cursor-pointer hover:scale-125 transition-all ease-linear border-[#A3C9AA] rounded-md bg-[#A3C9AA]"
              >
                <h1>{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Indrustry;
