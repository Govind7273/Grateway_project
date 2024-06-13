import React from "react";
import aicteLogo from "../../assets/Images/aicteLogo.png";
import { MdVerifiedUser } from "react-icons/md";

export const CertifiedLogo = () => {
  return (
    <>
      <section className="w-full py-12 md:py-10 lg:py-10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-xl bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <MdVerifiedUser />
                <span className="font-semibold">AICTE Approved</span>
              </div>
            </div>
            <h2 className="text-MainHeading-sm font-bold tracking-tighter sm:text-MainHeading md:text-MainHeading">
              Providing high-caliber Internship programs.
            </h2>
            <p className="max-w-[700px] text-SubHeading-sm md:text-SubHeading md:font-semibold- ">
              Our internships are approved by the All India Council for
              Technical Education (AICTE), ensuring the highest quality and
              industry-relevance of the training. This AICTE approval is a seal
              of excellence that guarantees you'll gain valuable skills and
              experience to kickstart your career.
            </p>
            <div className="flex justify-center">
              <img
                src={aicteLogo}
                width="100"
                height="100"
                alt="AICTE Logo"
                className="h-32 w-32 md:h-48 md:w-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertifiedLogo;
