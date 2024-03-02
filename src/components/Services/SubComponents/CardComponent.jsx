const CardComponent = ({card}) => {
  return (
    <div className="h-auto flex flex-col gap-4 rounded-xl bg-slate-800 text-slate-700 hover:shadow-[5px_5px_30px] border border-violet-500 hover:shadow-violet-300 hover:cursor-pointer  r shadow-3xl  transition-all duration-200 ease-linear">
      <img className="w-[100%]  rounded-t-xl" src={card.imageUrl} alt="" />
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
