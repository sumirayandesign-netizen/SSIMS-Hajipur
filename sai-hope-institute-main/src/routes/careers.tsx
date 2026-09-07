import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ArrowRight, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — SSIMS Hajipur" }, { name: "description", content: "Join a purpose-driven team building the future of cancer care in Bihar." }] }),
  component: Page,
});

const jobs = [
  { t: "Consultant — Medical Oncology", loc: "Hajipur", type: "Full-time" },
  { t: "Clinical Research Coordinator", loc: "Hajipur", type: "Full-time" },
  { t: "Radiation Therapist", loc: "Hajipur", type: "Full-time" },
  { t: "Community Health Officer", loc: "Field / Bihar", type: "Full-time" },
  { t: "Data Scientist — AI Oncology", loc: "Hybrid", type: "Full-time" },
  { t: "Palliative Care Nurse", loc: "Hajipur", type: "Full-time" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build a career that saves lives." subtitle="Join 150+ clinicians and researchers shaping the future of cancer care in Bihar." crumbs={[{ label: "Careers" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-4">
          {jobs.map((j) => (
            <div key={j.t} className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/50 hover:-translate-y-0.5 hover:shadow-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center shadow-glow"><Briefcase size={18} /></div>
                <div>
                  <div className="font-bold text-deep">{j.t}</div>
                  <div className="text-sm text-subtle">{j.loc} • {j.type}</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold">Apply <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}