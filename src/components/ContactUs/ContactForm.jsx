import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ContactScheama } from "../../Yupschema/ContactUsScheama";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const captch = useRef();
  const ContactForm = useRef();
  const [error, seterror] = useState({});
  const [CaptchValue, setCaptchaValue] = useState("");
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // contact form funnction
  const InputBox = (name, type, error) => {
    const placeholder = ("Enter Your " + name).toString().toUpperCase();
    return (
      <div>
        <input
          type={type}
          id="name"
          name={name}
          required
          placeholder={placeholder}
          value={ContactDetails[`${name.toLowerCase()}`]}
          onChange={(e) =>
            setContactDetails({
              ...ContactDetails,
              [e.target.name]: e.target.value,
            })
          }
          className="mt-4 md:w-[20rem] w-full p-3 bg-slate-600 bg-opacity-30 text-white rounded-md flex  border-violet-500 border-l-4 shadow-md"
        />
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </div>
    );
  };
  // message are of the form
  const Textarea = (message, error) => {
    return (
      <>
        <textarea
          id="message"
          name={message}
          rows="4"
          value={ContactDetails[message]}
          placeholder="DESCRIPTION"
          onChange={(e) =>
            setContactDetails({
              ...ContactDetails,
              [e.target.name]: e.target.value,
            })
          }
          className=" mt-4 p-2 bg-slate-600 bg-opacity-30 text-white rounded-md border-violet-500 border-l-4 shadow-md"
        ></textarea>
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </>
    );
  };

  // function to send query by mail
  const { mutate: SendQuery, isPending } = useMutation({
    mutationKey: "SendQuery",
    mutationFn: () =>
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CONTACTUS_TEMPLATE_ID,
        ContactForm.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      ),
    onSuccess: () => {
      toast.success("message sent .");
      setContactDetails({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      seterror({});
      document.getElementById("subject").value = "";
      captch.current.reset();
    },
    onError: () => toast.error("something went wrong"),
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
      SendQuery();
    } catch (validationError) {
      toast.error("please cheack the form data");
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
        ref={ContactForm}
        onSubmit={(e) => handlesendQuery(e)}
        className=" md:w-[60%] justify-center flex gap-2 flex-col w-full font-navlistFont flex-1 px-4 py-6"
      >
        <h1 className="text-5xl font-headingFont  font-extrabold text-violet-600 flex justify-center mb-0 mt-4">
          Get in touch with us
        </h1>
        <div className="flex w-full md:gap-8 flex-col md:flex-row">
          {/* Your Full name input box */}
          {InputBox("name", "text", error.name)}
          {/* Your Email name input box */}
          {InputBox("email", "email", error.email)}
        </div>
        <div className="flex md:gap-8 w-full flex-col md:flex-row ">
          {/* phone number field */}
          {InputBox("phone", "text", error.phone)}
          <div className="">
            <div
              className="flex flex-col p-3 mt-4 w-full md:w-[20rem]  bg-slate-600 bg-opacity-30 text-black rounded-md border-violet-500 border-l-4 shadow-md
"
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
                placeholder="enter subject"
                className="bg-transparent text-white"
                // value={ContactDetails.subject}
              >
                <option className="text-white" value="">
                  Select the Subject
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
        />
        <button
          type="submit"
          className="md:w-[30%] w-full bg-violet-500 transition-all duration-150 ease-linear hover:bg-white hover:text-violet-700 font-semibold shadow-[5px_5px_10px_3px] shadow-violet-900 text-white px-4 py-2 rounded-md mt-4"
        >
          {isPending ? "sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
