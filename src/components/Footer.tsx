import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Am Aha Kitchen" className="h-16 mb-4" />
            <p className="text-muted-foreground max-w-md mb-6">
              Experience the authentic flavors of Telugu cuisine at Hyderabad's premier destination for traditional South Indian dining.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/amahakitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-copper transition-colors group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://facebook.com/amahakitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-copper transition-colors group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Menu", href: "#menu" },
                { name: "Ambience", href: "#ambience" },
                { name: "Reservations", href: "#reserve" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-copper transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  4th Floor, Inorbit Mall<br />
                  Madhapur, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-copper flex-shrink-0" />
                <a href="tel:+919426566789" className="text-muted-foreground hover:text-copper text-sm">
                  +91 94265 66789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-copper flex-shrink-0" />
                <span className="text-muted-foreground text-sm">12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Am Aha Kitchen and Bar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Telugu Kitchen and Bar • Inorbit Mall, Madhapur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
