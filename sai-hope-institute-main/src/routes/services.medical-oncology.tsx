import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Pill, Shield, Target, Activity, CheckCircle2, PhoneCall } from 'lucide-react'

export const Route = createFileRoute('/services/medical-oncology')({
  component: MedicalOncologyPage,
})

function MedicalOncologyPage() {
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
              Non-Invasive Treatment
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Advanced Medical Oncology <br/>
              <span className="text-primary">at SSIMS Hajipur.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Medical oncology is a core pillar of our comprehensive cancer treatment modalities. It focuses on treating cancer with advanced, non-surgical methods including chemotherapy, immunotherapy, and targeted therapies.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/ssims/services/1.png" 
              alt="Medical Oncology Experts at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white" 
            />
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">Treatments Used in Medical Oncology</h2>
            <p className="text-subtle">
              Based on the type and stage of cancer, our expert oncologists design a customized treatment plan using the most effective systemic therapies available today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chemotherapy */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Pill size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Chemotherapy</h3>
              <p className="text-subtle leading-relaxed">
                Chemotherapy involves the delivery of powerful anti-cancer drugs to kill or slow the growth of fast-dividing cancer cells. At SSIMS, we use the latest protocols to maximize effectiveness while actively managing and minimizing side effects for patient comfort.
              </p>
            </div>

            {/* Immunotherapy */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Immunotherapy</h3>
              <p className="text-subtle leading-relaxed">
                This groundbreaking treatment empowers your body's own immune system to recognize and attack cancer cells. By using specialized therapies like Monoclonal Antibodies, we help your immune system overcome the barriers cancer cells use to hide.
              </p>
            </div>

            {/* Targeted Therapy */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Targeted Therapy</h3>
              <p className="text-subtle leading-relaxed">
                Unlike traditional chemotherapy, targeted therapy is precision medicine. It specifically targets the genetic mutations or proteins that allow cancer cells to survive and spread, causing less damage to normal, healthy cells.
              </p>
            </div>

            {/* Hormone Therapy */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:shadow-glow transition-all group">
              <div className="h-14 w-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Hormone Therapy</h3>
              <p className="text-subtle leading-relaxed">
                Certain cancers, such as specific breast and prostate cancers, rely on hormones to grow. Hormone therapy blocks or lowers the amount of these hormones in the body, effectively starving the cancer cells and halting their progression.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose SSIMS Section */}
        <div className="bg-slate-50/80 rounded-[3rem] p-8 md:p-16 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-deep mb-6">Why Choose SSIMS Hajipur for Medical Oncology?</h2>
              <p className="text-lg text-subtle mb-8">
                As Bihar's premier, dedicated cancer institute, we bring world-class oncology care directly to you. You don't need to travel to multiple hospitals or cities—we provide comprehensive care under one single roof.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Personalized Treatment Plans tailored to your specific genetic profile.",
                  "Multi-disciplinary Tumor Board ensuring collaborative expert decisions.",
                  "Everything under one roof: diagnostics, chemo-wards, and pharmacy.",
                  "Affordable & compassionate care without compromising on quality."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-deep font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-border/50 text-center">
              <div className="text-5xl font-extrabold text-primary mb-4">Focus</div>
              <h3 className="text-2xl font-bold text-deep mb-4">Patient-First Approach</h3>
              <p className="text-subtle mb-8">
                From managing treatment side-effects to psychological support and nutritional counseling, our dedicated team ensures you and your family are supported at every step of the journey.
              </p>
              <Link to="/doctors" className="inline-flex w-full items-center justify-center rounded-xl bg-deep px-6 py-3.5 text-sm font-semibold text-white hover:bg-deep/90 transition-all">
                Meet Our Oncologists
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
