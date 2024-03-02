 export const SecondSection = () => {
    return (
      <div className="flex w-[90%] overflow-hidden secondSectionPT2:mt-[-80vh] secondSectionPT:mt-[40vh] mt-[2vh] md:mt-[10px] flex-wrap gap-10 p-6 ">
        {/* first left part */}
        {/* <div className="flex-2 text-white">
          <img
            className="w-[90%] h-[90%]"
            src="https://d1krbhyfejrtpz.cloudfront.net/matellio-2019/img/cluud-bg.jpg"
            alt=""
          />
        </div> */}
        {/* right side part */}
        <div className="flex-1 w-[50%] items-center flex justify-center flex-col gap-10 ">
          {/* heading of component */}
          <h1 className="text-4xl text-start font-bold font-headingFont text-violet-400">
            Our Corporate Social Responsibility
          </h1>

          {/* paragraph */}
          <p className="text-md text-start font-navlistFont text-slate-400 font-[500]">
            Corporate Social Responsibility (CSR) is a crucial aspect for IT
            companies, as they have the opportunity to leverage their
            technological expertise and influence to make a positive impact on
            society and the environment. Here are some key areas where IT
            companies can focus their CSR efforts:
          </p>
        </div>
      </div>
    );
  };