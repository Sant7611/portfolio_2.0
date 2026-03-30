import React from "react";
// import {Hero} from "@/section/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience />
        <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
