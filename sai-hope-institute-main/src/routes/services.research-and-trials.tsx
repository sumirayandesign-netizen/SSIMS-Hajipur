import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, FlaskConical, BookOpen, Microscope, ShieldAlert, Syringe, Users, Award, ChevronRight, Dna } from 'lucide-react'

export const Route = createFileRoute('/services/research-and-trials')({
  component: ResearchAndTrialsPage,
})

function ResearchAndTrialsPage() {
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
              Innovation & Academics
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Pioneering Cancer Research <br/>
              <span className="text-primary">& Clinical Trials.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              At SSIMS Hajipur, treating cancer is our duty, but curing it is our mission. Through our advanced Research & Trials wing, cutting-edge Animal Research Lab, and prestigious educational programs, we are actively shaping the future of oncology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#academic-programs" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Academic Programs
              </a>
              <a href="#ongoing-research" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <Microscope size={16} className="text-primary" /> Ongoing Projects
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Using banner 5 as per previous mappings */}
            <img 
              src="/ssims/banner/5.png" 
              alt="Research and Trials at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Educational Programs Section (From Video) */}
        <div id="academic-programs" className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6 shadow-sm">
                <BookOpen size={32} />
              </div>
              <h2 className="text-3xl font-bold text-deep mb-4">Educational Programs</h2>
              <p className="text-subtle text-lg leading-relaxed mb-6">
                SSIMS Hajipur is not just a treatment center; it is a hub of academic excellence shaping the next generation of top-tier surgical oncologists in India.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-glow transition-all">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-deep mb-2">M.Ch. in Surgical Oncology</h3>
                    <p className="text-primary font-medium">An advanced postgraduate surgical program.</p>
                  </div>
                  <div className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold border border-green-100">
                    Admissions Open
                  </div>
                </div>
                <p className="text-subtle leading-relaxed mb-8 text-sm">
                  Dedicated to specialized training in oncological surgery. This comprehensive course prepares students with in-depth knowledge, advanced research capabilities, and the clinical skills required to treat complex cancer cases.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-gray-100">
                    <div className="text-2xl font-black text-deep mb-1">3</div>
                    <div className="text-xs text-subtle font-medium uppercase tracking-wider">Years</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-gray-100">
                    <div className="text-2xl font-black text-deep mb-1">2</div>
                    <div className="text-xs text-subtle font-medium uppercase tracking-wider">Seats</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-gray-100">
                    <div className="text-sm font-black text-deep mb-1 mt-1.5">Full-Time</div>
                    <div className="text-xs text-subtle font-medium uppercase tracking-wider">Mode</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center border border-gray-100">
                    <div className="text-sm font-black text-deep mb-1 mt-1.5">Deemed</div>
                    <div className="text-xs text-subtle font-medium uppercase tracking-wider">Institution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div id="ongoing-research" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Ongoing Research Projects</h2>
            <p className="text-subtle">
              Our clinical and translational research projects are constantly pushing the boundaries of what is possible in cancer care and prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { id: "Research One", title: "Targeted Therapies for Advanced Tumors", desc: "Investigating the efficacy of precision medicine on specific genetic mutations found in oral and breast cancers prevalent in our region." },
              { id: "Research Two", title: "Minimally Invasive Surgical Outcomes", desc: "A comparative study on patient recovery times and long-term survival rates using laparoscopic vs traditional surgical oncology methods." },
              { id: "Research Three", title: "Tobacco-Induced Carcinogenesis", desc: "Analyzing molecular pathways in patients with a history of chewing tobacco to develop early detection biomarkers." },
              { id: "Research Four", title: "Palliative Care Innovations", desc: "Evaluating the impact of holistic pain management and psychological support on the overall survival rate of late-stage patients." }
            ].map((project, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all group cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{project.id}</div>
                  <ChevronRight size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-deep mb-3">{project.title}</h3>
                <p className="text-sm text-subtle leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Public Health & Preventive Oncology (From Hindi Brochure) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-deep mb-10 text-center">Translating Research into Public Awareness</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 hover:-translate-y-1 transition-transform">
              <ShieldAlert className="text-orange-500 mb-6" size={36} />
              <h4 className="font-bold text-xl text-deep mb-4">Tobacco: The Sweet Poison</h4>
              <p className="text-sm text-subtle leading-relaxed mb-4">
                Our epidemiological studies confirm that individuals consuming tobacco (Khaini, Gutkha, Beedi, Cigarette) have a <strong>15 to 20 times higher risk</strong> of developing cancer compared to non-users. We actively drive cessation programs to combat this epidemic.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100 hover:-translate-y-1 transition-transform">
              <Syringe className="text-teal-500 mb-6" size={36} />
              <h4 className="font-bold text-xl text-deep mb-4">Vaccine Efficacy Studies</h4>
              <p className="text-sm text-subtle leading-relaxed mb-4">
                We advocate and study the impact of preventive vaccines. Administering the HPV vaccine to girls between <strong>11 to 20 years of age</strong> significantly eliminates the lifetime risk of cervical cancer. We are actively researching similar preventive measures.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:-translate-y-1 transition-transform">
              <Dna className="text-blue-500 mb-6" size={36} />
              <h4 className="font-bold text-xl text-deep mb-4">Dietary & Lifestyle Factors</h4>
              <p className="text-sm text-subtle leading-relaxed mb-4">
                Our research extends to environmental factors. We educate the community on the risks of chemical fertilizers, pesticides, and carbide-ripened fruits, promoting a diet low in fat and red meat coupled with regular physical activity.
              </p>
            </div>
          </div>
        </div>

        {/* Animal Research Lab Integration */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
            <FlaskConical size={350} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white mb-6 backdrop-blur-sm border border-white/30">
                Pre-Clinical Studies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Animal Research Laboratory</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mb-6">
                Ethical and advanced pre-clinical research is the backbone of finding new cancer cures. SSIMS Hajipur houses a state-of-the-art Animal Research Lab dedicated to understanding tumor biology, testing novel drug efficacies, and ensuring the safety of next-generation therapies before they reach clinical trials.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-bold shadow-xl hover:scale-105 transition-all w-full md:w-auto text-lg">
                Collaborate With Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
