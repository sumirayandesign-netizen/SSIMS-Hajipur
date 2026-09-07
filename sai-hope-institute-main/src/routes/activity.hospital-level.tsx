```tsx
import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"

export const Route = createFileRoute('/activity/hospital-level')({
  component: HospitalLevelPage,
})

const galleryImages = [
  "/ssims/gallery/hospital-1.jpg",
  "/ssims/gallery/hospital-2.jpg",
  "/ssims/gallery/hospital-3.jpg",
  "/ssims/gallery/hospital-4.jpg",
]

function HospitalLevelPage() {
  return (
    <>
      <PageHero "Activity" "Hospital Level" crumbs="{[{" eyebrow="Clinical Excellence" label: subtitle="Maintaining the highest standards of care, technology, and patient comfort." title="Excellence in Hospital Services" { }, }]}/>
      
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Advanced clinical practices and continuous medical education.
              </h2>
              <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg text-subtle leading-relaxed">
              <p>
                Delivering world-class healthcare requires a dynamic, highly trained environment within the hospital. From optimizing outpatient departments (OPD) and inpatient services to integrating modern diagnostic tools, our focus remains firmly on patient-centric care.
              </p>
              <p>
                We prioritize continuous training sessions for our medical staff, seamless coordination across specialized departments, and the rigorous maintenance of hospital management standards. This internal excellence ensures every patient experiences safety, trust, and a supportive healing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold text-deep mb-10 text-center">Hospital Gallery</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group rounded-[28px] overflow-hidden bg-white shadow-soft ring-1 ring-border/50 aspect-video relative">
                <img 
                  src={img} 
                  alt={`Hospital facility ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
