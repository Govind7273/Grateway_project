
import vision from "./assets/image/Vision.jpeg";
import mission from "./assets/image/Mission.jpeg";
import value from "./assets/image/Value.png";
import Eye from "./assets/image/Eye.jpeg";
import CValue from "./assets/image/CValue.jpeg";
import Miss from "./assets/image/miss.jpeg";
import { motion } from "framer-motion";
import { fadein } from "../../../src/variants";

const Testimonials = () => {
  return (
    <main className="bg-white p-5 flex flex-col justify-center items-center min-h-lvh overflow-x-hidden">
      <motion.div variants={fadein("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }} className="flex md:p-5 p-2 md:justify-center text-start">
        <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold p-2">Explore Our Company's Vision, Mission and Value</h1>
      </motion.div>

      <div className="max-w-screen-xl mx-auto md:p-4 p-1">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 md:gap-12">

          {/* First Article */}
          <motion.div variants={fadein("right", 0.2)}
            initial="hidden"
            whileInView={"show"}

            viewport={{ once: false, amount: 0.8 }} className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-2 duration-500 max-w-sm rounded overflow-hidden shadow-lg">

            <div className="py-4 md:px-8 px-2">
              <img src={vision} alt="" className="rounded-full h-12 w-12 mb-4" />
              <a href="#">
                <h4 className="text-lg mb-3 font-bold">Vision</h4>
              </a>
              <p className="mb-2 md:text-sm text-xs text-gray-600">At Greateway Software Pvt. Ltd., we are dedicated to leading innovation in crafting transformative digital solutions that empower businesses worldwide. Our vision is to revolutionize industries through cutting-edge technology, driving sustainable growth and delivering lasting value to our clients, employees and communities.</p>

              <img src={Eye} alt="" className="w-full hidden md:block" />

              <hr className="mt-4" />
              &nbsp;<span className="text-xs text-gray-500">Greateway Software Pvt. Ltd.</span>
            </div>
          </motion.div>

          {/* Second Article */}
          <motion.div variants={fadein("", 0.2)}
            initial="hidden"
            whileInView={"show"}

            viewport={{ once: false, amount: 0.8 }} className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-2 duration-500 max-w-sm rounded overflow-hidden shadow-lg">

            <div className="py-4 md:px-8 px-2">
              <img src={mission} alt="" className="rounded-full h-12 w-12 mb-4" />
              <a href="#">
                <h4 className="text-lg mb-3 font-bold">Mission</h4>
              </a>
              <p className="mb-2 md:text-sm text-xs text-gray-600">At Greateway Software Pvt. Ltd., we strive to deliver IT excellence through advanced technologies like AI, Machine Learning, Cloud Computing and Software Development. With collaborative partnerships, rigorous research and continuous improvement, we aim to exceed client expectations, drive efficiency and catalyze business success.</p>

              <img src={Miss} alt="" className="w-full hidden md:block" />

              <hr className="mt-4" />
              &nbsp;<span className="text-xs text-gray-500">Greateway Software Pvt. Ltd.</span>
            </div>
          </motion.div>

          {/* Third Article */}
          <motion.div variants={fadein("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-2 duration-500 max-w-sm rounded overflow-hidden shadow-lg">

            <div className="py-4 md:px-8 px-2">
              <img src={value} alt="" className="rounded-full h-12 w-12 mb-4 bg-white" />
              <a href="#">
                <h4 className="text-lg mb-3 font-bold">Company Value</h4>
              </a>
              <p className="mb-2 md:text-sm text-xs text-gray-600">
                At our company, we uphold a commitment to honesty, integrity and ethics in everything we do.
                We foster innovation through teamwork, valuing diverse perspectives and treating everyone with respect.
                These core values guide our actions and inspire us to create a positive impact in our work and communities.
              </p>
              <br />

              {/* This image will be hidden on small screens and shown on medium screens */}
              <img src={CValue} alt="" className="w-full hidden md:block" />

              <hr className="md:mt-4" />
              &nbsp;<span className="text-xs text-gray-500">Greateway Software Pvt. Ltd.</span>
            </div>
          </motion.div>


        </div>
      </div>
    </main>
  );
};

export default Testimonials;
