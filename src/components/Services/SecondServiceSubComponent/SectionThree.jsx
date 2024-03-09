import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SectionThree = ({obj}) => {
  return (
    <section className="w-[100%] flex justify-center items-center bg-blue-900/25">
      <div className="w-[100%] grid grid-cols-1 place-items-center gap-2 text-white p-4">
        {/* first grid */}
        <h2 className="uppercase font-headingFont text-center text-3xl font-bold text-violet-400 border-b border-violet-400">
          Expertise We Offer
        </h2>
        {/* second grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-x-8 md:gap-y-20 gap-y-10 my-8 ">
          {obj.cards.map((item) => (
            <div key={Math.random()} className="flex md:border-none border border-violet-400 items-center gap-2  justify-start hover:shadow-[5px_5px_30px] transition-all duration-300 ease-linear hover:shadow-violet-400 pr-2 rounded-[5px] hover:cursor-pointer">
              {/* icon */}
              <FontAwesomeIcon icon={item.icon} className="text-3xl bg-green-300/30 p-6 cursor-pointer rounded-[5px]" />
              {/* heading */}
              <h3 className="font-headingFont font-semibold">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
