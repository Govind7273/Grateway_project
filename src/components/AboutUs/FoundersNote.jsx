export const FoundersNote = () => {
  return (
    <div className="w-[100vw] pb-12 overflow-hidden bg-opacity-100 bg-slate-900 pt-12 text-white flex justify-center items-center">
      <div className="w[80%] flex flex-col gap-[150px]">
        {/* first section */}
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-headingFont font-bold">
            Our Leadership
          </h2>
        </div>

        {/* second section */}
        <div className="flex flex-wrap font-headingFont justify-around gap-10 items-center">
          {/* Founders Data */}
          <div className="w-[350px] flex flex-col justify-center items-center">
            {/* todo:add the images */}
            <img src="" alt="" />
            <h2 className="text-2xl">Goving Rathod</h2>
            <p className="text-indigo-400 font-semibold">Founder,CEO</p>
          </div>
          <div className="w-[350px] flex flex-col justify-center items-center">
            {/* todo:add the images */}
            <img src="" alt="" />
            <h2 className="text-2xl">Nilam Rathod</h2>
            <p className="text-indigo-400 font-semibold">Co-Founder,CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
