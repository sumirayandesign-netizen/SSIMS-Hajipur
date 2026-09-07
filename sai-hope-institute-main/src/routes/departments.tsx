import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Syringe, Activity, Stethoscope, Microscope, HeartPulse, Baby, Brain, Bone, Eye, ArrowRight } from "lucide-react";

const centres = [
  { img: "/ssims/images/sshospital-research-centre.png", t: "S.S. Hospital & Research Centre", d: "Flagship tertiary care & translational research campus." },
  { img: "/ssims/images/ss-hospital-patna.png", t: "S.S. Hospital, Patna", d: "Advanced OPD, diagnostics and surgical suites in the capital." },
  { img: "/ssims/images/sims-hajipur.webp", t: "SSIMS Hajipur Cancer Institute", d: "350-bed comprehensive cancer institute serving Bihar." },
];

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — SSIMS Hajipur" },
      { name: "description", content: "Explore all clinical departments at SSIMS Hajipur — medical, radiation and surgical oncology, palliative care, and more." },
      { property: "og:title", content: "Departments — SSIMS Hajipur" },
      { property: "og:description", content: "Comprehensive multidisciplinary departments under one roof." },
    ],
  }),
  component: Page,
});

const depts = [
  { i: Syringe, t: "Medical Oncology", d: "Chemotherapy, targeted therapy & immunotherapy." },
  { i: Activity, t: "Radiation Oncology", d: "LINAC, IMRT, IGRT & brachytherapy." },
  { i: Stethoscope, t: "Surgical Oncology", d: "Minimally invasive & complex cancer surgeries." },
  { i: Microscope, t: "Pathology & Genomics", d: "Molecular diagnostics & tumor profiling." },
  { i: HeartPulse, t: "Palliative Care", d: "Comfort, dignity & family support." },
  { i: Baby, t: "Pediatric Oncology", d: "Specialised care for young patients." },
  { i: Brain, t: "Neuro-Oncology", d: "Brain & CNS tumor management." },
  { i: Bone, t: "Ortho-Oncology", d: "Musculoskeletal cancers & limb salvage." },
  { i: Eye, t: "Head & Neck", d: "Oral, ENT and thyroid cancers." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Departments" title="Nine specialised departments. One coordinated team." subtitle="Every cancer is different. Our multidisciplinary tumor board designs a care plan tailored to you." crumbs={[{ label: "Departments" }]} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Centres</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-deep">Three campuses. One promise of care.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {centres.map((c) => (
              <div key={c.t} className="group rounded-3xl overflow-hidden bg-white shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={c.img} alt={c.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="font-bold text-deep text-lg">{c.t}</div>
                  <p className="text-sm text-subtle mt-1">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depts.map((d) => (
            <Link key={d.t} to="/services" className="group relative rounded-3xl bg-white p-8 shadow-soft ring-1 ring-border/50 hover:-translate-y-1 hover:shadow-glow transition-all overflow-hidden">
              <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center shadow-glow"><d.i size={22} /></div>
              <h3 className="relative mt-5 text-xl font-bold text-deep">{d.t}</h3>
              <p className="relative mt-2 text-subtle">{d.d}</p>
              <div className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}