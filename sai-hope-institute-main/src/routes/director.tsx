import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"
import { GraduationCap, Medal, Star, HeartPulse, Trophy, Building2, Microscope, FileText, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react'

// GitHub par aapke upload kiye gaye location ke hisaab se image import
import directorImg from '../assets/director-jk-singh.png'

export const Route = createFileRoute('/director')({
  component: DirectorPage,
})

function DirectorPage() {
  return (
    <>
      <PageHero 
        eyebrow="Director's Profile" 
        title="Dr. J. K. Singh" 
        subtitle="Director & Senior Oncologist, SSIMS Hajipur" 
        crumbs={[{ label: "About" }, { label: "Our Director" }]} 
      />
      
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Vertical Photo & Quick Stats */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="rounded-[32px] overflow-hidden shadow-soft border-4 border-white relative bg-white">
                
                <img 
                  src={directorImg} 
                  alt="Dr. J. K. Singh Receiving Padma Shri" 
                  // Vertical image ko poora dikhane ke liye h-auto aur max-h set kiya gaya hai
                  className="w-full h-auto max-h-[85vh] object-cover object-top"
                />
                
                {/* 49+ Years Badge overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                  <div className="h-12 w-12 rounded-full gradient-brand flex items-center justify-center text-white shrink-0 shadow-glow">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-deep">49+</div>
                    <div className="text-xs font-semibold text-subtle tracking-wider uppercase">Years Treating Cancer</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Detailed Biography & Professional Journey */}
            <div className="lg:col-span-7">
              
              {/* Intro / Bio */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-600 mb-6 shadow-sm">
                  <Star size={16} className="fill-orange-500" /> PADMA SHRI AWARDEE (2012)
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight mb-6">
                  A pioneering figure in oncology who reshaped cancer care in Eastern India.
                </h2>
                <div className="prose prose-lg text-subtle leading-relaxed">
                  <p>
                    <strong>Dr. J.K. Singh</strong> is a renowned cancer specialist of National and International repute. With his untiring efforts, he has given a new shape to Cancer Management and care in Bihar and neighboring states.
                  </p>
                  <p>
                    The facility of cancer treatment was almost negligible in the Eastern part of the country before he took on this herculean task. His endeavor in this area has been widely appreciated for providing the best cancer care in the country, positively impacting hundreds of thousands of lives over nearly five decades.
                  </p>
                </div>
              </div>

              {/* Research & Academic Highlights (Stats Grid) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-soft transition-all hover:-translate-y-1">
                  <Microscope className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-black text-deep mb-1">62+</div>
                  <div className="text-[10px] font-bold text-subtle uppercase tracking-wider">Clinical Trials</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-soft transition-all hover:-translate-y-1">
                  <FileText className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-black text-deep mb-1">150+</div>
                  <div className="text-[10px] font-bold text-subtle uppercase tracking-wider">Publications</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-soft transition-all hover:-translate-y-1">
                  <Building2 className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-black text-deep mb-1">10+</div>
                  <div className="text-[10px] font-bold text-subtle uppercase tracking-wider">Govt. Projects</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-soft transition-all hover:-translate-y-1">
                  <GraduationCap className="mx-auto mb-2 text-primary" size={24} />
                  <div className="text-2xl font-black text-deep mb-1">6</div>
                  <div className="text-[10px] font-bold text-subtle uppercase tracking-wider">Oncology Books</div>
                </div>
              </div>

              {/* Prestigious Leadership Roles */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-deep mb-6 flex items-center gap-3">
                  <Briefcase className="text-primary" size={26} /> Professional Journey
                </h3>
                <div className="space-y-4">
                  {[
                    { role: "Managing Director", inst: "Sri Sai Institute of Medical Sciences (SSIMS), Hajipur", year: "2021 – Present" },
                    { role: "Director & Senior Oncologist", inst: "S.S. Hospital and Research Institute, Patna", year: "2005 – Present" },
                    { role: "Founder Director", inst: "Mahavir Cancer Institute and Research Centre, Patna", year: "2000 – 2015" },
                    { role: "Senior Faculty (Radium Institute)", inst: "Patna Medical College and Hospital (PMCH)", year: "1987 – 2000" },
                    { role: "Medical Faculty", inst: "Tata Memorial Hospital, Mumbai", year: "1985 – 1987" },
                  ].map((job, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="h-10 w-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-deep text-lg">{job.role}</h4>
                        <p className="text-subtle text-sm mt-0.5">{job.inst}</p>
                        <div className="text-xs font-semibold text-primary mt-2 bg-primary/10 inline-block px-2 py-1 rounded-md">{job.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* National Contributions & Affiliations */}
              <div className="mb-12 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-xl font-bold text-deep mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" size={26} /> National Contributions & Affiliations
                </h3>
                <ul className="space-y-4">
                  {[
                    "Member, Task Force on Cancer Control, Govt. of India.",
                    "Former National President of six different 'Oncological Associations' of India.",
                    "Ex. National Vice President, Indian Medical Association, Delhi (HQ).",
                    "National Secretary, Breast Cancer Foundation India.",
                    "National Advisor, Cancer Care India, Delhi (HQ)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-deep font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education Block */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-deep mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary" size={28} /> Education & Qualifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-deep">MD in Radiotherapy</h4>
                    <p className="text-subtle text-sm mt-1">Patna Medical College and Hospital</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-deep">MBBS</h4>
                    <p className="text-subtle text-sm mt-1">Patna Medical College and Hospital</p>
                  </div>
                </div>
              </div>

              {/* Detailed Achievements Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-deep mb-8 flex items-center gap-3">
                  <Trophy className="text-primary" size={28} /> Awards & Accolades
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2013", desc: "Received Life Time Achievement Award by Indian Medical Association, Delhi." },
                    { year: "2012", desc: "Conferred the Padma Shri Award by the Govt. of India for outstanding contribution to oncology." },
                    { year: "2010", desc: "Awarded the Gunilla Bental Oration Award (Radiation Oncology) by Rajiv Gandhi Cancer Institute, Delhi." },
                    { year: "2008", desc: "Honored with the Pratibha Samman Award by the Govt. of Bihar." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-transparent hover:border-blue-100 hover:shadow-soft transition-all">
                      <div className="mt-1 bg-amber-50 p-2.5 rounded-xl text-amber-600 shrink-0 shadow-sm border border-amber-100">
                        <Medal size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-deep text-lg">{item.year}</div>
                        <div className="text-subtle mt-1 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
