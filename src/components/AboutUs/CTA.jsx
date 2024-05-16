import cta from "./images/cta.jpg";
export const CTA=()=>{
    return(
        <div className="relative flex flex-col lg:flex-row items-center justify-center py-[1rem] sm:py-[2rem] md:py-[5rem] lg:translate-x-40">
            <div className="relative ">
                <img className="object-contain opacity-95 cursor-pointer rounded-xl" src={cta}></img>
            </div>
            <div className=" flex items-center justify-center ">
                <div className=" relative flex flex-col items-start justify-center text-left  bg-[#59e7fa] p-6 md:-translate-y-1/2 lg:translate-y-0 md:-mb-[10rem] lg:mb-0 lg:-translate-x-1/2 cursor-pointer hover:scale-105 transition-all ease-linear rounded-xl">
                    <h2 className="text-MainHeading-sm md:text-MainHeading">Ready to experience software solutions that redefine excellence? </h2>
                    <p className="text-Paragraph-sm md:text-Paragraph pt-6">Contact us today to discover how our expert team can transform your vision into reality.</p>
                    <p className="text-Paragraph-sm md:text-Paragraph py-6"> Let's collaborate to unlock the full potential of your business with cutting-edge software solutions tailored to your unique needs. Reach out now to start your journey towards innovation and success.</p>
                    <div class="relative flex group">
                        <a href="./ContactUs"
                            class="relative animate-bounce focus:animate-none hover:animate-none inline-flex text-sm font-medium bg-blue-900 hover:bg-blue-800 mt-3 lg:mt-6 px-2 py-1 sm:px-4 sm:py-2 rounded-full tracking-wide text-white border border-fuchsia-800">
                            <span class="">Contact US</span>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    );
};