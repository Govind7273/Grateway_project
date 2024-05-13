import React from "react";
import GenerativeAIImage from "../Images/generativeAi.jpg";
import GenAIImage from "../Images/GenAI.jpg";

function GenerativeAIDescriptive() {
  return (
    <section className="w-[100vw]   bg-white pt-20 md:pt-10 relative ">
      {/* First Section */}
      <div className="w-[100%] col-span-1 pt-10 bg-white flex flex-col text-black  py-6 justify-center items-center relative">
        <img src={GenerativeAIImage} alt="" className="w-full " />
        <div className="absolute w-[80%] md:flex-row ">
          <div className="text-white w-2/3 flex justify-center items-center gap-6"></div>

          <div className="w-[65%] md:py-4 pt- px-2">
            <h1 className="md:text-7xl text-xl font-extrabold text-white">
              Generative AI
            </h1>
          </div>
          <div className="w-[65%] lg:pt-4  px-2">
            <h1 className="md:text-2xl text-sm text-white">
              Embarking at the intersection of boundless creativity and
              groundbreaking innovation
            </h1>
          </div>
        </div>
      </div>

      {/*Second Section */}
      <div className="w-full col-span-1 py-10 bg-white flex flex-col px-20 justify-center  ">
        <div className="px-2">
          <h1 className="md:text-6xl text-2xl text-black">Overview</h1>
        </div>
        <div className=" w-full flex md:flex-row flex-col flex-col-2 items-start gap-6">
          {/*left */}
          <div className="flex-1 ">
            <h2 className=" lg:text-xl text:sm text-black pt-6">
              At Vionsys Gen AI Solutions, we revolutionize businesses through
              innovative artificial intelligence technologies. Our structured
              approach to Gen AI addresses diverse business needs and
              industry-specific challenges. With a focus on innovation,
              expertise, and vertical-specific solutions, we empower
              organizations to unlock the full potential of AI for sustainable
              growth and success.
            </h2>
          </div>
          {/*right */}
          <div className="w-full h-full flex-1 ">
            <img src={GenAIImage} alt="" className="w-full h-full " />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full col-span-1 gap-6 bg-white flex flex-col px-20 justify-center ">
        <div className="px-2">
          <h1 className="md:text-6xl text-2xl text-black">Our Expertise</h1>
        </div>
        <div>
          <div className="flex flex-col px-2 py-4 ">
            <h1 className="text-xl font-bold">Compentency Center</h1>
            <p className="lg:text-lg  text-sm  py-2">
              We prioritize continuous internal research and development to
              remain at the forefront of emerging models, techniques, and
              industry best practices. We actively educate our team members to
              proficiently apply these methodologies in real-world scenarios.
              Moreover, we provide consulting services and undertake customer
              projects using a phased approach. This involves delivering Proof
              of Concepts (POCs) within a six-week timeframe and conducting
              thorough assessments of Return on Investment (ROI) before
              proceeding to full-scale production.
            </p>
          </div>
          <div className="flex flex-col px-2 py-4 ">
            <h1 className="text-xl font-bold">
              Retrieval Augmented Generation (RAG)
            </h1>
            <p className="lg:text-lg  text-sm  py-2">
              We leverage RAG techniques to effectively utilize enterprise,
              product, and customer data by Large Language Models (LLMs). With
              experience in vector databases, search techniques, and building
              and evaluating RAG at scale, we enhance internal efficiency and
              improve customer-facing experiences.
            </p>
          </div>
          <div className="flex flex-col px-2 py-4 ">
            <h1 className="text-xl font-bold">Agent Development</h1>
            <p className="lg:text-lg  text-sm  py-2">
              Our focus lies in developing actionable Gen AI agents capable of
              calling APIs to perform tasks on a platform. We contextualize Gen
              AI experiences to trigger workflows within a product, creating a
              seamless "Copilot" for enhanced user experience.
            </p>
          </div>
          <div className="flex flex-col px-2 py-4 ">
            <h1 className="text-xl font-bold">Industry-Specific Solutions</h1>
            <p className="lg:text-lg  text-sm py-2 ">
              Specializing in vertical-specific focus areas, including
              healthcare, finance, retail, media, and supply chain, we build Gen
              AI apps tailored for specific domains. These address unique
              challenges and deliver tangible results.
            </p>
          </div>
          <div className="flex flex-col px-2 py-4 ">
            <h1 className="text-xl font-bold">Evaluation and Measurement</h1>
            <p className="lg:text-lg  text-sm  py-2">
              We employ rigorous evaluation frameworks to measure the
              effectiveness and impact of our Gen AI implementations. We aim to
              ensure alignment with business objectives and facilitate
              continuous improvement over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GenerativeAIDescriptive;
