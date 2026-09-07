import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { useState } from "react";
import { X } from "lucide-react";

// Sahi uploaded file paths (GitHub ke exact names ke according)
const overviewImg = "/ssims/hospital-overview.webp";
const galleryImages = [
  "/ssims/hospital Gallary (1).webp",
  "/ssims/hospital Gallary (2).webp",
  "/ssims/hospital Gallary (3).webp",
  "/ssims/hospital Gallary (4).webp",
  "/ssims/hospital Gallary (5).webp",
  "/ssims/hospital Gallary (6).webp",
];

// Donation images 
const blood = "/ssims/blood-donation.webp";
const organ = "/ssims/organ-doantion.webp";
const medicine = "/ssims/medicine-donation.webp";
const fund = "/ssims/fund-donation.webp";

// Route ko /activity/hospital-level par set kiya gaya hai
export const Route = createFileRoute("/activity/hospital-level")({
  head: () => ({
    meta: [
      { title: "Excellence in Hospital Services — SSIMS Hajipur" },
      { name: "description", content: "Maintaining the highest standards of care, technology, and patient comfort." },
      { property: "og:title", content: "Excellence in Hospital Services — SSIMS" },
      { property: "og:description", content: "Maintaining the highest standards of care, technology, and patient comfort." },
    ],
  }),
  component: Page,
});

function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <PageHero 
        eyebrow="Clinical Excellence" 
        title="Excellence in Hospital Services" 
        subtitle="Maintaining the highest standards of care, technology, and patient comfort." 
        crumbs={[{ label: "Activity" }, { label: "Hospital Level" }]} 
      />
      
      {/* Top Section with Headline & Hospital Overview Image side-by-side */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Advanced clinical practices and specialized departments.
              </h2>
              <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 items-center">
              <div 
                onClick={() => setActiveImage(overviewImg)}
                className="overflow-hidden rounded-[28px] shadow-soft border-4 border-white cursor-pointer group bg-white relative hover:shadow-xl transition-all"
              >
                <img 
                  src={overviewImg} 
                  alt="Hospital Overview" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Image par hover karne se chota sa hint dikhega */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                      Click to expand
                    </span>
                </div>
              </div>
              <div className="prose prose-lg text-subtle leading-relaxed">
                <p>
                  SSIMS Hajipur is committed to delivering world-class healthcare within the hospital through advanced clinical practices and specialized departments. From OPD and IPD services to intensive care units, diagnostics, radiology, and pharmacy, every facility is designed to provide patients with comprehensive treatment under one roof.
                </p>
                <p>
                  Our hospital seamlessly ensures coordination between medical teams, modern technology, and supportive care, enabling patients to receive accurate diagnoses and effective treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery, Stats & Ways to Give Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          
          <h3 className="text-2xl font-bold text-deep mb-8">Hospital Gallery</h3>
          
          {/* Gallery Images Grid - Set to 3 columns for 6 images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className="group rounded-[28px] overflow-hidden bg-white shadow-soft border-4 border-white aspect-[4/3] relative cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <img 
                  src={img} 
                  alt={`Hospital Gallery ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Stats Block - Updated for Hospital */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "24/7", l: "Emergency & Trauma" },
              { n: "50+", l: "Specialized Doctors" },
              { n: "Advanced", l: "Modern Technology" },
              { n: "100%", l: "Patient Centric Care" },
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

      {/* Full Image Preview Lightbox Modal - Beautiful Border & Styling */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-[2rem] p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-8 border-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 z-10 h-12 w-12 rounded-full bg-black/60 hover:bg-red-500 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <img 
              src={activeImage} 
              alt="Expanded Preview" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl bg-slate-50"
            />
          </div>
        </div>
      )}
    </>
  );
}
