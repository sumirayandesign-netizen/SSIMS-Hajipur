import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Stethoscope, Microscope, Activity, HeartHandshake, ShieldCheck, PhoneCall, Building2, UserCheck } from 'lucide-react'

export const Route = createFileRoute('/services/surgical-oncology')({
  component: SurgicalOncologyPage,
})

function SurgicalOncologyPage() {
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
              Advanced Cancer Surgery
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Precision Surgical Oncology <br/>
              <span className="text-primary">at SSIMS Hajipur.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Surgery remains one of the most effective treatments for many types of cancer. At SSIMS Hajipur, our expert surgical oncologists utilize minimally invasive techniques to remove tumors precisely while preserving your quality of life and organ function.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Image path adjusted to match your services array index 3 */}
            <img 
              src="/ssims/services/3.png" 
              alt="Expert Surgical Oncology at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white" 
            />
          </div>
        </div>

        {/* Purpose of Surgery Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">The Role of Surgery in Cancer Care</h2>
            <p className="text-subtle">
              Depending on the type and stage of cancer, surgery can be used for various critical purposes. Our Tumor Board meticulously plans every step to ensure the best possible outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Microscope size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Diagnosis & Staging</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Biopsies and exploratory surgeries help us accurately identify the cancer type and determine how far it has spread, guiding the entire treatment plan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Tumor Removal</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Curative surgery focuses on completely removing the cancerous tumor along with a small margin of healthy tissue to prevent any future recurrence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Reconstruction</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Post-tumor removal, reconstructive surgery helps restore the body's natural appearance and function, significantly boosting patient confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Palliative Surgery</h3>
              <p className="text-sm text-subtle leading-relaxed">
                In advanced stages, surgery is used to relieve severe pain, clear blockages, and improve the patient's overall comfort and quality of life.
              </p>
            </div>
          </div>
        </div>

        {/* Modern Solutions Section */}
        <div className="mb-24 bg-white rounded-[3rem] p-8 md:p-12 shadow-soft ring-1 ring-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-slate-50 rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-deep mb-4">Minimally Invasive Excellence</h3>
              <p className="text-subtle leading-relaxed text-sm mb-4">
                Gone are the days of massive incisions. At SSIMS, we utilize <strong>Laparoscopic and Endoscopic techniques</strong> wherever possible. 
              </p>
              <p className="text-subtle leading-relaxed text-sm">
                This modern approach means smaller cuts, significantly less blood loss, minimal scarring, and a much faster recovery time—allowing patients to return to their normal lives sooner.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Stethoscope size={28} />
              </div>
              <h2 className="text-3xl font-bold text-deep mb-6">Modern Cancer Surgery Solutions</h2>
              <p className="text-subtle mb-6 leading-relaxed">
                Our surgical philosophy prioritizes <strong>Organ Preservation</strong>. We strive to remove the cancer while saving the affected organ's function. For instance, prioritizing breast-conserving surgery over total mastectomy whenever medically viable.
              </p>
              <ul className="space-y-4 text-deep font-medium">
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> Organ Preservation Surgery</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> Minimally Invasive (Laparoscopic) Procedures</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> Complex Gastrointestinal & Head-Neck Surgeries</li>
                <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary"></div> Functional Reconstruction</li>
              </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bihar's Premier Surgical Oncology Center</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                Cancer surgery requires a highly specialized environment. <strong>SSIMS Hajipur is a single, independent institute</strong> equipped with ultra-modern modular Operation Theaters, advanced ICUs, and a dedicated team of cancer surgeons. We are not a corporate chain; our entire focus, expertise, and technology are concentrated right here under one roof for you.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/doctors" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <UserCheck size={20} /> Meet Our Surgeons
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
