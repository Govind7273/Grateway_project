import { motion } from "framer-motion";
export const FoundersNote = () => {
  return (
    <div className="w-[100vw] mb-[1rem] sm:mb-[4rem] overflow-hidden bg-opacity-100 sm:pt-12 flex justify-center items-center">
      <div>
        <div className="w-[100%] flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 1.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="text-MainHeading-sm md:text-MainHeading font-bold p-8">Our Visionary</motion.div>
          {/* first section */}
          <div className="flex flex-wrap gap-2 sm:gap-10 items-center justify-center">

            <div className="card bg-slate-100 rounded-xl w-[300px] md:w-[500px] h-[300px] preserve-3d perspective bg-inherit border-4 border-blue-100">
              {/* front face */}
              <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                <div className="text-black">
                  <div className="tracking-[2px] font-semibold text-xl">
                    Govind Rathod
                  </div>
                  <div className="text-[0.8rem] tracking-[0.8px]">
                    Founder, CEO
                  </div>
                </div>
              </div>
              {/* back face */}
              <div className="back-face bg-[rgba(255,_255,_255,_0.06)] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                <svg className="absolute top-[25px] left-[25px] h-[1rem]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" /></svg>
                <div>
                  As the founder, I stand in awe of our organization's
                  evolution—a testament to the dedication and passion of our
                  team.

                </div>
                <svg className="absolute bottom-[25px] right-[25px] h-[1rem]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" /></svg>

              </div>
            </div>
            <div className="card bg-slate-100 rounded-xl w-[300px] md:w-[500px] h-[300px] preserve-3d perspective bg-inherit border-4 border-blue-100">
              {/* front face */}
              <div className="front-face absolute text-[#fff] w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] bg-[rgba(255,_255,_255,_0.06)] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible flex flex-col items-center justify-center ">
                <div className="text-black">
                  <div className="tracking-[2px] font-semibold text-xl">
                    Nilam Rathod
                  </div>
                  <div className="text-[0.8rem] tracking-[0.8px]">
                    Co-Founder, CTO
                  </div>
                </div>
              </div>
              {/* back face */}
              <div className="back-face bg-[rgba(255,_255,_255,_0.06)] px-[20px] py-[30px] text-center select-none absolute flex flex-col items-center justify-center w-[100%] h-[100%] overflow-hidden shadow-[0_15px_35px_rgba(0,_0,_0,_0.1)] rounded-[15px] preserve-3d transition-[0.5s] border-t-[1px_solid_#ddd] border-l-[1px_solid_#ddd] backface-invisible">
                <svg className="absolute top-[25px] left-[25px] h-[1rem]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" /></svg>
                <div>
                  As a co-founder, I'm amazed by our organization's journey, a
                  testament to collaborative spirit, determination and shared
                  aspirations.

                </div>
                <svg className="absolute bottom-[25px] right-[25px] h-[1rem]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" /></svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
