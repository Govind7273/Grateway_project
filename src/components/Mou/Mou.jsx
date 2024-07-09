// Mou.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import Carousal from "./Carousal";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Collaborte from "./Collaborte";

import MarathWadaCLG from "./Images/MarathWadaCLG.jpg";
import PuneVidyCLG from "./Images/PuneVidyCLG.jpg";

const Mou = ({ Meta_Data }) => {
  const { Title, Description, Link } = Meta_Data;
  const [selectedImage, setSelectedImage] = useState({
    index: null,
    images: [],
  });

  const textItems = [
    {
      text: "Pune Vidhyarthi Griha's College of Engineering and Technology, Pune",
      images: [
        {
          src: PuneVidyCLG,
        }
      ]
    },
    {
      text: "The Marathwada Mitramandal’s Institute of Technology, Lohgaon",
      images: [
        {
          src: MarathWadaCLG,
        }
      ]
    }
  ];

  const handleClick = (index, images) => {
    if (selectedImage.index === index) {
      setSelectedImage({ index: null, images: [] });
    } else {
      setSelectedImage({ index, images });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
      <HeroSection />
      {/* Second Section of Collages */}
      <section id="targetsection" className="p-3">
        <h1
          if=""
          className="text-center text-MainHeading-sm font-extrabold md:py-2 py-1 capitalize"
        >
          List of Collages We Have Collaborated
        </h1>
        <div className="lg:px-12 ">
          {textItems.map((item, index) => (
            <div
              key={index}
              className="mx-auto text-center text-hyperlinks mt-6"
            >
              <button
                onClick={() => handleClick(index, item.images)}
                className="w-full flex justify-between items-center p-4 bg-white rounded-t shadow hover:bg-gray-100 divide-y shadow-blue-600"
              >
                <span>{item.text}</span>
                <MdOutlineArrowDropDown className="ml-2" />
              </button>
              {selectedImage.index === index && (
                <div className="mt-2">
                  <Carousal images={item.images} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Collaborte />
    </div>
  );
};

export default Mou;
