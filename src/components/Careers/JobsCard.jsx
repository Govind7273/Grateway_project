import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";
import { useState } from "react";
import ModalForm from "./ModalForm";

const JobsCard = () => {

  const cardData = [
    {
      position: "Web Developer",
      jobDescription:
        "As a Web Developer, you will be tasked with designing, coding and maintaining websites and web applications. You will collaborate closely with clients, designers and other team members to craft user-friendly and visually engaging online experiences.",
      Requirement: [
        "Role Category: Software Development",
        "Employment Type: Full Time, Permanent",
        "Skills: HTML, CSS, Javascript and Angular/React Js",
        "Experience: 0-4 year",
        "Location :Kharadi",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      vacancy: 3,
    },
    {
      position: "Full Stack Developer",
      jobDescription:
        "As a Full Stack Developer, your responsibilities will include designing, developing and maintaining web applications. You will work on both the front-end and back-end components, collaborating with cross-functional teams to deliver high-quality software solutions.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Role Category: Software Development",
        "Skills: HTML, CSS, Javascript, Java, Spring boot, SQL etc",
        "Experience: 0-4 year",
        "Location :Kharadi",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      vacancy: 5,
    },
    {
      position: ".Net Developer",
      jobDescription:
        "As a .NET Developer, you will play a crucial role in designing, developing and maintaining software applications using the Microsoft .NET framework. You will work with cross-functional teams, including software architects, testers and business analysts, to deliver high-quality software solutions that align with business requirements.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Skills Required c#, ASP mvc, SQL etc",
        "Experience: 0-2 year",
        "Location :Kharadi, Pune",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      vacancy: 4,
    },
    {
      position: "Java Developer",
      jobDescription:
        "As a Java Developer, you will play a pivotal role in the development and enhancement of enterprise-level Java applications. You'll collaborate with a team of software engineers and architects to design and implement robust solutions that meet business requirements. Your proficiency in Java programming, combined with your problem-solving abilities, will be essential to the success of our projects.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Skills Required Core Java, Spring boot, Hibernate, SQL etc",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      vacancy: 3,
    },
    {
      position: "Digital Marketing",
      jobDescription:
        "As a Digital Marketing Specialist, you will be tasked with developing and implementing online marketing strategies to promote products, services or brands. You will utilize various digital channels to drive traffic, engage audiences and achieve marketing goals.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Contribute to the maintenance and optimization of the company website, including SEO optimization and content updates.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "Any Graduate",
      vacancy: 5,
    },
    {
      position: "React Developer",
      jobDescription:
        "As a React Developer, you will be responsible for designing, implementing and maintaining user interfaces for web applications using React.js. You'll work closely with a team of frontend developers, designers and backend engineers to deliver engaging and responsive user experiences.",
      Requirement: [
        "Develop user interfaces for web applications using React.js and related technologies.",
        "Write clean, reusable and well-documented code following best practices and coding standards.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "Any Graduate",
      vacancy: 4,
    },
    {
      position: "Software Tester",
      jobDescription:
        "We are on the lookout for a self-motivated and enthusiastic Software Tester at the beginning of their career to join our collaborative team. The right candidate will be passionate about coding and eager to learn and grow with us.",
      Requirement: [
        "Experience with software development methodologies (Agile, Scrum).",
        "Proficiency in at least one programming language (Python, Java, C++, etc.).",
        "Strong problem-solving and analytical skills.",
        "should have knowledge of Selenium,Cypress",
        "Experience: 2-5 year",
        "Location :Kharadi, Pune",
      ],
      education:
        "Bachelor's degree in Computer Science, Engineering, or a related field",
        vacancy: 3,
    },
    {
      position: "Data Analyst",
      jobDescription:
        "We are in search of analytical Data Analyst to join our dynamic team. The ideal candidate will be passionate about data, eager to learn and possess strong problem-solving skills. As a Data Analyst, you will play a key role in gathering, analyzing and interpreting data to provide valuable insights that drive our company's success.",
      Requirement: [
        "Experience with statistical analysis and modeling techniques.",
        "Knowledge of big data technologies (Hadoop, Spark, etc.).",
        "Exposure to cloud platforms (AWS, Azure, Google Cloud, etc.).",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education:
        "Bachelor's degree in Statistics, Mathematics or ralated field",
        vacancy: 3,
    },
    {
      position: "Content Writer",
      jobDescription:
        "We are in search of a creative Content Writer to join our team. The ideal candidate will be passionate about writing, adaptable and able to create compelling content for various platforms and audiences. The Content Writer will work closely with our Marketing and Editorial teams to produce engaging and high-quality content that supports our company's goals.",
      Requirement: [
        "Strong writing, editing, and proofreading skills",
        "Proficiency in Microsoft Office and other content management tools",
        "Ability to work independently and manage multiple projects simultaneously",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Journalism, English,or related field",
      vacancy: 5,
    },
    {
      position: "Data Engineer",
      jobDescription:
        " The ideal candidate will have a strong background in mathematics, statistics and computer science as well as a passion for leveraging data to solve complex problems. The Data Scientist will work closely with our analytics and engineering teams to develop and analyze data to uncover insights and drive data-driven decision-making.",
      Requirement: [
        "Proficiency in programming languages such as Python, R or similar",
        "Strong understanding of machine learning algorithms, statistical modeling and data analysis techniques",
        "Excellent problem-solving and analytical skills",
        "Experience: 2-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Computer Science",
      vacancy: 5,
    },
    {
      position: "Cloud Computing",
      jobDescription:
        "We are seeking a motivated and proactive DevOps Engineer to join our fast-paced team. The ideal candidate will be passionate about streamlining processes, ensuring smooth deployments and automating repetitive tasks, Collaborate with cross-functional teams to understand infrastructure needs and efficient development. ",
      Requirement: [
        "Familiarity with at least one programming language (Python, Ruby, Go, etc.).",
        "Experience with cloud platforms (AWS, Azure, Google Cloud, etc.) and containerization technologies (Docker, Kubernetes, etc.).",
        "Strong problem-solving and analytical skills.",
        "Experience: 2-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Computer Science, Engineering.",
      vacancy: 4,
    },
    {
      position: "Graphic Designer",
      jobDescription:
        "We are looking for a creative and passionate Entry-Level Graphic Designer to join our team. The ideal candidate will have a strong eye for design, excellent communication skills and a willingness to learn and grow within the field. As a Graphic Designer, you will work closely with our Marketing and Creative teams to create visually engaging designs that communicate our brand message effectively.",
      Requirement: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.)",
        "Attention to detail and ability to work efficiently under tight deadlines",
        "ABasic knowledge of HTML and CSS is a plus",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree",
      vacancy: 3,
    },
    {
      position: "Salesforce Administrator",
      jobDescription:
        "As a Salesforce Administrator, you will be responsible for the overall administration and ongoing maintenance of our Salesforce CRM platform. You will collaborate with various departments to ensure the successful implementation and optimization of Salesforce solutions.",
      Requirement: [
        "Experience with integration tools like Mulesoft, Jitterbit or Boomi is a plus.",
        "Attention to detail and ability to work efficiently under tight deadlinesProficiency in Salesforce Lightning, Apex, Visualforce and other Salesforce technologies.",
        "Strong understanding of Salesforce configuration, customization and development.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education:
        "Bachelor's degree,Salesforce Administrator Certification (ADM201) is bonus",
        vacancy: 5,
    },
    {
      position: "SAP Consultant",
      jobDescription:
        "As an SAP Consultant, you will be responsible for providing technical and functional support for SAP systems. You will work closely with stakeholders to gather requirements, design solutions and implement SAP modules, Collaborate with stakeholders to gather business requirements.",
      Requirement: [
        "Train end-users on SAP functionality.",
        "Strong understanding of SAP modules such as SAP ECC, SAP S/4HANA, SAP BW or SAP CRM.",
        "Experience with SAP Fiori or SAP Cloud Platform is a plus.",
        "Proficiency in SAP ABAP programming language is a plus.",
        "Excellent communication, problem-solving and teamwork skills.",
        "Experience: 1-3 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree,SAP certification(s) is preferred",
      vacancy: 3,
    },
  ];

 
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isModalOpen, setModal] = useState(false);

  const handleClick = (position) => {
    setSelectedPosition(position);
    setModal(true);
  };

  return (
    <div className="flex flex-col w-full  items-center p-6 bg-white ">
      {/* card page title */}
      <div className="flex justify-center items-center gap-2">
        <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#06b6d4_0deg,#06b6d4_180deg,transparent_180deg,transparent_360deg)]">
          <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#2c3493_0deg,#2c3493_180deg,transparent_180deg,transparent_360deg)]"></span>
        </div>
        <motion.h1
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="md:text-MainHeading text-lg text-center font-extrabold text-[#3c4c54] px-2 uppercase"
        >
          WE ARE HIRING
        </motion.h1>
      </div>

      {/* Multiple Cards */}
      <div className="w-[100%] grid md:grid-cols-3 md:px-8 sm:grid-cols-2 grid-cols-1 flex-wrap mt-10 gap-x-14 gap-y-10 justify-around items-center">
        {/* card info */}
        {cardData.map((cardItem) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            key={cardItem.position}
            className="p-4 bg-opacity-20 bg-slate-50 border rounded-xl flex flex-col gap-4 hover:cursor-pointer transition-all duration-300 shadow-lg ease-linear"
          >
            {/* Position section */}
            <h2 className="text-2xl font-bold font-headingFont text-[#3c4c54] text-center">
              {cardItem.position}
            </h2>
            {/* Description */}
            <p className="text-slate-600 font-navlistFont text-sm">
              {cardItem.jobDescription}
            </p>

            {/* Requirement Types */}
            <div className="flex flex-col gap-2 ">
              <h1 className="text-lg font-navlistFont font-semibold text-[#06b6d4]">
                Requirement:
              </h1>
              <ul className="list-disc p-3">
                {cardItem.Requirement.map((reqList) => (
                  <li
                    key={reqList}
                    className="text-slate-600 font-navlistFont text-sm"
                  >
                    {reqList}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h1 className="text-md font-bold text-[#06b6d4]">
                Education:{" "}
                <span className="text-[#3c4c54]">{cardItem.education}</span>
              </h1>
              <h1 className="text-md font-bold text-[#06b6d4]">
                {" "}
                Positions <span className="text-[#3c4c54]">: {cardItem.vacancy}</span>
              </h1>
            </div>

            {/* Apply Button */}
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleClick(cardItem.position)}
                className="bg-zinc-900 rounded-[7px] tex-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-700"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Render ModalForm */}
      {isModalOpen && (
        <ModalForm
          setModal={setModal}
          setSelectedPosition={setSelectedPosition}
          selectedPosition={selectedPosition}
        />
      )}
    </div>
  );
};

export default JobsCard;
