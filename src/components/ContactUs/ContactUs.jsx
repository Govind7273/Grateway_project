import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressMap from "./AddressMap";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import ContactUs1 from "./image/ContactUs1.jpg";

const ContactUs = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

      <div className="w-full overflow-x-hidden pt-5 px-3 flex flex-col justify-center items-center gap-4 bg-white dark:text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 class="md:text-5xl text-2xl font-extrabold text-violet-800">Contact Us</h2>
          <p class="pt-4 pb-4 text-base max-w-2xl text-center m-auto dark:text-gray-400">
            Want to contact us? Fill the below form and we'll be happy to show you how we can transform your experience.
          </p>
        </div>
        

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-16">
          <div className="flex gap-2 sm:items-center text-slate-900">
            <IoLocation  className="text-2xl "/>
            <p className="font-navlistFont text-sm ">
              Office No: 503, 06th Floor, Stellar Spaces, <br />
              Opposite Zensar IT Park, Kharadi, Pune 411014
            </p>
          </div>

          <div className="flex gap-2 sm:items-center text-slate-900">
            <IoMdCall className="text-2xl "/>
            <span className="text-slate-800 font-headingFont">
              +91 9172077273
            </span>
          </div>

          <div className="flex gap-2 sm:items-center text-slate-900">
  <IoMail className="text-2xl" />
  <a href="mailto:hr@greateway.com" className="text-md  hover:text-blue-600">
    hr@greateway.com
  </a>
</div>
</div>

        <hr className="my-4 w-full border-t-2 border-gray-400" />
        <div className="flex w-[100%] overflow-x-hidden mt-4  md:flex-row flex-col flex-wrap justify-center  bg-white">
          {/* left section */}
          <div className="flex  md:w-[40%] w-full flex-col flex-wrap gap-0 p-6 bg-white ">
            {/* first part */}
            <div className="mb-2 rounded-lg">
              <div className="mb-2">
                {/* Adding the image here */}
                <img src={ContactUs1} alt="My Image" className="w-full shadow-xl border-2 border-sky-500 rounded-2xl" />
              </div>
            </div>
            {/* second part */}
            <div className="text-lg font-bold text-violet-700 text-center mt-5">
              <p className="mb-2">Follow Us On</p>
              <div className="flex flex-col items-center">
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL"
                    target="_blank"
                  ><FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-400 text-3xl cursor-pointer"
                    /></a>

                  <a href="https://www.linkedin.com/company/greateway-software-pvt-ltd/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-blue-700 text-3xl cursor-pointer"
                    /> </a>

                  <a href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl"
                    target="_blank"
                  ><FontAwesomeIcon
                      icon={faInstagram}
                      className="text-red-600 text-3xl cursor-pointer"
                    /> </a>


                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <ContactForm />
          <hr className="w-full border-t-2 border-gray-400" />
        </div>
        <span class="inline-block rounded-lg text-blue-900 my-5 bg-blue-100 px-2  p-2 text-xl relative font-semibold">Let the map be your guide to finding us</span>
        
        <AddressMap />
      </div>
    </>
  );
};

export default ContactUs;
