const CardComponent = ({card}) => {
  return (
    <div className="w-[240px] h-auto flex flex-col gap-4 rounded-lg  bg-slate-500 text-slate-700 hover:shadow-[5px_5px_30px] hover:shadow-violet-300 hover:cursor-pointer border-2 border-l-blue-500 border-r-pink-600 shadow-inner shadow-3xl border-t-green-400 border-b-cyan-400 transition-all duration-500 ease-linear">
      <img className="w-[100%] h-[200px] rounded-t-lg" src={card.imageUrl} alt="" />
      <div className="flex flex-col gap-2 p-2 flex-3 items-center">
        <h2 className="text-2xl text-center font-headingFont font-semibold text-green-300">{card.heading}</h2>
        <p className="text-sm text-center font-navlistFont text-white">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
