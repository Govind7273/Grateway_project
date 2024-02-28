import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className=" text-left my-2 md:my-0 md:bg-none md:cursor-pointer  group">
            <h1
              className="flex justify-between items-center md:pr-0 pr-4 group  px-2 py-1 rounded-lg hover:bg-slate-500
              "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span className="text-xl md:hidden  ">
                {
                  heading === link.name ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )
                }
              </span>
              <span className="text-xl md:mt-1 md:ml-1  md:block hidden group-hover:rotate-180 transition-all duration-300 ease-linear group-hover:-mt-2">
                <MdKeyboardArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute w-fit md:w-fit top-30md:top-10 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 hidden  md:absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-2 text-white md:h-full h-[20rem] overflow-scroll md:overflow-hidden">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.name} className=" grid md:grid-cols-2 gap-2 md:p-2 my-2 ">
                        {mysublinks.sublink.map((slink) => (
                          <span key={slink.name} className="text-sm text-gray-600 border-gray-800 hover:bg-gray-700 hover:bg-opacity-60 rounded-lg p-2">
                            <NavLink
                            style={({isActive})=>(isActive?{color:'violet'}:{color:"white"})} 
                              to={slink.link}
                              className="hover:text-purple-500"
                            >
                              <h1 className=" text-white">{slink.name}</h1>
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
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            // ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                  </h1>
                  <div
                 
                  >
                 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
