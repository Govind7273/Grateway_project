import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Chatbot = () => {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.botpressWebChat.init({
          "composerPlaceholder": "Chat with us",
          "botConversationDescription": "Welcome!!!",
          "botId": "26981c37-eab8-4c0e-9b87-d6bbc92b2a96",
          "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "26981c37-eab8-4c0e-9b87-d6bbc92b2a96",
          "webhookId": "0c1f20bd-876e-48d7-9f2a-57d05e08ce62",
          "lazySocket": true,
          "themeName": "prism",
          "botName": "Greateway Software!!",
          "emailAddress": "hr@greateway.com",
          "website": "https://greateway.com/",
          "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/15c02bf6-9818-465f-b9ac-925ed4416e0b/v44405/style.css",
          "frontendVersion": "v1",
          "useSessionStorage": true,
          "enableConversationDeletion": true,
          "theme": "prism",
          "themeColor": "#2563eb"
        });
      };
    } catch (error) {
      toast.error("something went wrong");
    }
  }, []);

  return;
  <>
    <Toaster />
    <div id="webchat" />;
  </>;
};

export default Chatbot;
