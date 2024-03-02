
const Section3 = ({obj}) => {
  return (
    <div className="w-[100%]  relative flex flex-col justify-center items-center bg-[#333] ">
        
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#d1c2ed"
        fillOpacity="1"
        d="M0,0L48,42.7C96,85,192,171,288,186.7C384,203,480,149,576,106.7C672,64,768,32,864,42.7C960,53,1056,107,1152,144C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>

    <div className="relative p-4  w-[90%] py-20 flex  flex-wrap md:flex-row flex-col gap-10">
      {/* left side of the section */}
      <div className="z-10 w-[70%] flex-1 flex flex-col justify-center gap-4">
        <h3 className="text-3xl font-headingFont text-pink-600 font-bold">
          {obj.content.heading}
        </h3>
        <p className="text-md font-navlistFont text-slate-50 font-bold">
         {obj.content.description} 
        </p>
        <ul className="list-disc text-white font-semibold font-headingFont ml-8">
          {
            obj.content?.list.map((item)=>(
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

export default Section3