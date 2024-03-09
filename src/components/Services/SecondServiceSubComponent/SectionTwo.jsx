const SectionTwo = ({obj}) => {
  return (
    <section className="w-[100%] py-10 flex justify-center bg-blue-900/25 items-center">
      <div className="w-[100%] relative flex flex-col py-10 px-4 gap-6 justify-between items-center text-white">
        {/* first */}
        <h2 className="uppercase text-3xl font-headingFont font-bold text-violet-400">
          Why to choose us for premium {obj.titleName} Services
        </h2>
        <p className="font-navlistFont text-sm font-semibold ">
          {obj.description}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
          {
            obj.circleItems?.map((item)=>(
              <div key={Math.random()} className="w-[150px] h-[150px] rounded-full border-4 border-t-[#4158D0] border-l-[#C850C0] border-b-[#FFCC70] border-r-[#C850C0] flex justify-center items-center p-2 shadow-xl shadow-violet-400">
            <h4 className=" font-headingFont font-bold text-xl text-center">
              {item}
            </h4>
          </div>
            ))
          }
        </div>
        <span className="absolute w-[200px] h-[200px] bg-green-400 top-0 left-0 rounded-full blur-[170px]"></span>
        <span className="absolute w-[200px] h-[200px] bg-violet-400 top-40 right-0 rounded-full blur-[130px]"></span>
      </div>
    </section>
  );
};

export default SectionTwo;
