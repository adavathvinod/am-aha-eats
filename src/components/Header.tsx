import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Ambience", href: "#ambience" },
    { name: "Reserve", href: "#reserve" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Am Aha Kitchen" className="h-12 md:h-14 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover-underline text-foreground/90 hover:text-foreground transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919426566789"
            className="flex items-center gap-2 text-copper hover:text-copper-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">094265 66789</span>
          </a>
          <Button
            onClick={() => scrollToSection("#reserve")}
            className="bg-gradient-copper hover:opacity-90 text-primary-foreground shadow-copper"
          >
            Book a Table
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-lg p-6 animate-scale-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-foreground/90 hover:text-copper transition-colors font-medium py-2"
              >
                {link.name}
              </button>
            ))}
            <hr className="border-border my-2" />
            <a
              href="tel:+919426566789"
              className="flex items-center gap-2 text-copper py-2"
            >
              <Phone className="w-4 h-4" />
              <span>094265 66789</span>
            </a>
            <Button
              onClick={() => scrollToSection("#reserve")}
              className="bg-gradient-copper mt-2"
            >
              Book a Table
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
