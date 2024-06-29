import React from "react";
import FacultyDevProgram from "./images/FDP.jpg";
import { motion } from "framer-motion";
const FDP = () => {
  const FDP_Features = [
    {
      id: 1,
      title: "Customized Training Modules",
      description:
        "Tailored programs covering modern teaching, advanced research techniques, and professional skills.",
    },
    {
      id: 2,
      title: "Expert-Led Workshops and Seminars",
      description:
        "Workshops and seminars by industry experts, providing practical insights and knowledge.",
    },
    {
      id: 3,
      title: "Cutting-Edge Technology Integration",
      description:
        "Equip faculty with the latest digital tools and platforms for effective teaching.",
    },
    {
      id: 4,
      title: "Research and Publication Support",
      description:
        "Comprehensive support for research, publishing, and grant writing.",
    },
    {
      id: 5,
      title: "Continuous Professional Development",
      description:
        "Ongoing learning opportunities like online courses, webinars, and mentorship programs.",
    },
    {
      id: 6,
      title: "Holistic Personal Growth",
      description:
        "Workshops on stress management, work-life balance, and ethical practices, emphasizing inclusivity.",
    },
  ];

  return (
    <main className="py-8">
      <div className="flex items-center flex-col gap-4">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className="text-MainHeading font-bold px-2">
          Faculty Development Program (FDP)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut"
          }}
          className=" max-w-screen-lg text-Paragraph text-center md:block px-4">
          At Greateway, we are dedicated to fostering academic excellence
          through our meticulously designed Faculty Development Programs (FDP).
          Our programs are tailored to enhance the teaching, research, and
          professional skills of faculty members, ensuring they are
          well-equipped to inspire and educate the next generation of leaders.
        </motion.p>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="flex flex-col md:flex-row">
          {/* <!-- can help image --> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            className="mr-0 md:mr-8 mb-6 md:mb-0 flex justify-center items-center">
            <img
              className="md:w-[500px] mx-auto"
              src={FacultyDevProgram}
              alt="can_help_banner"
            />
          </motion.div>
          {/* <!-- end can help image --> */}

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mx-2">
            {FDP_Features.map((feat) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut"
                  }}
                  key={feat?.id} className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-blue-900 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-CardHeading font-bold text-md mb-4">
                      {feat?.title}
                    </h3>
                    <p className="text-Paragraph">{feat?.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FDP;
