import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AmbienceSection from "@/components/AmbienceSection";
import ReservationSection from "@/components/ReservationSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MenuSection />
      <AmbienceSection />
      <ReviewsSection />
      <WhatsAppButton />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
