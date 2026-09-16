import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, HeartHandshake, Brain, Activity, Flower2, PhoneCall, CheckCircle2, UserPlus, ShieldPlus } from 'lucide-react'

export const Route = createFileRoute('/services/palliative-care')({
  component: PalliativeCarePage,
})

function PalliativeCarePage() {
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
              Compassionate Care
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight mb-6">
              Comfort, Dignity, and Support <br/>
              <span className="text-primary">at Every Step.</span>
            </h1>
            <p className="text-lg text-subtle leading-relaxed mb-8">
              Cancer treatment is a difficult journey, but you don't have to walk it alone. Palliative Care at SSIMS Hajipur focuses on providing relief from the symptoms and stress of a serious illness. Our goal is to improve the quality of life for both the patient and their family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center justify-center rounded-full gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-1 transition-all">
                Consult Our Experts
              </Link>
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-deep shadow-soft ring-1 ring-border/50 hover:bg-slate-50 transition-all">
                <PhoneCall size={16} className="text-primary" /> Support Helpline
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
            {/* Using banner 6 as per your services.index.tsx mapping */}
            <img 
              src="/ssims/banner/6.png" 
              alt="Palliative Care and Support at SSIMS Hajipur" 
              className="w-full rounded-[2rem] shadow-soft border border-white object-cover aspect-[4/3]" 
            />
          </div>
        </div>

        {/* Core Pillars of Palliative Care */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-deep mb-4">A Holistic Approach to Healing</h2>
            <p className="text-subtle">
              Palliative care is not just for end-of-life; it is provided alongside active cancer treatments to manage side effects, alleviate pain, and offer emotional strength.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Pain & Symptom Management</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Expert medical intervention to control severe pain, nausea, fatigue, loss of appetite, and other distressing symptoms caused by cancer or chemotherapy.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Emotional Support</h3>
              <p className="text-sm text-subtle leading-relaxed">
                A cancer diagnosis brings anxiety and fear. Our compassionate counselors provide a safe space for patients to express their feelings and find emotional stability.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">Family Counseling</h3>
              <p className="text-sm text-subtle leading-relaxed">
                Cancer affects the whole family. We guide caregivers, helping them make difficult medical decisions, manage stress, and understand the care process.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 rounded-[28px] shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="h-14 w-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <Flower2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-deep mb-3">End-of-Life Care</h3>
              <p className="text-sm text-subtle leading-relaxed">
                In advanced stages, our focus shifts entirely to ensuring maximum comfort, preserving dignity, and providing spiritual support in a peaceful environment.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose SSIMS / Multidisciplinary Team Section */}
        <div className="mb-24 bg-slate-50/80 rounded-[3rem] p-8 md:p-12 shadow-inner border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-deep mb-6 flex items-center gap-3">
                <ShieldPlus className="text-primary" size={28} /> Our Care Team Includes:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span className="text-deep font-medium">Specialized Palliative Oncologists</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span className="text-deep font-medium">Pain Management Experts</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span className="text-deep font-medium">Clinical Psychologists & Counselors</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span className="text-deep font-medium">Dietitians & Nutritionists</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary shrink-0" /> <span className="text-deep font-medium">Specially Trained Oncology Nurses</span></li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-deep mb-6">Adding Life to Days, <br/> Not Just Days to Life.</h2>
              <p className="text-subtle mb-6 leading-relaxed">
                At SSIMS Hajipur, we believe that treating the disease is only half the battle; treating the person is what completes the care. Because we are a dedicated, single-center cancer institute, our specialists work closely together under one roof. 
              </p>
              <p className="text-subtle leading-relaxed">
                Your medical oncologist, pain specialist, and counselor sit together in the Tumor Board to design a comprehensive care plan that respects your wishes, values, and personal comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Support Call to Action Banner */}
        <div className="rounded-[3rem] p-8 md:p-16 gradient-brand text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-10 pointer-events-none">
            <UserPlus size={250} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Are Here For You and Your Family</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                If you or a loved one is struggling with the side effects of cancer treatment or navigating the challenges of advanced cancer, please reach out. Our palliative care team is ready to provide the comfort and guidance you deserve.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Talk to Our Care Team
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
