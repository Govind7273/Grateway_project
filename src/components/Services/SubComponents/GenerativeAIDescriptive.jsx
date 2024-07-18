import React from "react";
import GenerativeAIImage from "../Images/generativeAi.jpg";
import GenAIImage from "../Images/GenAI.jpg";

function GenerativeAIDescriptive() {
  return (
    <section className="w-[100vw] bg-white pt-20 md:pt-10 relative ">
      {/* First Section */}
      <div className="w-[100%] col-span-1 opacity-95 flex flex-col text-black justify-center items-center relative bg-black">
        <img src={GenerativeAIImage} alt="" className="w-full h-[30vh] md:h-auto opacity-55" />
        <div className="absolute md:w-[80%] md:flex-row px-1">
          <div className="text-white w-2/3 flex justify-center items-center gap-4"></div>

          <div className="md:w-[65%] px-2">
            <h1 className="md:text-TopHeading text-TopHeading-sm font-extrabold text-white">
              Generative AI
            </h1>
          </div>
          <div className="md:w-[65%]  px-2">
            <h1 className="md:text-xl text-md text-white font-bold ">
              Embarking at the intersection of boundless creativity and
              groundbreaking innovation
            </h1>
          </div>
        </div>
      </div>

      {/*Second Section */}
      <div className="w-full col-span-1 py-4 bg-white flex flex-col md:px-6 px-2 justify-center  ">
        <div className="px-2">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
            Overview
          </h1>
        </div>
        <div className="w-full flex md:flex-row flex-col flex-col-2 items-start gap-6">
          {/*left */}
          <div className="flex-1 ">
            <h2 className=" md:text-Paragraph text-Paragraph-sm pt-2 md:px-2">
              At Greateway Gen AI Solutions, we stand as the vanguard of business
              transformation, pioneering a new era of innovation through
              cutting-edge artificial intelligence technologies. Our
              meticulously crafted approach to Gen AI is not just a solution;
              it's a tailored roadmap to navigating the intricacies of diverse
              business landscapes and overcoming industry-specific hurdles. At
              the heart of our ethos lies a relentless pursuit of innovation. We
              don't just keep pace with the latest advancements; we define them.
              Armed with unparalleled expertise, we delve deep into the nuances
              of each sector, crafting bespoke solutions that resonate with the
              unique challenges and opportunities of every industry. Our
              commitment extends beyond mere implementation; we are architects
              of sustainable growth and enduring success. By harnessing the
              power of AI, we empower organizations to unlock untapped
              potential, driving efficiency, productivity and profitability to
              unprecedented heights. With Greateway Gen AI Solutions by your side,
              the future isn't just a vision—it's a tangible reality, brimming
              with limitless possibilities for evolution and advancement. Join
              us as we embark on a journey to redefine the very fabric of
              business, one innovative solution at a time.
            </h2>
          </div>
          {/*right */}
          <div className="w-full h-full flex-1 ">
            <img src={GenAIImage} alt="" className="w-full md:h-[400px] h-full " />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full col-span-1 gap-4 bg-white flex flex-col md:px-6 px-2 justify-center ">
        <div className="px-2">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold">
            Our Expertise
          </h1>
        </div>
        <div>
          <div className="flex flex-col px-2  ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Competency Center
            </h1>
            <p className="md:text-Paragraph text-Paragraph-sm">
              We prioritize continuous internal research and development to
              remain at the forefront of emerging models, techniques and
              industry best practices. We actively educate our team members to
              proficiently apply these methodologies in real-world scenarios.
              Moreover, we provide consulting services and undertake customer
              projects using a phased approach. This involves delivering Proof
              of Concepts (POCs) within a six-week timeframe and conducting
              thorough assessments of Return on Investment (ROI) before
              proceeding to full-scale production.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Retrieval Augmented Generation (RAG)
            </h1>
            <p className="md:text-Paragraph text-Paragraph-sm">
              We leverage RAG techniques to effectively utilize enterprise,
              product and customer data by Large Language Models (LLMs). With
              experience in vector databases, search techniques and building
              and evaluating RAG at scale, we enhance internal efficiency and
              improve customer-facing experiences.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Agent Development
            </h1>
            <p className="md:text-Paragraph text-Paragraph-sm">
              Our focus lies in developing actionable Gen AI agents capable of
              calling APIs to perform tasks on a platform. We contextualize Gen
              AI experiences to trigger workflows within a product, creating a
              seamless "Copilot" for enhanced user experience.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Industry-Specific Solutions
            </h1>
            <p className="md:text-Paragraph text-Paragraph-sm">
              Specializing in vertical-specific focus areas including
              healthcare, finance, retail, media and supply chain, we build Gen
              AI apps tailored for specific domains. These address unique
              challenges and deliver tangible results.
            </p>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <h1 className="md:text-SubHeading text-SubHeading-sm font-bold">
              Evaluation and Measurement
            </h1>
            <p className="md:text-Paragraph text-Paragraph-sm pb-2">
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
