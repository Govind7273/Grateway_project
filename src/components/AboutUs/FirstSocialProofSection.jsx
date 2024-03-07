export const FirstSocialProofSection = () => {
  const items = [
    {
      id: "1",
      count: '3.5+',
      message: "Years In Helping Business",
    },
    {
      id: "2",
      count: '30+',
      message: "Employees",
    },
    {
      id: "3",
      count: 12,
      message: "Complete Projects",
    },
  ];
  return (
    <div className="mt-20  md:h-[230px] h-[400px] overflow-hidden relative p-4  flex items-center justify-center w-[100vw]">
    
      
      {/* content */}
      <div className="w-[100%] md:h-[230px] h-[400px] z-10 flex-wrap text-black bg-transparent flex justify-around items-center">
        {items.map((item) => (
          <div className="flex flex-col gap-2 justify-center items-center" key={item.id}>
            <h1 className="text-4xl font-headingFont text-white font-bold">{item.count}</h1>
            <p className="text-xl font-headingFont font-bold text-white">
             {item.message}
            </p>
          </div>
        ))}
      </div>
        {/* bg image */}
      <span className="imgPara w-[100%] absolute md:h-[230px] h-[400px] z-0">
        
      </span>
    </div>
  );
};
