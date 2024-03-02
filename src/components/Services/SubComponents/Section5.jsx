
const Section5 = ({obj}) => {
  return (
    <div className="w-[100%] relative flex flex-col justify-center items-center p-4 bg-[#333] ">
        <div className="relative  w-[90%] py-20 flex  flex-wrap md:flex-row flex-col gap-10">
          {/* left side of the section */}
          <div className="z-10 w-[70%] flex-1 flex flex-col justify-center gap-4 before:contents-[''] before:absolute md:before:w-[22%] before:w-[60%] md:before:h-[50%] before:h-[25%] before:top-[200px]  before:bg-[#4158D0] before:bg-[linear-gradient(43deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] before:z-[-1] before:rounded-[87%_13%_48%_52%_/_70%_32%_68%_30%] ">
            <h3 className="text-3xl font-headingFont text-pink-600 font-bold">
           {obj.content.heading}
            </h3>
            <p className="text-md font-navlistFont text-slate-50 font-bold">
            {obj.content.description}
            </p>
            <ul className="list-disc text-white font-semibold font-headingFont ml-8">
             {
              obj.content.list?.map((item)=>(
                <li key={Math.random()}>{item}</li>
              ))
             }
            </ul>
          </div>

          {/* Right side of the section */}
          <div className="z-10 w-[100%] flex-1 flex justify-center items-center">
            <img
              className="w-[90%] cursor-pointer rounded-lg"
              src={obj.imageUrl}
              alt=""
            />
          </div>
        </div>

      </div>
  )
}

export default Section5