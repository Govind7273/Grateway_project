
/***************************************/

import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ContactScheama } from "../../Yupschema/ContactUsScheama";
import ReCAPTCHA from "react-google-recaptcha";
import { contactEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";


const ContactForm = () => {
  const captch = useRef();
  const ContactForm = useRef();
  const [error, seterror] = useState({});
  const [CaptchValue, setCaptchaValue] = useState("");
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const InputBox = (name, type, error) => {
    const placeholder = ("Enter Your " + name).toString();
    return (
      <div className="bg-white p-4 rounded-lg">
        <div className="relative bg-inherit ">
          <input
            type={type}
            id={name}
            name={name}
            required
            className="peer bg-transparent h-10 lg:w-72 w-full rounded-xl text-black placeholder-transparent ring-2 px-2 ring-gray-700 focus:ring-sky-600 focus:outline-none focus:border-rose-600 transition-all"
            placeholder={placeholder}
            value={ContactDetails[`${name.toLowerCase()}`]}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor={name}
            className="absolute cursor-text left-2 -top-3 text-sm text-gray-500 bg-inherit px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
          >
            {placeholder}
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


  // message are of the form
  const Textarea = (message, error) => {
    return (

      <>
        <div class="bg-white p-4 rounded-lg">
          <div class="relative bg-inherit">
            <textarea
              id="message"
              name={message}
              rows="4"
              value={ContactDetails[message]}

              onChange={(e) =>
                setContactDetails({
                  ...ContactDetails,
                  [e.target.name]: e.target.value,
                })
              }
              className="peer bg-transparent h-32 w-full 
         rounded-xl text-gray-800 placeholder-transparent 
        ring-2 px-4 py-2 ring-gray-700 focus:ring-sky-600 
        focus:outline-none focus:border-rose-600"
              placeholder="Description"
            ></textarea>
            <label for="message" class="absolute cursor-text 
         left-4 -top-3 text-sm text-gray-500 bg-inherit 
         px-1 peer-placeholder-shown:text-base 
         peer-placeholder-shown:text-gray-500 
         peer-placeholder-shown:top-2 peer-focus:-top-3 
         peer-focus:text-sky-600 peer-focus:text-sm 
         transition-all">Description</label>
            {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
          </div>
        </div>
      </>

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
    <>
      <Toaster />
      <form
        onSubmit={(e) => handlesendQuery(e)}
        className="md:w-[60%] justify-top flex gap-2 flex-col w-full font-navlistFont flex-1 px-4 py-6"
      >
        <h1 className="text-4xl font-headingFont  font-extrabold text-sky-500 flex justify-center">
          Send us message
        </h1>
        <h1 className="text-xl font-headingFont text-gray-700 flex justify-center mb-0 ">Our friendly team would love to hear from you.</h1>
        <div className="flex w-full md:gap-8 flex-col md:flex-row justify-center">
          {/* Your Full name input box */}
          {InputBox("name", "text", error.name)}
          {/* Your Email name input box */}
          {InputBox("email", "email", error.email)}
        </div>
        <div className="flex md:gap-8 w-full flex-col md:flex-row justify-center">

          {/* number number field */}
          {InputBox("number", "text", error.number)}

          <div>
            <div class="bg-white p-4 rounded-lg">
              <div class="relative bg-inherit">
                <div
                  className="flex flex-col p-2 h-10 lg:w-72 w-full rounded-xl text-black placeholder-transparent ring-2 px-2 ring-gray-700 focus:ring-sky-600 focus:outline-none focus:border-rose-600 transition-all"
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
                    className=" text-black"
                  >
                    <option className="text-black hidden" value="">
                      <span style={{ color: '#f5eacb' }}>How can we Help ?</span>
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
            </div>
            {error.subject ? (
              <div className="text-red-500 text-xs">{error.subject}</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-col">
          {Textarea("message", error.message)}
        </div>

        <ReCAPTCHA
          ref={captch}
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
          onChange={(value) => setCaptchaValue(value)}
          className="lg:ml-[230px]"
        />
        <button
          type="submit"
          className="md:w-[30%] w-full bg-[#4E77BF] transition-all duration-150 ease-linear hover:bg-[#1b2d4b]  hover:text-white font-semibold text-white px-4 py-2 mt-4 rounded-2xl lg:ml-[250px]"
        >
          {isPending ? "sending..." : "Send Message"}
        </button>

      </form>
    </>
  );
};

export default ContactForm;