import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { JobSchema } from "../../Yupschema/JobApplicationScheama.js";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";
import { IoMdClose } from "react-icons/io";

const ModalForm = ({ setModal }) => {
  const captch = useRef();
  const [CaptchValue, setCaptchaValue] = useState("");
  const [error, setError] = useState({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    role: "",
  });
  const [resume, setResume] = useState(null);

  const InputField = (label, name, type, error) => {
    return (
      <div className="w-full">
        <input
          required
          type={type}
          value={contact[name]}
          name={name}
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value })
          }
          className="border-b-2 outline-none w-full border-slate-300 md:h-10 h-4 pl-2 py-3"
          placeholder={label}
        />
        {error && <div className="text-red-500 text-xs">{error}</div>}
      </div>
    );
  };

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
      setResume(null);
      setError({});
      captch.current.reset();

      setTimeout(() => {
        setModal(false);
      }, 2000);
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  const handleSendApplication = async (e) => {
    const { name, email, number, role } = contact;
    e.preventDefault();
    try {
      await JobSchema.validate(contact, { abortEarly: false });
      const form = useCareerForm(name, email, number, role, resume);
      if (!CaptchValue) {
        toast.error("Please fill the captcha");
        return;
      }
      if (!resume) {
        toast.error("Please upload resume");
        return;
      }
      mutate(form);
    } catch (validationError) {
      toast.error("Please check the form data");
      const newError = {};
      validationError.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
    }
  };

  return (
    <>
      <Toaster />
      <div className="fixed z-40 px-2 inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm bg-black">
        <div className="py-8 px-4 relative md:top-[30px] top-[50px] bg-white shadow-[0px_0px_10px] shadow-slate-500 text-black rounded-xl">
          <span
            onClick={() => setModal(false)}
            className="absolute right-4 top-2 font-extrabold text-2xl text-blue-800 py-2 hover:bg-slate-200 px-4 hover:cursor-pointer rounded-[5px]"
          >
            <IoMdClose />
          </span>

          <form
            className="flex flex-col lg:gap-4 gap-2 lg:w-[350px] w-[300px] px-2"
            onSubmit={handleSendApplication}
          >
            <h2 className="text-center text-lg md:text-2xl text-[#3c4c54] font-headingFont font-bold">
              Application Form
            </h2>

            <div className="flex gap-3 justify-center items-center flex-wrap md:flex-nowrap">
              <label htmlFor="name" className="text-right lg:w-20 h-3">
                Name
              </label>
              {InputField("Jhon Decos", "name", "text", error.name)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              <label htmlFor="email" className="text-right lg:w-20 h-3">
                E-mail
              </label>
              {InputField("jhon@gmail.com", "email", "email", error.email)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              <label htmlFor="number" className="text-right lg:w-20 h-3">
                Phone
              </label>
              {InputField("xxx-xxxx-xxx", "number", "text", error.number)}
            </div>

            <div className="flex justify-center items-center gap-3 flex-wrap md:flex-nowrap">
              <label htmlFor="Designation" className="text-right lg:w-20 h-3">
                Job Role
              </label>
              {InputField("Job Role", "role", "text", error.role)}
            </div>

            <div className="grid w-full max-w-xs items-center justify-center gap-1.5">
              <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Resume
              </label>
              <input
                id="resume"
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              />
            </div>
            <ReCAPTCHA
              className="flex justify-center"
              ref={captch}
              sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
              onChange={(value) => setCaptchaValue(value)}
            />
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-zinc-900 rounded-[7px] tex-white px-5 py-3 font-headingFont text-sm transition-all duration-150 ease-linear hover:bg-zinc-700"
              >
                {isPending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
