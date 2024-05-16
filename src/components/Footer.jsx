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
import logo from '../../src/components/Navbar/images/boxLogoGTW.png';

const Footer = () => {
  return (

    <footer className="px-3 pt-4 lg:px-5 border-t-2 bg-black text-white">
      {/* <div className="flex items-center py-3">
        <img src={logo} alt="logo" className="h-10 w-10 bg-slate-200 rounded-full p-1" />
        <span className="ml-2 text-xl font-bold tracking-wide">Greatway Software Pvt. Ltd.</span>
      </div> */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-2">
        <div className="lg:max-w-xl flex flex-col md:px-5">
          <p className="text-lg text-justify">
            <Link to='/'><b className="text-xl">Greatway Software Pvt. Ltd.</b></Link> is a comprehensive IT company offering end-to-end technology solutions. With expertise in software development, network infrastructure, cybersecurity, cloud services and IT consulting, we empower businesses to thrive in the digital era.
          </p>
          <div>
            <div className="flex flex-wrap py-3">
              <a href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL" target="_blank">
                <img
                  src={facebookIco}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer "
                />
              </a>
              <a href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl" target="_blank">
                <img
                  src={instagramIco}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear hover:cursor-pointer "
                />
              </a>
              <a href="https://www.linkedin.com/company/greateway-software-pvt-ltd/" target="_blank">
                <img
                  src={linkedin}
                  className="mr-3 size-12 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer "
                />
              </a>
            </div>
          </div>
          <div className="py-8">
            <div>
              <span className="text-xl font-semibold mb-4">Resources</span>
              <hr class="border-white py-2"></hr>
            </div>
            <div className="grid md:grid-cols-3 grid-col text-base gap-x-2 gap-y-1">
              <Link to='/AboutUs'><p className="hover:text-[#06b6d4]">About Us</p></Link>
              <Link to='/Service-softDev'><p className="hover:text-[#06b6d4]">Services</p></Link>
              <Link to='/Indrustry'><p className="hover:text-[#06b6d4]">Industries</p></Link>
              <Link to='/Career'><p className="hover:text-[#06b6d4]">Career</p></Link>
              <Link to='/Internship'><p className="hover:text-[#06b6d4]">Internship</p></Link>
              <Link to='/ContactUs'><p className="hover:text-[#06b6d4]">Contact</p></Link>
            </div>
            </div>
        </div>

        <div className="flex flex-col text-lg">
          <div className="md:px-10">
            <div>
              <span class="text-xl font-bold tracking-wide mb-4">Our Services</span>
              <hr class="border-white py-2"></hr>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 text-base gap-x-2 gap-y-1">
              <Link to='/Service-softDev'><p className="hover:text-[#06b6d4]">Software Development</p></Link>
              <Link to='/Service-cloud'><p className="hover:text-[#06b6d4]">Cloud Computing</p></Link>
              <Link to='/Service-devOps'><p className="hover:text-[#06b6d4]">DevOps Solutions</p></Link>
              <Link to='/Service-AI'><p className="hover:text-[#06b6d4]">AI & Machine Learning</p></Link>
              <Link to='/Service-Staffing'><p className="hover:text-[#06b6d4]">IT Staffing</p></Link>
              <Link to='/Service-crm'><p className="hover:text-[#06b6d4]">CRM</p></Link>
              <Link to='/Service-testingAndQA'><p className="hover:text-[#06b6d4]">Testing and Quality Analysis</p></Link>
              <Link to='/Service-bigData'><p className="hover:text-[#06b6d4]">Big Data Analytics</p></Link>
              <Link to='/Service-webDev'><p className="hover:text-[#06b6d4]">Web Development</p></Link>
              <Link to='/Service-Support'><p className="hover:text-[#06b6d4]">IT Service Support</p></Link>
            </div>
            <div className="md:pt-8 pt-4 pb-4">
              <div>
                <span className="text-xl font-semibold mb-4"><Link to={"/ContactUs"}>Contact Info</Link></span>
                <hr class="border-white py-2"></hr>
              </div>

              <div className="flex items-center mb-1 text-base">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                <span>Phone - +91 70586 06885</span>
              </div>
              <div className="flex items-center mb-2 text-base">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>Email: hr@greateway.com</span>
              </div>
              <div className="flex items-center mb-2 text-base">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="m-2" />
                <span className="">
                  Office No: 503, 06th Floor, Stellar Spaces, Opposite Zensar
                  Company, Kharadi, Pune - 411014
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center items-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">© 2024 Greatway Software Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
