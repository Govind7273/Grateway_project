import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressMap from "./AddressMap";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";

const ContactUs = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>
  
    <div className="w-full overflow-x-hidden pt-20 px-3  flex flex-col justify-center items-center gap-4 bg-slate-900 dark:text-white">
      <div className="flex w-[100%] overflow-x-hidden mt-4 mb-10  md:flex-row flex-col flex-wrap justify-center  bg-slate-700 rounded-xl ">
        {/* left section */}
        <div className="flex  md:w-[40%] w-full flex-col flex-wrap gap-0 p-6 bg-[#FFDEE9] bg-[linear-gradient(0deg,_#FFDEE9_0%,_#B5FFFC_100%)]">
          {/* first part */}
          <div className="mb-2">
            <h1 className="font-headingFont text-5xl font-extrabold text-violet-700">
              Contact Information
            </h1>
          </div>
          {/* second part */}
          <div className=" flex flex-col gap-2 flex-wrap ">
            <p className="font-headingFont font-bold -mb-2 mt-4">Address:</p>
            <p className="font-navlistFont text-md text-slate-900">
            Office No: 505, 06th  Floor, Stellar Spaces, Opposite Zensar IT Park, Kharadi, Pune 411014
            </p>
            <p className="font-headingFont font-bold -mb-2">Contact:</p>
            <span className="text-slate-900 font-headingFont">
            +91 70586 06885
            </span>
            <p className="font-headingFont font-bold -mb-2">Email:</p>
            <span className="text-md text-blue-900">
              hr@greateway.com
            </span>
          </div>
          {/* third part */}
          <div className="text-lg font-bold text-violet-700 mt-52">
            <p className="mb-2">Follow Us On</p>
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-400 text-3xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700 text-3xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-red-600 text-3xl cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* right section */}
        <ContactForm />
      </div>
      <AddressMap />
    </div>
    </>
  );
};

export default ContactUs;
