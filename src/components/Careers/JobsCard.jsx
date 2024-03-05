const JobsCard = ({ setModal }) => {
  const cardData = [
    {
      position: "Web Developer",
      jobDescription:
        "As a Web Developer, you will be responsible for designing, coding, and maintaining websites and web applications. You will work closely with clients, designers, and other team members to create user-friendly and visually appealing online experiences.",
      Requirement: [
        "Role Category: Software Development",
        "Employment Type: Full Time, Permanent",
        "Skills: HTML, CSS, Javascript and Angular/React Js",
        "Experience: 0-4 year",
        "Location :Kharadi",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
    },
    {
      position: "Full Stack Developer",
      jobDescription:
        "As a Full Stack Developer, you will be responsible for designing, developing, and maintaining web applications. You will work on both the front-end and back-end components, collaborating with cross-functional teams to deliver high-quality software solutions.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Role Category: Software Development",
        "Skills: HTML, CSS, Javascript, Java, Spring boot, SQL etc",
        "Experience: 0-4 year",
        "Location :Kharadi",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
    },
    {
      position: ".Net Developer",
      jobDescription:
        "As a .NET Developer, you will play a crucial role in designing, developing, and maintaining software applications using the Microsoft .NET framework. You will collaborate with cross-functional teams, including software architects, testers, and business analysts, to deliver high-quality software solutions that meet business requirements.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Skills Required c#, ASP mvc, SQL etc",
        "Experience: 0-2 year",
        "Location :Kharadi, Pune",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
    },
    {
      position: "Java Developer",
      jobDescription:
        "As a Java Developer, you will play a pivotal role in the development and enhancement of enterprise-level Java applications. You'll collaborate with a team of software engineers and architects to design and implement robust solutions that meet business requirements. Your expertise in Java programming, along with your problem-solving skills, will contribute to the success of our projects.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Skills Required Core Java, Spring boot, Hibernate, SQL etc",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
    },
    {
      position: "Digital Marketing",
      jobDescription:
        "As a Digital Marketing Specialist, you will be responsible for developing and implementing online marketing strategies to promote products, services, or brands. You will leverage various digital channels to drive traffic, engage audiences, and achieve marketing objectives.",
      Requirement: [
        "Employment Type: Full Time, Permanent",
        "Contribute to the maintenance and optimization of the company website, including SEO optimization and content updates.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "Any Graduate",
    },
    {
      position: "React Developer",
      jobDescription:
        "As a React Developer, you will be responsible for designing, implementing, and maintaining user interfaces for web applications using React.js. You'll work closely with a team of frontend developers, designers, and backend engineers to deliver engaging and responsive user experiences.",
      Requirement: [
        "Develop user interfaces for web applications using React.js and related technologies.",
        "Write clean, reusable, and well-documented code following best practices and coding standards.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "Any Graduate",
    },
    {
      position: "Software Engineering",
      jobDescription:
        "We're on the lookout for a self-motivated and enthusiastic Software Engineer, at the beginning of their career, to join our collaborative team. The right candidate will be passionate about coding and eager to learn and grow with us.",
      Requirement: [
        "Experience with software development methodologies (Agile, Scrum).",
        "Proficiency in at least one programming language (Python, Java, C++, etc.).",
        "Strong problem-solving and analytical skills.",
        "Experience: 0-5 year",
        "Location :Kharadi, Pune",
      ],
      education:
        "Bachelor's degree in Computer Science, Engineering, or a related field",
    },
    {
      position: "Data Analyst",
      jobDescription:
        "We are in search of analytical Data Analyst to join our dynamic team. The ideal candidate will be passionate about data, eager to learn, and possess strong problem-solving skills. As a Data Analyst, you will play a key role in gathering, analyzing, and interpreting data to provide valuable insights that drive our company's success.",
      Requirement: [
        "Experience with statistical analysis and modeling techniques.",
        "Knowledge of big data technologies (Hadoop, Spark, etc.).",
        "Exposure to cloud platforms (AWS, Azure, Google Cloud, etc.).",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education:
        "Bachelor's degree in Statistics, Mathematics or ralated field",
    },
    {
      position: "Content Writer",
      jobDescription:
        "We are in search of a creative Content Writer to join our team. The ideal candidate will be passionate about writing, adaptable, and able to create compelling content for various platforms and audiences. The Content Writer will work closely with our Marketing and Editorial teams to produce engaging and high-quality content that supports our company's goals.",
      Requirement: [
        "Strong writing, editing, and proofreading skills",
        "Proficiency in Microsoft Office and other content management tools",
        "Ability to work independently and manage multiple projects simultaneously",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Journalism, English,or related field",
    },
    {
      position: "Data Engineer",
      jobDescription:
        " The ideal candidate will have a strong background in mathematics, statistics, and computer science, as well as a passion for leveraging data to solve complex problems,The Data Scientist will work closely with our analytics and engineering teams to develop and analyze data to uncover insights, and drive data-driven decision-making.",
      Requirement: [
        "Proficiency in programming languages such as Python, R, or similar",
        "Strong understanding of machine learning algorithms, statistical modeling, and data analysis techniques",
        "Excellent problem-solving and analytical skills",
        "Experience: 2-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Computer Science",
    },
    {
      position: "Cloud Computing",
      jobDescription:
        "We are seeking a motivated and proactive DevOps Engineer to join our fast-paced team. The ideal candidate will be passionate about streamlining processes, ensuring smooth deployments, and automating repetitive tasks,Collaborate with cross-functional teams to understand infrastructure needs and efficient development. ",
      Requirement: [
        "Familiarity with at least one programming language (Python, Ruby, Go, etc.).",
        "Experience with cloud platforms (AWS, Azure, Google Cloud, etc.) and containerization technologies (Docker, Kubernetes, etc.).",
        "Strong problem-solving and analytical skills.",
        "Experience: 2-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree in Computer Science, Engineering.",
    },
    {
      position: "Graphic Designer",
      jobDescription:
        "We are looking for a creative and passionate Entry-Level Graphic Designer to join our team. The ideal candidate will have a strong eye for design, excellent communication skills, and a willingness to learn and grow within the field. As a Graphic Designer, you will work closely with our Marketing and Creative teams to create visually engaging designs that communicate our brand message effectively.",
      Requirement: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.)",
        "Attention to detail and ability to work efficiently under tight deadlines",
        "ABasic knowledge of HTML and CSS is a plus",
        "Experience: 1-5 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree",
    },
    {
      position: "Salesforce Administrator",
      jobDescription:
        "As a Salesforce Administrator, you will be responsible for the overall administration and ongoing maintenance of our Salesforce CRM platform. You will collaborate with various departments to ensure the successful implementation and optimization of Salesforce solutions. ",
      Requirement: [
        "Experience with integration tools like Mulesoft, Jitterbit, or Boomi is a plus.",
        "Attention to detail and ability to work efficiently under tight deadlinesProficiency in Salesforce Lightning, Apex, Visualforce, and other Salesforce technologies.",
        "Strong understanding of Salesforce configuration, customization, and development.",
        "Experience: 2-4 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree,Salesforce Administrator Certification (ADM201) is bonus",
    },
    {
      position: "SAP Consultant",
      jobDescription:
        "As an SAP Consultant, you will be responsible for providing technical and functional support for SAP systems. You will work closely with stakeholders to gather requirements, design solutions, and implement SAP modules,Collaborate with stakeholders to gather business requirements.",
      Requirement: [
        "Train end-users on SAP functionality.",
        "Strong understanding of SAP modules such as SAP ECC, SAP S/4HANA, SAP BW, or SAP CRM.",
        "Experience with SAP Fiori or SAP Cloud Platform is a plus.",
        "Proficiency in SAP ABAP programming language is a plus.",
        "Excellent communication, problem-solving, and teamwork skills.",
        "Experience: 1-3 year",
        "Location :Kharadi, Pune",
      ],
      education: "Bachelor's degree,SAP certification(s) is preferred",
    },
  ];

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="flex flex-col justify-center w-full items-center p-6 ">
      {/* card page title */}
      <h1 className="text-5xl font-headingFont font-extrabold text-violet-500">
        Recent Openings
      </h1>

      {/* Multiple Cards */}
      <div className="w-[100%] flex flex-wrap mt-10 gap-10 justify-around items-center">
        {/* card info */}
        {cardData.map((cardItem) => (
          <div
            key={cardItem.position}
            className="md:w-[450px] w-full p-4 bg-opacity-20 bg-slate-300 rounded-xl flex flex-col gap-4 border-2 border-t-orange-500 border-l-violet-400 border-b-blue-700 border-r-pink-500 shadow-inner shadow-pink-500 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-linear"
          >
            {/* Position section */}
            <h2 className="text-2xl font-bold font-headingFont text-indigo-400 text-center">
              {cardItem.position}
            </h2>
            {/* Description */}
            <p className="text-slate-400 font-navlistFont text-sm">
              {cardItem.jobDescription}
            </p>

            {/* Requirent Types */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-navlistFont font-bold text-indigo-400">
                Requirement:
              </h1>
              <ul className="list-disc p-3">
                {cardItem.Requirement.map((reqList) => (
                  <li
                    key={reqList}
                    className="text-slate-400 font-navlistFont text-sm"
                  >
                    {reqList}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h1 className="text-xl text-indigo-400 font-bold">Education</h1>
              {/* Education Description */}
              <p className="text-slate-400 text-sm font-navlistFont">
                {cardItem.education}
              </p>
              <h1 className="text-xl text-indigo-400 font-bold">
                {" "}
                Positions : 5
              </h1>
            </div>

            {/* Apply Button */}
            <button
              onClick={handleClick}
              className="w-[100%] bg-gradient-to-tr text-lg from-green-300 to-blue-400 p-2 rounded-md text-violet-500 font-headingFont font-semibold hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-500 hover:text-green-500 transition-all duration-150 ease-linear"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
