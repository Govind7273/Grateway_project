import { motion } from "framer-motion";
 const Info = () => {
  return (
    <div className="relative md:-top-10 md:z-20">
      <div className="flex flex-col md:flex-row sm:p-4 md:p-16 md:pb-0 -mt-16">
        <div className="flex flex-col gap-2 md:gap-6 px-4 md:px-10 -md:mt-10">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="text-CardHeading sm:text-MainHeading-sm md:text-MainHeading">
            At Greateway Software, we are driven by a singular mission to
            create transformative software solutions that empower businesses and
            individuals alike.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.5 },
              ease: "easeInOut"
            }}
            className="text-Paragraph-sm md:text-Paragraph">
            With a focus on innovation, quality and user experience, we
            specialize in developing cutting-edge software products that
            streamline processes, enhance productivity and drive growth. From
            enterprise-level applications to intuitive mobile solutions, our
            team of passionate developers and designers work tirelessly to
            deliver tailor-made software solutions that exceed expectations.
            Backed by a commitment to excellence and a deep understanding of
            industry trends, we are dedicated to helping our clients succeed in
            a rapidly evolving digital landscape.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Info;