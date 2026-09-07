import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));
      setShow(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-transparent">
        <div className="h-full gradient-brand transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a href="https://wa.me/919999999999" aria-label="WhatsApp" className="group h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow hover:scale-105 transition-transform">
          <MessageCircle size={22} />
        </a>
        <a href="tel:+919999999999" aria-label="Emergency" className="relative h-14 w-14 rounded-full bg-emergency text-white flex items-center justify-center shadow-glow hover:scale-105 transition-transform">
          <span className="absolute inset-0 rounded-full bg-emergency/60 animate-ping" />
          <PhoneCall size={22} className="relative" />
        </a>
        {show && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="h-12 w-12 rounded-full glass text-deep flex items-center justify-center shadow-soft hover:-translate-y-0.5 transition">
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </>
  );
}