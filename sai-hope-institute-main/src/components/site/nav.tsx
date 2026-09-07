import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Globe, HeartPulse } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/departments", label: "Centres" },
  { to: "/research", label: "Research" },
  { to: "/doctors", label: "Doctors" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

export function TopBar() {
  return (
    <div className="hidden lg:block bg-deep text-white/90 text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+919431021001" className="flex items-center gap-2 hover:text-white"><Phone size={13} className="text-teal" /> +91 94310 21001</a>
          <a href="https://wa.me/919431021001" className="flex items-center gap-2 hover:text-white"><HeartPulse size={13} className="text-teal" /> WhatsApp Care Line</a>
          <span className="flex items-center gap-2"><MapPin size={13} className="text-teal" /> Hajipur, Vaishali, Bihar</span>
          <span className="hidden xl:flex items-center gap-2"><Mail size={13} className="text-teal" /> "Comprehensive, Compassionate Cancer Care for Bihar."</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 hover:text-white"><Globe size={13} /> EN</button>
          <span className="h-3 w-px bg-white/20" />
          <a aria-label="Facebook" href="#" className="hover:text-white"><Facebook size={14} /></a>
          <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram size={14} /></a>
          <a aria-label="YouTube" href="#" className="hover:text-white"><Youtube size={14} /></a>
          <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin size={14} /></a>
        </div>
      </div>
    </div>
  );
}

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "dark" ? "text-deep" : "text-white";
  const sub = variant === "dark" ? "text-subtle" : "text-white/70";
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="relative h-14 w-14 rounded-full bg-white shadow-glow flex items-center justify-center overflow-hidden ring-2 ring-primary/30">
        <img src="/ssims-crest.jpg" alt="SSIMS Hajipur crest" className="h-14 w-14 object-cover" />
      </div>
      <div className="leading-tight">
        <div className={`font-display font-extrabold tracking-tight ${text}`}>SSIMS <span className="text-primary">Hajipur</span></div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${sub}`}>Sri Sai Institute of Medical Sciences</div>
      </div>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className={`transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3 py-2 text-sm font-medium text-deep/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/appointment"
              className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:shadow-[0_25px_65px_-15px_rgba(0,174,239,0.7)] transition-all hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/80 backdrop-blur"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-deep font-medium">
                  {l.label}
                </Link>
              ))}
              <Link to="/appointment" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full gradient-brand px-5 py-3 text-white font-semibold">Book Appointment</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}