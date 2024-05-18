import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadein } from "../../variants";
import BigDataImage from "./Images/BigDataAnalysis.jpg";
import AiIcon from "./Images/BigDataIcons/artificial-intelligence.svg";
import BigDataConsultIcon from "./Images/BigDataIcons/consult.svg";
import DataAnalyticsIcon from "./Images/BigDataIcons/data-analytics.svg";
import DataSecurityIcon from "./Images/BigDataIcons/data-security.svg";
import InternetOfThingsIcon from "./Images/BigDataIcons/internet-things.svg";
import MachineLearningIcon from "./Images/BigDataIcons/machine-learning.svg";
import DataCollectionImg from "./Images/DataCollection.jpg";
import ServerRackImage from "./Images/ServerRack.jpg";
const BigDataService = ({ Meta_Data }) => {
  const { Title, Description, Link: link } = Meta_Data;

  const card = [
    {
      img: BigDataConsultIcon,
      title: "Big Data Consulting",
      message:
        "You can't go wrong with our high-quality, fully-loaded dedicated servers.",
    },
    {
      img: MachineLearningIcon,
      title: "Machine Learning",
      message:
        "We ensure a superb experience and rapid loading times to support your success.",
    },
    {
      img: DataAnalyticsIcon,
      title: "Data Analytics",
      message:
        "You can count on an exceptional experience and speedy loading times for your success.",
    },
    {
      img: DataSecurityIcon,
      title: "Data Security",
      message:
        "Our lowest-cost VPS hosting plan offers numerous premium features, including a dedicated IP.",
    },
    {
      img: AiIcon,
      title: "Artificial Intelligence",
      message:
        "The VPS hosting plan we offer includes comprehensive support for dedicated IPv6 IPs.",
    },
    {
      img: InternetOfThingsIcon,
      title: "Internet Of Things",
      message:
        "With Hostlar, your satisfaction is paramount; if not fully pleased, we'll refund your payment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={link} />
      </Helmet>
      {/* Hero Section */}
      <section>
        <div className=" flex lg:flex-row flex-col lg:h-[100vh] md:pt-20 lg:pt-20 pt-10">
          <div className="flex flex-col items-center justify-center lg:h-[screen] h-auto overflow-y-hidden w-full xl:w-[55%] p-12 bg-white">
            <div className="flex shadow-xl w-auto h-auto shadow-slate-300 rounded-2xl  p-4 flex-col items-center  space-y-8">
              <h2 className="md:text-5xl text-lg text-[#3c4c54] text-center font-bold leading-tight">
                Unlock the Power of
                <br />
                Big Data Analytics
              </h2>
              <Link to={"/ContactUs"}>
                <button className="bg-zinc-900 rounded-[7px] tex-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear text-white hover:bg-zinc-700">
                  Connect
                </button>
              </Link>
            </div>
          </div>

          <div
            className="flex-grow  bg-black"
            style={{ clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <img
              src={BigDataImage}
              height={1000}
              width={1000}
              className="h-full bg-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="w-full py-16 md:py-24 lg:py-10 flex items-center">
          <div className="lg:h-[40vh] py-2 w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center space-y-4 hover:cursor-pointer">
                  <PieChartIcon className="h-12 w-12 text-[#0077B6] " />
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-gray-500">
                    Leverage powerful analytics tools to uncover insights and
                    trends from your data.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 hover:cursor-pointer">
                  <ScalingIcon className="h-12 w-12 text-[#00A8E8]" />
                  <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
                  <p className="text-gray-500">
                    Our platform scales seamlessly to handle even the largest
                    data sets.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 hover:cursor-pointer">
                  <LockIcon className="h-12 w-12 text-[#0077B6]" />
                  <h3 className="text-xl font-bold">Secure Data Management</h3>
                  <p className="text-gray-500">
                    Keep your data safe with our robust security and compliance
                    features.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4 hover:cursor-pointer">
                  <BotIcon className="h-12 w-12 text-[#00A8E8]" />
                  <h3 className="text-xl font-bold">Automated Workflows</h3>
                  <p className="text-gray-500">
                    Streamline your data processing with our automated
                    workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="w-[100vw] h-full overflow-x-hidden  flex flex-col bg-white justify-center items-center">
        {/* Third-1 */}
        <section className="flex justify-evenly w-screen md:h-[60vh] flex-col md:flex-row ">
          <div className="space-y-4 py-4 px-1 lg:w-[50%] md:flex-col ">
            <motion.h1
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="md:text-MainHeading text-2xl xs:text-center font-bold p-2"
            >
              Data Collection and Integration
            </motion.h1>
            <motion.p
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="text-Paragraph h-auto p-2"
            >
              Data Collection and Integration are crucial processes in modern
              data management. Data collection involves systematically gathering
              information from various internal and external sources, using
              methods such as automated tools, APIs, and sensors. Data
              integration combines this collected data from disparate sources
              into a unified view, often employing ETL or ELT processes. This
              integration enables comprehensive analysis and informed
              decision-making, driving operational efficiency and innovation.
              Together, these processes ensure high-quality, consistent data
              that is vital for business intelligence and strategic planning.
            </motion.p>
          </div>
          <div className="h-auto py-2 lg:w-[40vw] px-5">
            <img
              className="lg:h-[50vh]  object-cover  rounded-xl shadow-xl"
              src={DataCollectionImg}
              width={2500}
              height={1000}
              alt=""
            />
          </div>
        </section>

        {/* Third-2 */}
        <section className="w-[100vw] h-auto flex md:flex-row flex-col md:h-[61vh] p-2 overflow-y-hidden overflow-x-hidden gap-5 px-4">
          {/* left section */}
          <div>
            <img
              className="border  rounded-2xl shadow-md lg:h-[55vh]"
              src={ServerRackImage}
              width={1500}
              alt="image"
            />
          </div>

          {/* right section */}
          <div className=" px-4 flex gap-4 flex-col pt-4">
            <motion.h1
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="md:text-MainHeading text-2xl font-bold"
            >
              Data Storage and Management
            </motion.h1>
            <motion.p
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              className="text-Paragraph p-2"
            >
              We design and implement robust data storage and management
              solutions that can handle the velocity, volume, and variety of Big
              Data. Our experts utilize scalable and distributed systems, such
              as Hadoop and cloud-based platforms, to store, organize, and
              process large datasets efficiently.
            </motion.p>
            <h4 className="text-xl text-black font-bold">Storages:</h4>
            <ul className="list-disc ms-6 font-bold leading-loose w-2/3 h-[46vh]">
              <motion.li
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className="border-b-2 border-gray-500 "
              >
                Google Cloud Storage
              </motion.li>
              <motion.li
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className="border-b-2 border-gray-500"
              >
                Amazon S3(Simple Storage service)
              </motion.li>
              <motion.li
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className="border-b-2 border-gray-500"
              >
                Microsoft Azure Blob Storage
              </motion.li>
              <motion.li
                variants={fadein("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className="border-b-2 border-gray-500"
              >
                IBM Cloud Object Storage
              </motion.li>
            </ul>
          </div>
        </section>

        {/* Fourth Section */}
        <section className="w-[100%] bg-white flex flex-col items-center text-gray-500 py-4">
          {/* Heading */}
          <div className="w-[90%] flex flex-col items-center p-8 gap-2">
            <motion.h2
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="text-3xl md:text-MainHeading text-MainHeading-sm font-extrabold"
            >
              Ensuring the highest quality of services
            </motion.h2>
            <motion.p
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="md:text-SubHeading text-SubHeading-sm py-3"
            >
              Vigorously spearhead cutting-edge opportunities ahead of
              developing leadership.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="md:h-[90vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="w-[80%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center items-center gap-x-6 gap-y-12 ">
              {card.map((item) => (
                <motion.div
                  variants={fadein("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                  key={item.title}
                  className="flex flex-col bg-white border hover:shadow-xl transition duration-100 ease-in-out hover:cursor-pointer hover:scale-125 border-t-8 border-cyan-700 items-center  gap-2"
                >
                  <img className="w-[20%] py-2" src={item.img} alt="" />
                  <h4 className=" text-xl md:text-CardHeading text-CardHeading-sm font-bold text-center ">
                    {item.title}
                  </h4>
                  <p className="text-[#1a2229] text-sm text-center  px-2 py-2">
                    {item.message}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="w-[100vw] py-12 md:py-10 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4 flex flex-col justify-center">
                  <motion.h2
                    variants={fadein("right", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.8 }}
                    className=" font-bold tracking-tighter text-2xl md:text-MainHeading text-MainHeading-sm"
                  >
                    Unparalleled Big Data Analytics Expertise
                  </motion.h2>
                  <motion.p
                    variants={fadein("left", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.8 }}
                    className="max-w-[600px] md:text-SubHeading text-SubHeading-sm font-extrabold"
                  >
                    Discover why our Big Data Analytics solutions are the best
                    choice for your business.
                  </motion.p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                    <RocketIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Cutting-Edge Technology
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Leverage the latest Big Data Analytics tools and
                        frameworks to drive innovation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                    <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Experienced Professionals
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Benefit from the expertise of our seasoned Big Data
                        Analytics specialists.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
                    <TimerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Proven Track Record
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Trust our proven ability to deliver tangible business
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Ending section */}
        <section className=" w-full py-6 md:py-20 lg:py-8 bg-stone-100">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-20 lg:gap-10">
            <div className="space-y-2">
              <motion.h2
                variants={fadein("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="font-extrabold tracking-tight text-center text-2xl  md:text-MainHeading"
              >
                Ready to Unlock the Power of Big Data?
              </motion.h2>
              <motion.p
                variants={fadein("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.8 }}
                className="md:text-SubHeading text-SubHeading-sm text-center "
              >
                Contact us today to learn how our Big Data Analytics service can
                transform your business.
              </motion.p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default BigDataService;
function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ScalingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  );
}
function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
