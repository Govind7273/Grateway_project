import React, { useRef, useState } from "react";
import { IntershipScheama } from "../../Yupschema/InternshipSchema";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";

const Modal = ({ setModalOpen }) => {
  const captch = useRef();
  const [CaptchaValue, setCaptchaValue] = useState(null);
  const [error, seterror] = useState({});
  const [Candidate, setCandidate] = useState({
    name: "",
    email: "",
    number: "",
    role: "",
  });
  const [resume, setresume] = useState(null);

  // input Component
  const InputField = (name, type, error) => {
    const placeholder = `Your ${name}`;
    return (
      <div className="w-full h-8 text-[15px] text-gray-600">
        <input
          required
          type={type}
          value={Candidate[`${name.toLowerCase()}`]}
          name={name.toLowerCase()}
          onChange={(e) =>
            setCandidate({ ...Candidate, [e.target.name]: e.target.value })
          }
          className="border outline-none w-full bg-transparent border-slate-400 rounded-[6px] mb-2 px-2 py-2"
          placeholder={placeholder}
        />
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </div>
    );
  };
  // mutation function to send intership email
  const { mutate: sendForm, isPending } = useMutation({
    mutationFn: (form) => careerEmail(form),
    onSuccess: (res) => {
      toast.success(res);
      setCandidate({
        name: "",
        email: "",
        number: "",
        role: "",
      });
      seterror({});
      // document.getElementById("role").files[0] = "";
      captch.current.reset();
      setTimeout(() => {
        setModalOpen(false);
      }, 2 * 1000);
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  // handle  submit
  const handleSendapplication = async (e) => {
    const { name, email, number, role } = Candidate;
    e.preventDefault();
    try {
      await IntershipScheama.validate(Candidate, { abortEarly: false });
      const form = useCareerForm(name, email, number, role, resume);
      if (!CaptchaValue) {
        toast.error("Please fill the captcha");
        return; // Do not continue if captcha is empty
      }
      if (!resume) {
        toast.error("Please upload resume");
        return; // Do not continue if captcha is empty
      }
      sendForm(form);
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
      <main className="fixed inset-0 p-4 z-50 flex justify-center items-center backdrop-blur-sm drop-shadow-2xl">
        <div className="  w-full md:w-[30rem] rounded-2xl p-5 bg-white">
          <form
            className="flex flex-col gap-4 w-full h-full "
            onSubmit={(e) => handleSendapplication(e)}
          >
            <div className="top flex justify-between items-center">
              <h2 className="text-center text-xl text-blue-600 font-headingFont font-bold">
                Application
              </h2>
              <span
                onClick={() => setModalOpen(false)}
                className=" font-extrabold text-xl text-black w-8 transition-all ease-linear duration-75 h-8 flex justify-center items-center hover:bg-gray-300 rounded-full hover:cursor-pointer  "
              >
                &#9747;
              </span>
            </div>

            <div className="flex gap-3 flex-col md:flex-nowrap w-full justify-center items-center">
              {/* First Form Field*/}
              {InputField("Name", "text", error.name)}
            </div>

            <div>
              {/* Second Form Field */}
              {InputField("Email", "email", error.email)}
            </div>

            <div className="flex gap-3 flex-wrap justify-between items-center">
              {/* Third Form Field */}
              {InputField("number", "text", error.number)}

              {/* Role Field */}
              <div className="flex flex-col pt-2 flex-wrap md:flex-nowrap w-full">
                <label className="text-[15px] pb-1" htmlFor="file">Upload Resume</label>
                <input
                  id="file"
                  type="file"
                  name="resume"
                  onChange={(e) => setresume(e.target.files[0])}
                  className="h-auto text-[13px]"
                />
              </div>
            </div>
            <div className="flex justify-center w-full">
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
                className="bg-transparent px-1 text-gray-500 border w-full hover:cursor-pointer border-slate-400  mb-1 py-2  outline-none rounded-[6px]"
              >
                <option className="hidden " value="">
                  Select Intership Domain
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
              <div className=" min-h-[20px] flex items-center justify-center">
                <button className="rounded-xl bg-gradient-to-br from-[#44eb98] to-[#09bd99] px-6 py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:scale-110 hover:shadow-[#4481EB]/50">
                  {isPending ? "Sending..." : "Submit"}
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
