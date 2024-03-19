import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { JobScheama } from "../../Yupschema/JobApplicationScheama";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";

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
    const placeholder = `Enter Your ${name}`;
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
          className="border outline-none w-full border-slate-300 rounded-[6px] mb-2 px-2 py-2"
          placeholder={
            name === "Resume" ? "Enter your LinkedIn Link" : placeholder
          }
        />
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
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
      <div className="fixed inset-0 p-4 flex justify-center items-center bg-opacity-30 backdrop-blur-sm">
        <div className="p-8 relative bg-white bg-transparent shadow-[0px_0px_10px] shadow-slate-500 text-black rounded-xl">
          {/* Close Button */}
          <span
            onClick={() => setModal(false)}
            className="absolute right-4 top-2 font-extrabold text-2xl text-red-600 bg-slate-200 px-2 hover:cursor-pointer rounded-[5px]"
          >
            &#9747;
          </span>

          <form
            className="flex flex-col gap-4 "
            onSubmit={(e) => handleSendapplication(e)}
          >
            <h2 className="text-center text-2xl text-blue-600 font-headingFont font-bold">
              Application Form
            </h2>

            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              {/* First Form Field*/}
              {InputField("Name", "text", error.name)}

              {/* Second Form Field */}
              {InputField("Email", "email", error.email)}
            </div>

            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              {/* Third Form Field */}
              {InputField("number", "text", error.number)}

              {/* Role Field */}
              {InputField("Role", "text", error.role)}
            </div>

            <div className="flex gap-3 flex-wrap md:flex-nowrap md:item-center md:justify-center">
              <label htmlFor="file">Upload Resume</label>
              <input
                id="file"
                type="file"
                name="resume"
                onChange={(e) => setresume(e.target.files[0])}
              />
            </div>
            <ReCAPTCHA
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
