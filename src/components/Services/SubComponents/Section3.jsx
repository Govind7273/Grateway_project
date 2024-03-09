const Section3 = ({ obj }) => {
  return (
    <div className="w-[100%]  relative flex flex-col justify-center items-center bg-[#333] border-t ">
      <div className="relative  w-[100%] px-4 md:py-10 py-5 flex  flex-wrap md:flex-row flex-col gap-10">
        {/* left side of the section */}
        <div className="z-10 w-[100%] flex-1 flex flex-col justify-center md:items-start items-center gap-4">
          <h3 className="text-3xl font-headingFont  text-pink-600 font-bold">
            {obj.content.heading}
          </h3>
          <p className="text-md font-navlistFont text-slate-50 font-bold ">
            {obj.content.description}
          </p>
          <ul className="list-disc text-white font-semibold font-headingFont md:ml-4 ml-0">
            {obj.content?.list.map((item) => (
              <li key={Math.random()}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right side of the section */}
        <div className="z-10 w-[100%] flex-1 flex justify-center items-center">
          <img
            className="w-[100%] cursor-pointer rounded-lg"
            src={obj.imageUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
