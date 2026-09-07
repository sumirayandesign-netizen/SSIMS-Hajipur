import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { FlaskConical, Microscope, BookOpen, Building2, Cpu, Dna } from "lucide-react";
const research = "/ssims/images/sshospital-research-centre.png";
const banner5 = "/ssims/banner/5.png";
const banner7 = "/ssims/banner/7.png";
const svc4 = "/ssims/services/4.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Innovation — SSIMS Hajipur" },
      { name: "description", content: "Clinical trials, translational research and AI-driven oncology innovation at SSIMS Hajipur." },
      { property: "og:title", content: "Research & Innovation — SSIMS" },
      { property: "og:description", content: "Turning discovery into everyday care." },
    ],
  }),
  component: Page,
});

function Page() {
  const areas = [
    { i: FlaskConical, t: "Clinical Trials", d: "12+ active trials across solid & hematologic cancers." },
    { i: Dna, t: "Molecular Oncology", d: "Genomic profiling & precision therapy." },
    { i: Cpu, t: "AI in Oncology", d: "AI-assisted imaging & risk prediction with IndiaAI." },
    { i: Microscope, t: "Translational Lab", d: "Bench to bedside — faster." },
    { i: BookOpen, t: "Publications", d: "60+ peer-reviewed papers since 2020." },
    { i: Building2, t: "Animal Research", d: "Dedicated pre-clinical research facility." },
  ];
  return (
    <>
      <PageHero eyebrow="Research" title="Discovery in service of every patient." subtitle="Our research programs turn scientific breakthroughs into safer, better and more affordable cancer care." crumbs={[{ label: "Research" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={research} alt="Lab" className="w-full h-[500px] object-cover rounded-[32px] shadow-glow ring-brand" loading="lazy" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep">A national research footprint, from Hajipur.</h2>
            <p className="mt-4 text-subtle leading-relaxed">In partnership with ICMR, IndiaAI and leading institutions, SSIMS is shaping the future of oncology through translational research and community epidemiology.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {areas.map((a) => (
                <div key={a.t} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-border/50">
                  <div className="h-11 w-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center"><a.i size={18} /></div>
                  <div className="mt-3 font-bold text-deep">{a.t}</div>
                  <p className="text-sm text-subtle mt-1">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-transparent to-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Focus Areas</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">From Bihar's tobacco belt to global oncology.</h2>
            <p className="mt-4 text-subtle">Hajipur sits in one of India's highest tobacco-consumption regions. Our research is grounded in the people we serve.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: banner5, t: "Translational Research", d: "Bench-to-bedside programs for head & neck, GI and breast cancers." },
              { img: svc4, t: "Pre-Clinical Labs", d: "Dedicated animal research facility for safer therapy development." },
              { img: banner7, t: "Epidemiology", d: "Field studies mapping tobacco, betel-nut and viral cancer risk in Bihar." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl overflow-hidden bg-white shadow-soft ring-1 ring-border/50">
                <img src={c.img} alt={c.t} className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="font-bold text-deep text-lg">{c.t}</div>
                  <p className="text-sm text-subtle mt-1">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}