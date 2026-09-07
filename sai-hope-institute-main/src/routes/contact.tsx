import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SSIMS Hajipur" },
      { name: "description", content: "Reach SSIMS Hajipur — address, phone, email and hours." },
      { property: "og:title", content: "Contact SSIMS" },
      { property: "og:description", content: "We're here 24×7." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We are here for you — 24×7." subtitle="Reach us for appointments, second opinions or emergencies. A real human always picks up." crumbs={[{ label: "Contact" }]} />
      <section className="pt-4 -mt-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[32px] overflow-hidden shadow-glow ring-brand h-72">
            <img src="/ssims/images/sims-hajipur.webp" alt="SSIMS Hajipur campus" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-6">
          {[
            { i: Phone, t: "Call us", d: "Emergency: +91 94310 21001\nAppointments: +91 94310 21001" },
            { i: Mail, t: "Email", d: "info@ssimshajipur.org\ncare@ssimshajipur.org" },
            { i: MapPin, t: "Address", d: "SSIMS Campus,\nHajipur, Vaishali,\nBihar 844101" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-border/50">
              <div className="h-12 w-12 rounded-2xl gradient-brand text-white flex items-center justify-center shadow-glow"><c.i size={20} /></div>
              <h3 className="mt-5 text-xl font-bold text-deep">{c.t}</h3>
              <p className="mt-2 text-subtle whitespace-pre-line">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-soft ring-1 ring-border/50 h-[420px]">
            <iframe title="map" className="h-full w-full" src="https://www.openstreetmap.org/export/embed.html?bbox=85.20%2C25.66%2C85.28%2C25.72&layer=mapnik&marker=25.69%2C85.24" />
          </div>
          <div className="rounded-3xl gradient-brand p-8 text-white shadow-glow">
            <Clock size={22} />
            <h3 className="mt-4 text-2xl font-bold">Opening hours</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm">
              <li className="flex justify-between"><span>OPD</span><span>8:00 – 20:00</span></li>
              <li className="flex justify-between"><span>Diagnostics</span><span>7:00 – 22:00</span></li>
              <li className="flex justify-between"><span>Pharmacy</span><span>24 × 7</span></li>
              <li className="flex justify-between"><span>Emergency</span><span>24 × 7</span></li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4">
              <div className="text-xs uppercase tracking-wider text-white/70">Emergency</div>
              <div className="text-2xl font-extrabold">+91 99999 99999</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}