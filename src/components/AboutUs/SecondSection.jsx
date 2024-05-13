 export const SecondSection = () => {
    return (
      <div className="flex w-[90%]  flex-wrap gap-10 p-6 mt-10 ">
        {/* first left part */}
        {/* <div className="flex-2 text-white">
          <img
            className="w-[90%] h-[90%]"
            src="https://d1krbhyfejrtpz.cloudfront.net/matellio-2019/img/cluud-bg.jpg"
            alt=""
          />
        </div> */}
        {/* right side part */}
        <div className="flex-1 w-[90%] md:w-[50%] items-center flex justify-center flex-col gap-5 md:gap-10 mt-10 ">
          {/* heading of component */}
          <h1 className="text-2xl md:text-4xl text-center p-0 md:p-4  font-headingFont text-violet-900 cursor-pointer">
            Our Corporate Social Responsibility
          </h1>

          {/* paragraph */}
          <p className="text-md md:text-xl text-center font-navlistFont text-slate-900 font-[500] cursor-pointer">
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