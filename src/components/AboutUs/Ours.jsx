import mission from "./images/2147704429.jpg";

export const Ours=()=>{
    return(
        <div className="flex flex-col md:w-[90%] py-10 sm-py-0 sm:p-10 md:p-4 lg:p-10 md:mb-20 md:shadow-blue-950 md:shadow-lg bg-blue-100 ">
            <div className="h-[6px] w-[70px] bg-blue-700 mx-4 rounded-full"></div>
            <div className="text-3xl font-semibold text-black tracking-[2px] p-4 cursor-pointer">VISION MISSION <span className="text-blue-700">VALUES</span></div>
            <div className="flex items-center justify-center gap-4">
                <div className="flex  items-center justify-center flex-wrap">
                    <div className="w-full md:w-1/3 sm:p-4 md:p-0 xl:p-4">
                        <div className="p-4 m-2 bg-gradient-to-br from-blue-900 via-blue-900 to-[#11a38b] rounded-xl hover:scale-105 transition-all duration-150 ease-linear cursor-pointer">
                        <h2 className="text-xl xl:text-2xl font-semibold text-white tracking-[2px] p-2">VISION</h2>
                        <p className="md:h-[22rem] lg:h-[15rem] xl:h-[13rem] flex items-start justify-start text-sm text-gray-100 tracking-[1px]">At Greateway Software Pvt. Ltd., we are dedicated to leading innovation in crafting transformative digital solutions that empower businesses worldwide. Our vision is to revolutionize industries through cutting-edge technology, driving sustainable growth, and delivering lasting value to our clients, employees and communities.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 sm:p-4 md:p-0 xl:p-4">
                        <div className="p-4 m-2 bg-gradient-to-br from-blue-900 via-blue-900 to-[#11a38b] rounded-xl hover:scale-105 transition-all duration-150 ease-linear cursor-pointer">
                        <h2 className="text-xl xl:text-2xl font-semibold text-white tracking-[2px] p-2">MISSION</h2>
                        <p className="md:h-[22rem] lg:h-[15rem] xl:h-[13rem] flex items-start justify-start text-sm text-gray-100 tracking-[1px]">At Greateway Software Pvt. Ltd., we strive to deliver IT excellence through advanced technologies like AI, Machine Learning, Cloud Computing, and Software Development. With collaborative partnerships, rigorous research, and continuous improvement, we aim to exceed client expectations, drive efficiency, and catalyze business success.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 sm:p-4 md:p-0 xl:p-4">
                        <div className="p-4 m-2 bg-gradient-to-br from-blue-900 via-blue-900 to-[#11a38b] rounded-xl hover:scale-105 transition-all duration-150 ease-linear cursor-pointer">
                        <h2 className="text-xl xl:text-2xl font-semibold text-white tracking-[2px] p-2">VALUES</h2>
                        <p className="md:h-[22rem] lg:h-[15rem] xl:h-[13rem] flex items-start justify-start text-sm text-gray-100 tracking-[1px]">At our company, we uphold a commitment to honesty, integrity, and ethics in everything we do. We foster innovation through teamwork, valuing diverse perspectives, and treating everyone with respect. These core values guide our actions and inspire us to create a positive impact in our work and communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};