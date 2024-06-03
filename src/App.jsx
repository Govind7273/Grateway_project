import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import LandingPageLayout from "./LandingPageLayout";
import Home from "./components/Home/Home";
import {
  CRMServices,
  TestingAndQAServices,
} from "./components/Services/ServiceData/SecondDevServices";
import Meta_Data from "./functions/Seo_Meta";

const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const CareersPage = lazy(() => import("./components/Careers/CareersPage"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Indrustry = lazy(() => import("./components/Indrustry/Industry"));
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

import ScrollToTop from "./ScrollToTop";
import { Loading } from "./components/Loading";
import {
  CloudServices,
  DevOpsServices,
  SoftDevServices,
  WebDevServices,
} from "./components/Services/ServiceData/SoftDevServices";
import GenerativeAIDescriptive from "./components/Services/SubComponents/GenerativeAIDescriptive";
import DataAnalyticsDescriptive from "./components/Services/SubComponents/DataAnalyticsDescriptive";
import LandingPage from "./components/Landingpage/LandingPage";
const Intership = lazy(() => import("./components/Internship/Internship"));
const InternshipDetails = lazy(() =>
  import("./components/Internship/InternshipDetails")
);

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/landingpage";

  return (
    <>
      {!isLandingPage && <Navbar />}
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
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
            path="/GenerativeAi"
            element={<GenerativeAIDescriptive />}
          ></Route>
          <Route
            exact
            path="/DataAnalytics"
            element={<DataAnalyticsDescriptive />}
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
          <Route
            exact
            path="/Internship"
            element={<Intership Meta_Data={Meta_Data.Internship} />}
          ></Route>

          <Route
            exact
            path="/internshipDetails/:id"
            element={<InternshipDetails Meta_Data={Meta_Data.Internship} />}
          ></Route>
          {/* Landing Page Layout Route */}
          {/* <Route path="/landingpage" element={<landingpage />}>
            <Route index element={<Landingpage />} />
          </Route> */}
          <Route exact path="/LandingPage"element={<LandingPage/>}/>
        </Routes>
      </Suspense>
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;
