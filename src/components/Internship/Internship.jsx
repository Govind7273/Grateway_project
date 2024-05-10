import { useState } from "react";
import { Helmet } from "react-helmet-async";
import mainCarer from "./Image/mainCarer.jpg"
import culture from "./Image/culture.jpg"
import Card from "./Card";
import { IntershipDetails } from "./InternshipData";
import Modal from "./Modal";
import { FaListUl } from "react-icons/fa6";
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from "framer-motion"
import { fadein} from "./variant"


const Internship = ({ Meta_Data }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const { Title, Description, Lenk } = Meta_Data;
  
  
  return (
    
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Lenk} />
      </Helmet>
      <main className="main__screen bg-gray-300 relative">
        <section className="max-w-full h-full flex justify-center lg:pt-8 sm:pt-6 pt-20 flex-col items-end">

          <motion.div
          animate={{ y: [-100, 0] }}
          className="flex absolute w-[300px] sm:w-fit flex-col sm:px-10 sm:py-10 z-40">
            <div className="sm:pb-6 flex justify-start sm:pl-[150px] pl-20">
              <div className="h-2 w-1 bg-white"></div>
              <div className="h-2 w-12 bg-blue-900"></div>
            </div>
          <h1  className="sm:text-3xl text-1xl font-medium md:text-5xl text-center text-white">
          Join our internship <br />program
          </h1>
          <p  className="text-center text-[10px] md:text-lg text-slate-200 px-2 py-2 sm:px-10 sm:pt-8 max-w-[45rem]">
            "To gain invaluable hands-on experience,
            mentorship, and networking opportunities that will propel your
            career forward. Discover your potential and build the foundation for
            a successful career with us."
          </p>
          <div className="flex justify-center sm:pt-4">
            <Link smooth to={"#Cards"} className="px-6  py-2 sm:text-base text-[10px] bg-blue-900 hover:bg-blue-800 text-white rounded-xl">
            Explore all internships
            </Link>
          </div>
          </motion.div>
          <div className="h-auto sm:pt-10 w-full">
                        <img
                          className="h-[200px] sm:h-auto w-full object-cover"
                          src={mainCarer}
                          alt=""
                         
                        />
                      </div>

        </section>
       <div className="flex absolute z-10 sm:h-20 h-10 sm:w-28 w-12 right-0 rounded-br-full bg-sky-500"></div>

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
          className="flex absolute z-10 sm:h-28 h-12 sm:w-28 w-12 sm:py-5 py-2 bg-sky-500">
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


                <div className="py-12 sm:px-12 px-3 text-center">
                <div className="leading-relaxed">
                    <motion.h1 
                     variants={fadein("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                     className="font-mono text-3xl pb-4 text-indigo-800">Career Development</motion.h1>
                    <motion.p
                     variants={fadein("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                    className=" text-gray-800 text-lg pt-4">
                    "Offering tailored paths for growth through mentorship, training programs, and opportunities for advancement. we empower our team to grow professionally, fostering innovation and excellence in software solutions."
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
           className="flex flex-row absolute z-10 sm:h-10 h-6 sm:w-60 w-28 left-0 items-center rounded-r-full justify-center gap-4 bg-sky-500 text-white sm:font-medium sm:text-lg text-[10px]">
           <FaListUl size={15} color="white" />
           Our Opening's
          </motion.div>

          <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }} 
          className="flex absolute z-10 sm:h-10 h-6 sm:w-20 w-10 items-center rounded-s-3xl right-0 flex-col justify-evenly bg-sky-500">
          </motion.div>




        <section id="Cards" className="flex sm:px-20 px-10 justify-evenly flex-wrap  py-28 gap-8 bg-slate-50">
        
         {IntershipDetails.map((detail) => {
            return (
              <div key={detail.id} className="sm:w-[500px] w-auto flex flex-col rounded-xl border-dashed shadow-lg shadow-slate-300 items-center">
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
            onClick={() => setModalOpen(true)}
            className="rounded-xl bg-gradient-to-br from-[#4481EB] to-[#04BEFE] px-10 md:px-6 py-1 h-8 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#4481EB]/50"
          >
            Apply
          </button>
          <Link to={`/internshipDetails/${detail.id}`} className="flex justify-center border rounded-xl border-blue-800 text-blue-800 px-4 py-1 h-8 hover:scale-105 transition duration-200 ">View Details</Link>
        </div>
        </div>
            );
          })}
        </section>
        {ModalOpen && <Modal setModalOpen={setModalOpen} />}
      </main>
    </>
  );
};

export default Internship;
