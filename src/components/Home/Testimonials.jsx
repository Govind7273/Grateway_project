
import vision from "./assets/image/Vision.jpeg";
import mission from "./assets/image/Mission.jpeg";
import value from "./assets/image/Value.png";
import Eye from "./assets/image/Eye.jpeg";
import CValue from "./assets/image/CValue.jpeg";
import Miss from "./assets/image/miss.jpeg";

const Testimonials = () => {
  return (
    <main className="bg-white p-5 flex flex-col justify-center items-center min-h-lvh">
      <div className="flex p-5 justify-center text-gray-700">
        <h1 className="text-4xl font-black">Explore Our Company's Vision, Mission and Value</h1>
      </div>

      <div className="max-w-screen-xl mx-auto p-4">
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        
        {/* First Article */}
        <div className="hover:bg-[#00D1D1] bg-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg border-blue-100">
          <div className="py-4 px-8">
            <img src={vision} alt="" className="rounded-full h-12 w-12 mb-4" />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">Vision</h4>
            </a>
            <p className="mb-2 text-sm text-gray-600">At Greateway Software Pvt. Ltd., we are dedicated to leading innovation in crafting transformative digital solutions that empower businesses worldwide. Our vision is to revolutionize industries through cutting-edge technology, driving sustainable growth, and delivering lasting value to our clients, employees and communities.</p>

            <img src={Eye} alt="" className="w-full" />

            <hr className="mt-4" />
            &nbsp;<span className="text-xs text-gray-500">Greatway Software Pvt. Ltd.</span>
          </div>
        </div>

         {/* Second Article */}
         <div className="hover:bg-[#00D1D1] bg-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img src={mission} alt="" className="rounded-full h-12 w-12 mb-4" />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">Mission</h4>
            </a>
            <p className="mb-2 text-sm text-gray-600">At Greateway Software Pvt. Ltd., we strive to deliver IT excellence through advanced technologies like AI, Machine Learning, Cloud Computing, and Software Development. With collaborative partnerships, rigorous research, and continuous improvement, we aim to exceed client expectations, drive efficiency, and catalyze business success.</p>

            <img src={Miss} alt="" className="w-full" />

            <hr className="mt-4" />
            &nbsp;<span className="text-xs text-gray-500">Greatway Software Pvt. Ltd.</span>
          </div>
        </div>

        {/* Third Article */}
        <div className="hover:bg-[#00D1D1] bg-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
          <div className="py-4 px-8">
            <img src={value} alt="" className="rounded-full h-12 w-12 mb-4 bg-white" />
            <a href="#">
              <h4 className="text-lg mb-3 font-semibold">Company Value</h4>
            </a>
            <p className="mb-2 text-sm text-gray-600">At our company, we uphold a commitment to honesty, integrity, and ethics in everything we do. We foster innovation through teamwork, valuing diverse perspectives, and treating everyone with respect. These core values guide our actions and inspire us to create a positive impact in our work and communities.</p><br />

            <img src={CValue} alt="" className="w-full" />

            <hr className="mt-4" />
            &nbsp;<span className="text-xs text-gray-500">Greatway Software Pvt. Ltd.</span>
          </div>
        </div>
      
      </div>
    </div>
    </main>
  );
};

export default Testimonials;
