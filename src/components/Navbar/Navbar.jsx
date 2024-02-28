

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./images/logo.jpeg";

import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:bg-slate-600  bg-black bg-opacity-50 font-headingFont font-extrabold w-full md:fixed z-50 md:backdrop-blur-md">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-2 md:w-auto w-full text-white flex justify-between">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Vionsys"
            className="md:cursor-pointer w-20"
          />
          <div
            className="text-3xl md:hidden transition-all duration-200"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {!open ? <IoMenu color="white" /> : <IoClose color="white" />}
          </div>
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex flex-col pl-6 md:pl-0 z-50 p-5 bg-black md:bg-slate-600  text-white gap-4 absolute top-16 w-full transition-all 0.2s ease-in md:w-fit md:top-0 md:static justify-center md:flex-row md:items-center md:gap-4`}
        >
          <div className="flex flex-col md:flex-row md:gap-5">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "white" }
              }
              to="/"
              className="hover:bg-slate-500 px-2 py-1 rounded-lg "
            >
              Home
            </NavLink>
            <NavLink
              to="/AboutUs"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "white" }
              }
              className="hover:bg-slate-500 px-2 py-1 rounded-lg "
            >
              About Us
            </NavLink>

            <NavLinks />
            <NavLink
              to="/Indrustry"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "white" }
              }
              className="hover:bg-slate-500 px-2 py-1 rounded-lg "
            >
              Indrustry
            </NavLink>

            <NavLink
              to="/Career"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "white" }
              }
              className="hover:bg-slate-500  px-2 py-1 rounded-lg"
            >
              Career
            </NavLink>
            <NavLink
              to="/ContactUs"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : { color: "white" }
              }
              className="hover:bg-slate-500 px-2 py-1 rounded-lg "
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
