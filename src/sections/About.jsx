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
              <p className="text-justify" >
                I am a frontend developer with a passion for bringing ideas to life, delivering fast, beautiful, and intuitive experiences for the web. While my technology stack includes my favorites, React, Next.js, and TypeScript, my passion for delivering code that I know I will appreciate tomorrow is even stronger.
              </p>

              <p className="text-justify">
                While delivering functional code is important, delivering functional and coherent code is even better. While this may sound simple, this is exactly my approach to frontend development. Version control is, for me, my daily documentation.
              </p>

              <p className="text-justify">
               While I spend a lot of time optimizing visuals and dealing with the never-ending world of CSS, I also spend time experimenting with new technologies, honing my problem-solving skills, and striving for that elusive sweet spot where design meets performance. While my goal is to deliver experiences that people actually enjoy, my ultimate goal is to continue to improve and deliver better experiences.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "To develop clean, scalable, and user-friendly web experiences while constantly learning, innovating, and expanding as a frontend developer."
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
