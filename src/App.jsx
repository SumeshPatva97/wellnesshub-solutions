import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./CSS/Custom.css";
import JsonData from "./data/data.json";

import Loading from "./components/Loading";

// Lazy-loaded components
const Navigation = lazy(() => import("./components/navigation"));
const NavigationOther = lazy(() => import("./components/navigationOther"));
const Header = lazy(() => import("./components/header"));
const Goals = lazy(() => import("./components/goals"));
const About = lazy(() => import("./components/about"));
const Services = lazy(() => import("./components/services"));
const Team = lazy(() => import("./components/Team"));
const Contact = lazy(() => import("./components/contact"));
const PatientsCount = lazy(() => import("./components/patientsCount"));
const Ordermedicine = lazy(() => import("./components/Forms/Ordermedicine"));
const ImageCard = lazy(() => import("./components/ImageCard"));
const Carousel = lazy(() => import("./components/Carousel"));
const Qna = lazy(() => import("./components/QNA"));
const OnlinePsychologicalCounselling = lazy(() =>
  import("./components/OnlinePsychologicalCounselling")
);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    try {
      setLandingPageData(JsonData);
    } catch (error) {
      console.error("Error loading JSON data:", error);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                {/* <Goals data={landingPageData.Goals} /> */}
                <ImageCard />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Ordermedicine />
                <PatientsCount /> 
                <Qna/>
                <Team data={landingPageData.Team} />
                <Contact data={landingPageData.Contact} />
              </>
            }
          />
          <Route
            path="/Online-Psychological-Counselling"
            element={
              <>
                <NavigationOther />
                <Carousel />
                <OnlinePsychologicalCounselling />
                <Contact data={landingPageData.Contact} />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
