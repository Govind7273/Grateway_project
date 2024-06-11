import * as Yup from "yup"

const ContactScheama = Yup.object({
    name: Yup.string().required("Name is required").min(5, "Name must be at least 5 characters"),
    email: Yup.string().email("Invalid Email Adrress").required("Email is required"),
    number: Yup.string().matches(/^[0-9]\d{9}$/, "Must be a 10-digit phone number").required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required").min(10, "Message must be 10 characters long")

})

export { ContactScheama }