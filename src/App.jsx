import React, { Suspense, lazy } from "react";

/*
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
*/

const Navbar = lazy(() => import("./sections/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
//import LazyComponent from "../components/LazyLoadWrapper";
const LazyComponent = lazy(() => import("./components/LazyLoadWrapper"));
//import ErrorBoundary from "../components/ErrorBoundary";
const ErrorBoundry = lazy(() => import("./components/ErrorBoundary"));

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-700"></div>
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Suspense fallback={<Loader />}>
        {" "}
        {/* Suspense fall back is used to show smothing like buffering or Loading... text while the conetent is loaded in backgroung */}
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <LazyComponent>
            <About />
          </LazyComponent>
        </section>
        <section id="projects">
          <LazyComponent>
            <Projects />
          </LazyComponent>
        </section>
        {/* experience */}
        {/* testimonials */}
        <section id="contact">
          <LazyComponent>
            <ErrorBoundry>
              <Contact />
            </ErrorBoundry>
          </LazyComponent>
        </section>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
