import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { ContactScheama } from "../../../Yupschema/ContactUsScheama";
import { contactEmail } from "../../../functions/EmailSendFunction";
import { Link } from "react-router-dom";

const Contactl = () => {
  const [error, setError] = useState({});
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });



  const InputBox = (name, type, error) => {
    const placeholder = `Enter Your ${name}`;
    return (
      <div className="flex flex-col gap-4 my-5">
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            type={type}
            name={name}
            id={name}
            className="w-full rounded-xl border border-gray-800 py-2 pl-2 pr-4 shadow-md sm:mb-0"
            placeholder={placeholder}
            value={ContactDetails[name.toLowerCase()]}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          {error && <div className="text-red-500 text-xs ml-2">{error}</div>}
        </div>
      </div>
    );
  };

  const Textarea = (message, error) => {
    const placeholder = `Enter Your ${message}`;
    return (
      <div className="flex flex-col gap-4 my-5">
        <div className="relative w-full min-w-[200px]">
          <textarea
            id="message"
            name={message}
            rows="4"
            placeholder={placeholder}
            value={ContactDetails[message]}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="w-full border rounded-xl border-gray-800 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
          ></textarea>
          {error && <div className="text-red-500 text-xs ml-2">{error}</div>}
        </div>
      </div>
    );
  };

  const { mutate: SendQuery, isPending } = useMutation({
    mutationKey: "SendQuery",
    mutationFn: (ContactDetails) => contactEmail(ContactDetails),
    onSuccess: (res) => {
      toast.success(res);
      setContactDetails({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
      setError({});
      document.getElementById("subject").value = "";

    },
    onError: (err) => toast.error(err.message),
  });

  const handleSendQuery = async (e) => {
    e.preventDefault();
    try {
      await ContactScheama.validate(ContactDetails, { abortEarly: false });
      SendQuery(ContactDetails);
    } catch (validationError) {
      toast.error("Please check the form data");
      const newError = {};
      validationError.inner.forEach((err) => {
        newError[err.path.toLowerCase()] = err.message;
      });
      setError(newError);
    }
  };

  return (
    <section id="mysectionBG" className="text-gray-600 body-font">
      <Toaster />

      <div
        className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-4 md:py-24 mx-auto section"
        id="contact-form"
      >
        <div className="md:w-1/3 w-full">
          <div className="relative inline-block mt-10">
            <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold title-font">
              Contact Us
            </h1>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
          </div>
          <p className="leading-relaxed text-Paragraph md:pt-4">
            If you have any questions or need assistance, please feel free to
            reach out to us.
            <br />
            <span className="font-bold pt-4"> You can also email us at </span>
            <Link to="mailto:hr@greateway.com" className="font-bold border-b-2">
              hr@greateway.com
            </Link>
          </p>
          <p className="leading-relaxed text-xl text-gray-900 capitalize font-bold md:mt-4">
            Connect with us on social media:
          </p>
          <span className="flex lg:justify-start sm:justify-center">
            {/* <Link
              to=""
              className="md:w-8 w-10 md:h-8 h-10 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900"
            >
              <FaXTwitter className="text-white" />
            </Link> */}
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL"
              className="relative md:w-8 w-10 md:h-8 h-10 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-blue-700 hover:bg-gray-900"
            >
              <FaFacebook className="text-white" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl"
              className="relative md:w-8 w-10 md:h-8 h-10 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)] hover:bg-gradient-to-b from-gray-900 to-gray-900"
            >
              <FaInstagram className="text-white" />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/greateway-software-pvt-ltd/"
              className="relative md:w-8 w-10 md:h-8 h-10 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-blue-500 hover:bg-gray-900"
            >
              <FaLinkedin className="text-white" />
            </Link>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-5 md:mt-0 md:pl-28">
          <h1 className="md:text-MainHeading text-MainHeading-sm font-extrabold title-font mb-4">
            Send us a message
          </h1>
          <form onSubmit={(e) => handleSendQuery(e)}
          >
            {InputBox("name", "text", error.name)}
            {InputBox("email", "email", error.email)}
            {InputBox("number", "number", error.number)}

            <div>
              <div className="relative bg-inherit">
                <div
                  className="flex flex-col p-2 h-10 lg:w-72 w-full rounded-xl text-black placeholder-transparent ring-1 px-2 ring-gray-700 focus:ring-sky-600 focus:outline-none focus:border-rose-600 transition-all bg-white"
                >
                  <select
                    onChange={(e) =>
                      setContactDetails({
                        ...ContactDetails,
                        [e.target.name]: e.target.value,
                      })
                    }
                    id="subject"
                    name="subject"
                    className=" text-black "
                  >
                    <option className="text-black hidden" value="">
                      <span>How can we Help ?</span>
                    </option>

                    <option className="text-black" value="About Service">
                      About Service
                    </option>
                    <option className="text-black" value="Technical Question">
                      Technical Question
                    </option>
                    <option className="text-black" value="Career">
                      Career
                    </option>
                    <option className="text-black" value="Something Else">
                      Something Else
                    </option>
                  </select>

                </div>
              </div>
              {error.subject ? (
                <div className="text-red-500 text-xs ml-2">{error.subject}</div>
              ) : (
                ""
              )}
            </div>
            {Textarea("message", error.message)}

            <div className="w-full">
              <button
                type="submit"
                className="flex justify-center items-center gap-4 bg-cyan-300 px-3 py-1 border border-cyan-300 md:px-4 md:py-2 rounded-xl font-bold text-slate-800 hover:bg-white hover:text-cyan-600 transition-all 0.2 ease-out hover:border"
              >
                {isPending ? "Sending..." : "Send Message"}
                <IoSend className="mt-[2px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactl;
