import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { JobSchema } from "../../Yupschema/JobApplicationScheama.js";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";
import { IoMdClose } from "react-icons/io";

const ModalForm = ({ setModal, selectedPosition }) => {
  const captch = useRef();
  const [captchaValue, setCaptchaValue] = useState("");
  const [error, setError] = useState({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    role: selectedPosition || "",
  });
  const [resume, setResume] = useState(null);

  const validateField = async (name, value) => {
    try {
      await JobSchema.validateAt(name, { ...contact, [name]: value });
      setError((prevError) => ({ ...prevError, [name]: "" }));
    } catch (validationError) {
      setError((prevError) => ({
        ...prevError,
        [name]: validationError.message,
      }));
    }
  };

  const InputField = (label, name, type, error) => {
    const handleChange = async (e) => {
      const { name, value } = e.target;
      setContact({ ...contact, [name]: value });
      await validateField(name, value);
    };

    return (
      <div className="w-full">
        <input
          type={type}
          value={contact[name]}
          name={name}
          onChange={handleChange}
          className="border-b-2 outline-none w-full border-slate-300 md:h-10 h-4 pl-2 py-3"
          placeholder={label}
          maxLength={type === "number" ? 10 : undefined}
        />
        {error[name] && <div className="text-red-500 text-xs">{error[name]}</div>}
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
        role: selectedPosition,
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
    e.preventDefault();
    const { name, email, number, role } = contact;

    try {
      await JobSchema.validate(contact, { abortEarly: false });
      const form = useCareerForm(name, email, number, role, resume);

      if (!captchaValue) {
        toast.error("Please fill the captcha");
        return;
      }

      if (!resume) {
        toast.error("Please upload resume");
        return;
      }

      mutate(form);
    } catch (validationError) {
      console.log(validationError); // Add this line to log the validation error
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
      <div className="fixed z-50 inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm bg-black">
        <div className="py-4 px-4 relative top-[20px] bg-white shadow-[0px_0px_10px] shadow-slate-500 text-black rounded-xl">
          <span
            onClick={() => setModal(false)}
            className="absolute top-2 right-4 font-extrabold text-2xl text-blue-800 py-2 hover:bg-slate-200 px-4 cursor-pointer rounded-[5px]"
          >
            <IoMdClose />
          </span>

          <form
            className="flex flex-col gap-2 lg:w-[350px] w-[300px] px-2"
            onSubmit={handleSendApplication}
          >
            <h2 className="text-center text-lg md:text-2xl text-[#3c4c54] font-headingFont font-bold">
              Application Form
            </h2>

            <div className="flex flex-col gap-3">
              {InputField("Enter your name", "name", "text", error)}
            </div>

            <div className="flex flex-col gap-3">
              {InputField("Email", "email", "email", error)}
            </div>

            <div className="flex flex-col gap-3">
              {InputField("Mobile number", "number", "number", error)}
            </div>

            <div className="flex flex-col gap-3">
              {InputField("Job Role", "role", "text", error)}
            </div>

            <div className="grid w-full max-w-xs items-center justify-center gap-2">
              <label className="text-sm">Upload Resume</label>
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
                className="text-white bg-zinc-900 rounded-[7px] px-5 py-3 font-headingFont text-sm transition-all duration-150 ease-linear hover:bg-zinc-700"
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
