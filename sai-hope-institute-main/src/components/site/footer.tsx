import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Logo } from "./nav";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-deep text-white/80">
      <div aria-hidden className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/70 max-w-sm">
              Sri Sai Institute of Medical Sciences (SSIMS), Hajipur — the dream project of Padma Shri Dr. J.K. Singh. A unit of S.S. Hospital and Research Centre, Patna, operated by the non-profit Buddha Unity Trust.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/departments" className="hover:text-primary">Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-primary">Doctors</Link></li>
              <li><Link to="/research" className="hover:text-primary">Research</Link></li>
              <li><Link to="/community" className="hover:text-primary">Community</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Care</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary">Cancer Care</Link></li>
              <li><Link to="/appointment" className="hover:text-primary">Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-4">Stay in touch</h4>
            <p className="text-sm text-white/70 mb-4">Get updates on health camps, research breakthroughs and patient stories.</p>
            <form className="flex items-center gap-2 rounded-full bg-white/10 p-1.5 backdrop-blur border border-white/10">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none" />
              <button type="submit" className="inline-flex items-center gap-1 rounded-full gradient-brand px-4 py-2 text-sm font-semibold text-white">
                Subscribe <Send size={14} />
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} className="text-teal" /> +91 94310 21001</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-teal" /> care@ssimshajipur.org</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-teal" /> Hajipur, Vaishali, Bihar</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Sri Sai Institute of Medical Sciences (SSIMS), Hajipur. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <span>Ayushman Bharat • CGHS Empanelled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}