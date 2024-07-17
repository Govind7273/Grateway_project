import { useRef, useState } from "react";
import { InternshipSchema } from "../../Yupschema/InternshipSchema";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { careerEmail } from "../../functions/EmailSendFunction";
import { useCareerForm } from "../../utils/useCareerForm";

// Added selectedTitle prop
const Modal = ({ setModalOpen, selectedTitle }) => {
  const captch = useRef();
  const [CaptchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState({});
  const [Candidate, setCandidate] = useState({
    name: "",
    email: "",
    number: "",
    role: selectedTitle || "",
  });
  const [resume, setResume] = useState(null);

  const validateField = async (name, value) => {
    if (value === "") {
      setError((prevError) => ({ ...prevError, [name]: "" }));
      return;
    }
    try {
      await InternshipSchema.validateAt(name, { ...Candidate, [name]: value });
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
      setCandidate({ ...Candidate, [name]: value });
      await validateField(name, value);
    };

    return (
      <div className="w-full mb-4">
        <input
          type={type}
          value={Candidate[name]}
          name={name}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-xl w-full py-2 px-2 focus:border-blue-500 focus:outline-none transition duration-200"
          placeholder={label}
          maxLength={type === "number" ? 10 : undefined}
        />
        {Candidate[name] && error && <div className="text-red-500 text-xs mt-1">{error}</div>}
      </div>
    );
  };

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
      setResume(null);
      setError({});
      captch.current.reset();

      setTimeout(() => {
        setModalOpen(false);
      }, 2000);
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  const handleSendApplication = async (e) => {
    const { name, email, number, role } = Candidate;
    e.preventDefault();
    try {
      await InternshipSchema.validate(Candidate, { abortEarly: false });
      const form = useCareerForm(name, email, number, role, resume);
      if (!CaptchaValue) {
        toast.error("Please fill the captcha");
        return;
      }
      if (!resume) {
        toast.error("Please upload resume");
        return;
      }
      sendForm(form);
    } catch (validationError) {
      toast.error("Please check the form data");
      const newError = {};
      validationError.inner.forEach((err) => {
        newError[err.path.toLowerCase()] = err.message;
      });
      setError(newError);
    }
  };

  return (
    <>
      <Toaster />
      <main className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm p-4">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-4">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSendApplication}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-blue-600 font-bold">Internship Application</h2>
              <span
                onClick={() => setModalOpen(false)}
                className="text-xl font-bold cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 rounded-full p-2"
              >
                &#9747;
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {InputField("Full Name", "name", "text", error.name)}
              {InputField("Email", "email", "email", error.email)}
              {InputField("Mobile number", "number", "number", error.number)}
              <div className="w-full mb-4">
              <input
                type="text"
                value={Candidate.role}
                name="role"
                readOnly
                className="border-2 border-gray-300 bg-slate-100 rounded-xl py-2 w-full px-2 focus:outline-none transition duration-200"
              />
              </div>
            </div>
           

            <div className="w-full mb-4">
              <label className="text-sm block font-bold">Upload Resume</label>
              <input
                id="resume"
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                className="border-2 border-gray-300 rounded-xl w-full py-3 px-4 focus:border-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="w-full mb-4 flex justify-center">
              <ReCAPTCHA
                ref={captch}
                sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="rounded-xl items-start w-fit bg-cyan-300 px-3 py-1 md:px-4 md:py-2 border border-[#4c9ddc] font-bold text-slate-800 hover:bg-white hover:text-cyan-700 transition-all 0.2 ease-out capitalize"
              >
                {isPending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Modal;
