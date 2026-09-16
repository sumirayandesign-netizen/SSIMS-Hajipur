import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Ambulance, PhoneCall, Clock, HeartPulse, Activity, ShieldAlert, Syringe, TestTube, Crosshair } from 'lucide-react'

export const Route = createFileRoute('/services/emergency-care')({
  component: EmergencyCarePage,
})

function EmergencyCarePage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 mb-6 border border-red-100">
              <SirenIcon /> 24x7 Rapid Response
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Critical & Emergency Care <br/>
              <span className="text-red-600">Every Second Counts.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Medical emergencies wait for no one. At SSIMS Hajipur, our 24x7 Emergency and Critical Care Department is fully equipped to handle acute life-threatening conditions, severe trauma, and complex oncological emergencies with absolute precision, speed, and compassion.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 hover:-translate-y-1 transition-all">
                <PhoneCall size={18} /> Call Emergency Helpline
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <Ambulance size={18} className="text-primary" /> Request Ambulance
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Image path mapped from your services array (banner3) */}
            <img 
              src="/ssims/banner/3.png" 
              alt="24x7 Emergency and Critical Care at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Why Specialized Emergency Care? (Deep SEO Content) */}
        <div className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 sticky top-28">
              <h2 className="text-3xl font-bold text-deep leading-tight mb-6">
                Why Specialized Oncological Emergency Care Matters?
              </h2>
              <div className="h-1.5 w-20 bg-red-600 rounded-full mb-8"></div>
              <p className="text-subtle text-lg leading-relaxed">
                Cancer patients face unique vulnerabilities. Routine hospitals often lack the specific protocols required to manage chemotherapy-induced complications or advanced tumor emergencies. SSIMS fills this critical gap in Bihar.
              </p>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg text-subtle leading-relaxed">
              <p>
                When a patient is undergoing active cancer treatments like chemotherapy, immunotherapy, or targeted radiation, their immune system can become highly compromised. A minor infection or sudden physiological change can escalate into a life-threatening crisis within hours.
              </p>
              <p>
                <strong>At SSIMS Hajipur, our emergency response team is specially trained in Oncological Emergencies.</strong> We do not just stabilize the patient; our on-call medical oncologists and intensive care specialists collaborate immediately to identify the root cause—whether it’s treatment toxicity or disease progression—and administer the exact specialized antidote or protocol required without losing precious time.
              </p>
              <p>
                Beyond cancer care, our emergency department serves as a comprehensive trauma and acute care center for the region, equipped with state-of-the-art life support systems, in-house blood bank access, and rapid diagnostic imaging tools operating 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>
        </div>

        {/* Core Emergency Capabilities (Feature Grid) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Our Emergency Infrastructure & Capabilities</h2>
            <p className="text-subtle">
              Engineered for rapid intervention, our ER is backed by the full strength of a tertiary care hospital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all border-t-4 border-t-red-500">
              <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Zero Waiting Time</h3>
              <p className="text-sm text-subtle leading-relaxed">
                A streamlined triage system ensures that critical patients bypass all waiting protocols and are immediately attended to by the resuscitation team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all border-t-4 border-t-blue-500">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Advanced ICU Support</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Direct integration with our fully-equipped Intensive Care Unit (ICU) featuring high-end ventilators, defibrillators, and continuous vital monitoring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all border-t-4 border-t-teal-500">
              <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <TestTube size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">24x7 Diagnostics</h3>
              <p className="text-sm text-subtle leading-relaxed">
                In-house pathology, CT scans, X-rays, and an attached blood bank ensure that crucial diagnostic results are available within minutes, not hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all border-t-4 border-t-orange-500">
              <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <Syringe size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep mb-3">Specialized ER Team</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Staffed by board-certified emergency physicians, trained trauma nurses, and on-call specialist surgeons ready to perform life-saving procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Detail: Types of Emergencies Handled */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-deep mb-10 text-center">Conditions We Expertly Manage</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Box 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl"><ShieldAlert size={24} /></div>
                <h3 className="text-xl font-bold text-deep">Oncological Emergencies</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Febrile Neutropenia</strong>
                    <span className="text-sm text-subtle">Life-threatening infections due to low white blood cell counts post-chemotherapy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Tumor Lysis Syndrome (TLS)</strong>
                    <span className="text-sm text-subtle">Metabolic abnormalities occurring when massive amounts of cancer cells die quickly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Spinal Cord Compression</strong>
                    <span className="text-sm text-subtle">Rapid intervention to prevent permanent paralysis caused by tumor pressure on the spine.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Activity size={24} /></div>
                <h3 className="text-xl font-bold text-deep">General & Trauma Emergencies</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Acute Respiratory Distress</strong>
                    <span className="text-sm text-subtle">Immediate airway management and ventilator support for severe breathing difficulties.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Severe Hemorrhage & Bleeding</strong>
                    <span className="text-sm text-subtle">Rapid blood transfusions via our in-house blood bank and surgical intervention to stop bleeding.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <strong className="text-deep block">Cardiac & Metabolic Crises</strong>
                    <span className="text-sm text-subtle">Management of heart-related emergencies, acute pain, and severe electrolyte imbalances (like Hypercalcemia).</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Final Emergency CTA Banner */}
        <div className="rounded-[3rem] p-8 md:p-16 bg-[#b91c1c] text-white relative overflow-hidden shadow-2xl shadow-red-900/20">
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Ambulance size={350} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Save Our Emergency Helpline Number</h2>
              <p className="text-red-100 text-lg leading-relaxed max-w-2xl mb-6">
                Keep our numbers saved. In case of any sudden health deterioration, trauma, or cancer-related distress, bring the patient directly to SSIMS Hajipur. Our specialized ER team is standing by 24 hours a day.
              </p>
              <div className="flex items-center gap-4 text-2xl md:text-4xl font-black text-white tracking-widest bg-red-800/50 w-max px-6 py-3 rounded-2xl border border-red-400/30">
                <PhoneCall size={32} className="animate-pulse" /> +91 94310 21001
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-red-700 px-8 py-4 font-bold shadow-xl hover:scale-105 transition-all w-full md:w-auto text-lg">
                Get Directions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// Custom Siren Icon Component since Lucide doesn't have an exact matching "Siren"
function SirenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6z"/>
      <path d="M12 3v4"/>
      <path d="M5 18h14v3H5z"/>
      <path d="M19.4 6.6l-2.8 2.8"/>
      <path d="M4.6 6.6l2.8 2.8"/>
    </svg>
  )
}
