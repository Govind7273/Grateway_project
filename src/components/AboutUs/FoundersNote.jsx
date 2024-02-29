import FounderImg from "./images/GovindRathod.jpg";
import CoFounderImg from "./images/NilamRathod.jpeg";
export const FoundersNote = () => {
  return (
    <div className="w-[100vw] md:h-[100vh] overflow-hidden bg-opacity-100 bg-[linear-gradient(to_bottom,_#000428,_#004683)] animated-background pt-12 text-white flex justify-center items-center">
      <div className="w[100%] flex flex-col gap-10">
        {/* first section */}
        <div className="flex w-[100%] justify-center items-center">
          <h2 className="text-4xl font-headingFont font-bold">
            Our Leadership
          </h2>
        </div>

        {/* Second Section */}
        <div className="w-[100%] p-4">
          <div className="flex justify-center gap-20 items-center flex-wrap">
            {/* card */}
            <div className="card w-[300px] transition-all duration-300 ease-in-out h-[300px] preserve-3d perspective bg-inherit border-none">
              {/* front face */}
              <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                <img
                  className="w-[150px] h-[150px] rounded-[50%] object-cover "
                  src={FounderImg}
                  alt=""
                />
                <div className="tracking-[2px]">Govind Rathod</div>
                <div className="text-[0.8rem] text-[#ddd] tracking-[0.8px]">
                  Founder, CEO
                </div>
              </div>

              {/* back face */}
              <div className="back-face bg-[rgba(255,_255,_255,_0.06)] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                <span className="absolute top-[25px] left-[25px] text-[1.2rem]">
                  &#10077;
                </span>
                <div>
                As the founder, I stand in awe of our organization's evolution—a testament to the dedication and passion of our team.
                </div>
                <span className="absolute bottom-[35px] right-[25px] text-[1.2rem]">
                  &#10078;
                </span>
              </div>
            </div>

            <div className="card w-[300px] h-[300px] preserve-3d perspective bg-inherit border-none">
              {/* front face */}
              <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                <img
                  className="w-[150px] h-[150px] rounded-[50%] object-cover "
                  src={CoFounderImg}
                  alt=""
                />
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
                As a co-founder, I'm amazed by our organization's journey, a testament to collaborative spirit, determination, and shared aspirations.
                </div>
                <span className="absolute bottom-[35px] right-[25px] text-[1.2rem]">
                  &#10078;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
