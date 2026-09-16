import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Video, FileSignature, Globe2, ShieldCheck, CalendarCheck, Laptop, PhoneCall, HeartHandshake } from 'lucide-react'

export const Route = createFileRoute('/services/telemedicine')({
  component: TelemedicinePage,
})

function TelemedicinePage() {
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
              Virtual Cancer Care
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Expert Oncology Consultations <br/>
              <span className="text-primary">From Your Home.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Distance should never be a barrier to world-class cancer care. SSIMS Hajipur's Telemedicine service brings our top surgical and medical oncologists directly to your screen. Whether you need a primary consultation, a crucial second opinion, or a routine follow-up, expert guidance is now just a click away.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Book Video Consult
              </Link>
              <a href="https://wa.me/919431021001" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <Video size={16} className="text-primary" /> WhatsApp Support
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Image path adjusted to match your services array (banner4) */}
            <img 
              src="/ssims/banner/4.png" 
              alt="Telemedicine and Virtual Consultation at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Benefits of Telemedicine Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Why Choose SSIMS Tele-Oncology?</h2>
            <p className="text-subtle">
              Cancer treatment requires continuous monitoring and expert advice. Our virtual clinics are designed to make your healthcare journey stress-free and highly accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <FileSignature size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Expert Second Opinions</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Upload your biopsy or scan reports securely. Get a definitive treatment roadmap from our specialized Tumor Board without leaving your city.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Reaching Rural Bihar</h3>
              <p className="text-sm text-subtle leading-relaxed">
                We are bridging the healthcare gap. Patients in remote villages can now access the same high-quality oncology care as those in metro cities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Post-Treatment Care</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Stay connected with your oncologist for routine follow-ups, medication adjustments, and symptom management during your recovery phase.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Secure & Confidential</h3>
              <p className="text-sm text-subtle leading-relaxed">
                We use state-of-the-art encrypted video consultation platforms, ensuring your medical history, reports, and privacy are always protected.
              </p>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-24 bg-white rounded-[3rem] p-8 md:p-12 shadow-soft ring-1 ring-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-deep mb-8">Seamless Virtual Care in 3 Simple Steps</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">Book & Upload</h4>
                    <p className="text-subtle leading-relaxed">Schedule your appointment online or via our Care Line. Upload your previous medical records, scans, and reports securely through our portal.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">Connect Virtually</h4>
                    <p className="text-subtle leading-relaxed">Join the high-definition video call from your smartphone or laptop. Discuss your symptoms and concerns face-to-face with our senior oncologists.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">Receive Your Care Plan</h4>
                    <p className="text-subtle leading-relaxed">Get a detailed digital prescription, dietary advice, and a comprehensive treatment roadmap sent directly to your phone immediately after the consultation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 bg-slate-50 rounded-3xl p-8 border border-border/50 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full"></div>
                <div className="h-24 w-24 bg-white rounded-full shadow-glow flex items-center justify-center relative z-10 border border-primary/20">
                  <Laptop size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-deep mb-4">Ready for your consult?</h3>
              <p className="text-subtle mb-8 max-w-sm mx-auto">
                No waiting rooms. No travel fatigue. Just compassionate cancer care at your fingertips.
              </p>
              <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-deep text-white px-8 py-3.5 font-bold hover:bg-deep/90 transition-all">
                <CalendarCheck size={18} /> Schedule Now
              </Link>
            </div>
          </div>
        </div>

        {/* SSIMS Single Branch USP */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none">
            <Globe2 size={350} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Every District of Bihar</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                As a single, dedicated center of excellence in Hajipur, our physical location ensures focused, premium care. However, our Telemedicine platform breaks geographical boundaries, ensuring that every patient across Bihar and neighboring states has direct access to Dr. J.K. Singh's legacy of compassionate cancer care.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <PhoneCall size={20} /> Contact Care Team
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
