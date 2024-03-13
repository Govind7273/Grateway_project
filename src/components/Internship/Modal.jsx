import React, { useRef, useState } from "react";
import { IntershipScheama } from "../../Yupschema/InternshipSchema";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { SendEmail } from "../../functions/EmailSendFunction";

const Modal = ({ setModalOpen }) => {
  const form = useRef();
  const captch = useRef();
  const [CaptchaValue, setCaptchaValue] = useState(null);
  const [error, seterror] = useState({});
  const [Candidate, setCandidate] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: "",
  });

  // input Component
  const InputField = (name, type, error) => {
    const placeholder = `Enter Your ${name}`;
    return (
      <div className="w-full">
        <input
          required
          type={type}
          value={Candidate[`${name.toLowerCase()}`]}
          name={name.toLowerCase()}
          onChange={(e) =>
            setCandidate({ ...Candidate, [e.target.name]: e.target.value })
          }
          className="border outline-none w-full  border-slate-300 rounded-[6px] mb-2 px-2 py-2"
          placeholder={
            name === "Resume" ? "LinkedIn / Portfolio Link" : placeholder
          }
        />
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </div>
    );
  };
  // mutation function to send intership email
  const { mutate: sendForm, isPending } = useMutation({
    mutationFn: () =>
      SendEmail({
        serviceId: import.meta.env.VITE_SERVICE_ID,
        templateId: import.meta.env.VITE_CAREER_TEMPLATE_ID,
        publicId: import.meta.env.VITE_PUBLIC_ID,
        form: form.current,
      }),
    onSuccess: () => {
      toast.success("Application sent.");
      setCandidate({
        name: "",
        email: "",
        phone: "",
        role: "",
        resume: "",
      });
      seterror({});
      document.getElementById("role").value = "";
      captch.current.reset();
    },
    onError: () => toast.error("Something went wrong"),
   
  });
  // handle  submit
  const handleSendapplication = async (e) => {
    e.preventDefault();
    try {
      await IntershipScheama.validate(Candidate, { abortEarly: false });
      if (!CaptchaValue) {
        toast.error("Please fill the captcha");
        return; // Do not continue if captcha is empty
      }
      sendForm();
    } catch (validationError) {
      // Display validation error using toast
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
      <main className="fixed inset-0 p-4 flex justify-center items-center backdrop-blur-sm drop-shadow-2xl">
        <div className="  w-full md:w-[30rem] rounded-2xl p-5 bg-white">
          <form
            ref={form}
            className="flex flex-col gap-4 w-full h-full "
            onSubmit={(e) => handleSendapplication(e)}
          >
            <div className="top flex justify-between items-center">
              <h2 className="text-center text-xl text-blue-600 font-headingFont font-bold">
                Apply for Internship
              </h2>
              <span
                onClick={() => setModalOpen(false)}
                className=" font-extrabold text-xl text-black w-8 transition-all ease-linear duration-75 h-8 flex justify-center items-center hover:bg-gray-300 rounded-full hover:cursor-pointer  "
              >
                &#9747;
              </span>
            </div>

            <div className="flex gap-3 flex-wrap md:flex-nowrap w-full justify-center items-center">
              {/* First Form Field*/}
              {InputField("Name", "text", error.name)}

              {/* Second Form Field */}
              {InputField("Email", "email", error.email)}
            </div>

            <div className="flex gap-3 flex-wrap md:flex-nowrap justify-center items-center">
              {/* Third Form Field */}
              {InputField("Phone", "text", error.phone)}

              {/* Role Field */}
              <div className="flex gap-3 flex-wrap md:flex-nowrap w-full justify-center items-center">
                {InputField("Resume", "text", error.resume)}
              </div>
            </div>
            <div className=" flex justify-center w-full md:px-12 md:pl-2">
              <select
                onChange={(e) =>
                  setCandidate({
                    ...Candidate,
                    [e.target.name]: e.target.value,
                  })
                }
                id="role"
                name="role"
                placeholder="enter subject"
                className="bg-transparent text-black border w-full hover:cursor-pointer border-slate-300  mb-1 py-2  outline-none rounded-[6px]"
              >
                <option className="text-gray-200 hidden" value="">
                  select intership Domain
                </option>
                <option
                  className="text-black"
                  value=" Java Developer - Internship"
                >
                  Java Developer
                </option>
                <option
                  className="text-black"
                  value=" Data Science - Internship"
                >
                  Data Science
                </option>
                <option
                  className="text-black"
                  value="Data Analyst - Internship"
                >
                  Data Analyst
                </option>
                <option
                  className="text-black"
                  value="Web Development - Internship"
                >
                  Web Development
                </option>
              </select>
              {error.role ? (
                <div className="text-red-500 text-xs">{error.role}</div>
              ) : (
                ""
              )}
            </div>

            <ReCAPTCHA
              ref={captch}
              sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
              onChange={(value) => setCaptchaValue(value)}
            />
            <div type="submit" className="flex justify-center items-center">
              <div className="bg-white min-h-[20px] flex items-center justify-center">
                <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all duration-70 shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
                  {isPending ? "Sending" : "Apply"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Modal;
