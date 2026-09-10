import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from "@/components/site/page-hero"
import { GraduationCap, Medal, Star, ShieldPlus, HeartPulse, Trophy } from 'lucide-react'

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
            
            {/* Left Column: Vertical Photo & Quick Stats (Image ko bada karne ke liye col-span-5 kiya gaya hai) */}
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
            
            {/* Right Column: Bio, Education & Achievements (Takes remaining 7 columns) */}
            <div className="lg:col-span-7">
              
              {/* Intro / Bio */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold tracking-wide text-orange-600 mb-6 shadow-sm">
                  <Star size={16} className="fill-orange-500" /> PADMA SHRI AWARDEE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight mb-6">
                  A pioneering figure in oncology transforming cancer care in Bihar and beyond.
                </h2>
                <div className="prose prose-lg text-subtle leading-relaxed">
                  <p>
                    Dr. J. K. Singh, Director of S.S. Hospital Patna and SSIMS Hajipur, is a nationally and internationally recognized leader in oncology. With an unwavering commitment to public health, he has redefined community-based cancer care across India. 
                  </p>
                  <p>
                    His visionary leadership has established S.S. Hospital as a center of excellence in comprehensive cancer management. His work spans clinical practice, education, research, and outreach, making a lasting impact on thousands of lives.
                  </p>
                </div>
              </div>

              {/* Education Block */}
              <div className="grid sm:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-soft ring-1 ring-border/50 flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-primary shrink-0"><GraduationCap size={24} /></div>
                  <div>
                    <h4 className="font-bold text-deep text-lg">Education</h4>
                    <p className="text-subtle text-sm mt-1">MD in Radiotherapy / Medical Oncology</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-soft ring-1 ring-border/50 flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-xl text-orange-500 shrink-0"><ShieldPlus size={24} /></div>
                  <div>
                    <h4 className="font-bold text-deep text-lg">Top Recognition</h4>
                    <p className="text-subtle text-sm mt-1">Padma Shri Awardee (2012)</p>
                  </div>
                </div>
              </div>

              {/* Detailed Achievements List */}
              <div>
                <h3 className="text-2xl font-bold text-deep mb-8 flex items-center gap-3">
                  <Trophy className="text-primary" size={28} /> Achievements & Recognition
                </h3>
                <div className="space-y-4">
                  {[
                    { year: "2012", desc: "Received Padma Shri Award for outstanding contribution to cancer care." },
                    { year: "2010", desc: "Awarded the Gunilla Benta Ovation Award by Rajiv Gandhi Cancer Institute, Delhi." },
                    { year: "2008", desc: "Honored with the Pratibha Samman Award for best doctor of Bihar." },
                    { year: "2013", desc: "Appointed Brand Ambassador for Cancer Control Programme (Bihar) by the Health Ministry." },
                    { year: "2013", desc: "Received Life-time Achievement Award by Indian Medical Association, Delhi." },
                    { year: "2014", desc: "Awarded the Rajiv Gandhi Gold Medal for excellence in Community Oncology." },
                    { year: "2014", desc: "Honored with Life-time Achievement Award by Dainik Jagran." },
                    { year: "2015", desc: "Received the Health Excellence Award by Prime Time, Delhi." },
                    { year: "2015", desc: "Recognized by London University for lecture on healthcare in South-East Asia." },
                    { year: "2015", desc: "Awarded Fellowship by Applied Research Lab, TPS College, Patna." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-transparent hover:border-blue-100 hover:shadow-soft transition-all">
                      <div className="mt-1 bg-green-50 p-2.5 rounded-xl text-green-600 shrink-0 shadow-sm">
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
