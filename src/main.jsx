import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App.jsx";
import Chatbot from "./components/Chatbot.jsx";

const queryClient = new QueryClient();

const Root = () => {
//   const location = useLocation();
//   const isLandingPage = location.pathname === "/landingpage";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          {/* <App location={location} /> */}
          <App/>
          <Chatbot/>
          {/* {!isLandingPage && <Chatbot />} */}
        </HelmetProvider>
      </QueryClientProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
