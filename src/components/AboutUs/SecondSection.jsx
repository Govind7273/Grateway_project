 export const SecondSection = () => {
    return (
      <div className="flex w-[90%]  flex-wrap gap-10 sm:p-6 sm:mt-10 ">
        {/* right side part */}
        <div className="flex-1 w-[90%] md:w-[50%] items-center flex justify-center flex-col gap-5 md:gap-10 mt-10 ">
          {/* heading of component */}
          <h1 className="text-2xl text-[#3c4c54] md:text-MainHeading text-center font-bold p-0 md:p-4 cursor-pointer">
            Our Corporate Social Responsibility
          </h1>

          {/* paragraph */}
          <p className="text-Paragraph text-center cursor-pointer">
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