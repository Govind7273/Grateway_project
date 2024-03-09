

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import GTW from "./images/GTW.png";

import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:bg-white  bg-white  font-headingFont font-extrabold w-full md:fixed z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  md:w-auto w-full text-white flex justify-between">
          <img
            onClick={() => navigate("/")}
            src={GTW}
            alt="Vionsys"
            className="md:cursor-pointer"
          />
          <div
            className="text-3xl md:hidden transition-all duration-200 flex justify-center items-center pr-6"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {!open ? <IoMenu color="black" /> : <IoClose color="black" />}
          </div>
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex flex-col pl-6 md:pl-0 z-50 p-5 bg-white md:bg-white gap-4 absolute top-16 w-full transition-all 0.2s ease-in md:w-fit md:top-0 md:static justify-center md:flex-row md:items-center md:gap-4`}
        >
          <div className="flex flex-col md:flex-row justify-center">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              to="/"
              className="hover:bg-violet-200  font-bold text-black px-6 py-1 rounded-full "
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              className="hover:bg-violet-200 font-bold text-black px-6 py-1 rounded-full "
            >
              About Us
            </NavLink>

            <NavLinks />
            <NavLink
              to="/Indrustry"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              className="hover:bg-violet-200 font-bold text-black px-6 py-1 rounded-full "
            >
              
              Industries
            </NavLink>

            <NavLink
              to="/Career"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              className="hover:bg-violet-200 font-bold text-black px-6 py-1 rounded-full"
            >
              Career
            </NavLink>
            <NavLink
              to="/Intership"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              className="hover:bg-violet-200 font-bold text-black px-6 py-1 rounded-full"
            >
              Internship
            </NavLink>
            <NavLink
              to="/ContactUs"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "black" }
              }
              className="hover:bg-violet-200 font-bold text-black px-6 py-1 rounded-full "
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
