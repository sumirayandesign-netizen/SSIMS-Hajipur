import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Users, Megaphone, Stethoscope, MapPin, HeartHandshake, CheckCircle2, PhoneCall, Globe2 } from 'lucide-react'

export const Route = createFileRoute('/services/community-oncology')({
  component: CommunityOncologyPage,
})

function CommunityOncologyPage() {
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
              Grassroots Cancer Care
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Empowering Rural India with <br/>
              <span className="text-primary">Early Cancer Detection.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Community Oncology at SSIMS Hajipur is a patient-focused initiative aimed at increasing cancer awareness, screening, and basic treatment services in rural and underserved areas—where timely access to healthcare is often limited.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Partner for a Camp
              </Link>
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <PhoneCall size={16} className="text-primary" /> Outreach Helpline
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Image from your public folder */}
            <img 
              src="/ssims/community-oncology-banner.webp" 
              alt="Community Oncology Outreach by SSIMS Hajipur" 
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

        {/* What's Included in Community Oncology Program */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Our Community Oncology Program</h2>
            <p className="text-subtle">
              From awareness to action—building cancer-safe communities through early detection, education, and continuous grassroots care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Awareness Campaigns */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Megaphone size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Awareness Campaigns</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                We educate communities on cancer prevention, early symptoms, and healthy living to break the stigma and fear.
              </p>
              <ul className="space-y-3">
                {["Risk factor education", "Tobacco awareness", "Women's health focus", "Lifestyle counseling"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Screening Camps */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Local Screening Camps</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                On-site cancer screening using basic diagnostic tools and expert consultation right in the heart of villages.
              </p>
              <ul className="space-y-3">
                {["Oral cancer checks", "Breast examination", "Cervical screening", "Symptom-based referrals"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-teal-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Referral & Follow-up */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-4">Referral & Follow-up</h3>
              <p className="text-sm text-subtle leading-relaxed mb-6">
                Patients identified during outreach are guided to SSIMS for continued evaluation, treatment, and support.
              </p>
              <ul className="space-y-3">
                {["OPD linkage at SSIMS", "Transport assistance guidance", "Patient tracking", "Post-camp counseling"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-subtle">
                    <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Beyond Hospital Walls Section */}
        <div className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 border border-border/50 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-bold text-deep mb-4">Rural-Focused Outreach</h3>
              <p className="text-subtle leading-relaxed text-sm">
                Our programs are specifically tailored for the needs of underserved and remote populations. By catching symptoms early, we dramatically improve treatment success rates and save lives that might otherwise be lost due to a lack of awareness or resources.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-deep mb-6">Taking Healthcare Beyond Hospital Walls</h2>
              <p className="text-subtle mb-6 leading-relaxed">
                Our mobile teams conduct local health camps and screening drives in villages, schools, and public centers. These efforts ensure that early symptoms of cancer are not overlooked due to inaccessibility or lack of awareness.
              </p>
              <p className="text-subtle leading-relaxed">
                <strong>From Detection to Referral:</strong> When potential cases are found during camps, patients are immediately referred to SSIMS for follow-up diagnostics and treatment, maintaining a seamless care continuum from village to hospital.
              </p>
            </div>
          </div>
        </div>

        {/* Join the Cause Banner */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Users size={300} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SSIMS for Community Oncology?</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mb-6">
                We bring cancer prevention and education right to your doorstep. Our on-ground medical teams provide access to screening and referrals in your local area. If you are an NGO, local leader, or volunteer, join hands with us to organize a screening camp in your community.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full md:w-auto">
                Organize a Camp
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
