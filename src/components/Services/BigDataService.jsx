import { Link } from "react-router-dom";
import BigDataImage from "./Images/BigDataAnalysis.jpg";
import AiIcon from "./Images/BigDataIcons/artificial-intelligence.svg";
import BigDataConsultIcon from "./Images/BigDataIcons/consult.svg";
import DataAnalyticsIcon from "./Images/BigDataIcons/data-analytics.svg";
import DataSecurityIcon from "./Images/BigDataIcons/data-security.svg";
import InternetOfThingsIcon from "./Images/BigDataIcons/internet-things.svg";
import MachineLearningIcon from "./Images/BigDataIcons/machine-learning.svg";
import DataCollectionImg from "./Images/DataCollection.jpg";
const BigDataService = () => {
  const card = [
    {
      img:  BigDataConsultIcon ,
      title: "Big Data Consulting",
      message:
        "You can never go wrong with our own top-notch dedicated servers loaded",
    },
    {
      img:  MachineLearningIcon ,
      title: "Machine Learning",
      message:
        "We can guarantee an excellent experience and loading time for your successful",
    },
    {
      img: DataAnalyticsIcon ,
      title: "Data Analytics",
      message:
        "We can guarantee an excellent experience and loading time for your successful",
    },
    {
      img:  DataSecurityIcon ,
      title: "Data Security",
      message:
        "One of many premium features is a dedicated IP cheapest VPS hosting plan",
    },
    {
      img:  AiIcon ,
      title: "Artificial Intelligence",
      message:
        "Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP",
    },
    {
      img:  InternetOfThingsIcon ,
      title: "Internet Of Things",
      message:
        "If you’re not 100% satisfied with Hostlar, we’ll refund your payment no risk",
    },
  ];

  return (
    <section className="w-[100vw] bg-black overflow-x-hidden md:pt-16 pt-0 flex flex-col justify-center items-center">
      {/* section one */}
      <div className="w-[100%] relative flex justify-center items-center ">
        {/* left */}
        <div className=" absolute z-10 w-[80%] h-[100vh] gap-0 flex justify-center items-center flex-col ">
          <h1 className="text-white text-[3rem] font-extrabold p-4">
            Big Data Analytics
          </h1>
          <p className="text-white text-xl p-4">
            "Big data analytics involves the systematic examination of large and
            varied datasets using advanced computational methods. Through this
            process, organizations derive valuable insights, enabling
            data-driven decision-making, predictive modeling, and strategic
            planning to drive innovation and competitive advantage."
          </p>
          <Link
            className="ml-4 px-4 py-2 rounded-[5px] bg-white hover: font-bold hover:bg-cyan-300 hover:cursor-pointer transition-colors duration-200 ease-in-out"
            to={"/Career"}
          >
            Apply Now <span className="text-xl ml-2">&#10132;</span>
          </Link>
        </div>

        {/* right */}
        <img
          className="w-[100%] md:h-[100vh] h-[90vh] z-0 opacity-50"
          src={BigDataImage}
          alt=""
        />
      </div>

      {/* Section Two */}
      <div className="w-[100%] grid md:grid-cols-2  grid-cols-1  bg-blue-900/35 ">
        <div className="text-white relative flex justify-center gap-4 p-8 flex-col">
          <h1 className="text-3xl font-bold text-violet-400">
            Data Collection and Integration
          </h1>
          <p>
            Data collection and integration encompass the systematic gathering
            and merging of diverse datasets from multiple sources. This process
            involves acquiring, organizing, and standardizing data to ensure
            consistency and accuracy. By integrating disparate data sets,
            organizations can gain a comprehensive understanding of their
            operations, customers, and market trends, facilitating informed
            decision-making and strategic planning.
          </p>
          <span className=" absolute w-[100px] h-[100px] top-0 right-0 blur-xl rounded-full bg-cyan-500"></span>
          <span className=" absolute w-[130px] h-[130px] bottom-0 left-0 blur-2xl rounded-full bg-cyan-500"></span>
        </div>

        <div className="flex  justify-center items-center">
          <img src={DataCollectionImg} alt="" />
        </div>
      </div>

      {/* Third Section */}
      <div className="w-[100%] pb-2 pt-2 bg-blue-900/25 grid md:grid-cols-3 grid-cols-1">
        {/* left section */}
        <div className="col-span-1">
          <img
            src="https://img.freepik.com/free-photo/server-racks-computer-network-security-server-room-data-center-dark-blue-generative-ai_1258-150857.jpg?t=st=1709192515~exp=1709196115~hmac=bbc76b2737fc234ec38aab256e6811aa7562781adc0e37888af6dbb919c6183b&w=740"
            alt=""
          />
        </div>

        {/* right section */}
        <div className=" relative col-span-2 px-4  flex justify-center items-start gap-4 flex-col text-white">
          <h1 className="text-2xl font-bold text-violet-300">
            Data Storage and Management
          </h1>
          <p className="text-md">
            We design and implement robust data storage and management solutions
            that can handle the velocity, volume, and variety of Big Data. Our
            experts utilize scalable and distributed systems, such as Hadoop and
            cloud-based platforms, to store, organize, and process large
            datasets efficiently.
          </p>
          <h4 className="text-xl text-violet-300 font-bold">Storages:</h4>
          <ul className="list-disc ms-6 font-bold">
            <li>Google Cloud Storage</li>
            <li>Amazon s3(Simple Storage service)</li>
            <li>Microsoft Azure Blob Storage</li>
            <li>IBM Cloud Object Storage</li>
          </ul>
          <span className=" absolute right-12 blur-[90px] bottom-0 w-[170px] h-[170px] bg-cyan-300"></span>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="w-[100%] bg-blue-900/25 flex flex-col items-center text-white pb-16 pt-14">
        {/* first */}
        <div className="w-[90%] flex flex-col items-center p-8 gap-2">
          <h2 className="text-3xl text-violet-300 font-extrabold">
            We Provide Best Services
          </h2>
          <p className="text-slate-300 text-lg">
            Enthusiastically drive revolutionary opportunities before emerging
            leadership. Distinctively transform tactical methods of empowerment.
          </p>
        </div>

        {/* second */}
        <div className="w-[80%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center items-center gap-x-6 gap-y-10 pt-8">
          {card.map((item) => (
            <div key={item.title} className="flex flex-col items-center hover:cursor-pointer gap-2">
              <img className="w-[20%]" src={item.img} alt="" />
              <h4 className="text-xl text-cyan-300">{item.title}</h4>
              <p className="text-sm text-center">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigDataService;
