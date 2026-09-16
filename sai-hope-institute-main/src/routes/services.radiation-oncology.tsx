import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Crosshair, Zap, Clock, ShieldCheck, PhoneCall, Building2, Microchip } from 'lucide-react'

export const Route = createFileRoute('/services/radiation-oncology')({
  component: RadiationOncologyPage,
})

function RadiationOncologyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:underline transition-all">
          <ArrowLeft size={16} /> Back to All Services
        </Link>
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6">
              Targeted Cancer Therapy
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Precision Radiation Oncology <br/>
              <span className="text-primary">at SSIMS Hajipur.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Radiation oncology uses highly controlled, powerful radiation beams to destroy cancer cells. At SSIMS, we utilize state-of-the-art Linear Accelerators (LINAC) to deliver maximum impact on tumors while completely safeguarding your healthy tissues.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Book Consultation
              </Link>
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <PhoneCall size={16} className="text-primary" /> +91 94310 21001
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/20 to-transparent rounded-[2rem] transform -translate-x-4 translate-y-4 -z-10"></div>
            {/* Image path adjusted to match your services array index 2 */}
            <img 
              src="/ssims/services/2.png" 
              alt="Advanced Radiation Therapy at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white" 
            />
          </div>
        </div>

        {/* Benefits of Radiation Therapy */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Why Radiation Therapy is Highly Effective</h2>
            <p className="text-subtle">
              Modern radiotherapy is a safe, minimally invasive treatment method offering numerous advantages for our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Crosshair size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Pinpoint Precision</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Image-guided delivery ensures radiation targets only the cancer cells, significantly reducing damage to surrounding healthy tissue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Non-Invasive</h3>
              <p className="text-sm text-subtle leading-relaxed">
                No incisions, no blood loss, and no risk of surgical infections. It's a completely painless procedure similar to getting an X-ray.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Outpatient Care</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Most radiation sessions take only 15-30 minutes. Patients can usually go home the same day and resume normal activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Highly Synergistic</h3>
              <p className="text-sm text-subtle leading-relaxed">
                It can be used alone or in combination with chemotherapy and surgery to shrink tumors and prevent recurrence.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Technologies Section */}
        <div className="mb-24 bg-white rounded-[3rem] p-8 md:p-12 shadow-soft ring-1 ring-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Microchip size={28} />
              </div>
              <h2 className="text-3xl font-bold text-deep mb-6">Advanced Technologies We Use</h2>
              <p className="text-subtle mb-6 leading-relaxed">
                At SSIMS, we do not compromise on technology. We employ the world's most trusted radiation platforms to treat a broad spectrum of malignancies with excellent success rates.
              </p>
              <ul className="space-y-4 text-deep font-medium">
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> IMRT (Intensity-Modulated Radiation Therapy)</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> IGRT (Image-Guided Radiation Therapy)</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> 3D Conformal Radiation Therapy (3D-CRT)</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> Brachytherapy (Internal Radiation)</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-deep mb-4">Patient-Centric Treatment Planning</h3>
              <p className="text-subtle leading-relaxed text-sm">
                Before your treatment begins, our radiation oncologists, medical physicists, and dosimetrists use advanced computer software to map the exact 3D contour of your tumor. This complex calculation ensures that the maximum radiation hits the tumor while the dose drops to near-zero by the time it reaches your healthy organs.
              </p>
            </div>
          </div>
        </div>

        {/* SSIMS Single Branch USP */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-10 pointer-events-none">
            <Building2 size={250} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">One Institute. Dedicated Focus.</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                Unlike corporate hospital chains where attention is divided across multiple branches, <strong>SSIMS Hajipur is a single, dedicated, premium cancer institute.</strong> All our top specialists, tumor board experts, and cutting-edge machines are concentrated in one location. This means you receive undistracted, personalized, and world-class care right here in Bihar.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Visit Our Institute
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
