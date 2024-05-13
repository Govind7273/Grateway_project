import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { JobScheama } from "../../Yupschema/JobApplicationScheama";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";
import { IoMdClose } from "react-icons/io";

const ModalForm = ({ setModal }) => {
  const captch = useRef();
  const [CaptchValue, setCaptchaValue] = useState("");
  const [error, seterror] = useState({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    role: "",
  });
  const [resume, setresume] = useState(null);

  // input Component
  const InputField = (name, type, error) => {
    const placeholder = `${name}`;
    return (
      <div>
        <input
          required
          type={type}
          value={contact[`${name.toLowerCase()}`]}
          name={name.toLowerCase()}
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value })
          }
          className=" border-b-2 outline-none w-full border-slate-300 px-2 py-2"
          placeholder={
            name === "Resume" ? "Enter your LinkedIn Link" : placeholder
          }
        />
        {error ? <div className="text-red-500 text-xs ">{error}</div> : ""}
      </div>
    );
  };

  // function to send email for job applications
  const { mutate, isPending } = useMutation({
    mutationFn: (form) => careerEmail(form),
    onSuccess: (res) => {
      toast.success(res);
      setContact({
        name: "",
        email: "",
        number: "",
        role: "",
      });
      setresume(null);
      seterror({});
      captch.current.reset();

      setTimeout(() => {
        setModal(false);
      }, 2 * 1000);
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  // handle submit for job application
  const handleSendapplication = async (e) => {
    const { name, email, number, role } = contact;
    e.preventDefault();
    try {
      await JobScheama.validate(contact, { abortEarly: false });
      const form = useCareerForm(name, email, number, role, resume);
      if (!CaptchValue) {
        toast.error("Please fill the captcha");
        return; // Do not continue if captcha is empty
      }
      if (!resume) {
        toast.error("Please upload resume");
        return; // Do not continue if captcha is empty
      }
      mutate(form);
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
      <div className="fixed z-20 px-2  inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm bg-black">
        <div className="py-8 px-4 relative md:top-[30px] top-[50px] bg-white  shadow-[0px_0px_10px] shadow-slate-500 text-black rounded-xl">
          {/* Close Button */}
          <span
            onClick={() => setModal(false)}
            className="absolute right-4 top-2 font-extrabold text-2xl text-blue-800 py-2 hover:bg-slate-200 px-4 hover:cursor-pointer rounded-[5px]"
          >
            <IoMdClose />
          </span>

          <form
            className=" flex flex-col gap-4 lg:w-[320px] w-[300px]"
            onSubmit={(e) => handleSendapplication(e)}
          >
            <h2 className="text-center text-lg md:text-2xl text-blue-600 font-headingFont font-bold">
              Application Form
            </h2>

            <div className="flex gap-3  justify-center items-center flex-wrap md:flex-nowrap">
              {/* First Form Field*/}
              <label htmlFor="name" className="text-right">
                Name
              </label>
              {InputField("Jhon Decos", "text", error.name)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              {/* Second Form Field */}
              <label htmlFor="name" className="text-right">
                E-mail
              </label>
              {InputField("jhon@gmail.com", "email", error.email)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              {/* Third Form Field */}
              <label htmlFor="name" className="text-right">
                Phone
              </label>
              {InputField("Phone No", "text", error.number)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              {/* Role Field */}
              <label htmlFor="name" className="text-right">
                Job Role
              </label>
              {InputField("Designation", "text", error.role)}
            </div>

            <div className="grid w-full max-w-xs items-center justify-center  gap-1.5">
              <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Resume
              </label>
              <input
                id="picture"
                type="file"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              />
            </div>
            <ReCAPTCHA
              className="flex justify-center"
              ref={captch}
              sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
              onChange={(value) => setCaptchaValue(value)}
            />
            <div type="submit" className="flex justify-center items-center">
              <button className="bg-blue-600  py-2 px-4 font-headingFont font-bold text-white rounded-xl hover:bg-blue-700 transition-all duration-300 ease-linear">
                {isPending ? "sending..." : "Apply"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
