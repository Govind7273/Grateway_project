import { Helmet } from "react-helmet-async";
import { IoTime } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import bg from "./Images/Service.jpg";
import listImg from "./Images/service2.jpg";
function Accordion(props) {
  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full flex gap-3 p-4 justify-center md:justify-between items-center md:p-5 font-bold text-left bg-gray-200 hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${props.isOpen ? "rotate-45" : "rotate-0"
            }    transition-transform duration-300`}
        >
          &#10011;
        </span>
      </button>
      {props.isOpen && <div className="p-4 bg-white">{props.data}</div>}
    </div>
  );
}

const ServiceSupport = ({ Meta_Data }) => {
  const { Title, Description, Link: link } = Meta_Data;

  const Supports = [
    { id: 1, logo: MdOutlineSupportAgent, text: "Customer Support" },
    { id: 3, logo: IoTime, text: "Support 24/7" },
  ];

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={link} />
      </Helmet>
      {/* hero section */}
      <section className="relative w-full h-full overflow-hidden pharma_section bg-black">
        {/* first */}
        <div className="pharma_img md:w-[100%] md:h-auto pt-16 opacity-45">
          <img className="h-full w-full" src={bg} alt="support_bg" />
        </div>
        {/* second */}
        <div className="pahrma_text absolute overflow-hidden top-12 w-full left-0 md:gap-5 gap-2 flex-col h-full flex justify-center ">
          <h1 className="text-center md:text-TopHeading text-2xl font-extrabold text-[#06b6d4]">
            Welcome to GreateWay Support
          </h1>
          <p className="md:text-xl text-base px-4 text-white text-center font-bold">
            Require assistance? Our support team is ready to help you!
          </p>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className="flex flex-wrap top-3 md:top-0 justify-center items-center gap-10 md:p-5 pt-2">
          {Supports.map((s) => {
            return (
              <div>
                <h1></h1>
                <span key={s.id} className="items-center flex flex-col">
                  {<s.logo size={50} />}
                  <h1>{s.text}</h1>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Third Section */}
      <section>
        {/* Main Content */}
        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl p-6 lg:px-8 border-4">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-start text-indigo-600">Everything you need</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-start text-gray-900 sm:text-4xl">IT Service Support Offerings</p>
                <p className="mt-6 text-base leading-7 text-gray-600">Our comprehensive IT service support plays a pivotal role in upholding the reliability, security, and efficiency of organizational IT infrastructure. We tailor our services to accommodate the unique needs and scale of each client's business.</p>
                <img src={listImg} alt="" />
              </div>
              <div className="grid grid-cols-1 gap-y-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-2">
                {/* List Items */}
                {[
                  { title: "Help Desk Support", content: "Providing frontline assistance for users facing IT issues, including troubleshooting software and hardware problems and offering guidance on application usage." },
                  { title: "Technical Support", content: "Resolving complex technical challenges related to network issues, server management and system administration." },
                  { title: "Remote Monitoring and Management", content: "Proactively monitoring IT infrastructure remotely, performing automated maintenance and responding to alerts promptly." },
                  { title: "Incident Management and Resolution", content: "Logging and categorizing incidents, implementing escalation procedures for unresolved issues and conducting root cause analysis." },
                  { title: "Patch Management", content: "Applying patches, updates and fixes to keep systems secure and optimize performance, while ensuring compatibility and stability through testing." },
                  { title: "Backup and Disaster Recovery", content: "Implementing backup solutions and disaster recovery plans to protect data and ensure business continuity in case of data loss or system failure." }
                ].map((item, index) => (
                  <div key={index} className="relative pl-9">
                    <div className="font-semibold text-gray-900">
                      <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                      </svg>
                      {item.title}
                    </div>
                    <div className="mt-2">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Accordion for FAQ */}
      <section>
        <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
              <p className="mt-3 text-lg text-neutral-500 md:text-xl">Questions related to IT Service Support</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {[
                {
                  question: "I'm considering software development services. How can you help me?",
                  answer:
                    "Our software development services are designed to help businesses like yours create custom software solutions tailored to your unique needs. From developing new applications to enhancing existing systems, we can help you every step of the way.",
                },
                {
                  question: "What is the process for testing and quality analysis?",
                  answer:
                    "Our Testing and Quality Analysis process is comprehensive and rigorous. We start by understanding your project requirements, then develop a testing plan that includes various types of testing such as functional, performance, security, and more. Our quality analysis involves detailed reviews and audits to ensure your project meets the highest standards.",
                },
                {
                  question: "How can your CRM solutions improve my customer relationships?",
                  answer:
                    "Our Customer Relationship Management solutions help businesses like yours build stronger, more profitable customer relationships. We can optimize your existing.",
                },
                {
                  question: "How can I benefit from your Artificial Intelligence solutions?",
                  answer:
                    "Our Artificial Intelligence (AI) solutions leverage the latest advancements in machine learning and natural language processing to help businesses like yours automate tasks, gain valuable insights from data, and provide personalized experiences to customers. Our AI solutions are customizable and can be tailored to your unique business needs.",
                },
                {
                  question: "What are the advantages of Cloud Computing?",
                  answer:
                    "Cloud Computing offers numerous advantages, including cost savings, scalability, flexibility, and improved collaboration. Our Cloud Computing services can help your business leverage these benefits by migrating your applications and infrastructure to the cloud, designing cloud-native applications, and optimizing your cloud environment for performance and cost efficiency.",
                },
              ].map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="flex relative top-0 mb-0 h-[30vh] md:h-full justify-center w-full items-center gap-6 flex-col md:fl-row md:gap-6 p-3 md:p-5">
        <h1 className=" md:text-MainHeading text-MainHeading-sm font-extrabold justify-center flex text-center">
          Need more Assistant
        </h1>
        <button className="p-3 w-[70%] text-white md:w-fit bg-blue-500 hover:bg-blue-600 transition-all ease-linear font-bold rounded-xl">
          <Link to={"/ContactUs"}>Contact Us</Link>
        </button>
      </div>
    </>
  );
};

export default ServiceSupport;
