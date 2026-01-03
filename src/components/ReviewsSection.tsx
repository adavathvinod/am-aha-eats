import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The Nizami Nalli Gosh Biryani is absolutely divine! Best Telugu food in Hyderabad. The ambience is perfect for family dinners.",
    date: "2 weeks ago",
  },
  {
    name: "Rajesh K.",
    rating: 5,
    text: "Mutton Marag is a must-try! Staff is very courteous and the live charcoal grill section is amazing. Will definitely visit again.",
    date: "1 month ago",
  },
  {
    name: "Ananya M.",
    rating: 5,
    text: "Beautiful interiors, authentic Andhra cuisine. The Konaseema Kodi Vepudu reminded me of my grandmother's cooking. Highly recommended!",
    date: "3 weeks ago",
  },
  {
    name: "Vikram R.",
    rating: 5,
    text: "Great bar selection and the seafood is incredibly fresh. The Apollo Fish is crispy perfection. Love the Inorbit Mall location!",
    date: "1 week ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-copper uppercase tracking-widest text-sm font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
            Loved by <span className="text-gradient-copper">2,600+ Guests</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.7</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-copper/50 transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-copper/30 mb-4" />
              <p className="text-foreground/90 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Am+Aha+Kitchen+and+Bar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-copper hover:text-copper-light transition-colors font-medium"
          >
            See all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
