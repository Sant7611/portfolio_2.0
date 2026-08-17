import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, maintainable, and well-structured code that is easy to understand and scale.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Focused on building fast, efficient, and optimized web applications for smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Experienced in working within teams using version control and clear communication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously exploring new ideas and modern technologies to create better solutions.",
  },
];

const About = () => {
  return (
    <section className="pb-15 pt-8 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="animate-fade-in text-center p-6 ">
          <span className="text-secondary-foreground  text-sm font-medium tracking-wide uppercase ">
            About Me
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* leftcol */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Still Loading... Just Kidding,
              <span className="font-serif italic font-normal text-white">
                {" "}
                Here I Am
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p className="text-justify">
                I am a backend developer passionate about building reliable,
                secure, and scalable systems that bring ideas to life. My
                primary focus is developing robust APIs, authentication systems,
                database-driven applications, and backend services using
                technologies such as Python, Django, Django REST Framework, and
                PostgreSQL.
              </p>

              <p className="text-justify">
                For me, good backend development is about more than making an
                application work. It is about writing clean, maintainable code,
                designing clear API contracts, protecting user data, and
                creating systems that are easy to extend and maintain. Version
                control and consistent documentation are an important part of my
                everyday development process.
              </p>

              <p className="text-justify">
                I enjoy working with databases, real-time communication,
                caching, background services, Docker, and deployment workflows.
                I continuously experiment with new technologies, improve my
                problem-solving skills, and look for the right balance between
                performance, security, and reliability to build backend systems
                that support meaningful user experiences.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "To develop clean, scalable, and user-friendly web experiences
                while constantly learning, innovating, and expanding as a
                backend developer."
              </p>
            </div>
          </div>

          {/* rightcol highlights */}
          <div className="grid sm:grid-cols-2 gap-6  ">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
