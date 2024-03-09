import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Card from "./Card";
import java from ".././Home/assets/svg/java-logo.svg";
import Data from ".././Home/assets/svg/Data.svg";
import analytics from ".././Home/assets/svg/analytics.svg";
import react from ".././Home/assets/svg/react-logo.svg";
import Modal from "./Modal";

const Internship = ({ Meta_Data }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const { Title, Description, Link } = Meta_Data;

  const IntershipDetails = [
    {
      id: 1,
      logo: java,
      Post_Name: " Java Developer Internship",
      quotes: "Searching for standout Java Developer Interns.",
      Exp: "0 - 6 Months",
      skills: "Java, SQL, Springboot",
    },
    {
      id: 2,
      logo: Data,
      Post_Name: " Data Science Internship",
      quotes: "seeking exceptional talents for our Data Science Interns.",
      Exp: "0 - 6 Months",
      skills: "Python or R, Pandas, NumPy, PowerBI, AWS",
    },
    {
      id: 3,
      logo: analytics,
      Post_Name: "Data Analyst Internship",
      quotes:
        "Scouring for outstanding talents to join our Data Analytics Internship.",
      Exp: "0 - 6 Months",
      skills: "Power BI, or matplotlib, Hadoop, SQL",
    },
    {
      id: 4,
      logo: react,
      Post_Name: "Web Development internship",
      quotes: "Hiring top talent for our Web Dev Internship.",
      Exp: "0 - 6 Months",
      skills: "React.js, TailwindCSS, Redux, Express.js",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      <main className="main__screen bg-gray-300 p-5 relative">
        <section className=" w-full h-[18rem] flex justify-center md:pt-10 flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center  text-purple-600">
          Internship
          </h1>
          <p className="text-center text-black p-3 max-w-[45rem]">
            Join our internship program to gain invaluable hands-on experience,
            mentorship, and networking opportunities that will propel your
            career forward. Discover your potential and build the foundation for
            a successful career with us.
          </p>
        </section>

        <section className="flex flex-col justify-center items-center">
          {IntershipDetails.map((detail) => {
            return (
              <div key={detail.id} className="w-full flex flex-col items-center">

              <Card
                id={detail.id}
                logo={detail.logo}
                Post_Name={detail.Post_Name}
                quotes={detail.quotes}
                Exp={detail.Exp}
                skills={detail.skills}
                setModalOpen={setModalOpen}
                />
                </div>
            );
          })}
        </section>
        {ModalOpen && <Modal setModalOpen={setModalOpen} />}
      </main>
    </>
  );
};

export default Internship;
