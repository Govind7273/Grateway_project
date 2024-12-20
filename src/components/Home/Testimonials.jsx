import vision from "./assets/image/Vision.jpeg";
import mission from "./assets/image/Mission.jpeg";
import value from "./assets/image/Value.png";
import Eye from "./assets/image/Eye.jpeg";
import CValue from "./assets/image/CValue.jpeg";
import Miss from "./assets/image/miss.jpeg";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <main className="bg-white p-5 flex flex-col justify-center items-center min-h-lvh overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="flex md:p-5 p-2 md:justify-center text-start"
      >
        <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold p-2 capitalize">
          Explore Our Company&apos;s Vision, Mission and Value
        </h1>
      </motion.div>

      <div className="max-w-screen-xl mx-auto md:p-4 p-1 overflow-hidden">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 md:gap-12">
          {/* First Article */}
          <div
            data-aos="fade-down"
            className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-4 duration-500 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 md:px-6 px-2">
              <img
                src={vision}
                alt=""
                className="rounded-2xl h-12 w-12 mb-4 bg-white"
              />
              <h2 className="text-lg mb-3 font-bold">Vision</h2>
              <p className="mb-2 md:text-sm text-xs text-gray-600">
                At Greateway Software Pvt. Ltd., we are dedicated to leading
                innovation in crafting transformative digital solutions that
                empower businesses worldwide. Our vision is to revolutionize
                industries through cutting-edge technology, driving sustainable
                growth and delivering lasting value to our clients, employees
                and communities.
              </p>
              <img src={Eye} alt="" className="w-full hidden md:block" />
              <hr className="md:mt-4" />
              &nbsp;
              <span className="text-xs text-gray-500">
                Greateway Software Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Second Article */}
          <div
            data-aos="fade-up"
            className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-4 duration-500 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 md:px-6 px-2">
              <img
                src={mission}
                alt=""
                className="rounded-2xl h-12 w-12 mb-4"
              />
              <h2 className="text-lg mb-3 font-bold">Mission</h2>
              <p className="mb-2 md:text-sm text-xs text-gray-600">
                At Greateway Software Pvt. Ltd., we strive to deliver IT
                excellence through advanced technologies like AI, Machine
                Learning, Cloud Computing and Software Development. With
                collaborative partnerships, rigorous research and continuous
                improvement, we aim to exceed client expectations, drive
                efficiency and catalyze business success.
              </p>
              <img src={Miss} alt="" className="w-full hidden md:block" />
              <hr className="md:mt-4" />
              &nbsp;
              <span className="text-xs text-gray-500">
                Greateway Software Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Third Article */}
          <div
            data-aos="fade-down"
            className="hover:bg-[#ccd6ad] transform transition-transform hover:shadow-xl hover:-translate-y-4 p-4 ease-in-out bg-slate-200 mb-4 duration-500 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 md:px-6 px-2">
              <img
                src={value}
                alt=""
                className="rounded-2xl h-12 w-12 mb-4 bg-white"
              />
              <h2 className="text-lg mb-3 font-bold">Company Value</h2>
              <p className="mb-2 md:text-sm text-xs text-gray-600">
                At our company, we uphold a commitment to honesty, integrity and
                ethics in everything we do. We foster innovation through
                teamwork, valuing diverse perspectives and treating everyone
                with respect. These core values guide our actions and inspire us
                to create a positive impact in our work and communities.
              </p>
              <br />
              {/* This image will be hidden on small screens and shown on medium screens */}
              <img src={CValue} alt="" className="w-full hidden md:block" />
              <hr className="md:mt-4" />
              &nbsp;
              <span className="text-xs text-gray-500">
                Greateway Software Pvt. Ltd.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
