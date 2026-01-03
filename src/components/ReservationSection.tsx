import { useState } from "react";
import { Calendar, Clock, Users, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReservationSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `🍽️ Table Reservation Request\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Guests: ${formData.guests}\n` +
      `${formData.occasion ? `Occasion: ${formData.occasion}` : ''}\n\n` +
      `Please confirm my reservation at Am Aha Kitchen & Bar.`
    );
    return `https://wa.me/919426566789?text=${message}`;
  };

  const isStepValid = () => {
    if (step === 1) return formData.name && formData.phone;
    if (step === 2) return formData.date && formData.time && formData.guests;
    return true;
  };

  const nextStep = () => {
    if (isStepValid() && step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section id="reserve" className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-copper uppercase tracking-widest text-sm font-medium">Reservations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-3 mb-4">
            Book Your <span className="text-gradient-copper">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Secure your table in just 3 simple steps. For group bookings or special events, contact us directly.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                    step >= s
                      ? "bg-gradient-copper text-primary-foreground shadow-copper"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 mx-2 rounded-full transition-all ${
                      step > s ? "bg-gradient-copper" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-serif text-foreground mb-6">Your Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your name"
                      className="mt-2 bg-muted border-border focus:border-copper"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="pl-10 bg-muted border-border focus:border-copper"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Reservation Details */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-serif text-foreground mb-6">Reservation Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-foreground">Date</Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="pl-10 bg-muted border-border focus:border-copper"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-foreground">Time</Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="mt-2 bg-muted border-border">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"].map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-foreground">Number of Guests</Label>
                    <Select onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="mt-2 bg-muted border-border">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+ (Contact us)"].map((num) => (
                          <SelectItem key={num} value={String(num)}>{num} {typeof num === "number" && num === 1 ? "Guest" : typeof num === "number" ? "Guests" : ""}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="occasion" className="text-foreground">Occasion (Optional)</Label>
                    <Select onValueChange={(value) => handleInputChange("occasion", value)}>
                      <SelectTrigger className="mt-2 bg-muted border-border">
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Birthday", "Anniversary", "Business Dinner", "Date Night", "Family Gathering", "Other"].map((occ) => (
                          <SelectItem key={occ} value={occ}>{occ}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-copper flex items-center justify-center shadow-copper">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif text-foreground">Confirm Your Reservation</h3>
                <div className="bg-muted rounded-lg p-4 text-left space-y-2">
                  <p className="text-sm"><span className="text-muted-foreground">Name:</span> <span className="text-foreground">{formData.name}</span></p>
                  <p className="text-sm"><span className="text-muted-foreground">Phone:</span> <span className="text-foreground">{formData.phone}</span></p>
                  <p className="text-sm"><span className="text-muted-foreground">Date:</span> <span className="text-foreground">{formData.date}</span></p>
                  <p className="text-sm"><span className="text-muted-foreground">Time:</span> <span className="text-foreground">{formData.time}</span></p>
                  <p className="text-sm"><span className="text-muted-foreground">Guests:</span> <span className="text-foreground">{formData.guests}</span></p>
                  {formData.occasion && (
                    <p className="text-sm"><span className="text-muted-foreground">Occasion:</span> <span className="text-foreground">{formData.occasion}</span></p>
                  )}
                </div>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Confirm via WhatsApp
                </a>
                <p className="text-sm text-muted-foreground">
                  Or call us at <a href="tel:+919426566789" className="text-copper hover:underline">094265 66789</a>
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 3 && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="border-border"
                >
                  Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-gradient-copper hover:opacity-90 shadow-copper"
                >
                  {step === 2 ? "Review Booking" : "Continue"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
