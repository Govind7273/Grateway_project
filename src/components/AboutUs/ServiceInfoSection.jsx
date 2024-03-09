import AIImage from './images/artai.jpg';

 export const  ServiceInfoSection=()=> {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1 w-[100vw] gap-10 p-4 relative">
        {/* left side component*/}
        <div className="col-span-1 w-[100%] flex justify-center flex-col gap-10 ">
          {/* heading of component */}
          <h1 className="text-2xl text-start font-bold font-headingFont text-violet-400">
            Providing your business with a quality IT service is our passion.
          </h1>

          {/* paragraph */}
          <p className="text-md text-start font-navlistFont text-slate-400 font-[500]">
            Greateway Software Pvt. Ltd. is a leading IT company providing
            comprehensive solutions. From software development and cloud
            services to cybersecurity and IT consulting, we offer a wide range
            of expertise. Our experienced team delivers tailored solutions,
            ensuring efficiency, reliability, and scalability, to help
            businesses thrive in the digital era.
          </p>
          
          <span className="w-[200px]  h-[200px] rounded-full blur-[100px] top-[-30px] left-[40px]  bg-violet-800 absolute"></span>
          <span className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-cyan-400 blur-[100px] absolute top-[67%] left-[35%]"></span>
        </div>

        {/* Right side component */}
        <div className="col-span-1 flex items-center justify-center">
          <img
            className="md:w-[100%]   cursor-pointer rounded-lg "
            src={AIImage}
            alt=""
          />
        </div>
        <span className="w-[200px]  h-[200px] rounded-full blur-[100px] top-[-30px] left-[40px]  bg-violet-800 absolute"></span>
        <span className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-cyan-400 blur-[100px] absolute top-[67%] left-[35%]"></span>
      </div>
    );
  };