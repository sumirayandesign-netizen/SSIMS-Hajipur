import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"
import { useState } from "react"
import { X } from "lucide-react"

export const Route = createFileRoute('/activity/hospital-level')({
  component: HospitalLevelPage,
})

// Top overview image aur gallery images ke sahi paths
const hospitalOverviewImg = "/ssims/hospital-overview.webp"
const galleryImages = [
  "/ssims/hospital Gallary (1).webp",
  "/ssims/hospital Gallary (2).webp",
  "/ssims/hospital Gallary (3).webp",
  "/ssims/hospital Gallary (4).webp",
  "/ssims/hospital Gallary (5).webp",
  "/ssims/hospital Gallary (6).webp",
]

function HospitalLevelPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

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
                onClick={() => setActiveImage(hospitalOverviewImg)}
                className="overflow-hidden rounded-[28px] shadow-soft border-2 border-border/80 cursor-pointer group bg-white"
              >
                <img 
                  src={hospitalOverviewImg} 
                  alt="Hospital Overview" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="prose prose-lg text-subtle leading-relaxed">
                <p>
                  SSIMS Hajipur is committed to delivering world-class healthcare within the hospital through advanced clinical practices and specialized departments. From OPD and IPD services to intensive care units, diagnostics, radiology, and pharmacy, every facility is designed to provide patients with comprehensive treatment under one roof.
                </p>
                <p>
                  Alongside medical services, SSIMS emphasizes patient comfort and compassionate care with dedicated staff, safe blood bank services, in-house pharmacy, and round-the-clock emergency support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Gallery Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold text-deep mb-8">Hospital Gallery</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className="group rounded-[28px] overflow-hidden bg-white shadow-soft border-2 border-border/80 aspect-video relative cursor-pointer hover:shadow-glow transition-all"
              >
                <img 
                  src={img} 
                  alt={`Hospital Gallery ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl p-3 shadow-2xl border-4 border-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 z-10 h-10 w-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors shadow-lg cursor-pointer"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
            <img 
              src={activeImage} 
              alt="Expanded Preview" 
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
