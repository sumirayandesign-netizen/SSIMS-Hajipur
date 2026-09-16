import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, FlaskConical, Dna, Microscope, ShieldCheck, Leaf, Activity, TestTube, Crosshair, Network } from 'lucide-react'

export const Route = createFileRoute('/services/animal-research-lab')({
  component: AnimalResearchLabPage,
})

function AnimalResearchLabPage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 mb-6 border border-emerald-100">
              <FlaskConical size={14} /> Pre-Clinical Research
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Advanced Animal <br/>
              <span className="text-emerald-600">Research Laboratory.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Every major breakthrough in cancer treatment begins with rigorous pre-clinical research. The Animal Research Lab at SSIMS Hajipur bridges the gap between laboratory discoveries and life-saving clinical therapies through ethical, state-of-the-art *in-vivo* studies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 hover:-translate-y-1 transition-all">
                Collaborate With Us
              </Link>
              <a href="#ethical-standards" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <ShieldCheck size={16} className="text-emerald-600" /> View Ethical Guidelines
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Note: Ensure you upload an appropriate image for the lab in your public/ssims/services/ folder */}
            <img 
              src="/ssims/services/animal-lab.jpg" 
              alt="State-of-the-art Animal Research Laboratory at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Animal+Research+Lab";
              }}
            />
          </div>
        </div>

        {/* The Role of Lab (Translational Research) */}
        <div className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 sticky top-28">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 mb-6 shadow-sm border border-emerald-100">
                <Network size={28} />
              </div>
              <h2 className="text-3xl font-bold text-deep leading-tight mb-4">
                Translational Oncology: <br/>From Bench to Bedside
              </h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full mb-6"></div>
              <p className="text-subtle text-lg leading-relaxed">
                Our facility is dedicated to understanding tumor biology and evaluating the safety and efficacy of novel anti-cancer agents before they enter human clinical trials.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Dna className="text-emerald-500 mb-4" size={28} />
                <h3 className="font-bold text-deep mb-2">Tumor Xenograft Models</h3>
                <p className="text-sm text-subtle leading-relaxed">Implanting human tumor cells into animal models to study cancer progression and test how live tumors respond to new targeted therapies.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <TestTube className="text-blue-500 mb-4" size={28} />
                <h3 className="font-bold text-deep mb-2">Toxicity & Safety Profiling</h3>
                <p className="text-sm text-subtle leading-relaxed">Rigorous testing of new chemotherapy drugs to determine safe dosage levels, identify potential side effects, and ensure maximum patient safety.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Activity className="text-orange-500 mb-4" size={28} />
                <h3 className="font-bold text-deep mb-2">Pharmacokinetics (PK/PD)</h3>
                <p className="text-sm text-subtle leading-relaxed">Studying how drugs are absorbed, distributed, metabolized, and excreted within a living biological system over time.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <Crosshair className="text-purple-500 mb-4" size={28} />
                <h3 className="font-bold text-deep mb-2">Immunotherapy Research</h3>
                <p className="text-sm text-subtle leading-relaxed">Utilizing specialized 'humanized' animal models to observe how the immune system can be trained to recognize and destroy cancer cells.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">World-Class Laboratory Infrastructure</h2>
            <p className="text-subtle">
              Maintaining the integrity of research requires a pristine environment. Our facility is designed to meet stringent global standards for pre-clinical studies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                <ShieldCheck size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">SPF Environment</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Specific Pathogen Free (SPF) zones with HEPA filtration to ensure animals are free from infections that could compromise research data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                <Microscope size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">IVC Systems</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Individually Ventilated Cages (IVC) equipped with automated temperature, humidity, and light-cycle controls for optimal animal welfare.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                <Activity size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Surgical & Imaging Suites</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Dedicated sterile micro-surgery theaters and advanced in-vivo imaging systems for real-time monitoring of tumor growth and regression.
              </p>
            </div>
          </div>
        </div>

        {/* Ethical Standards (Crucial for Animal Labs) */}
        <div id="ethical-standards" className="mb-24 bg-emerald-900 rounded-[3rem] p-8 md:p-14 text-emerald-50 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <Leaf size={300} />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Unwavering Commitment to Ethics</h2>
              <p className="text-emerald-100/90 text-lg leading-relaxed mb-6">
                At SSIMS Hajipur, we believe that profound medical discoveries must never come at the cost of compassion. Our facility operates strictly under the guidelines of <strong>CPCSEA</strong> (Committee for the Purpose of Control and Supervision of Experiments on Animals).
              </p>
              <div className="inline-block bg-emerald-800/50 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-white font-bold text-xl mb-4 border-b border-emerald-600/50 pb-2">We strictly follow the "3 Rs":</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <div><strong className="text-white">Replacement:</strong> Using alternative non-animal methods (like cell cultures) whenever possible.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <div><strong className="text-white">Reduction:</strong> Utilizing statistical methods to use the absolute minimum number of animals required.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <div><strong className="text-white">Refinement:</strong> Ensuring the highest standards of veterinary care to minimize any pain or distress.</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-emerald-950/50 rounded-3xl p-8 border border-emerald-800/50 text-center flex flex-col justify-center items-center h-full">
              <ShieldCheck size={64} className="text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Institutional Animal Ethics Committee (IAEC)</h3>
              <p className="text-emerald-200/80 leading-relaxed text-sm max-w-sm">
                Every single research protocol and experiment is rigorously reviewed, scrutinized, and approved by our independent Ethics Committee before initiation. Constant veterinary supervision is mandatory.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-deep mb-6">Partner in the Fight Against Cancer</h2>
          <p className="text-subtle text-lg leading-relaxed mb-8">
            We actively collaborate with pharmaceutical companies, biotech startups, and academic universities for outsourced pre-clinical trials and joint research ventures.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full gradient-brand px-10 py-4 text-base font-bold text-white shadow-glow hover:shadow-xl hover:-translate-y-1 transition-all">
            Submit a Research Proposal
          </Link>
        </div>

      </div>
    </div>
  )
}
