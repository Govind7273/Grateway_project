import * as Yup from "yup";

const JobSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters long"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  number: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be a 10-digit phone number")
    .required("Phone is required"),
  role: Yup.string()
    .required("Role is required")
    .min(5, "Role must be at least 5 characters long"),
});

export { JobSchema };
