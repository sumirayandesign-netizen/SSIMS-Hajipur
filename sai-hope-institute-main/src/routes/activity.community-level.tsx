import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { useState } from "react";
import { X } from "lucide-react";

// Aapki nai uploaded images ke paths (public folder reference)
const communityImg = "/ssims/community.webp";
const galleryImages = [
  "/ssims/Community Gallery (1).webp",
  "/ssims/Community Gallery (2).webp",
  "/ssims/Community Gallery (3).webp",
  "/ssims/Community Gallery (4).webp",
];
const blood = "/ssims/blood-donation.webp";
const organ = "/ssims/organ-doantion.webp";
const medicine = "/ssims/medicine-donation.webp";
const fund = "/ssims/fund-donation.webp";

export const Route = createFileRoute("/activity/community-level")({
  head: () => ({
    meta: [
      { title: "Community Oncology — SSIMS Hajipur" },
      { name: "description", content: "Village camps, screening drives and telemedicine reaching remote Bihar." },
      { property: "og:title", content: "Community Oncology — SSIMS" },
      { property: "og:description", content: "Care that reaches every village." },
    ],
  }),
  component: Page,
});

function Page() {
  // Full image preview ke liye state
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <PageHero 
        eyebrow="Community Impact" 
        title="Care that reaches every village of Bihar." 
        subtitle="Because early detection saves lives, and no one should be left behind because of distance or income." 
        crumbs={[{ label: "Activity" }, { label: "Community Level" }]} 
      />
      
      {/* Top Section jisme headline aur prominent image hai */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Empowering communities through active healthcare outreach.
              </h2>
              <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              {/* Top Prominent Community Image */}
              <div 
                onClick={() => setActiveImage(communityImg)}
                className="overflow-hidden rounded-3xl shadow-soft border-2 border-border/80 cursor-pointer group bg-white p-2"
              >
                <img 
                  src={communityImg} 
                  alt="Community Outreach" 
                  className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="prose prose-lg text-subtle leading-relaxed">
                <p>
                  Our vision of a healthier society extends far beyond clinical treatments. We actively organize comprehensive health awareness campaigns, regular screening camps, and preventive care programs across remote and underserved areas. 
                </p>
                <p>
                  Through free medicine distribution, continuous blood donation drives, and vital training for local healthcare workers, our community initiatives make early detection and quality medical consultations accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery, Stats aur Donation Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          
          <h3 className="text-2xl font-bold text-deep mb-8">Community Gallery</h3>
          
          {/* Naya Gallery Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className="group rounded-3xl overflow-hidden bg-white shadow-soft border-2 border-border/80 aspect-[4/3] relative cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Community Gallery ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Stats Block */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "200+", l: "Villages reached" },
              { n: "45,000+", l: "Free screenings" },
              { n: "120+", l: "Health camps" },
              { n: "8,000+", l: "Awareness sessions" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-border/50">
                <div className="text-3xl font-extrabold text-gradient">{s.n}</div>
                <div className="mt-2 text-sm text-subtle">{s.l}</div>
              </div>
            ))}
          </div>
          
          {/* Ways to Give Block */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Ways to give
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">Donate. Every gift saves a life.</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: blood, t: "Blood Donation", d: "Join our regular donor drives for cancer patients." },
                { img: organ, t: "Organ Donation", d: "Pledge to give life beyond life." },
                { img: medicine, t: "Medicine Donation", d: "Donate essential chemo & supportive medicines." },
                { img: fund, t: "Fund a Treatment", d: "Sponsor treatment for patients below poverty line." },
              ].map((c) => (
                <div key={c.t} className="rounded-3xl overflow-hidden bg-white shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all cursor-pointer">
                  <img src={c.img} alt={c.t} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <div className="font-bold text-deep">{c.t}</div>
                    <p className="text-sm text-subtle mt-1">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Full Image Preview Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl p-3 shadow-2xl border-4 border-white"
            onClick={(e) => e.stopPropagation()} // Modal content click prevents closing
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 z-10 h-10 w-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <img 
              src={activeImage} 
              alt="Expanded Preview" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
