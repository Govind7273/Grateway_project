
import head from "./images/head.jpg";

 export const  ServiceInfoSection=()=> {
    return (
      <div className="flex flex-col items-center justify-center">

      <div className='relative flex mt-[2rem] sm:mt-0 lg:mt-[-10rem] h-full lg:h-[50rem] overflow-hidden items-center justify-center'>
          <img className='object-fill lg:mt-[20rem]' src={head} ></img>
          <span className="absolute inset-0 bg-gradient-to-br from-blue-950 via-transparent to-transparent opacity-100"></span>

         {/* paragraph */}
            {/* <p className="hidden sm:flex text-lg xl:text-xl sm:mt-[0.5rem] font-navlistFont text-slate-100 cursor-pointer">
              Greateway Software Pvt. Ltd. is a leading IT company providing
              comprehensive solutions. From software development and cloud
              services to cybersecurity and IT consulting, we offer a wide range
              of expertise. Our experienced team delivers tailored solutions,
              ensuring efficiency, reliability, and scalability, to help
              businesses thrive in the digital era.
            </p> */}
            
                  
          
        </div>
        
        <div className='relative'>
          <div className="bg-blue-900 w-[20rem] h-[12rem] sm:h-[8rem] sm:w-[40rem] md:w-[50rem] md:h-[18rem] lg:h-[14rem] lg:w-[70rem] flex flex-col items-center justify-center px-[1rem] md:px-[5rem] opacity-90 -translate-y-1/2"></div>
          <h1 className="absolute inset-0 text-TopHeading-sm px-4 sm:p-4 md:p-12 md:text-TopHeading cursor-pointer -translate-y-1/2">
            Providing your business with a quality IT service is our passion.
          </h1>
        </div>
        {/* <div class="relative flex group">
              <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
              </div>
              <a href="./ContactUs"
                class="relative animate-bounce focus:animate-none hover:animate-none inline-flex text-sm font-medium bg-gradient-to-br from-pink-700 group-hover:from-pink-600 to-fuchsia-700 group-hover:to-fuchsia-600 mt-3 lg:mt-6 px-2 py-1 sm:px-4 sm:py-2 rounded-full tracking-wide text-white border border-fuchsia-800">
                <span class="">Contact US</span>
              </a>    
        </div> */}
      </div>
    );
  };