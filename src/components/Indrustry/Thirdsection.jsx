import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import actioninsight from "../Indrustry/images/actioninsight.jpg";
import streamline from "../Indrustry/images/streamline.jpg";
import regulatory from "../Indrustry/images/regulatory.jpg";
import infrastructure from "../Indrustry/images/infrastructure.jpg";
import { Link } from "react-router-dom";
export const Thirdsection = () => {
  return (
    <div className="px-3 pt-4">
      {/*Main div */}
      {/*Main Section*/}
      <section className="w-full py-12 md:py-24 lg:py-20 bg-[#F9FAFB] dark:bg-gray-800 overflow-x-hidden">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            {/*Revolutionise section */}
            <div className="space-y-4">
              <motion.h1
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#3c4c54]"
              >
                Revolutionize Your Industry
              </motion.h1>
              <motion.p
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="max-w-[700px] md:text-xl text-SubHeading"
              >
                Our industry-focused solutions are designed to help you overcome
                your unique challenges and drive innovation in your field.
              </motion.p>
            </div>
            {/*Cards Section */}
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.h2
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-2xl font-bold tracking-tighter text-[#1a2229]"
                >
                  Streamlined Workflows
                </motion.h2>
                <p className="mt-4 text-Paragraph">
                  Optimize your processes and increase efficiency with our
                  industry-specific tools and integrations. Automate repetitive
                  tasks, improve collaboration and focus on what matters most.
                </p>
                <img
                  alt="Streamlined Workflows"
                  className="mt-12 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src={streamline}
                  width="550"
                />
              </motion.div>
              <motion.div
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.h2
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-2xl font-bold tracking-tighter text-[#1a2229]"
                >
                  Actionable Insights
                </motion.h2>
                <p className="mt-4 text-Paragraph">
                  Gain valuable data-driven insights to make informed decisions
                  and drive growth. Our advanced analytics tools provide a
                  comprehensive view of your business, helping you identify
                  opportunities and optimize your strategies.
                </p>
                <img
                  alt="Actionable Insights"
                  className="mt-6 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src={actioninsight}
                  width="550"
                />
              </motion.div>
              <motion.div
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h2
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-2xl font-bold tracking-tighter text-[#1a2229]"
                >
                  Regulatory Compliance
                </motion.h2>
                <p className="mt-4 text-Paragraph">
                  Keep your business compliant with industry regulations and standards. Our solutions help you navigate the complex
                  compliance landscape, reducing the risk of costly penalties
                  and maintaining the trust of your customers and stakeholders.
                </p>
                <img
                  alt="Regulatory Compliance"
                  className="mt-6 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src={regulatory}
                  width="550"
                />
              </motion.div>
              <motion.div
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h2
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-2xl font-bold tracking-tighter text-[#1a2229]"
                >
                  Scalable Infrastructure
                </motion.h2>
                <p className="mt-4 text-Paragraph">
                  Stay agile and responsive to evolving business needs with a flexible and scalable platform. Our solutions are designed to grow with your
                  organization, ensuring you have the resources and
                  infrastructure to support your long-term success.
                </p>
                <img
                  alt="Scalable Infrastructure"
                  className="mt-6 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src={infrastructure}
                  width="550"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/*Help & Button Section*/}
      <div className="flex flex-col justify-center items-center overflow-x-hidden py-3 h-full gap-6">
        <h1 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl md:text-4xl flex-grow text-[#504d69] ">
          Here To Help Your Every Business Need !
        </h1>
        <Link to={"/ContactUs"}>
          <button className="bg-zinc-900 rounded-[7px] tex-white px-5 py-3 font-headingFont text-sm text-white  transition-all duration-150 ease-linear hover:bg-zinc-700">
            Connect
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thirdsection;
