"use client";
import Client1 from "../../Home/assets/image/clients/client-1.png";
import Client2 from "../../Home/assets/image/clients/client-2.png";
import Client3 from "../../Home/assets/image/clients/client-3.png";
import Client4 from "../../Home/assets/image/clients/client-4.png";
import Client6 from "../../Home/assets/image/clients/client-6.png";
import Client7 from "../../Home/assets/image/clients/client-7.png";
import Client8 from "../../Home/assets/image/clients/client-8.png";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { fadein } from "../../../variants";

function Clientl() {
  return (
    // Heading & framer section
    <div className="py-2">
      <motion.h1
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="md:text-4xl py-4 text-2xl font-bold tracking-wide text-[#3c4c54] text-center"
      >
        Our Beneficiaries
      </motion.h1>
      <div
        id="bg2"
        className="md:h-auto h-[20vh] md:py-4 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05]  items-center justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
export default Clientl;
const testimonials = [
  {
    id: 1,
    img: Client1,
  },
  {
    id: 2,
    img: Client2,
  },
  {
    id: 3,
    img: Client3,
  },
  {
    id: 4,
    img: Client4,
  },
  {
    id: 6,
    img: Client6,
  },
  {
    id: 7,
    img: Client7,
  },
  {
    id: 8,
    img: Client8,
  },
];
