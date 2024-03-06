import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Meta_Data from "./functions/Seo_Meta";

const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const CareersPage = lazy(() => import("./components/Careers/CareersPage"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
import Home from "./components/Home/Home";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Indrustry = lazy(() => import("./components/Indrustry/Indrustry"));
const ServiceComponent = lazy(() =>
  import("./components/Services/ServiceComponent")
);
const ServiceSupport = lazy(() =>
  import("./components/Services/ServiceSupport")
);
const ServicesStaffing = lazy(() =>
  import("./components/Services/ServicesStaffing")
);
const AiAndMLService = lazy(() =>
  import("./components/Services/AiAndMLService")
);
const BigDataService = lazy(() =>
  import("./components/Services/BigDataService")
);
const SecondServiceComponent = lazy(() =>
  import("./components/Services/SecondServiceComponent")
);
import {
  CRMServices,
  TestingAndQAServices,
} from "./components/Services/ServiceData/SecondDevServices";

import { Loading } from "./components/Loading";
import {
  CloudServices,
  DevOpsServices,
  SoftDevServices,
  WebDevServices,
} from "./components/Services/ServiceData/SoftDevServices";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home Meta_Data={Meta_Data.home} />}
          ></Route>
          <Route
            exact
            path="/AboutUs"
            element={<AboutUs Meta_Data={Meta_Data.aboutus} />}
          ></Route>
          <Route
            exact
            path="/ContactUs"
            element={<ContactUs Meta_Data={Meta_Data.contactUs} />}
          ></Route>
          <Route
            exact
            path="/Career"
            element={<CareersPage Meta_Data={Meta_Data.career} />}
          ></Route>

          <Route
            exact
            path="/Indrustry"
            element={<Indrustry Meta_Data={Meta_Data.indrustry} />}
          ></Route>
          <Route
            exact
            path="/Service-softDev"
            element={
              <ServiceComponent
                data={SoftDevServices}
                Meta_Data={Meta_Data.Service_softDev}
              />
            }
          ></Route>
          <Route
            exact
            path="/Service-cloud"
            element={
              <ServiceComponent
                data={CloudServices}
                Meta_Data={Meta_Data.Service_cloud}
              />
            }
          ></Route>
          <Route
            exact
            path="/Service-devOps"
            element={
              <ServiceComponent
                data={DevOpsServices}
                Meta_Data={Meta_Data.Service_devOps}
              />
            }
          ></Route>
          <Route
            exact
            path="/Service-webDev"
            element={
              <ServiceComponent
                data={WebDevServices}
                Meta_Data={Meta_Data.Service_webDev}
              />
            }
          ></Route>

          {/* addition of the another route for the second service section */}
          <Route
            exact
            path="/Service-testingAndQA"
            element={
              <SecondServiceComponent
                data={TestingAndQAServices}
                Meta_Data={Meta_Data.Service_testingAndQA}
              />
            }
          ></Route>

          {/* addition of another route for crm services */}
          <Route
            exact
            path="/Service-crm"
            element={
              <SecondServiceComponent
                data={CRMServices}
                Meta_Data={Meta_Data.Service_crm}
              />
            }
          ></Route>

          {/* big data route */}
          <Route
            exact
            path="/Service-bigData"
            element={<BigDataService Meta_Data={Meta_Data.Service_bigData} />}
          ></Route>

          {/* Ai And Ml route */}
          <Route
            exact
            path="/Service-AI"
            element={<AiAndMLService Meta_Data={Meta_Data.Service_AI} />}
          ></Route>
          <Route
            exact
            path="/Service-Support"
            element={<ServiceSupport Meta_Data={Meta_Data.Service_Support} />}
          ></Route>
          <Route
            exact
            path="/Service-Staffing"
            element={
              <ServicesStaffing Meta_Data={Meta_Data.Service_Staffing} />
            }
          ></Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
