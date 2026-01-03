import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ambienceBar from "@/assets/ambience-bar.png";
import ambienceSeating1 from "@/assets/ambience-seating-1.png";
import ambienceSeating2 from "@/assets/ambience-seating-2.png";
import ambienceTree from "@/assets/ambience-tree.png";
import entrance from "@/assets/entrance.png";

const images = [
  { src: ambienceBar, title: "The Bar", description: "Premium spirits & craft cocktails" },
  { src: ambienceTree, title: "Main Dining", description: "Elegant tree-inspired décor" },
  { src: ambienceSeating1, title: "Cozy Corner", description: "Private seating with plants" },
  { src: ambienceSeating2, title: "Traditional Touch", description: "Authentic Telugu artwork" },
  { src: entrance, title: "The Entrance", description: "4th Floor, Inorbit Mall" },
];

const AmbienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="ambience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-copper uppercase tracking-widest text-sm font-medium">The Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
            Where Tradition Meets <span className="text-gradient-copper">Modern Luxury</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into a world of warm wood textures, emerald green accents, and artisanal craftsmanship at our Inorbit Mall location
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            
            {/* Image Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-serif text-foreground mb-1">{images[currentIndex].title}</h3>
              <p className="text-muted-foreground">{images[currentIndex].description}</p>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-copper ring-offset-2 ring-offset-background scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { title: "Outdoor Seating", description: "Enjoy the evening breeze with stunning city views" },
            { title: "Private Dining", description: "Exclusive spaces for special celebrations" },
            { title: "Premium Bar", description: "Curated selection of spirits & craft cocktails" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border hover:border-copper/50 transition-colors"
            >
              <h4 className="text-lg font-serif text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
