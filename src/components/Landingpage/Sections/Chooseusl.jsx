import social from "../social.gif";
import idea from "../idea.gif";

("use client");
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadein } from "../../../variants";

const industryMapping = {
  "Elastic Scalability Solutions": "ElasticScalabilitySolutions",
  "Low Transaction Cost ": "LowTransactionCost",
  "High Security Standards": "HighSecurityStandards",
};

const industryData = {
  ElasticScalabilitySolutions: [
    "Agile Resource Management and Optimization",
    "Automated Scalability with Dynamic Adjustment",
    "Expandable Infrastructure for Growth",
    "Asset and Inventory Management",
    "Seamless Integration with Cloud Services",
    "Scalable Architecture and Performance",
  ],
  LowTransactionCost: [
    "Project Management and Scheduling",
    "Equipment Maintenance and Tracking",
    "Quality Control and Inspections",
    "Safety Compliance and Incident Reporting",
    "Optimized Resource Allocation",
    "Efficient Cost Management Strategies",
  ],
  HighSecurityStandards: [
    "Advanced Encryption Protocols",
    "Regular Security Audits",
    "Compliance with International Standards",
    "Real-Time Threat Monitoring",
    "User Authentication and Access Control",
    "Incident Response and Management",
  ],
};

const Chooseusl = () => {
  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
  };
  const [selectedIndustry, setSelectedIndustry] = useState(
    Object.keys(industryData)[0]
  );
  return (
    <section>
      <motion.div
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="text-center py-4 px-2"
      >
        <h1 className="py-4 md:text-MainHeading text-MainHeading-sm font-extrabold">
          {" "}
          Why Choose Us
        </h1>
        <p className="text-center text-Paragraph">
          With a portfolio of successful projects across various industries, our
          proven track record speaks for itself. We consistently deliver
          high-quality software solutions on time and within budget. Trust us to
          bring your project to life with reliability and excellence.
        </p>
      </motion.div>
      <div className="w-[100vw] overflow-hidden bg-opacity-100  flex justify-center items-center">
        <div>
          <div className="w-[100%] flex flex-col items-center justify-center py-10">
            {/* Flip cards */}
            <div className="flex flex-wrap gap-2 sm:gap-10 items-center justify-center ">
              <motion.div
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="card bg-white cursor-pointer rounded-xl w-[300px] md:w-[400px] h-[230px] preserve-3d perspective bg-inherit text-center"
              >
                {/* front face */}
                <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                  <div className="text-[#505050] flex flex-col items-center">
                    <img src={idea} alt="icon" className="h-20 w-20 mb-2" />
                    <div className="tracking-[2px] text-MainHeading font-bold p-5">
                      <span>Expertise and Innovation</span>
                    </div>
                  </div>
                </div>
                {/* back face */}
                <div className="back-face bg-[#4c9ddc] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                  <div className="p-5 text-white text-Paragraph">
                    We offer cutting-edge solutions with a team of highly
                    skilled professionals who adopt the latest advancements in
                    technology, ensuring your project is built to the highest
                    standards.
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className=" cursor-pointer card bg-white rounded-xl w-[300px] md:w-[400px] h-[230px] preserve-3d perspective bg-inherit text-center"
              >
                {/* front face */}
                <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                  <div className="text-[#505050] flex flex-col items-center">
                    <img src={social} alt="icon" className="h-20 w-20 mb-2" />
                    <div className="tracking-[2px] text-MainHeading font-bold p-5">
                      <span>Client-Centric Approach</span>
                    </div>
                  </div>
                </div>
                {/* back face */}
                <div className="back-face bg-[#4c9ddc] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                  <div className="p-5 text-white">
                    Our client-centric approach ensures transparent
                    communication, tailored solutions, and ongoing support,
                    focusing on understanding and fulfilling your unique
                    business needs.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-Para flex items-center justify-center font-semibold text-gray-600 border-y border-gray-400">
          <ul className="flex flex-col w-fit md:flex-row justify-center gap-4">
            {Object.entries(industryMapping).map(([displayName, key]) => (
              <li key={key}>
                <div
                  className={`p-4 w-fit cursor-pointer border-b-2 border-transparent rounded-t-lg ${selectedIndustry === key ? "text-black bg-[#BAD08C]" : ""
                    }`}
                  onClick={() => handleIndustryChange(key)}
                >
                  {displayName}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          {selectedIndustry && (
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {industryData[selectedIndustry].map((item, index) => (
                <motion.li
                  variants={fadein("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }}
                  key={index}
                  className="flex items-start mx-4"
                >
                  <FaCheckCircle className="flex-shrink-0 h-4 w-4 text-[#BAD08C] mt-1" />
                  <span className="ml-3 text-lg leading-6 text-[#4c9ddc]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Chooseusl;
