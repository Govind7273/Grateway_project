
const SectionFour = ({obj}) => {
  
  return (
    <div className="bg-slate-200">
    <section className="bg-slate-200">

    <div className="relative flex items-center justify-center z-10">
        {/* <span className="absolute hidden sm:flex w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#67e8f9] top-0 right-[40px] sm:right-[100px] lg:right-[150px] rounded-xl -rotate-45 blur-[1px] z-0"></span>
        <span className="absolute hidden sm:flex w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-blue-900 top-0 right-[180px] md:right-[250px] lg:right-[300px] rounded-xl -rotate-45 blur-[1px] z-0"></span>
        <span className="absolute hidden sm:flex w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#67e8f9] top-0 right-[260px] md:right-[400px] lg:right-[450px] rounded-xl -rotate-45 blur-[1px] z-0"></span>
        <span className="absolute hidden lg:flex w-[100px] h-[100px] bg-blue-900 top-0 lg:right-[600px] rounded-xl -rotate-45 blur-[1px] z-0"></span>
         */}
      <div className="relative w-[90%] sm:w-[80%]">
        <h1 className="text-MainHeading-sm md:text-MainHeading font-bold px-4 sm:px-0 cursor-pointer">How it works ?</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 px-4 sm:px-0 gap-x-8 gap-y-6 md:gap-y-12 py-10 md:py-20 ">
        {obj.cards?.map((card)=>(
          <div key={card.title} className="flex flex-col gap-2 text-white p-2 border border-blue-900 rounded-[5px] bg-blue-50 hover:bg-blue-300 hover:scale-105 transition-all duration-300 ease-linear hover:cursor-pointer ">
            <h3 className="text-CardHeading-sm md:text-CardHeading font-bold">{card.title}</h3>
            <p className="font-semibold text-Paragraph-sm md:text-Paragraph">{card.message}</p>
          </div>
          ))}
        </div>
        {/* <span className="absolute w-[200px] h-[200px] bg-blue-400 bottom-0 left-0 rounded-xl rotate-45 blur-[0px] z-0"></span>                              */}
      </div>
      
    </div>
    
    </section>

    <section class="">
    
    <div class="w-full mx-auto px-4 sm:px-6 md:px-8 pb-6 relative">
        <div class="shadow rounded-xl">
            <div class="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-gradient-to-tl from-blue-800 to-blue-400 rounded-xl">
                <aside class="p-8 space-y-4 md:p-16">
                    <h2 class="text-MainHeading-sm md:text-MainHeading font-bold">
                    {obj.main}
                    </h2>

                    <p class="text-Paragraph-sm md:text-Paragraph">
                    {obj.desc}
                    </p>

                    <div className="pt-4">
                        <a href="./ContactUs" class="bg-slate-200 text-blue-950 text-bold px-4 py-2 mt-3 rounded-xl hover:bg-blue-900 hover:text-white hover:shadow-md hover:shadow-white">
                            Connect with us
                        </a>
                    </div>
                </aside>

                <aside class="relative hidden md:block">
                    <img class="absolute inset-0 object-cover w-full h-full p-4" src={obj.cta} alt="call to action"></img>
                </aside>
            </div>
        </div>
    </div>
    
    </section>
    </div>
  )
}

export default SectionFour;