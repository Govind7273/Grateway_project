
const SectionFour = ({obj}) => {
  return (
    <section className="w-[100%] flex justify-center items-center bg-blue-900/25 pb-10">
        <div className="w-[100%] relative flex items-center gap-4 flex-col">
               {/* First flex */}
                <div>
                  <h1 className="uppercase font-headingFont text-3xl text-violet-400 font-bold border-b border-violet-400">How it works</h1>
                </div>
                
                {/* Second Flex */}
                <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-x-8 gap-y-12">
                  {
                     obj.cards?.map((card)=>(
                         <div key={card.title} className="flex flex-col gap-2 text-white p-2 border border-violet-300 rounded-[5px]  hover:scale-105 transition-all duration-300 ease-linear hover:cursor-pointer">
                         <h3 className="font-headingFont font-bold text-2xl">{card.title}</h3>
                         <p className="font-semibold font-navlistFont text-sm">{card.message}</p>
                    </div>
                     ))
                  }
                </div>
              <span className="absolute w-[200px] h-[200px] bg-pink-300 top-32 rounded-full blur-[100px]"></span>
        </div>
    </section>
  )
}

export default SectionFour;