import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Stethoscope, Microscope, Search, ShieldCheck, PhoneCall, CheckCircle2, UserPlus, FileHeart, Hospital } from 'lucide-react'

export const Route = createFileRoute('/services/opd-and-screening')({
  component: OpdScreeningPage,
})

function OpdScreeningPage() {
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
              Accessible Care
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Expert Outpatient Care <br/>
              <span className="text-primary">at Your Convenience.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              The Outpatient Department (OPD) at SSIMS Hajipur is your first step toward high-quality healthcare. We provide expert medical consultations, diagnostic assessments, and early cancer screenings—all without the need for hospital admission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Book OPD Appointment
              </Link>
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <PhoneCall size={16} className="text-primary" /> Care Helpline
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Image from your public folder (ssims-opd.png) */}
            <img 
              src="/ssims/ssims-opd.png" 
              alt="OPD Services at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Hospital Stats Section */}
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

        {/* Comprehensive OPD Specialties Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Comprehensive OPD Specialties</h2>
            <p className="text-subtle">
              We offer outpatient services across multiple specialties to ensure holistic and accessible care for all.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cancer OPD */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Cancer OPD (Oncology)</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                A key part of our commitment to community oncology. We provide early cancer detection, consultation with experts, and follow-up services.
              </p>
              <ul className="space-y-3">
                {["Cancer screenings & risk assessments", "Consultation with oncology specialists", "Coordination for imaging & biopsy", "Chemotherapy planning"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gynecology OPD */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center mb-6">
                <FileHeart size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Gynecology OPD</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Comprehensive women's health services from adolescence to menopause. Personalized consultations in a safe, supportive setting.
              </p>
              <ul className="space-y-3">
                {["Menstrual & hormonal disorder management", "Pregnancy-related consultations", "Cervical and breast cancer screening", "PCOS & infertility care"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dental OPD */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Dental OPD</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Focuses on preventive, diagnostic, and therapeutic oral healthcare. Routine check-ups to minor oral surgical procedures.
              </p>
              <ul className="space-y-3">
                {["Dental consultations & hygiene education", "Cavity fillings & tooth extractions", "Gum disease evaluation", "Minor oral surgical procedures"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What's Included in OPD Section (From previous website) */}
        <div className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-deep mb-4">What's Included in Our OPD Services?</h2>
            <p className="text-subtle">From first-time consultations to follow-ups, we support every step of your journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <UserPlus className="text-primary mb-4" size={32} />
              <h4 className="font-bold text-deep mb-4">General & Specialized Consultations</h4>
              <ul className="space-y-2 text-sm text-subtle">
                <li>• One-on-one consultations</li>
                <li>• Cancer screening</li>
                <li>• Second opinion consultations</li>
                <li>• Symptom evaluation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Microscope className="text-primary mb-4" size={32} />
              <h4 className="font-bold text-deep mb-4">Diagnostic Support & Referrals</h4>
              <ul className="space-y-2 text-sm text-subtle">
                <li>• Blood tests & Lab work</li>
                <li>• Imaging referrals</li>
                <li>• Biopsy scheduling</li>
                <li>• Test result interpretation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Hospital className="text-primary mb-4" size={32} />
              <h4 className="font-bold text-deep mb-4">Personalized Treatment Planning</h4>
              <ul className="space-y-2 text-sm text-subtle">
                <li>• Actionable treatment plans</li>
                <li>• Prescription advice</li>
                <li>• Lifestyle recommendations</li>
                <li>• Follow-up scheduling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose SSIMS (Final Call to action banner) */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Search size={300} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SSIMS for OPD Services?</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mb-6">
                Where expert care meets accessibility—your health is our priority. As a non-profit institution, SSIMS offers low-cost OPD services without compromising on quality. We prioritize patient comfort, dignity, and accurate diagnoses tailored to each patient.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full md:w-auto">
                Schedule Your Visit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
