import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  // { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 ${isScrolled ? "glass-strong py-3" : " bg-transparent py-5"} z-50 transition-all duration-500 `}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a
        aria-label="Home"
          href="#home"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          SB<span className="text-primary">.</span>
        </a>

        {/* desktop nav  */}
        <div className="glass rounded-full px-2 py-1 hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button  */}
        <div className="hidden md:block">
          <a
            aria-label="Contact me"
            className="relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-3 py-2"
            href="#contact"
            size="sm"
          >
            Contact me
          </a>
        </div>

        {/* {Mobile menu button } */}
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu  */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                aria-label={link.label}
                onClick={() => setIsMobileMenuOpen(false)}
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button
              aria-label="Contact me"
              onClick={() => setIsMobileMenuOpen(false)}
              size="sm"
            >
              <a href="#contact" aria-label="contactme">
                Contact me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
