import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { SendEmail } from "../../functions/EmailSendFunction";
import { JobScheama } from "../../Yupschema/JobApplicationScheama";
import ReCAPTCHA from "react-google-recaptcha";

const ModalForm = ({ setModal }) => {
  const form = useRef();
  const captch = useRef();
  const [CaptchValue, setCaptchaValue] = useState("");
  const [error, seterror] = useState({});
  const [contact, setContact] = useState({
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
      <div>
        <input
          required
          type={type}
          value={contact[`${name.toLowerCase()}`]}
          name={name.toLowerCase()}
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value.trim() })
          }
          className="border outline-none w-full border-slate-300 rounded-[6px] mb-2 px-2 py-2"
          placeholder={placeholder}
        />
        {error ? <div className="text-red-500 text-xs">{error}</div> : ""}
      </div>
    );
  };

  // function to send email for job applications
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      SendEmail({
        serviceId: import.meta.env.VITE_SERVICE_ID,
        templateId: import.meta.env.VITE_CAREER_TEMPLATE_ID,
        form: form.current,
        publicId: import.meta.env.VITE_PUBLIC_ID,
        contact,
      }),
    onSuccess: () => {
      toast.success("Application sent.");
      setContact({
        name: "",
        email: "",
        phone: "",
        role: "",
        resume: "",
      });
      seterror({});
      captch.current.reset();
    },
    onError: () => toast.error("Something went wrong"),
  });

  // handle submit for job application
  const handleSendapplication = async (e) => {
    e.preventDefault();
    try {
      await JobScheama.validate(contact, { abortEarly: false });
      if (!CaptchValue) {
        toast.error("Please fill the captcha");
        return; // Do not continue if captcha is empty
      }
      mutate();
    } catch (validationError) {
      // Display validation error using toast
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
      <div className="fixed inset-0 p-4 flex justify-center items-center bg-opacity-30 backdrop-blur-sm">
        <div className="p-8 relative bg-white bg-transparent shadow-[0px_0px_30px] shadow-green-400 text-black rounded-xl">
          {/* Close Button */}
          <span
            onClick={() => setModal(false)}
            className="absolute right-4 top-2 font-extrabold text-2xl text-red-600 bg-slate-200 px-2 hover:cursor-pointer rounded-[5px]"
          >
            &#9747;
          </span>

          <form
            ref={form}
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
              {InputField("Phone", "text", error.phone)}

              {/* Role Field */}
              {InputField("Role", "text", error.role)}
            </div>

            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              {InputField("Resume", "text", error.resume)}
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
