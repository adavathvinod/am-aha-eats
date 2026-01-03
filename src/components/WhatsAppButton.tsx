import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919426566789";
  const message = encodeURIComponent(
    "Hi! I would like to make a reservation at Am Aha Kitchen & Bar."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-sm text-foreground font-medium">Chat with us!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-card border-r border-t border-border rotate-45" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
