
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";



const Card = ({ id, logo, Post_Name, quotes, Exp, skills, setModalOpen }) => {
  return (
    <>
      <section
        key={id}
        className="flex rounded-xl gap-3 pt-2 md:w-[100%] h-full flex-col items-center w-full m-2 px-6 justify-between"
      >

        <div className="1st part flex gap-4 md:flex-row flex-col items-center">
          <div className="bg-gray-200 p-2 rounded-full">

            <img width={90} height={90} src={logo} alt="" />
          </div>
          <div className="job_Desc flex flex-col ">
            <h1 className="title text-2xl px-3 pt-3 gap-1 flex-col text-[#4c9ddc] flex">
              <Link to={`/internshipDetails/${id}`} className="font-semibold ">{Post_Name}</Link>

            </h1>
            <p className="p-3 text-Paragraph">{quotes}</p>
            <div className="flex  flex-col gap-2 md:gap-5  justify-center h-full">
              <span
                className="ex flex gap-3
               items-center text-[14px] px-3 text-gray-800"
              >
                <MdWork size={16} color="#2c3493" />
                {Exp}
              </span>
              <span className="skills flex gap-3 px-3 items-center text-[14px] text-gray-800">
                <FaListUl size={15} color="#2c3493" />
                {skills}
              </span>
              <span className="flex gap-3 items-center px-3 text-[14px] text-gray-800">
                <FaMapMarkerAlt size={15} color="#2c3493 " />
                Kharadi, pune
              </span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Card;
