import React, { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";

const About = lazy(() => import("./sections/About"));
const Experience = lazy(()=> import("./sections/Experience"))
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./layout/Footer"));

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[30vh]" aria-hidden="true" />}>
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
