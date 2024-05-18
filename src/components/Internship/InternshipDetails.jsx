import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { IntershipDetails } from "./InternshipData";
import Modal from "./Modal";
import background from "./Image/background.jpg"
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


const InternshipDetails = ({ Meta_Data }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const { Title, Description, Link1 } = Meta_Data;
  const { id } = useParams();
  const sid = parseInt(id);
  // Find the Internship detail with the matching id
  const internshipDetail = IntershipDetails.find(
    (detail) => detail.id === parseInt(sid)
  );

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link1} />
      </Helmet>
      <main className="bg-stone-200">
      <img className="w-full h-[700px] top-[-60px] absolute flex z-10 object-cover"
           src={background}
           alt=""
           />
      <section className="main__screen z-20 pt-20 md:p-20 p-4 relative">
        <section className=" border border-gray-300 pt-1 rounded-3xl">
        <Link to={`/internship`} className="flex w-fit justify-center border rounded-full hover:border-cyan-500 border-blue-800 text-blue-800 h-8 hover:scale-110 transition duration-200 "><MdOutlineKeyboardBackspace className="w-6 h-6 mx-2 my-1 hover:text-cyan-600 hover:scale-150 transition duration-200"/></Link>
        
        <section className="flex flex-col justify-center items-center">

          {/* <div className="flex absolute z-10 top-20 md:h-16 h-6 md:w-28 w-12 md:left-[80.5px] left-4 md:mt-0 mt-20 rounded-br-full rounded-tl-full bg-gradient-to-br from-[#4481EB] via-white to-[#04BEFE]"></div>
         */}
          
      
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
              <div className="apply_btn w-full pb-3 px-6 flex justify-end">
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10 md:px-6 py-1 h-8 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#4481EB]/50"
          >
            Apply
          </button>
         </div>
            </div>
          )}
          
        </section>
       
        
        {/* to print the detail of the internship program */}
        <section className="md:p-10 p-2 bg-white rounded-3xl">
          <h1 className="py-4 flex justify-center text-2xl font-bold">Internship Details</h1><hr />
          {internshipDetail && (
            <div className="flex text-[15px] py-3 font-normal text-gray-800 flex-col gap-4">
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
              <hr />
              <div className="text-1xl font-bold">
                Benefits Of this program
              </div>
              {internshipDetail.description.Benfits?.map((benefit)=>(
                <div key={benefit.id} className="flex flex-col border border-gray-300 rounded-xl px-3 py-3">
                    <span className="text-sm font-bold pb-2">{benefit.title}</span>
                    <span className="text-[14px]">{benefit.description}</span>
                </div>
              ))}
            </div>
          )}
          <div className="apply_btn flex pt-5 justify-center items-center">
          {internshipDetail && (
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10  py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#4481EB]/50"
            >
              Apply
            </button>
          )}
        </div>
        </section>
 
        </section>
      </section>
      {ModalOpen && <Modal setModalOpen={setModalOpen} />}
      </main>
    </>
  );
};

export default InternshipDetails;
