import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { corporateTrainingLinks, links } from "./Mylinks";
import { NavLink } from "react-router-dom";
import GTW from "./images/GTW.png";
import { Ham } from "./Ham";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const HandleNav = (value) => {
    setShowNav(value);
  };

  return (
    <header className="flex gap-5 bg-white z-50 justify-between px-2 md:justify-evenly fixed w-full ">
      <div className="logo">
        <NavLink to={"/"}>
          <img src={GTW} alt="GreatWay" className="h-[65px]" />
        </NavLink>
      </div>
      <span className="md:hidden">
        <Ham setshowNav={HandleNav} showNav={showNav} />
      </span>
      <AnimatePresence>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // Added transition
          className={`${showNav ? "visible" : "hidden"
            } md:visible nav flex flex-col md:flex-row items-center justify-center md:justify-end md:gap-6 absolute md:static top-20 bg-white w-full -left-[2px] md:w-auto md:flex md:items-center`}
        >
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/AboutUs"}
          >
            About Us
          </NavLink>

          <FlyoutLink FlyoutContent={PricingContent} className="text-black ">
            <NavLink to={"/Service-softDev"} className="hover:bg-gray-300 p-2 rounded-xl font-bold text-black">
              Services
            </NavLink>
          </FlyoutLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/Indrustry"}
          >
            Industries
          </NavLink>


          <FlyoutLink FlyoutContent={TrainingContent} className="text-black ">
            <NavLink to={"/training-program"} className="hover:bg-gray-300 p-2 rounded-xl font-bold text-black">
              Corporate Training
            </NavLink>
          </FlyoutLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/Internship"}
          >
            Internship
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/Career"}
          >
            Career
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "violet" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-bold"
            to={"/ContactUs"}
          >
            Contact
          </NavLink>

        </motion.nav>
      </AnimatePresence>
    </header>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative flex items-center text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[60%] top-[52px] z-50  md:top-[3.6rem] bg-white text-black"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-3 md:overflow-hidden flex flex-col p-4  md:grid md:grid-cols-2 shadow-lg rounded-lg">
      {links.map((l) => {
        return (
          <div key={l.id} className="hover:bg-gray-200 rounded-xl p-2">
            <NavLink to={l.link}>
              <h1 className="font-bold w-fit">{l.name}</h1>
              <span className="text-xs">{l.desc}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const TrainingContent = () => {
  return (
    <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-3 md:overflow-hidden flex flex-col p-4  md:grid md:grid-cols-2 shadow-lg rounded-lg">
      {corporateTrainingLinks.map((l) => {
        return (
          <div key={l.id} className="hover:bg-gray-200 rounded-xl p-2">
            <NavLink to={l.link}>
              <h1 className="font-bold w-fit">{l.name}</h1>
              <span className="text-xs">{l.desc}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;


