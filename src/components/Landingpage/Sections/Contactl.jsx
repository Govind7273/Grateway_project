
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import { ContactScheama } from "../../../Yupschema/ContactUsScheama";
import { contactEmail } from "../../../functions/EmailSendFunction";



const Contactl = () => {

  const [error, seterror] = useState({});
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

const InputBox = (name, type,error) => {
  const placeholder = ("Enter Your " + name).toString();
  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          name={name}
          id={name}
        
          type={type}
          placeholder={name}
          value={ContactDetails[`${name.toLowerCase()}`]}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                [e.target.name]: e.target.value,
              })
            }
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
        />
        <label
          htmlFor={name}
          className="pb-1 text-xs uppercase tracking-wider"
        >
      
        </label>

        {error ? (
            <div className="text-red-500 text-xs">{error}</div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
};

const Textarea = (message,error) => {
  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="relative w-full min-w-[200px]">
        <textarea
          id='message'
          name={message}
          rows="4"
          placeholder={message}
          value={ContactDetails[message]}
          onChange={(e) =>
            setContactDetails({
              ...ContactDetails,
              [e.target.name]: e.target.value,
            })
          }
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
        ></textarea>
        <label
          htmlFor={message}
          className="pb-1 text-xs uppercase tracking-wider"
        >
    
        </label>
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </div>
    </div>
  );
};

// function to send query by mail
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
    seterror({});
    document.getElementById("subject").value = "";
    captch.current.reset();
  },
  onError: (err) => toast.error(err),
});

// handle sumbit for Contact Us
const handlesendQuery = async (e) => {
  e.preventDefault();
  try {
    await ContactScheama.validate(ContactDetails, { abortEarly: false });
    if (!CaptchValue) {
      toast.error("Please fill the captcha");
      return; // Do not continue if captcha is empty
    }
    SendQuery(ContactDetails);
  } catch (validationError) {
    toast.error("please check the form data");
    const newError = {};
    validationError.inner.forEach((err) => {
      newError[err.path.toLowerCase()] = err.message;
    });
    seterror(newError);
  }
};


  return (
    <section id="mysectionBG" className="text-gray-600 body-font ">
            <Toaster />

      <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
      
        <div className="md:w-1/3 w-full">
        <div className="relative inline-block">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font ">Contact Us</h1>
  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
</div>
          <p className="leading-relaxed text-xl text-gray-900 py-2">
            If you have any questions or need assistance, please feel free to reach out to us.
            <br />
            You can also email us at
            <a href="mailto:contact@example.com" className="font-semibold"> contact@example.com</a>
          </p>
          <p className="leading-relaxed text-xl text-gray-900 mt-8">
            Connect with us on social media:
          </p>
          <span className="inline-flex justify-center sm:justify-start">
            <a href="" className="w-8 h-8 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900">
              <FaXTwitter className='text-white' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557537305066&mibextid=ZbWKwL" className="relative w-8 h-8 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-blue-700  hover:bg-gray-900 ">
              <FaFacebook className='text-white' />
            </a>
            <a href="https://www.instagram.com/greateway_software_pvt.ltd?igsh=OGNtMmd3Y2VlcXFl" className="relative w-8 m-2 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]  hover:bg-gradient-to-b from-gray-900 to-gray-900  ">
              <FaInstagram className='text-white' />
            </a>
            <a href="https://www.linkedin.com/company/greateway-software-pvt-ltd/" className="relative w-8 h-8 m-2 rounded-full transition-all duration-500 flex justify-center items-center bg-blue-500  hover:bg-gray-900 ">
              <FaLinkedin className='text-white' />
            </a>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Send us message</h1>
          <form
          onSubmit={(e) => handlesendQuery(e)}
          >
          {InputBox("name", "text", error.name)}
          {InputBox("email", "email", error.email)}
          {InputBox("number", "text",error.number)}
          {Textarea("message",error.message)}

            <div className="w-full">
              <button
                type="submit"
                className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
              >
              {isPending ? "sending..." : "Send Message"}
                <IoSend className='text-white mt-[2px]' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactl;
