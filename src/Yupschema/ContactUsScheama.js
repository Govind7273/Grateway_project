import * as Yup from "yup"

const ContactScheama = Yup.object({
    name: Yup.string().required("Name is required").min(5, "name must be at least 5 characters"),
    email: Yup.string().email("Invalid Email Adrress").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]\d{9}$/, "Must be a 10-digit phone number").required("Phone is required"),
    subject: Yup.string().required("subject is required").min(5, "subject must be at least 5 characters long"),
    message: Yup.string().required("Message is required").min(10, "message must be at least 10 characters long")

})

export { ContactScheama }