import React from "react";

const experience = [
  {
    period: "2022 - Present",
    role: "Intern",
    company: "TechFits Technology pvt.ltd",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nesciunt.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2016 - 2021",
    role: "Intern",
    company: "TechFits Technology pvt.ltd",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nesciunt.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: false,
  },
  {
    period: "2010 - 2015",
    role: "Intern",
    company: "TechFits Technology pvt.ltd",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, nesciunt.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 " />

      <div className="container mx-auto px-6 relative z-10 ">
        {/* section header  */}
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            odit ipsum inventore ipsa aperiam modi.{" "}
          </p>
        </div>

        {/* timeline  */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* experience items  */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* timeline dot  */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" > 
                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75 " />} 
                </div>
                {/* content  */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500  `} >
                    <span className="text-sm text-primary font-medium" > {exp.period} </span>
                    <h3 className="text-xl font-semibold mt-2" >{exp.role} </h3>
                    <p className="text-muted-foreground" >{exp.company} </p>
                    <p className="text-sm text-muted-foreground mt-4" >{exp.description} </p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx %2 === 0 ? " md:justify-end": ""}`} >
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground" >{tech} </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
