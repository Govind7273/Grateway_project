import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const toggleSubmenu = (linkName) => {
    if (heading !== linkName) {
      setHeading(linkName);
    } else {
      setHeading("");
    }
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="font-bold text-left my-2 md:my-0 md:bg-none md:cursor-pointer group">
            <h1
              className="flex justify-between items-center gap-2 group px-6 py-1 rounded-full hover:bg-violet-200"
              onClick={() => toggleSubmenu(link.name)}
            >
              <Link to="/Service-SoftDev">{link.name}</Link>
              <span className="text-xl md:hidden">
                {heading === link.name ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </span>
              <span className="text-xl md:mt-1 md:ml-1 md:block hidden group-hover:rotate-180 transition-all duration-300 ease-linear group-hover:-mt-2">
                <MdKeyboardArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div
                className={`absolute w-fit md:w-fit top-30md:top-10 hidden group-hover:block hover:block`}
              >
                <div className="py-3">
                  <div className="w-4 h-4 left-3 hidden md:absolute mt-1 bg-white rotate-45"></div>
                </div>
                <div className="bg-white rounded-lg p-2 text-black md:h-full h-[20rem] overflow-scroll md:overflow-hidden">
                  {link.sublinks.map((mysublinks, index) => (
                    <div
                      key={index}
                      className="grid md:grid-cols-2 gap-2 md:p-2 my-2"
                    >
                      {mysublinks.sublink.map((slink) => (
                        <span
                          key={slink.name}
                          className="text-sm text-gray-600 border-gray-800 hover:bg-violet-200 hover:bg-opacity-60 rounded-[8px] p-2"
                        >
                          <NavLink
                            style={({ isActive }) =>
                              isActive
                                ? { color: "violet" }
                                : { color: "white" }
                            }
                            to={slink.link}
                            className="hover:text-purple-500"
                          >
                            <h1 className="text-black">{slink.name}</h1>
                            <p className="text-xs text-gray-500">
                              {slink.desc}
                            </p>
                          </NavLink>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
