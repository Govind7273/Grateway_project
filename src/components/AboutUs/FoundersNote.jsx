

export const FoundersNote = () => {
  
  return (
    <div className="w-[100vw] mb-[4rem] overflow-hidden bg-opacity-100 pt-12 flex justify-center items-center">
      <div className=" md:p-10 w-full">
      <div className="w[100%] flex gap-10">
        {/* first section */}
        <div className="flex flex-col items-center justify-center">
          <div className=" w-[80%] md:p-8">
            <div className=" text-black flex flex-col">
              <div className=" flex sm:text-xl md:text-2xl">
                "As the founder, I stand in awe of our organization's
                evolution—a testament to the dedication and passion of our
                team."
              </div>
            </div>

            <div className="card w-[300px] h-[300px] preserve-3d perspective bg-inherit border-none">
              {/* front face */}
              <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                <div className="tracking-[2px]">Nilam Rathod</div>
                <div className="text-[0.8rem] text-[#ddd] tracking-[0.8px]">
                  Co-Founder, CTO
                </div>
              </div>

              {/* back face */}
              <div className="back-face bg-[rgba(255,_255,_255,_0.06)] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                <span className="absolute top-[25px] left-[25px] text-[1.2rem]">
                  &#10077;
                </span>
                <div>
                  As a co-founder, I'm amazed by our organization's journey, a
                  testament to collaborative spirit, determination, and shared
                  aspirations.
              <div className="text-black pt-2">
                <div className="tracking-[2px] font-semibold text-xl">Govind Rathod</div>
                <div className="text-[0.8rem] tracking-[0.8px]">
                  Founder, CEO
                </div>
              </div>
              <div className="w-[6%] h-[0.5rem] bg-blue-700 rounded-full"></div>
            </div>
          </div>
          
        </div>

        {/* Second Section */}
        

      </div>
      </div>
    </div>
  );
};
