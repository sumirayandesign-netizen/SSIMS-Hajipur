import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQs — SSIMS Hajipur" }, { name: "description", content: "Answers to common questions about care, insurance and appointments at SSIMS." }] }),
  component: Page,
});

const faqs = [
  { q: "How do I book an appointment?", a: "Call, WhatsApp or use our online booking form. Navigators respond within 30 minutes on working days." },
  { q: "Do you accept Ayushman Bharat & CGHS?", a: "Yes — SSIMS is empanelled with major national and state health schemes." },
  { q: "Is a second opinion available online?", a: "Yes. Upload reports via telemedicine and get an expert opinion in 24–48 hours." },
  { q: "Do you offer financial assistance?", a: "As a not-for-profit, we run a patient assistance fund and help access govt. schemes." },
  { q: "Where is SSIMS located?", a: "Hajipur, Vaishali district, Bihar — 25 minutes from Patna." },
  { q: "Are family stay facilities available?", a: "Yes — attached family rooms, canteen and shuttle service are on campus." },
];

function Page() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero eyebrow="FAQs" title="Answers, clearly." subtitle="If you can't find what you need, our navigators are one call away." crumbs={[{ label: "FAQs" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl bg-white shadow-soft ring-1 ring-border/50 overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold text-deep">{f.q}</span>
                <ChevronDown size={18} className={`text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden"><p className="px-6 pb-6 text-subtle leading-relaxed">{f.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}