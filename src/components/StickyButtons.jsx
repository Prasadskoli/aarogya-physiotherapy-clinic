import { Phone, MessageCircle } from "lucide-react";

function StickyButtons() {
  const phoneNumber = "8625926777";
  const whatsappMessage = "Hello Doctor, I would like to book an appointment.";
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default StickyButtons;