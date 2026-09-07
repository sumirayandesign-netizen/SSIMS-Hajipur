import { createFileRoute } from '@tanstack/react-router';
import { PageHero } from "@/components/site/page-hero";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute('/activity/miscellaneous')({
  component: MiscellaneousPage,
});

// Sahi uploaded file paths (GitHub ke exact names ke according)
const overviewImg = "/ssims/others-overview.webp";
const galleryImages = [
  "/ssims/others image (1).webp",
  "/ssims/others image (2).webp",
  "/ssims/others image (3).webp",
];

function MiscellaneousPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <PageHero 
        eyebrow="Holistic Healing" 
        title="Beyond Treatment & Care" 
        subtitle="Supporting emotional well-being through cultural and motivational activities." 
        crumbs={[{ label: "Activity" }, { label: "Miscellaneous" }]} 
      />
      
      {/* Top Section with Headline & Overview Image */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Headline & Line */}
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Creating a supportive and positive hospital environment.
              </h2>
              <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
            </div>
            
            {/* Right Side: Overview Image & Text */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 items-center">
              {/* Clickable Overview Image */}
              <div 
                onClick={() => setActiveImage(overviewImg)}
                className="overflow-hidden rounded-[28px] shadow-soft border-4 border-white cursor-pointer group bg-white relative hover:shadow-xl transition-all"
              >
                <img 
                  src={overviewImg} 
                  alt="Miscellaneous Activities Overview" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Click to expand
                  </span>
                </div>
              </div>
              
              {/* Description Text */}
              <div className="prose prose-lg text-subtle leading-relaxed">
                <p>
                  We believe that true healing encompasses both the body and the mind. To foster a dynamic and uplifting atmosphere for our patients and their families, we organize a wide array of holistic activities throughout the year.
                </p>
                <p>
                  From engaging cultural programs and motivational workshops to staff celebrations and health exhibitions, these initiatives are designed to spread positivity, reduce stress, and build strong emotional resilience during challenging times.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold text-deep mb-10 text-center">Others Gallery</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className="group rounded-[28px] overflow-hidden bg-white shadow-soft border-4 border-white aspect-[4/3] relative cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <img 
                  src={img} 
                  alt={`Miscellaneous Activity Gallery ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Image Preview Lightbox Modal */}
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
