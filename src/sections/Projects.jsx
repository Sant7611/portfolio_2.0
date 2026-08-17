import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Student Guidance System",
    description:
      "A full-stack career guidance platform for students pursuing programming and computer-related careers. It provides skill-based assessments, personalized career recommendations, learning paths, counseling, mentorship, real-time notifications, and role-based management for students, counselors, mentors, and administrators.",
    image: "/projects/StudentGuidanceSystem.webp",
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "Redis",
      "WebSocket",
    ],
    Link: "https://student-guidance-system-frontend.onrender.com/login",
    github: "https://github.com/Sant7611/Student-Guidance-System",
  },
  {
    title: "tfacts Blog Platform",
    description:
      "This is a full-stack blogging platform where users can create, explore, save, and discuss fact-based articles. It includes JWT authentication, post moderation, threaded comments, real-time notifications, user management, search, image uploads, and a Django admin backend.",
    image: "/projects/tfacts.webp",
    tags: [
      "Django",
      "Django REST Framework",
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker",
      "Cloudinary",
    ],
    Link: "#",
    github: "https://github.com/Sant7611/blog_project",
  },
];

const Projects = () => (
  <section className=" pb-10  relative overflow-hidden" id="projects">
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl " />
    <div className="absolute bottom-1/4 left-0 bg-highlight/5   rounded-full blur-3xl " />

    <div className="container mx-auto px-6 relative z-10 ">
      {/* section header  */}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className=" text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Problems Solved.
          <span className="font-serif italic font-normal text-white">
            {" "}
            Products Delivered
          </span>
        </h2>
      </div>

      {/* project grid  */}
      <div className="grid md:grid-cols-2 gap-8 ">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
          >
            {/* image */}
            <div className="relative overflow-hidden group aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60 " />
              {/* overlay links  */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  aria-label={project.title}
                  href={project.Link}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300 "
                >
                  <ArrowUpRight />
                </a>
                <a
                  href={project.github}
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* contents  */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-muted-foreground text-sm text-justify">
                {project.description}{" "}
              </p>
              <div className="flex flex-wrap gap-2">
                {" "}
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* view all cta */}
      {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View all Projects
          <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
      </div> */}
    </div>
  </section>
);

export default Projects;
