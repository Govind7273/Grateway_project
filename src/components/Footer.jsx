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

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-[100%] overflow-x-hidden">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            GREATEWAY SOFTWARE PVT. LTD. is a comprehensive IT company offering
            end-to-end technology solutions. With expertise in software
            development, network infrastructure, cybersecurity, cloud services,
            and IT consulting, we empower businesses to thrive in the digital
            era.
          </p>
          <div className="flex flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                src={facebookIco}
                className="mr-4 size-15 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer "
              />
            </a>
            <a
              href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl"
              target="_blank"
            >
              <img
                src={instagramIco}
                className="mr-4 size-15 hover:scale-105 transition-all duration-200 ease-linear hover:cursor-pointer "
              />
            </a>
            <a
              href="https://www.linkedin.com/company/greateway-software-pvt-ltd/"
              target="_blank"
            >
              <img
                src={linkedin}
                className="mr-4 size-15 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer "
              />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">
              <Link to={"/Service-softDev"}>Software Development</Link>
            </li>
            <li className="mb-2">
              <Link to={"/Service-webDev"}>Web Development</Link>
            </li>
            <li className="mb-2">
              {" "}
              <Link to={"/Service-cloud"}>Cloud Computing</Link>
            </li>
            <li className="mb-2">
              {" "}
              <Link to={"/Service-AI"}>Artificial Intelligence</Link>
            </li>
            <li className="mb-2">
              {" "}
              <Link to={"/Service-devOps"}>DevOps</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <Link to={"/AboutUs"}>About Us</Link>
            </li>
            <li className="mb-2">
              <Link to={"/Service-crm"}>Services</Link>
            </li>
            <li className="mb-2">
              <Link to={"/ContactUs"}>Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link to={"/Career"}>Career</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>Phone - +91 70586 06885</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>Email: hr@greateway.com</span>
          </div>
          <div className="flex items-center mt-[-40px]">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span className="mt-10">
              Office No: 503, 06th Floor, Stellar Spaces, Opposite Zensar
              Company, Kharadi, Pune 411014
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-2 text-center">
        <p>
          &copy; {new Date().getFullYear()} Vionsys IT solutions INDIA Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
