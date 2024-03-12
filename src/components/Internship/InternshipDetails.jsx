import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { IntershipDetails } from "./InternshipData";
import Modal from "./Modal";

const InternshipDetails = ({ Meta_Data }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const { Title, Description, Link } = Meta_Data;
  const { id } = useParams();
  const sid = parseInt(id);
  // Find the Internship detail with the matching id
  const internshipDetail = IntershipDetails.find(
    (detail) => detail.id === parseInt(sid)
  );
  console.log(internshipDetail);
  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      <main className="main__screen  bg-gray-300 md:p-20 p-4 relative">
        <section className="w-full pb-4 flex justify-center md:pt-10 flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-600">
            Internship Details
          </h1>
        </section>
        <section className="flex flex-col justify-center items-center">
          {internshipDetail && (
            <div
              key={internshipDetail.id}
              className="w-full flex flex-col items-center"
            >
              <Card
                id={internshipDetail.id}
                logo={internshipDetail.logo}
                Post_Name={internshipDetail.Post_Name}
                quotes={internshipDetail.quotes}
                Exp={internshipDetail.Exp}
                skills={internshipDetail.skills}
                setModalOpen={setModalOpen}
              />
            </div>
          )}
        </section>

        {/* to print the detail of the internship program */}
        <section className="md:p-10 p-2 bg-white mt-4 rounded-[8px]">
          <h1 className="pb-4 text-2xl font-bold">Internship Details:</h1>
          {internshipDetail && (
            <div className="flex flex-col gap-4">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {internshipDetail.description.para1}
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {internshipDetail.description.para2}
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {internshipDetail.description.para3}
              </div>
              <div className="text-2xl font-bold">
                Benefits Of this program
              </div>
              {internshipDetail.description.Benfits?.map((benefit)=>(
                <div key={benefit.id} className="flex flex-col pl-4">
                    <span className="text-xl font-semibold">{benefit.title}:</span>
                    <span>{benefit.description}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="apply_btn flex justify-center items-center mt-4">
          {internshipDetail && (
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10  py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#4481EB]/50"
            >
              Apply
            </button>
          )}
        </div>
        {ModalOpen && <Modal setModalOpen={setModalOpen} />}
      </main>
    </>
  );
};

export default InternshipDetails;
