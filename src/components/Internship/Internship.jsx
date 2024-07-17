import { useState } from "react";
import { Helmet } from "react-helmet-async";
import mainCarer from "./Image/careers.jpg"
import culture from "./Image/culture.jpg"
import Card from "./Card";
import { IntershipDetails } from "./InternshipData";
import Modal from "./Modal";
import { FaListUl } from "react-icons/fa6";
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion"
import { fadein } from "./variant"

const Internship = ({ Meta_Data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const { Title, Description, Link1 } = Meta_Data;

  const handleApplyClick = (title) => {
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link1} />
      </Helmet>
      <main className="main__screen bg-gray-300 relative overflow-hidden">
        <section className="max-w-full h-full flex justify-center lg:pt-8 sm:pt-6 pt-20 flex-col items-center">
          <motion.div
            animate={{ y: [-100, 0] }}
            className="flex absolute md:w-[600px] sm:w-fit flex-col sm:px-10 sm:py-10 z-40">
            <div className="sm:pb-6 md:flex hidden justify-start sm:pl-[150px] pl-20">
              <div className="h-2 w-1 bg-white"></div>
              <div className="h-2 w-12 bg-green-300"></div>
            </div>

            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="sm:text-3xl text-xl font-extrabold md:text-5xl text-center text-white capitalize">
              Join our internship <br />program
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="text-center text-md md:text-lg text-slate-200 px-2 py-2 sm:px-10 sm:pt-8 md:max-w-[45rem] font-semibold">
              "To gain invaluable hands-on experience,
              mentorship and networking opportunities that will propel your
              career forward. Discover your potential and build the foundation for
              a successful career with us."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="flex justify-center sm:pt-4">
              <Link smooth to={"#Cards"} className="items-start w-fit bg-cyan-300 px-3 py-1 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out capitalize">
                Explore all internships
              </Link>
            </motion.div>
          </motion.div>

          <div className="md:h-screen h-[40vh] w-full bg-black bg-cover">
            <img
              className="h-full w-full object-fill opacity-45"
              src={mainCarer}
              alt=""
            />
          </div>
        </section>

        <div className="flex absolute z-10 sm:h-20 h-10 sm:w-28 w-12 right-0 rounded-br-full bg-[#4c9ddc]"></div>

        <section className="bg-white max-w-full px-10 py-10">
          <motion.div
            animate={{
              scale: [1, 1, 1.5, 1, 1],
              rotate: [0, 0, 180, -180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="flex absolute z-10 sm:h-28 h-12 sm:w-28 w-12 sm:py-5 py-2 bg-[#4c9ddc]">
            <div className=" h-1 w-full bg-white"></div>
          </motion.div>
          <div data-theme="teal" className="mx-auto py-12 sm:px-6 px-3">
            <section className="font-sans relative z-30">
              <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="flex justify-center">
                    <article className="">
                      <div className=" sm:w-[600px] w-[300px] ">
                        <img
                          className="rounded-3xl object-cover border-dashed shadow-blue-800"
                          src={culture}
                          alt=""

                        />
                      </div>
                    </article>
                  </div>
                </div>

                <div className="py-8 sm:px-12 px-3 text-center">
                  <div className="leading-relaxed">
                    <motion.h1
                      variants={fadein("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.8 }}
                      className="text-MainHeading font-bold">Career Development</motion.h1>

                    <motion.p
                      variants={fadein("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.8 }}
                      className="text-Paragraph pt-4">
                      "Providing customized growth opportunities through mentorship, training programs and pathways for advancement. We empower our team to grow professionally, fostering innovation and excellence in software solutions."
                    </motion.p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <motion.div
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="flex flex-row absolute z-10 sm:h-10 h-6 sm:w-60 w-28 left-0 items-center rounded-r-full justify-center gap-4 bg-[#4c9ddc] text-white sm:font-medium sm:text-lg text-[10px]">
          <FaListUl size={15} color="white" />
          Our Opening's
        </motion.div>

        <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="flex absolute z-10 sm:h-10 h-6 sm:w-20 w-10 items-center rounded-s-3xl right-0 flex-col justify-evenly bg-[#4c9ddc]">
        </motion.div>

        <section id="Cards" className="flex px-4 justify-evenly flex-wrap py-28 gap-8 bg-slate-50">
          {IntershipDetails.map((detail) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
                key={detail.id} className="sm:w-[500px] w-auto flex flex-col rounded-xl border-dashed shadow-lg shadow-slate-300 items-center">
                <div className="flex h-1 w-full rounded-full items-start bg-gradient-to-br from-[#4481EB] via-pink-300 to-[#04BEFE]"></div>
                <Card
                  id={detail.id}
                  logo={detail.logo}
                  Post_Name={detail.Post_Name}
                  quotes={detail.quotes}
                  Exp={detail.Exp}
                  skills={detail.skills}
                  setModalOpen={setModalOpen}
                />
                <div className="apply_btn w-full pb-3 px-3 flex justify-end flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleApplyClick(detail.Post_Name)}
                    className="rounded-xl items-start w-fit bg-cyan-300 px-3 py-1 md:px-4 md:py-2 border boder-[#4c9ddc] font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out capitalize"
                  >
                    Apply
                  </button>
                  <Link to={`/internshipDetails/${detail.id}`} className="rounded-xl items-start w-fit hover:bg-cyan-300 px-3 py-1 md:px-4 md:py-2 border boder-[#4c9ddc] font-bold hover:text-slate-800 bg-white text-cyan-700 transition-all 0.2 ease-out capitalize ">View Details</Link>
                </div>
              </motion.div>
            );
          })}
        </section>
        {modalOpen && <Modal setModalOpen={setModalOpen} selectedTitle={selectedTitle} />}
      </main>
    </>
  );
};

export default Internship;
