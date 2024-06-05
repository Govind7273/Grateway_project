import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const InputBox = ({ name, type }) => {
  const placeholder = `Enter your ${name}`;
  return (

    <div className="flex flex-col gap-4 my-5">
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          name={name}
          id={name}
          type={type}
          placeholder=''
          className="peer h-full w-full rounded-md border border-gray-900 bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-900 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
        />
        <label
          htmlFor={name}
          className="before:content-[' '] after:content-[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

const Textarea = ({ message }) => {
  return (
    <div className="flex flex-col gap-4 my-5">
      <div className="relative w-full min-w-[200px]">
        <textarea
          id='message'
          name={message}
          rows="4"
          placeholder=''
          className="peer h-full w-full rounded-md border border-gray-900 bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50 resize-none"
        ></textarea>
        <label
          htmlFor={message}
          className="before:content-[' '] after:content-[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          Message
        </label>
      </div>
    </div>
  );
};

const Contactl = () => {
  return (
    <section id="mysectionBG" className="text-gray-600 body-font ">
      
      <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
      
        <div className="md:w-1/3 w-full">
        <div class="relative inline-block">
          <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font ">Contact Us</h1>
  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
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
          <form>
            <InputBox name="name" type="text" />
            <InputBox name="email" type="email" />
            <InputBox name="number" type="text" />
            <Textarea name="message" />
            <div className="w-full">
              <button
                type="submit"
                className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
              >
                Send
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
