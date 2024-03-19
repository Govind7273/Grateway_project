import axios from "axios";
// sending reponce of emial call
const careerEmail = async (form) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_HOST}/api/v1/mail/sendmailwithattachment`,
      form
    );
    return response?.data?.message;
  } catch (error) {
    throw error?.response?.data?.message;
  }
};

const contactEmail = async (form) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_HOST}/api/v1/mail/sendmailwithoutattachent`,
      form
    );
    return response?.data?.message;
  } catch (error) {
    throw error?.response?.data?.message;
    
  }
};
export { careerEmail, contactEmail };
