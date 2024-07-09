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

  const handleNavLinkClick = () => {
    setShowNav(false);
  };

  return (
    <header className="flex gap-1 bg-white z-50 justify-between px-2 md:justify-evenly fixed w-full">
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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`${
            showNav ? "visible" : "hidden"
          } md:visible nav flex flex-col md:flex-row items-center justify-center md:justify-end md:gap-2 absolute md:static top-20 bg-white w-full -left-[2px] md:w-auto md:flex md:items-center`}
        >
          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/AboutUs"}
          >
            About Us
          </NavLink>

          <FlyoutLink FlyoutContent={PricingContent} handleNavLinkClick={handleNavLinkClick}>
            <NavLink
              to={"/Service-softDev"}
              className="hover:bg-gray-300 p-2 rounded-xl font-semibold text-black"
            >
              Services
            </NavLink>
          </FlyoutLink>

          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/Indrustry"}
          >
            Industries
          </NavLink>

          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/Mou"}
          >
            MOU With Collages
          </NavLink>

          <FlyoutLink
            FlyoutContent={TrainingContent}
            handleNavLinkClick={handleNavLinkClick}
          >
            <NavLink
              to={"/training-program"}
              className="hover:bg-gray-300 p-2 rounded-xl font-semibold text-black"
            >
              Corporate Training
            </NavLink>
          </FlyoutLink>

          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/Internship"}
          >
            Internship
          </NavLink>

          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/Career"}
          >
            Career
          </NavLink>

          <NavLink
            onClick={handleNavLinkClick}
            style={({ isActive }) =>
              isActive ? { color: "#74A450" } : { color: "black" }
            }
            className="hover:bg-gray-300 p-2 rounded-xl font-semibold"
            to={"/ContactUs"}
          >
            Contact
          </NavLink>
        </motion.nav>
      </AnimatePresence>
    </header>
  );
};

const FlyoutLink = ({ children, FlyoutContent, handleNavLinkClick }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <div className="relative flex items-center text-white" onClick={(e) => e.stopPropagation()}>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[60%] top-[52px] z-50 md:top-[3.6rem] bg-white text-black"
          >
            <FlyoutContent handleNavLinkClick={handleNavLinkClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({ handleNavLinkClick }) => {
  return (
    <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-1 md:overflow-hidden flex flex-col p-4 md:grid md:grid-cols-2 shadow-lg rounded-lg">
      {links.map((l) => {
        return (
          <div key={l.id} className="hover:bg-gray-200 rounded-xl p-2">
            <NavLink to={l.link} onClick={handleNavLinkClick}>
              <h1 className="font-semibold w-fit">{l.name}</h1>
              <span className="text-xs">{l.desc}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const TrainingContent = ({ handleNavLinkClick }) => {
  return (
    <div className="md:w-[50rem] bg-white overflow-y-scroll h-[20rem] md:h-full w-[21rem] gap-1 md:overflow-hidden flex flex-col p-4 md:grid md:grid-cols-2 shadow-lg rounded-lg">
      {corporateTrainingLinks.map((l) => {
        return (
          <div key={l.id} className="hover:bg-gray-200 rounded-xl p-2">
            <NavLink to={l.link} onClick={handleNavLinkClick}>
              <h1 className="font-semibold w-fit">{l.name}</h1>
              <span className="text-xs">{l.desc}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
