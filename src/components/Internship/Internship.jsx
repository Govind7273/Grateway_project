import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Card from "./Card";
import { IntershipDetails } from "./InternshipData";
import Modal from "./Modal";

const Internship = ({ Meta_Data }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const { Title, Description, Link } = Meta_Data;
  
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
              <div key={detail.id} className="w-[80%] flex flex-col items-center">

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
