import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-copper uppercase tracking-widest text-sm font-medium">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
            Visit <span className="text-gradient-copper">Am Aha</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located at the heart of Madhapur's premium shopping destination
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.348!2d78.3902!3d17.4356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzA4LjIiTiA3OMKwMjMnMjQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Am Aha Kitchen Location"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-copper/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-copper flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    4th Floor, Inorbit Mall<br />
                    Madhapur, Hyderabad<br />
                    Telangana 500081
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//Inorbit+Mall+Madhapur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-copper hover:text-copper-light mt-3 font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-copper/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-emerald flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-foreground mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    <span className="block">Monday - Sunday</span>
                    <span className="text-foreground font-medium">12:00 PM - 11:00 PM</span>
                  </p>
                  <p className="text-sm text-copper mt-2">Open all days of the week</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-copper/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-copper flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif text-foreground mb-1">Contact</h3>
                  <a
                    href="tel:+919426566789"
                    className="text-foreground hover:text-copper transition-colors font-medium block"
                  >
                    +91 94265 66789
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">For reservations & inquiries</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919426566789?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20party%20bookings%20at%20Am%20Aha%20Kitchen%20%26%20Bar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Bulk Parties
                </Button>
              </a>
              <a href="tel:+919426566789" className="flex-1">
                <Button variant="outline" className="w-full border-copper text-copper hover:bg-copper/10 gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
