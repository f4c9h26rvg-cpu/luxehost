"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "447700900000"; // Substitua pelo seu número com código do país

  return (
    <a
      href={`https://wa.me/${phone}?text=Hi!%20I'd%20like%20a%20quote%20for%20Airbnb%20cleaning.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}