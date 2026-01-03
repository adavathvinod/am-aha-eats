import { Star, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ambienceBar from "@/assets/ambience-bar.png";
import logoBanner from "@/assets/logo-banner-correct.png";

const Hero = () => {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReserve = () => {
    document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Brighter Overlay */}
      <div className="absolute inset-0">
        <img
          src={ambienceBar}
          alt="Am Aha Kitchen Ambience"
          className="w-full h-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-copper/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-copper/30 rounded-full px-5 py-2.5 mb-8 animate-fade-in shadow-lg">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="text-sm font-semibold text-foreground">4.7 Stars • 2,600+ Google Reviews</span>
          </div>

          {/* Logo Banner */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={logoBanner} 
              alt="Am Aha - Telugu Kitchen and Bar" 
              className="h-28 md:h-36 lg:h-44 mx-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground font-light mb-8 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
            Authentic Telugu Cuisine • Premium Dining Experience
          </p>

          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-copper" />
              <span className="text-foreground font-medium">Inorbit Mall, Madhapur</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-copper" />
              <span className="text-foreground font-medium">12:00 PM - 11:00 PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={scrollToReserve}
              className="bg-gradient-copper hover:opacity-90 text-primary-foreground shadow-copper text-lg px-8 py-6"
            >
              Reserve Your Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToMenu}
              className="border-copper text-copper hover:bg-copper hover:text-primary-foreground text-lg px-8 py-6 bg-card/50 backdrop-blur-sm"
            >
              Explore Menu
            </Button>
          </div>

          {/* Signature Dishes Preview */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-copper text-sm font-semibold mb-4 tracking-wider">SIGNATURE DISHES</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Mutton Marag", "Konaseema Kodi Vepudu", "Nizami Nalli Gosh Biryani", "Apollo Fish"].map((dish) => (
                <span
                  key={dish}
                  className="px-4 py-2 rounded-full bg-card/70 backdrop-blur-sm border border-copper/40 text-foreground text-sm font-medium hover:border-copper hover:bg-copper/20 transition-all cursor-default shadow-md"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-copper" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
