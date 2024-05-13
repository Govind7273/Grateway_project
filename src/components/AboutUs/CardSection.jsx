
import Ewaste from "./images/2148785030.jpg";
import Source from "./images/2148923096.jpg";
import Privacy from "./images/2149101213.jpg";
import Access from "./images/2149595827.jpg";
import Ecom from "./images/105380.jpg";
import Develop from "./images/2148908797.jpg";
import Product from "./images/2150196700.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const CardSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    easing: "linear",
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cardItems = [
    {
      title: "E-waste Management",
      content:
        "IT companies should take responsibility for proper e-waste disposal and recycling. They can establish e-waste recycling programs, offer trade-in or take-back options for electronic devices, and ensure responsible sourcing and recycling of electronic components.",
      image: Ewaste,
    },
    {
      title: "Ethical Sourcing and Supply Chain",
      content:
        "IT companies should ensure their supply chain follows ethical practices, such as fair labor standards and responsible sourcing of raw materials. Engaging suppliers who share similar ethical values can help maintain a responsible supply chain.",
      image: Source,
    },
    {
      title: "Privacy and Data Security",
      content:
        "Data protection and privacy are crucial considerations for IT companies. They should prioritize the security of user data, comply with relevant regulations, and implement robust measures to safeguard against data breaches and unauthorized access.",
      image: Privacy,
    },
    {
      title: "Access to Technology",
      content:
        "IT companies can contribute to bridging the digital divide by promoting access to technology in underserved communities. This can include initiatives like providing affordable or free devices, internet connectivity, and digital literacy programs.",
      image: Access,
    },
    {
      title: "E-commerce Development",
      content:
        "In E-commerce Development, we excel. Our team merges innovation and expertise to craft bespoke online solutions. From seamless user experiences to robust backend systems, we elevate businesses in the digital realm, setting benchmarks for success and growth.",
      image: Ecom,
    },
    {
      title: "Skills Development and Education",
      content:
        "IT companies can support initiatives that enhance technology skills and education. This can involve offering internships, scholarships, and training programs, as well as partnering with educational institutions to promote STEM education.",
      image: Develop,
    },
    {
      title: "Responsible Product Development",
      content:
        "IT companies should consider the social and environmental impact of their products and services. They can design products with energy efficiency in mind, reduce packaging waste, and strive for sustainability throughout the product lifecycle.",
      image: Product,
    },
  ];
  return (
    <div className="mt-5 w-[100%] h-auto flex justify-center items-center p-6">
     <Slider {...settings} className="w-full sm:w-[90%] justify-center">
     {cardItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center text-center bg-opacity-70 gap-4 rounded-xl hover:bg-opacity-30 hover:scale-105 transition-all duration-150 ease-linear cursor-pointer"
          >
            <h4 className="text-blue-900 font-headingFont font-bold text-xl pt-4 h-[5rem]">
              {item.title}
            </h4>
            <div className="relative flex items-center justify-center rounded-xl group h-[25rem]">
              <img className="object-fit h-full w-full rounded-xl" src={item.image} ></img>
              <span className="absolute inset-0 opacity-40 bg-blue-950 rounded-xl"></span>
              <div className="absolute inset-0 opacity-100 duration-300 flex justify-center items-center">
                <p className="text-white font-navlistFont p-4 text-md sm:text-xl">{item.content}</p>
              </div>
            </div>
          </div>
        )
        )}
     </Slider>
    </div>
  );
};
