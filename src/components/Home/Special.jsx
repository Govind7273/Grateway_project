import React from "react";
import quality from "./assets/image/quality.png";
import singnature from "./assets/image/signature.png";
import time from "./assets/image/time.png";

const services = [
  {
    id: 1,
    img: singnature,
    title: "Custmizable Work",
    des: "We believe in the power of collaboration, and we work closely with our clients to understand their goals and objectives.",
  },
  {
    id: 2,
    img: quality,
    title: "Quality Work",
    des: " Our company is known for providing top-quality IT solutions that set industry standards. Our team is committed to delivering exceptional work in every project.",
  },
  {
    id: 3,
    img: time,
    title: "On Time",
    des: "we take pride in our punctuality. We understand the importance of time in business, and we guarantee that our projects are completed on time, every time.",
  },
];

const Special = () => {
  return (
    <>
      <div className="heading bg-gray-700 flex justify-center items-center py-5">
        <h1 className="text-3xl font-bold text-white">Why we are best</h1>
      </div>
      <div className="flex p-2 bg-gray-700 justify-evenly flex-wrap ">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="bg-white transform 
              transition duration-200
              hover:scale-105 shadow_box max-w-sm p-4 border border-gray-600 rounded-lg my-4"
            >
              <div className=" flex items-center justify-center ">
                <img className="w-14" src={service?.img} alt="img" />
              </div>
              <h5 className=" mb-2 text-2xl font-bold text-purple-600 tracking-tight flex justify-center items-center ">
                {service.title}
              </h5>
              <p className="font-normal max-w-[45rem] text-gray-700 ">
                {service.des}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Special;
