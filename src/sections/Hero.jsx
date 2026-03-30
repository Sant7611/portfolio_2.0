import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const skills = ["React", "Next.js", "TypeScript", "Git"];

const Hero = () => {
  return (
    <section id="home" className="container relative min-h-screen flex items-center overflow-hidden ">
      {/* bg  */}

      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background  "></div>
      </div>

      {/* Green dots  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite `,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {" "}
          </div>
        ))}
      </div>
      {/* Content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column -text content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer
              </span>
            </div>

            {/* headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Welcome I'm{" "}
                <span className="text-primary glow-text ">Santosh Bohara</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                — an aspiring frontend developer focused on React, Next.js, and
                TypeScript. I enjoy building clean, responsive, and
                user-friendly web interfaces while continuously improving my
                skills in modern web development.
              </p>
            </div>

            {/* CTA  */}
            <div className="flex flex-wrap animate-fade-in animation-delay-300 gap-4">
              
               <a href="#contact" className="relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex justify-center items-center px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Contact Me <ArrowRight className="w-5 h-5" /></a>  
              
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />

                <button
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag("event", "download_cv", {
                        event_category: "Button",
                        event_label: "Download CV",
                      });
                    }
                    // Open the CV in a new tab
                    window.open("/santosh_Bohara_CV.pdf", "_blank");
                  }}
                >
                  Download CV
                </button>
              </AnimatedBorderButton>
            </div>

            {/* Social liniks  */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                { icon: Github, href: "https://github.com/Sant7611" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/santosh-bohara-04484624b/" },
                { icon: Instagram, href: "https://www.instagram.com/_santosh100/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - profile image  */}

          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image  */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpg"
                  alt="Santosh Bohara"
                  className="w-full aspect-4/5 object-cover rounded-2xl "
                />

                {/* floating badge  */}
                <div className="absolute -botom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full animate-pulse bg-primary "></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* stats badge  */}
                {/* <div className="absolute -top-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* skills section  */}
        <div className="mt-20 animate-fade-in animation-delay-600 ">
          <p className="text-md text-primary/60 mb-6 text-center">
            Technologies that I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills, ...skills].map((skill, idx) => (
                <div className="flex-shrink-0 px-8 py-4" key={idx}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
              ``
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
