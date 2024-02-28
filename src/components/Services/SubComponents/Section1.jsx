
const Section1 = ({obj}) => {
  const parentBg=`w-[100%] relative py-20 flex justify-center items-center mt-10 ${obj.bgClass}`;
  const subParentBG=`"w-[90%] p-4 flex flex-wrap justify-between gap-10 items-center ${obj.secondBgClass}`;
  return (
    <div className={parentBg}>
        <div className={subParentBG}>
          {/* left or the image section of the first section */}
          <div className="flex-3 flex justify-center items-center">
            <img
              className="w-[90%] rounded-lg cursor cursor-pointer"
              src={obj.imageUrl}
              alt=""
            />
          </div>

          {/* right or content section of the first section */}
          <div className="flex-1 flex justify-center flex-col ">
            <h2 className="text-4xl mb-4 font-headingFont font-bold text-violet-700">
              {obj.content.heading}
            </h2>
            <p className="text-md font-navlistFont font-semibold text-slate-800">{obj.content.message}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Section1