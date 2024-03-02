
const SectionOne = ({obj}) => {
  return (
    <section className="w-[100%] flex justify-center items-center bg-slate-950/200">
        <div className="w-[100%] bg-blue-900/25 flex justify-center items-center md:pl-4 gap-4 flex-wrap">
          {/* left section */}
          <div className=" flex-1 flex flex-col text-white gap-4">
              <h2 className="font-headingFont px-4 font-bold text-3xl text-orange-300">{obj.content?.title}</h2>
              <p className="font-navlistFont text-sm px-4 text-slate-300">{obj.content.description}</p>
          </div>

          {/* right section */}
          <div className=" flex-2 flex justify-center items-center">
              <img className="w-[100%] h-[100%]" src={obj.imageUrl} alt="" />
          </div>
        </div>
    </section>
  )
}

export default SectionOne;