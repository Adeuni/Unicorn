"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348144587303";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Adesewa on WhatsApp"
      className="fixed right-4 top-1/2 z-50 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-[#c9a7ff] text-[#19151f] shadow-lg shadow-black/30 transition duration-200 hover:scale-110 hover:bg-[#7654a8] hover:text-white"
    >
      <MessageCircle size={22} />
    </a>
  );
}
