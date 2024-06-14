import React from "react";
import lec1 from "./images/lec1.jpg";
import lec2 from "./images/lec2.jpg";

const InstituteGuest = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="lg:order-2 order-1 font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Guest Lectures
          </h2>
          <p className="mb-4">
            We offer engaging and insightful guest lectures delivered by
            industry experts and seasoned professionals. Our lectures are
            designed to inspire and educate, providing attendees with valuable
            knowledge and perspectives.
          </p>
          <p className="mb-4">
            Whether you're looking to enrich your curriculum or provide your
            audience with fresh insights, our guest lectures are tailored to
            meet your needs. Our speakers cover a wide range of topics, ensuring
            relevant and up-to-date content.
          </p>
          <p>
            Contact us to schedule a guest lecture and enhance your educational
            offerings. Let us help you bring new perspectives and expertise to
            your audience.
          </p>
        </div>
        <div className="lg:order-1 order-2 grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={lec1}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={lec2}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default InstituteGuest;
