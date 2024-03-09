
const Section1 = ({obj}) => {
  const parentBg=`w-[100%] relative py-20 flex justify-center items-center md:mt-10 ${obj.bgClass}`;
  const subParentBG=`"w-[100%] p-2 md:p-10 grid md:grid-cols-2 grid-cols-1 gap-10 items-center ${obj.secondBgClass}`;
  return (
    <div className={parentBg}>
        <div className={subParentBG}>
          {/* left or the image section of the first section */}
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-[100%] rounded-lg cursor cursor-pointer"
              src={obj.imageUrl}
              alt=""
            />
          </div>

          {/* right or content section of the first section */}
          <div className="col-span-1 w-full grid  grid-cols-1 justify-center items-center ">
            <h2 className="md:text-4xl text-3xl mb-4 font-headingFont  text-center md:text-start font-bold text-violet-700 ">
              {obj.content.heading}
            </h2>
            <p className="text-md font-navlistFont md:text-start text-center font-semibold  text-slate-800">{obj.content.message}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Section1