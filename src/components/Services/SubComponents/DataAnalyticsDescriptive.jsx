import React from "react";
import DataAnalyticsImg from "../Images/ML.jpeg";
import DAANDAIML from "../Images/da&aiml.jpg";
import Data from "../Images/DA.jpg";

function DataAnalyticsDescriptive() {
  return (
    <section className="w-[100vw] overflow-x-hidden  bg-white pt-20 md:pt-10 relative ">
      {/* First Section */}
      <div className="w-[100%] col-span-1 pt-10 bg-white flex flex-col text-black  py-6 justify-center items-center relative opacity-95 ">
        <img src={Data} alt="" className="w-full " />
        <div className="absolute w-[90%] md:flex-row ">
          <div className="w-[65%] flex flex-col md:gap-6 gap-2">
            <h1 className="md:text-TopHeading text-TopHeading-sm font-extrabold">
              Data Analytics and AI/ML
            </h1>
            <p className="md:text-xl text-sm  text-white font-bold">
              Unleashing the power within raw data, sculpting it into refined
            </p>
            <p className="md:text-xl text-sm  text-white font-bold">
              intelligence that drives impactful decisions and innovations.
            </p>
          </div>
        </div>
      </div>

      {/*Second Section */}
      <div className="w-full col-span-1 py-6 bg-white flex flex-col px-20 justify-center  ">
        <div className="px-2">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
            Overview
          </h1>
        </div>
        <div className=" w-full flex md:flex-row flex-col flex-col-2 items-start pt-4 gap-4">
          {/*left */}
          <div className="flex-1 px-2">
            <p className=" md:text-Paragraph text-Paragraph-sm pt-2">
              In today's data-driven world, organizations are collecting
              information at an unprecedented pace. But simply having data isn't
              enough. Extracting actionable insights is what truly fuels
              business growth.
            </p>
            <p className="md:text-Paragraph text-Paragraph-sm pt-2">
              At Vionsys, we offer a comprehensive suite of Data Analytics and
              AI/ML solutions designed to unlock the hidden potential within
              your data. Our team of data scientists and machine learning
              engineers leverages cutting-edge technologies and methodologies to
              transform raw data into actionable intelligence, uncover hidden
              patterns and trends, develop custom AI/ML models tailored to your
              specific needs, and empower data-driven decision-making for
              strategic advantage.
            </p>
            <p className="md:text-Paragraph text-Paragraph-sm pt-2">
              From predictive analytics and recommendation engines to anomaly
              detection and natural language processing, we deliver tailored
              solutions that propel your business. Our AI and machine learning
              development services offer scalability, efficiency, and accuracy,
              helping you maintain an advantage in an increasingly competitive
              landscape. Move with us as we harness the power of data with our
              advanced AI and ML services for unparalleled business success.
            </p>
          </div>
          {/*right */}
          <div className="w-full h-full flex-1 ">
            <img src={DAANDAIML} alt="" className="w-full h-full " />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full col-span-1 pb-6 bg-white flex flex-col px-20 justify-center  ">
        <div className="px-2 pb-2">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
            Our Expertise
          </h1>
        </div>
        <div className="px-2">
          <div className="px-2 md:text-Paragraph text-Paragraph-sm py-2">
            At Vionsys, we excel in harnessing the potential of data through
            advanced analytics and Artificial Intelligence (AI) solutions. Our
            expert team leverages cutting-edge technologies and methodologies to
            extract actionable insights from vast datasets, enabling data-driven
            decision-making and business growth. With a focus on scalability,
            efficiency, and accuracy, we specialize in custom machine learning
            model development, data analytics, AI consulting, and cloud-based ML
            platforms.
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Custom Machine Learning and Model Development
            </h1>
            <p className="md:text-Paragraph  text-Paragraph-sm  py-2">
              Crafting tailored solutions to meet unique business needs. Our
              expert team leverages cutting-edge algorithms and predictive
              modelling techniques to uncover hidden patterns and trends within
              vast datasets. With a focus on scalability, efficiency, and
              accuracy, we empower organizations to make informed decisions and
              drive business growth in today's data-driven landscape.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Data Analytics and Processing Services
            </h1>
            <p className="md:text-Paragraph  text-Paragraph-sm py-2">
              Transforming raw data into actionable insights that drive
              strategic initiatives. Our expertise lies in harnessing advanced
              analytics techniques to unlock the true potential of data. With a
              focus on accuracy and efficiency, we empower organizations to make
              informed decisions, optimize operations, and unlock new
              opportunities for growth in today's data-driven world.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              AI and ML Consulting
            </h1>
            <p className="md:text-Paragraph  text-Paragraph-sm  py-2">
              Our ML and AI management consulting services guide you through the
              complexities of artificial intelligence, empowering you to
              capitalize on emerging trends and navigate complex challenges.
              With our deep expertise and industry insights, we help
              organizations develop tailored AI strategies that drive
              innovation, enhance operational efficiency, and unlock new
              opportunities for growth. Partner with us to harness the power of
              AI and machine learning and stay ahead of the competition.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Cloud-based Machine Learning Platforms
            </h1>
            <p className="md:text-Paragraph  text-Paragraph-sm py-2 ">
              Leveraging cloud-based machine learning platforms to scale
              Artificial Intelligence (AI) initiatives seamlessly and accelerate
              innovation. By harnessing the power of scalable cloud
              infrastructure and advanced machine learning tools, we enable
              organizations to deploy, manage, and scale machine learning models
              efficiently. Our expertise in cloud-based ML platforms ensures
              that businesses can leverage cutting-edge AI technologies to drive
              actionable insights, streamline operations, and stay competitive
              in today's digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsDescriptive;
