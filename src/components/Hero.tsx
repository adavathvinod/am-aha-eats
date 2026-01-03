import { Star, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ambienceBar from "@/assets/ambience-bar.png";
import logoBanner from "@/assets/logo-banner.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReserve = () => {
    document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={ambienceBar}
          alt="Am Aha Kitchen Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-copper/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-copper rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-cream">4.7 Stars • 2,600+ Google Reviews</span>
          </div>

          {/* Logo Banner */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={logoBanner} 
              alt="Am Aha - Telugu Kitchen and Bar" 
              className="h-32 md:h-44 lg:h-52 mx-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-cream-dark font-light mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Authentic Telugu Cuisine • Premium Dining Experience
          </p>

          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-copper" />
              <span>Inorbit Mall, Madhapur</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-copper" />
              <span>12:00 PM - 11:00 PM</span>
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
              className="border-copper/50 text-copper hover:bg-copper/10 text-lg px-8 py-6"
            >
              Explore Menu
            </Button>
          </div>

          {/* Signature Dishes Preview */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground text-sm mb-4">SIGNATURE DISHES</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Mutton Marag", "Konaseema Kodi Vepudu", "Nizami Nalli Gosh Biryani", "Apollo Fish"].map((dish) => (
                <span
                  key={dish}
                  className="px-4 py-2 rounded-full border border-copper/30 text-cream-dark text-sm hover:border-copper hover:bg-copper/5 transition-all cursor-default"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-copper/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
