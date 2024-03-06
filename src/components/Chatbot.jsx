import { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "chat with our Team",
        "botConversationDescription": "Welcome to GreateWay Software",
        "botId": "96e1c9fc-15f5-400a-81ca-2bcfc1684fce",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "96e1c9fc-15f5-400a-81ca-2bcfc1684fce",
        "webhookId": "49718e3d-992d-49b8-a896-5d176d561456",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Service Support",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/77ce0339-a2b5-4855-bac4-6ed0a4acb740/v49357/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot;