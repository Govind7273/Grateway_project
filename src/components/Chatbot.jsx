import { useEffect } from "react";
import toast from "react-hot-toast";

const Chatbot = () => {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.botpressWebChat.init({
          composerPlaceholder: "Chat with us",
          botConversationDescription: "Welcome!",
          botId: import.meta.env.VITE_BOT_ID,
          hostUrl: import.meta.env.VITE_HOST_URL,
          messagingUrl: import.meta.env.VITE_MESSAGING_URL,
          clientId: import.meta.env.VITE_CLIENT_ID,
          webhookId: import.meta.env.VITE_WEBHOOK_ID,
          lazySocket: true,
          themeName: import.meta.env.VITE_THEME,
          botName: import.meta.env.VITE_BOT_NAME,
          emailAddress: import.meta.env.VITE_EMAIL_ADDRESS,
          website: import.meta.env.VITE_WEBSITE,
          stylesheet: import.meta.env.VITE_STYLESHEET,
          frontendVersion: "v1",
          useSessionStorage: true,
          enableConversationDeletion: true,
          themeColor: import.meta.env.VITE_THEME_COLOR,
        });
      };
    } catch (error) {
      toast.error("something went wrong");
    }
  }, []);

  return;
};

export default Chatbot;
