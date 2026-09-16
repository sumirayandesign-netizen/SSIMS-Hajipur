import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Video, FileSignature, Globe2, HeartHandshake, ShieldCheck, CalendarCheck, Laptop, PhoneCall, CheckCircle2 } from 'lucide-react'

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
              Healthcare That Reaches You
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Expert Oncology Consultations <br/>
              <span className="text-primary">Wherever You Are.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Distance should never be a barrier to world-class cancer care. SSIMS Hajipur's Telemedicine service brings our top oncologists directly to your screen, eliminating the need for travel. A modern solution for rural patients and those seeking expert second opinions without delay.
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
            <img 
              src="/ssims/banner/4.png" 
              alt="Telemedicine at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Hospital Stats (Purane website se liya gaya) */}
        <div className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "350+", label: "Bed Capacity" },
            { num: "24 Hrs", label: "Telemedicine" },
            { num: "9+", label: "Departments" },
            { num: "1650+", label: "Patients Treated" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-deep rounded-3xl p-8 text-center shadow-lg transform hover:-translate-y-1 transition-all">
              <div className="text-4xl font-extrabold text-white mb-2">{stat.num}</div>
              <div className="text-sm font-medium text-teal-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What's Included Section (Purane website ka detailed content) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">What's Included in Our Telemedicine Services?</h2>
            <p className="text-subtle">
              Trusted medical support—virtually, quickly, and affordably. We ensure your virtual care is just as comprehensive as an in-person visit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Video size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-6">Video & Audio Consults</h3>
              <ul className="space-y-4">
                {["First-time consultations", "Routine Follow-ups", "Expert Second opinions", "Progress tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-subtle">
                    <CheckCircle2 size={18} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <FileSignature size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-6">Digital Prescriptions</h3>
              <ul className="space-y-4">
                {["Instant PDF prescriptions", "Medication guidance", "Diet & Lifestyle tips", "SMS/Email reminders"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-subtle">
                    <CheckCircle2 size={18} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-6">Patient Navigation</h3>
              <ul className="space-y-4">
                {["Dedicated Appointment helpdesk", "Emergency escalation", "Referral coordination", "Technical support for calls"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-subtle">
                    <CheckCircle2 size={18} className="text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How it Works Section (Naye design ka smart UI) */}
        <div className="mb-24 bg-white rounded-[3rem] p-8 md:p-12 shadow-soft ring-1 ring-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-deep mb-8">How Virtual Consultation Works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">Book Your Slot</h4>
                    <p className="text-subtle leading-relaxed">Patients can book virtual appointments online or by calling our helpdesk. Upload necessary documents securely.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">Consult the Specialist</h4>
                    <p className="text-subtle leading-relaxed">A secure video or phone consultation is arranged with our experienced oncologists to ensure proper medical attention remotely.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-deep mb-2">In-Person Visit (If Needed)</h4>
                    <p className="text-subtle leading-relaxed">If the doctor recommends an in-person visit for further diagnostics, SSIMS ensures a seamless transition with priority access.</p>
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

        {/* SSIMS USP Banner */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none">
            <Globe2 size={350} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Every District of Bihar</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                While our physical center in Hajipur ensures focused, premium care, our Telemedicine platform breaks geographical boundaries. We ensure that every patient across Bihar and neighboring states has direct access to our legacy of compassionate cancer care.
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
