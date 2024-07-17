import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
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
const Mou = lazy(() => import("./components/Mou/Mou"));
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
const GenerativeAIDescriptive = lazy(() =>
  import("./components/Services/SubComponents/GenerativeAIDescriptive")
);
const DataAnalyticsDescriptive = lazy(() =>
  import("./components/Services/SubComponents/DataAnalyticsDescriptive")
);
const InstitueAcademicServices = lazy(() =>
  import("./components/Services/InstitueAcademicServices")
);
const TrainingProgram = lazy(() =>
  import("./components/CorporateTraining/TrainingProgram/TrainingProgram")
);
const DevelopmentProgram = lazy(() =>
  import("./components/CorporateTraining/DevelopmentProgram/DevelopmentProgram")
);
const EnterpriseServices = lazy(() =>
  import("./components/CorporateTraining/EnterpriseServices/EnterpriseServices")
);
const MicrosoftOffice = lazy(() =>
  import("./components/CorporateTraining/MicrosoftOffice365/MicrosoftOffice")
);
const LandingPage = lazy(() => import("./components/Landingpage/LandingPage"));
const Intership = lazy(() => import("./components/Internship/Internship"));
const InternshipDetails = lazy(() =>
  import("./components/Internship/InternshipDetails")
);

import ScrollToTop from "./ScrollToTop";
import { Loading } from "./components/Loading";
import {
  CloudServices,
  DevOpsServices,
  SoftDevServices,
  WebDevServices,
} from "./components/Services/ServiceData/SoftDevServices";

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/landingpage";

  return (
    <main className="h-screen">
      {!isLandingPage && (
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
      )}
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home Meta_Data={Meta_Data.home} />} />

          <Route
            path="/AboutUs"
            element={<AboutUs Meta_Data={Meta_Data.aboutus} />}
          />
          <Route
            path="/ContactUs"
            element={<ContactUs Meta_Data={Meta_Data.contactUs} />}
          />
          <Route
            path="/Career"
            element={<CareersPage Meta_Data={Meta_Data.career} />}
          />

          <Route
            path="/Indrustry"
            element={<Indrustry Meta_Data={Meta_Data.indrustry} />}
          />

          <Route path="/Mou" element={<Mou Meta_Data={Meta_Data.Mou} />} />
          <Route
            path="/Service-softDev"
            element={
              <ServiceComponent
                data={SoftDevServices}
                Meta_Data={Meta_Data.Service_softDev}
              />
            }
          />
          <Route
            path="/Service-cloud"
            element={
              <ServiceComponent
                data={CloudServices}
                Meta_Data={Meta_Data.Service_cloud}
              />
            }
          />
          <Route
            path="/Service-devOps"
            element={
              <ServiceComponent
                data={DevOpsServices}
                Meta_Data={Meta_Data.Service_devOps}
              />
            }
          />
          <Route
            path="/Service-webDev"
            element={
              <ServiceComponent
                data={WebDevServices}
                Meta_Data={Meta_Data.Service_webDev}
              />
            }
          />

          {/* addition of the another route for the second service section */}
          <Route
            path="/Service-testingAndQA"
            element={
              <SecondServiceComponent
                data={TestingAndQAServices}
                Meta_Data={Meta_Data.Service_testingAndQA}
              />
            }
          />

          {/* addition of another route for crm services */}
          <Route
            path="/Service-crm"
            element={
              <SecondServiceComponent
                data={CRMServices}
                Meta_Data={Meta_Data.Service_crm}
              />
            }
          />

          {/* big data route */}
          <Route
            path="/Service-bigData"
            element={<BigDataService Meta_Data={Meta_Data.Service_bigData} />}
          />

          {/* Ai And Ml route */}
          <Route
            path="/Service-AI"
            element={<AiAndMLService Meta_Data={Meta_Data.Service_AI} />}
          />

          <Route
            path="/institute-academy"
            element={
              <InstitueAcademicServices
                Meta_Data={Meta_Data.institue_academic}
              />
            }
          />
          <Route path="/GenerativeAi" element={<GenerativeAIDescriptive />} />
          <Route path="/DataAnalytics" element={<DataAnalyticsDescriptive />} />
          <Route
            path="/Service-Support"
            element={<ServiceSupport Meta_Data={Meta_Data.Service_Support} />}
          />
          <Route
            path="/Service-Staffing"
            element={
              <ServicesStaffing Meta_Data={Meta_Data.Service_Staffing} />
            }
          />

          {/* All Routes for the corporate training program */}
          <Route
            path="/training-program"
            element={<TrainingProgram Meta_Data={Meta_Data.training_program} />}
          />
          <Route
            path="/management-dev-program"
            element={
              <DevelopmentProgram
                Meta_Data={Meta_Data.management_dev_program}
              />
            }
          />
          <Route
            path="/enterprise-services"
            element={
              <EnterpriseServices Meta_Data={Meta_Data.enterprise_services} />
            }
          />
          <Route
            path="/microsoft-office"
            element={<MicrosoftOffice Meta_Data={Meta_Data.microsoft_office} />}
          />

          {/* End of the corporate training program dropdown  */}
          <Route
            path="/Internship"
            element={<Intership Meta_Data={Meta_Data.Internship} />}
          />

          <Route
            path="/internshipDetails/:id"
            element={<InternshipDetails Meta_Data={Meta_Data.Internship} />}
          />
          {/* Landing Page Layout Route */}
          <Route
            path="/landingpage"
            element={<LandingPage Meta_Data={Meta_Data.landingpage} />}
          />
        </Routes>
      </Suspense>
      {!isLandingPage && (
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      )}
    </main>
  );
}

export default App;
