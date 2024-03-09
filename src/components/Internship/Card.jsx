import React from "react";

import { MdWork } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
const Card = ({ id, logo, Post_Name, quotes, Exp, skills, setModalOpen }) => {
  return (
    <>
      <section
        key={id}
        className="flex hover:scale-105 transition-all ease-in bg-white rounded-xl gap-3 py-4 md:py-10 md:w-[80%] md:flex-row flex-col items-center w-full m-2 p-6 justify-between"
      >
        <div className="1st part flex gap-4 md:flex-row flex-col items-center">
          <div className="bg-gray-200 p-2 rounded-full">
            <img width={90} height={90} src={logo} alt="" />
          </div>
          <div className="job_Desc flex flex-col ">
            <h1 className="title font-bold text-2xl p-1 gap-1 flex-col flex">
              {Post_Name}
              <p className="font-normal text-base">{quotes}</p>
            </h1>
            <div className="flex md:flex-row flex-col gap-2 md:gap-5  justify-center h-full">
              <span
                className="ex flex gap-3
               items-center text-gray-500"
              >
                <MdWork size={20} color="gray" />
                {Exp}
              </span>
              <span className="skills flex gap-3 items-center text-gray-500">
                <FaListUl size={19} color="gray" />
                {skills}
              </span>
              <span className="flex gap-3 items-center text-gray-500">
                <FaMapMarkerAlt size={19} color="gray " />
                Kharadi, pune
              </span>
            </div>
          </div>
        </div>
        <div className="apply_btn">
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10 md:px-6 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#4481EB]/50"
          >
            Apply
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
