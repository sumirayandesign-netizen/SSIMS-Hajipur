import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Droplets, HeartPulse, Pill, CheckCircle2, PhoneCall, HeartHandshake, X } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/services/blood-donation-camps')({
  component: BloodDonationPage,
})

// Gallery Images (Inhe apne public/ssims/gallery folder me upload karna hoga)
const galleryImages = [
  "/ssims/gallery/blood-camp-1.jpg",
  "/ssims/gallery/blood-camp-2.jpg",
  "/ssims/gallery/blood-camp-3.jpg",
  "/ssims/gallery/blood-camp-4.jpg",
  "/ssims/gallery/blood-camp-5.jpg",
  "/ssims/gallery/blood-camp-6.jpg",
]

function BloodDonationPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline transition-all">
          <ArrowLeft size={16} /> Back to All Services
        </Link>
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 mb-6 border border-red-100">
              <Droplets size={14} /> Community Lifeline
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Donate Blood, <br/>
              <span className="text-red-600">Save Lives.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              SSIMS Hajipur regularly organizes Blood Donation Camps as part of our commitment to community care. Your contribution supports cancer patients during chemotherapy, aids in emergency surgical treatments, and strengthens our healthcare response for those in critical need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-red-700 hover:shadow-red-500/30 hover:-translate-y-1 transition-all">
                Become a Donor
              </Link>
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <PhoneCall size={16} className="text-primary" /> Contact Us
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Banner Image: Ensure you have blood-donation.webp in public/ssims folder */}
            <img 
              src="/ssims/blood-donation.webp" 
              alt="Blood Donation Camp by SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Our Blood Camp Services Section (From old website) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Our Blood Camp Services</h2>
            <p className="text-subtle">
              We ensure a safe, hygienic, and supportive environment for all our donors, while extending basic healthcare support to the community during the drive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow hover:-translate-y-1 transition-all border-t-4 border-t-red-500">
              <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Blood Donation Drive</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Safe and voluntary blood donation supported by trained medical staff, helping save lives—especially for cancer and emergency care patients.
              </p>
              <ul className="space-y-3">
                {["Donor Registration", "Blood Grouping & Screening", "On-site Donation Setup", "Post-Donation Care"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle font-medium">
                    <CheckCircle2 size={18} className="text-red-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow hover:-translate-y-1 transition-all border-t-4 border-t-blue-500">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <HeartPulse size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Basic Health Screening</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Vital sign checks and basic tests to ensure donor eligibility and promote overall preventive care within the community.
              </p>
              <ul className="space-y-3">
                {["Blood Pressure Check", "Hemoglobin Testing", "General Consultation", "BMI Assessment"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle font-medium">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow hover:-translate-y-1 transition-all border-t-4 border-t-teal-500">
              <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Pill size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Free Medicine Distribution</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Essential medicines and nutritional supplements provided to support patients and community members during the camp.
              </p>
              <ul className="space-y-3">
                {["Basic Medicines", "Iron & Vitamin Supplements", "First Aid Kits", "Chronic Illness Meds"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle font-medium">
                    <CheckCircle2 size={18} className="text-teal-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-deep mb-4">Blood Camp Gallery</h2>
            <p className="text-subtle">Glimpses of our recent voluntary blood donation drives and the heroes who saved lives.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className="group rounded-[28px] overflow-hidden bg-white shadow-soft ring-1 ring-border/50 aspect-video relative cursor-pointer hover:shadow-glow transition-all"
              >
                <img 
                  src={img} 
                  alt={`Blood Donation Camp Gallery ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback placeholder if image is not uploaded yet
                    e.currentTarget.src = `https://placehold.co/600x400/e2e8f0/64748b?text=Camp+Photo+${index + 1}`;
                  }}
                />
                <div className="absolute inset-0 bg-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-deep text-sm font-bold px-4 py-2 rounded-full">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="rounded-[3rem] p-8 md:p-16 bg-deep text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
            <HeartHandshake size={300} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Organize a Blood Camp with Us</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Are you an NGO, corporate office, or community leader? Partner with SSIMS Hajipur to organize a voluntary blood donation camp in your area. Together, we can build a strong blood reserve for critical cancer and trauma patients.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-8 py-4 font-bold shadow-lg hover:bg-red-700 hover:scale-105 transition-all w-full md:w-auto">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

      </div>

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
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
