import emailjs from "@emailjs/browser";
// sending reponce of emial call
const SendEmail = async ({ serviceId, templateId, form, publicId }) => {
    try {
        const responce = await emailjs.sendForm(serviceId, templateId, form, {
            publicKey: publicId,
        });
        return responce;
    } catch (error) {
        return error;
    }
};

export { SendEmail };
