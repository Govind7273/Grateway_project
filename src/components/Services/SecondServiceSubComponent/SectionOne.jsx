
const SectionOne = ({obj}) => {
  return (
    <section className="w-[100%] flex justify-center items-center bg-slate-950/25 md:pt-16 pt-0">
        <div className="w-[100%] bg-blue-900/25 grid md:grid-cols-2 px-4 md:py-10 py-4 grid-cols-1 items-center  gap-10 flex-wrap">
          {/* left section */}
          <div className="flex flex-col text-white gap-4">
              <h2 className="font-headingFont  font-bold text-3xl text-orange-300">{obj.content?.title}</h2>
              <p className="font-navlistFont text-sm  text-slate-300">{obj.content.description}</p>
          </div>

          {/* right section */}
          <div className="flex justify-center items-center">
              <img className="w-[100%]" src={obj.imageUrl} alt="" />
          </div>
        </div>
    </section>
  )
}

export default SectionOne;