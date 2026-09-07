import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { HeartPulse, Sparkles, ShieldCheck, Users, Award, ArrowRight, Quote } from "lucide-react";
const doc1 = "/ssims/director-jk-singh.png";
const building = "/ssims/images/sims-hajipur.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SSIMS Hajipur — Our Story, Mission & Vision" },
      { name: "description", content: "Learn about SSIMS Hajipur — a not-for-profit cancer institute delivering compassionate, world-class oncology to Bihar." },
      { property: "og:title", content: "About SSIMS Hajipur" },
      { property: "og:description", content: "Our story, mission, vision and the people who make SSIMS possible." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const timeline = [
    { y: "2001", t: "Founded", d: "SSIMS begins as a community clinic in Hajipur." },
    { y: "2008", t: "Oncology wing", d: "Full-service oncology department launched." },
    { y: "2015", t: "Research center", d: "Translational research & animal facility opens." },
    { y: "2021", t: "Telemedicine", d: "Reaching 200+ villages across Bihar." },
    { y: "2026", t: "Comprehensive Institute", d: "350-bed cancer institute of national standing." },
  ];
  return (
    <>
      <PageHero eyebrow="About Us" title="A cancer institute built on hope, humility and healing." subtitle="For 25 years, SSIMS has been Bihar's trusted partner in the fight against cancer — one patient, one family, one village at a time." crumbs={[{ label: "About" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[32px] overflow-hidden shadow-glow ring-brand relative">
            <img src={building} alt="SSIMS building" className="w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute top-4 left-4 h-20 w-20 rounded-full bg-white/95 backdrop-blur ring-2 ring-primary/30 shadow-glow flex items-center justify-center overflow-hidden">
              <img src="/ssims-crest.jpg" alt="SSIMS crest" className="h-20 w-20 object-cover" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Story</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">From a small clinic to a comprehensive cancer institute.</h2>
            <p className="mt-5 text-subtle leading-relaxed">What began as a small community clinic in Hajipur has grown into a 350-bed comprehensive cancer institute — treating over 10,000 patients and reaching hundreds of villages through outreach and telemedicine. Every brick was laid with one belief: that world-class cancer care is a right, not a privilege.</p>
            <div className="mt-6 rounded-2xl glass p-6 shadow-soft">
              <Quote className="text-primary mb-2" size={20} />
              <p className="text-deep font-medium">"We are not building a hospital. We are building hope."</p>
              <div className="mt-3 text-sm text-subtle">— Founder & Chairperson</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-transparent to-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: HeartPulse, t: "Mission", d: "Compassionate, evidence-based, affordable cancer care for all." },
              { i: Sparkles, t: "Vision", d: "Eastern India's most trusted comprehensive cancer institute by 2030." },
              { i: ShieldCheck, t: "Values", d: "Compassion, integrity, innovation, and equity of access." },
            ].map((v) => (
              <div key={v.t} className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-border/50">
                <div className="h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center shadow-glow"><v.i size={22} /></div>
                <div className="mt-5 text-xl font-bold text-deep">{v.t}</div>
                <p className="mt-2 text-subtle">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Journey</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">25 years, one purpose.</h2>
          </div>
          <div className="mt-14 relative">
            <div aria-hidden className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal/50 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={t.y} className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className="pl-12 md:pl-0 md:px-10 relative">
                    <div className="absolute left-2 md:left-auto md:right-[-11px] md:top-6 top-2 h-5 w-5 rounded-full gradient-brand ring-4 ring-white shadow-glow" />
                    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/50">
                      <div className="text-primary font-bold">{t.y}</div>
                      <div className="mt-1 text-lg font-bold text-deep">{t.t}</div>
                      <p className="mt-1 text-sm text-subtle">{t.d}</p>
                    </div>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={doc1} alt="Founder" className="rounded-[32px] shadow-glow ring-brand w-full h-[520px] object-cover" loading="lazy" />
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Leadership</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">Meet the people behind the promise.</h2>
            <p className="mt-5 text-subtle leading-relaxed">A 150+ member team of clinicians, researchers, nurses, technologists and community health workers — united by one belief: every life is worth fighting for.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { i: Users, l: "150+ Team" },
                { i: Award, l: "40+ Awards" },
              ].map((x) => (
                <div key={x.l} className="rounded-2xl bg-white p-5 shadow-soft flex items-center gap-3 ring-1 ring-border/50">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><x.i size={18} /></div>
                  <div className="font-semibold text-deep">{x.l}</div>
                </div>
              ))}
            </div>
            <Link to="/doctors" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-white font-semibold shadow-glow">Meet Our Doctors <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}