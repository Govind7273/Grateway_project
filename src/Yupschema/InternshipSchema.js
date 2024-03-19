import * as Yup from "yup"

const IntershipScheama = Yup.object({
    name: Yup.string().required("Name is required").min(5,"name must be at least 5 characters long"),
    email: Yup.string().email("Invalid Email Adreess").required("Email is required"),
    number: Yup.string().matches(/^[0-9]\d{9}$/, "Must be a 10-digit phone number").required("Phone is required"),
    role: Yup.string().required("Domain is required"),
  })
  
  export {IntershipScheama}