
const Section4 = ({obj}) => {
  return (
    <div className="w-[100%] bg-[#333] flex justify-center items-center  border-y">
        <div className="w-[100%] relative px-4 md:py-10 py-4 grid md:grid-cols-2 grid-cols-1 gap-10 justify-items-center items-center ">
             {/* left side */}
             <div className="col-span-1">
                <img className="w-[100%] cursor-pointer rounded-lg" src={obj.imageUrl} alt="" />
             </div>

             {/* right side */}
             <div className="z-10 flex col-span-1 flex-col gap-4">
                <h3 className="font-headingFont text-pink-600 font-bold text-3xl">{obj.content.heading}</h3>
                <p className="font-navlistFont text-md font-semibold">{obj.content.description}</p>
              <ul className="list-disc ml-8 md:ml-4 text-white font-headingFont font-semibold">
                {
                  obj.content.list?.map((item)=>(
                    <li key={Math.random()}>{item}</li>
                  ))
                }
              </ul>
             </div>
             
             <span className="w-[250px] h-[250px] bg-violet-600 blur-[120px] md:blur-[100px] absolute right-0 -top-10 z-0 "></span>
        </div>
      </div>
  )
}

export default Section4