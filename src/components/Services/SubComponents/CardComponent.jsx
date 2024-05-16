const CardComponent = ({card}) => {
  return (
    <div className="h-full w-[100%] pb-2 flex flex-col bg-white rounded-xl text-slate-700 shadow-lg shadow-gray-900 transition-all duration-200 ease-linear">
      <img className="w-[100%] lg:h-40 h-auto rounded-t-xl" src={card.imageUrl} alt="" />
      <div className="h-full -mt-5 bg-white  rounded-t-3xl flex flex-col gap-2 p-2 justify-evenly items-center">
        <h2 className="text-xl text-center font-headingFont font-semibold text-orange-900">{card.heading}</h2>
        <p className="text-[13px] text-center font-navlistFont text-black">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
