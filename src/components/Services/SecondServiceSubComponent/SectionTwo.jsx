
const SectionTwo = ({obj}) => {
  
  return (
    <>
    <section className="bg-slate-200">
      <div className="flex items-center justify-center">
      <div className="w-[90%] py-4 pt-6 sm:pt-0">
      
        <h2 className="text-MainHeading-sm md:text-MainHeading font-bold cursor-pointer">
          Why to choose us for premium {obj.titleName} Services
        </h2>
        <p className="text-Paragraph font-semibold cursor-pointer py-2">
          {obj.description}
        </p>
      
        <div className="flex flex-wrap items-center justify-center pt-10 gap-6 md:gap-0">
          {obj.circleItems?.map((item)=>(
            <div className="flex flex-col items-center justify-center w-[100%] md:w-1/3 p-2 group hover:bg-blue-200 hover:scale-105 rounded-3xl cursor-pointer">
              <img className="rounded-3xl " src={item?.image}></img>
              <h4 className="text-CardHeading-sm sm:text-CardHeading md:h-[4.5rem] lg:h-full">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </section>
    </>
  );
};

export default SectionTwo;
