import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"

export const Route = createFileRoute('/activity/miscellaneous')({
  component: MiscellaneousPage,
})

const galleryImages = [
  "/ssims/gallery/misc-1.jpg",
  "/ssims/gallery/misc-2.jpg",
  "/ssims/gallery/misc-3.jpg",
  "/ssims/gallery/misc-4.jpg",
  "/ssims/gallery/misc-5.jpg",
  "/ssims/gallery/misc-6.jpg",
]

function MiscellaneousPage() {
  return (
    <>
      <PageHero "Activity" "Miscellaneous" crumbs="{[{" eyebrow="Holistic Healing" label: subtitle="Supporting emotional well-being through cultural and motivational activities." title="Beyond Treatment & Care" { }, }]}/>
      
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Creating a supportive and positive hospital environment.
              </h2>
              <div className="mt-6 h-1.5 w-20 gradient-brand rounded-full"></div>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg text-subtle leading-relaxed">
              <p>
                We believe that true healing encompasses both the body and the mind. To foster a dynamic and uplifting atmosphere for our patients and their families, we organize a wide array of holistic activities throughout the year.
              </p>
              <p>
                From engaging cultural programs and motivational workshops to staff celebrations and health exhibitions, these initiatives are designed to spread positivity, reduce stress, and build strong emotional resilience during challenging times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold text-deep mb-10 text-center">Others Gallery</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="group rounded-[28px] overflow-hidden bg-white shadow-soft ring-1 ring-border/50 aspect-square relative">
                <img 
                  src={img} 
                  alt={`Miscellaneous activity ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
