import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

// Donation section ke liye zaroori purani images
const blood = "/ssims/blood-donation.webp";
const organ = "/ssims/organ-doantion.webp";
const medicine = "/ssims/medicine-donation.webp";
const fund = "/ssims/fund-donation.webp";

export const Route = createFileRoute("/activity/community-level")({
  head: () => ({
    meta: [
      { title: "Community Oncology — SSIMS Hajipur" },
      { name: "description", content: "Village camps, screening drives and telemedicine reaching remote Bihar." },
      { property: "og:title", content: "Community Oncology — SSIMS" },
      { property: "og:description", content: "Care that reaches every village." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero 
        eyebrow="Community Impact" 
        title="Care that reaches every village of Bihar." 
        subtitle="Because early detection saves lives, and no one should be left behind because of distance or income." 
        crumbs={[{ label: "Activity" }, { label: "Community Level" }]} 
      />
      
      {/* Top Section: Text aur uske bagal me Community Image */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Headline aur Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep leading-tight">
                Empowering communities through active healthcare outreach.
              </h2>
              <div className="mt-6 mb-8 h-1.5 w-20 gradient-brand rounded-full"></div>
              
              <div className="prose prose-lg text-subtle leading-relaxed">
                <p>
                  Our vision of a healthier society extends far beyond clinical treatments. We actively organize comprehensive health awareness campaigns, regular screening camps, and preventive care programs across remote and underserved areas. 
                </p>
                <p className="mt-4">
                  Through free medicine distribution, continuous blood donation drives, and vital training for local healthcare workers, our community initiatives are designed to make early detection and quality medical consultations accessible to everyone, regardless of their geographic location.
                </p>
              </div>
            </div>

            {/* Right Side: community.webp Image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-soft ring-1 ring-border/50 h-[450px]">
              <img 
                src="/ssims/community.webp" 
                alt="Community Outreach" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                loading="lazy" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Nayi Gallery, Stats aur Donation Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* GitHub par Upload ki gayi Nayi Gallery Images */}
          <div className="grid gap-4 md:grid-cols-3">
            <img src="/ssims/Community Gallery (1).webp" alt="Gallery 1" className="col-span-2 h-80 w-full object-cover rounded-3xl shadow-soft transition-transform hover:scale-[1.02]" loading="lazy" />
            <img src="/ssims/Community Gallery (2).webp" alt="Gallery 2" className="h-80 w-full object-cover rounded-3xl shadow-soft transition-transform hover:scale-[1.02]" loading="lazy" />
            <img src="/ssims/Community Gallery (3).webp" alt="Gallery 3" className="h-80 w-full object-cover rounded-3xl shadow-soft transition-transform hover:scale-[1.02]" loading="lazy" />
            <img src="/ssims/Community Gallery (4).webp" alt="Gallery 4" className="col-span-2 h-80 w-full object-cover rounded-3xl shadow-soft transition-transform hover:scale-[1.02]" loading="lazy" />
          </div>
          
          {/* Stats Block */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "200+", l: "Villages reached" },
              { n: "45,000+", l: "Free screenings" },
              { n: "120+", l: "Health camps" },
              { n: "8,000+", l: "Awareness sessions" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-border/50 hover:-translate-y-1 transition-all">
                <div className="text-3xl font-extrabold text-gradient">{s.n}</div>
                <div className="mt-2 text-sm text-subtle">{s.l}</div>
              </div>
            ))}
          </div>
          
          {/* Ways to Give Block */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Ways to give
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">Donate. Every gift saves a life.</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: blood, t: "Blood Donation", d: "Join our regular donor drives for cancer patients." },
                { img: organ, t: "Organ Donation", d: "Pledge to give life beyond life." },
                { img: medicine, t: "Medicine Donation", d: "Donate essential chemo & supportive medicines." },
                { img: fund, t: "Fund a Treatment", d: "Sponsor treatment for patients below poverty line." },
              ].map((c) => (
                <div key={c.t} className="rounded-3xl overflow-hidden bg-white shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all cursor-pointer">
                  <img src={c.img} alt={c.t} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <div className="font-bold text-deep">{c.t}</div>
                    <p className="text-sm text-subtle mt-1">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
