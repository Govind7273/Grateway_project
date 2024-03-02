import * as Yup from "yup"

const JobScheama = Yup.object({
  name: Yup.string().required("Name is required").min(5,"name must be at least 5 characters long"),
  email: Yup.string().email("Invalid Email Adreess").required("Email is required"),
  phone: Yup.string().matches(/^[0-9]\d{9}$/, "Must be a 10-digit phone number").required("Phone is required"),
  role: Yup.string().required("Role is required").min(5,"Role must be at least 5 characters long"),
  resume: Yup.string().required("Resume is required"),
})

export { JobScheama }