import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Info=()=>{
    return(
        <div>
            <div className="flex flex-col md:flex-row sm:p-4 md:p-16 -mt-16">
                <div className="flex flex-row md:flex-col p-10 gap-10 text-4xl text-blue-900">
                    <FaFacebook/>
                    <FaSquareInstagram/>
                    <FaLinkedin/>
                </div>
                <div className="flex flex-col gap-2 md:gap-6 px-4 md:px-10 md:mt-10">
                    <h2 className="text-xl sm:text-2xl md:text-4xl tracking-wide text-blue-950">At Greateway Software, we are driven by a singular mission: to create transformative software solutions that empower businesses and individuals alike.</h2>
                    <p className="text-sm sm:text-xl -tracking-normal">With a focus on innovation, quality, and user experience, we specialize in developing cutting-edge software products that streamline processes, enhance productivity, and drive growth. From enterprise-level applications to intuitive mobile solutions, our team of passionate developers and designers work tirelessly to deliver tailor-made software solutions that exceed expectations. Backed by a commitment to excellence and a deep understanding of industry trends, we are dedicated to helping our clients succeed in a rapidly evolving digital landscape.</p>
                </div>
            </div>
        </div>
    );
};