import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import Button from "@/components/Button";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      console.log(serviceId, templateId, publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJs configuration is missing please check your env file.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className=" py-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 " />

      <div className="mb-16 max-w-3xl text-center mx-auto ">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Get in touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Let's Ship, {" "}
          <span className="font-serif italic font-normal text-white">
            {" "}
            Something Awesome.
          </span>
        </h2>
        
      </div>
      <div className="gap-12 max-w-5xl mx-auto">
        <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all "
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all "
                type="email"
                required
                placeholder="Your@mail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                type="text"
                required
                placeholder="Your Message"
              />
            </div>
            <Button
              className="w-full  "
              type="submit"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Sending....</>
              ) : (
                <>
                  Send Message <Send className="h-5 w-5" />
                </>
              )}
            </Button>
            {submitStatus.type && (
              <div className={`flex items-center gap-3 p-4 rounded-xl ${
                submitStatus.type === 'success' ?
                "bg-green-500/10 border border-green-500/20 text-green-700 "
                : "bg-red-500/10 border border-red-500/20 text-red-700 "
              } `} >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0" />
                ): (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <p> {submitStatus.message} </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
