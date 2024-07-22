import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import facebookIco from "../assets/icon/facebook.svg";
import instagramIco from "../assets/icon/instagram.svg";
import linkedin from "../assets/icon/linkedin.svg";
import { useGetVisitorCount } from "../functions/useGetVisitorCount";

const Footer = () => {
  const { data } = useGetVisitorCount();

  return (
    <footer className="px-3 pt-5 lg:px-5 border-t-2 bg-black text-white">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="lg:max-w-xl flex flex-col md:px-5">
          {/* enable the count when required */}
          {/* {data && <p>Visitors - {data.data}</p>} */}
          <p className="text-md text-justify text-slate-200">
            <Link to="/">
              <b className="text-xl">Greateway Software Pvt. Ltd.</b>
            </Link>{" "}
            is a comprehensive IT company offering end-to-end technology
            solutions. With expertise in software development, network
            infrastructure, cybersecurity, cloud services and IT consulting, we
            empower businesses to thrive in the digital era.
          </p>
          <div>
            <div className="flex flex-wrap py-3">
              <a
                href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL"
                target="_blank"
              >
                <img
                  src={facebookIco}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl"
                target="_blank"
              >
                <img
                  src={instagramIco}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear hover:cursor-pointer"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/greateway-software-pvt-ltd/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="py-4">
            <div>
              <span className="text-xl font-semibold mb-4">
                Corporate Training
              </span>
              <hr className="border-white py-2"></hr>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 text-base gap-x-2 gap-y-1 text-slate-200">
              <Link to="/training-program">
                <p className="hover:text-[#06b6d4]">Technology Training</p>
              </Link>
              <Link to="/management-dev-program">
                <p className="hover:text-[#06b6d4]">Management Development</p>
              </Link>
              <Link to="/enterprise-services">
                <p className="hover:text-[#06b6d4]">Enterprise Services</p>
              </Link>
              <Link to="/microsoft-office">
                <p className="hover:text-[#06b6d4]">Microsoft Office 365</p>
              </Link>
            </div>
          </div>
          <div className="py-4">
            <div>
              <span className="text-xl font-semibold mb-4">Resources</span>
              <hr className="border-white py-2"></hr>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 text-base gap-x-2 gap-y-1 text-slate-200">
              <Link to="/AboutUs">
                <p className="hover:text-[#06b6d4]">About Us</p>
              </Link>
              <Link to="/Service-softDev">
                <p className="hover:text-[#06b6d4]">Services</p>
              </Link>
              <Link to="/Indrustry">
                <p className="hover:text-[#06b6d4]">Industries</p>
              </Link>
              <Link to="/Career">
                <p className="hover:text-[#06b6d4]">Career</p>
              </Link>
              <Link to="/Internship">
                <p className="hover:text-[#06b6d4]">Internship</p>
              </Link>
              <Link to="/ContactUs">
                <p className="hover:text-[#06b6d4]">Contact</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-lg">
          <div className="md:px-10">
            <div>
              <span className="text-xl font-bold tracking-wide mb-4">
                Our Services
              </span>
              <hr className="border-white py-2"></hr>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 text-base gap-x-2 gap-y-1 text-slate-200">
              <Link to="/Service-softDev">
                <p className="hover:text-[#06b6d4]">Software Development</p>
              </Link>
              <Link to="/Service-cloud">
                <p className="hover:text-[#06b6d4]">Cloud Computing</p>
              </Link>
              <Link to="/Service-devOps">
                <p className="hover:text-[#06b6d4]">DevOps Solutions</p>
              </Link>
              <Link to="/Service-AI">
                <p className="hover:text-[#06b6d4]">AI & Machine Learning</p>
              </Link>
              <Link to="/Service-Staffing">
                <p className="hover:text-[#06b6d4]">IT Staffing</p>
              </Link>
              <Link to="/Service-crm">
                <p className="hover:text-[#06b6d4]">CRM</p>
              </Link>
              <Link to="/Service-testingAndQA">
                <p className="hover:text-[#06b6d4]">
                  Testing and Quality Analysis
                </p>
              </Link>
              <Link to="/Service-bigData">
                <p className="hover:text-[#06b6d4]">Big Data Analytics</p>
              </Link>
              <Link to="/Service-webDev">
                <p className="hover:text-[#06b6d4]">Web Development</p>
              </Link>
              <Link to="/Service-Support">
                <p className="hover:text-[#06b6d4]">IT Service Support</p>
              </Link>
              <Link to="/institute-academy">
                <p className="hover:text-[#06b6d4]">
                  Institutional Tech Solutions
                </p>
              </Link>
            </div>
            <div className="md:pt-8 pt-2">
              <div>
                <span className="text-xl font-semibold mb-4">
                  <Link to={"/ContactUs"}>Contact Info</Link>
                </span>
                <hr className="border-white py-2"></hr>
              </div>

              <div className="flex items-center mb-1 text-base text-slate-200">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                <span>Phone - +91 9172077273</span>
              </div>
              <div className="flex items-center mb-2 text-base">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>Email: hr@greateway.com</span>
              </div>
              <div className="flex items-center mb-2 text-base">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span className="">
                  Office No: 503, 06th Floor, Stellar Spaces, Opposite Zensar
                  Company, Kharadi, Pune - 411014
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center items-center pt-5 pb-5 border-t lg:flex-row">
        <p className="text-sm">
          © 2024 Greateway Software Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
