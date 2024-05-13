import React from "react";
import Quality from "./assets/image/quality.png";
import Solution from "./assets/image/Solution.png";
import Team from "./assets/image/Team.png";
import ClientCentric from "./assets/image/ClientCentric.png";
import Communication from "./assets/image/Communication.png";
import Track from "./assets/image/Track.png";
import Methodology from "./assets/image/Methodology.png";
import Improvement from "./assets/image/Improvement.png";

const best = [
  {
    id: 1,
    img: Team,
    title: "Expert Team",
  },
  {
    id: 2,
    img: ClientCentric,
    title: "Client-Centric Approach",
  },
  {
    id: 3,
    img: Quality,
    title: "Quality Assurance",
  },
  {
    id: 4,
    img: Solution,
    title: "Innovative Solutions",
  },
  {
    id: 5,
    img: Communication,
    title: "Transparent Communication",
  },
  {
    id: 6,
    img: Track,
    title: "Proven Track Record",
  },
  {
    id: 7,
    img: Methodology,
    title: "Agile Methodology",
  },
  {
    id: 8,
    img: Improvement,
    title: "Continuous Improvement",
  },
]

const Special = () => {
  return (
    <>
      <section className="text-gray-700 body-font bg-slate-100">
        <div className="heading flex justify-center items-center py-5">
          <h1 className="text-3xl font-bold text-gray-700">Why we are best</h1>
        </div>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap justify-center">
            {
              best?.map((item) => (
                <div className="p-4 md:w-1/4 sm:w-1/2" key={item.id}>
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center items-center">
                      <img src={item.img} alt="Rates" className="mb-3" />
                    </div>
                    <h2 className="text-2xl font-normal text-gray-900 text-center">{item.title}</h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
