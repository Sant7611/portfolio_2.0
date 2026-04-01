import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fuga accusantium quo? Adipisci, beatae. Quod?",
    author: "John Doe",
    role: "CTO, tech company",
    avatar: "https://images.unspalsh.com/",
  },
  {
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fuga accusantium quo? Adipisci, beatae. Quod?",
    author: "hi Doe",
    role: "CTO, tech company",
    avatar: "https://images.unspalsh.com/",
  },
  {
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fuga accusantium quo? Adipisci, beatae. Quod?",
    author: "fello Doe",
    role: "CTO, tech company",
    avatar: "https://images.unspalsh.com/",
  },
  {
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fuga accusantium quo? Adipisci, beatae. Quod?",
    author: "hello Doe",
    role: "CTO, tech company",
    avatar: "https://images.unspalsh.com/",
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length ) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container px-6 mx-auto relative z-10">
        {/* Section header  */}
        <div className="max-w-3xl mb-16 text-center mx-auto ">
          <span className="text-secondary-foreground text-sm   font-medium tracking-wider animate-fade-in uppercase">
            What people say
          </span>
          <h2 className="text-4xl md:text-5xl animate-fade-in mt-4 mb-6 font-bold text-primary">
            Kind words from{" "}
            <span className="font-serif text-white italic font-normal">
              amazing people.
            </span>
          </h2>
        </div>

        {/* testimonials carousel  */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* maintestimonial  */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 ">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20 "
                />
                <div className="flex items-center gap-4">
                  <div className="font-semibold">
                    {" "}
                    {testimonials[activeIdx].author}{" "}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {" "}
                    {testimonials[activeIdx].role}{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* testimonial navigation  */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button aria-label="left scroll" className="p-3 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all " onClick={previous} >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button aria-label={`scroll to testimonial ${idx + 1}`}
                    key={idx}
                    onClick={()=>setActiveIdx(idx)}
                    className={`w-2 rounded-full h-2 translate-all duration-300 ${idx === activeIdx ? "w-8 bg-primary " : "bg-muted-foreground/30 hover:bg-muted-foreground/50 "} `}
                  />
                ))}
              </div>
              <button aria-label="right scroll" className="p-3 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
