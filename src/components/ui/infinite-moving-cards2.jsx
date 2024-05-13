import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const InfiniteMovingCards2 = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.ul
        ref={scrollerRef}
        whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover &&
            "hover:[animation-play-state:paused] hover:cursor-pointer"
        )}
      >
        {items.map((item) => (
          <li
            className=" w-[350px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="bg-white shadow-lg rounded-3xl user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-md leading-[1.6] text-slate-700 font-normal">
                <span className="absolute left-0 mb-2 -ml-4 -top-2 text-blue-500 text-4xl">
                  &#8220;
                </span>
                {item.quote}
                <span className="absolute right-0 -mr-4 -mt-1 text-blue-500 text-4xl">
                  &#8221;
                </span>
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-cyan-400 font-semibold tracking-wider uppercase">
                    {item.name}
                  </span>
                  <span className="text-2xl leading-[1.6] text-white font-extrabold uppercase">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default InfiniteMovingCards2;
