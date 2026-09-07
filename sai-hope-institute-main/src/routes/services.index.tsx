import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Syringe, Activity, Stethoscope, Video, Users, HandHeart, Microscope, Ambulance, Droplet, FlaskConical, ArrowRight } from "lucide-react";

const opd = "/ssims/ssims-opd.png";
const community = "/ssims/community-oncology-banner.webp";
const blood = "/ssims/blood-donation.webp";
const banner3 = "/ssims/banner/3.png";
const banner4 = "/ssims/banner/4.png";
const banner5 = "/ssims/banner/5.png";
const banner6 = "/ssims/banner/6.png";
const svc1 = "/ssims/services/1.png";
const svc2 = "/ssims/services/2.png";
const svc3 = "/ssims/services/3.png";
const svc4 = "/ssims/services/4.jpg";

export const Route = createFileRoute("/services/")({ rc/routes/services.medical-oncology.tsx
  head: () => ({
    meta: [
      { title: "Cancer Care Services — SSIMS Hajipur" },
      { name: "description", content: "From medical oncology to palliative care — every cancer service under one roof at SSIMS Hajipur." },
      { property: "og:title", content: "Cancer Care Services — SSIMS Hajipur" },
      { property: "og:description", content: "Complete cancer care under one roof." },
    ],
  }),
  component: Page,
});

const services = [
  { slug: "/services/medical-oncology", img: svc1, i: Syringe, t: "Medical Oncology", d: "Chemotherapy, targeted therapy and immunotherapy delivered with clinical precision and warmth." },
  { slug: "/services/radiation-oncology", img: svc2, i: Activity, t: "Radiation Oncology", d: "State-of-the-art LINAC, IMRT and IGRT for accurate, safer treatment." },
  { slug: "/services/surgical-oncology", img: svc3, i: Stethoscope, t: "Surgical Oncology", d: "Minimally invasive and complex cancer surgeries by expert surgical teams." },
  { slug: "/services/telemedicine", img: banner4, i: Video, t: "Telemedicine", d: "Expert consults, second opinions and post-treatment follow-ups from anywhere." },
  { slug: "/services/opd-and-screening", img: opd, i: Users, t: "OPD & Screening", d: "Walk-in outpatient care, screening and diagnostics — every day." },
  { slug: "/services/palliative-care", img: banner6, i: HandHeart, t: "Palliative Care", d: "Comfort, dignity and family support at every stage of the journey." },
  { slug: "/services/community-oncology", img: community, i: Users, t: "Community Oncology", d: "Free camps and awareness across 200+ villages in Bihar." },
  { slug: "/services/research-and-trials", img: banner5, i: Microscope, t: "Research & Trials", d: "Access to leading clinical trials and translational research programs." },
  { slug: "/services/blood-donation-camps", img: blood, i: Droplet, t: "Blood Donation Camps", d: "Regular donation drives supporting patients across the region." },
  { slug: "/services/animal-research-lab", img: svc4, i: FlaskConical, t: "Animal Research Lab", d: "Pre-clinical research advancing next-generation therapies." },
  { slug: "/services/emergency-care", img: banner3, i: Ambulance, t: "Emergency Care", d: "24×7 emergency, trauma and critical oncology support." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Cancer Care" title="Complete cancer care, delivered with heart." subtitle="From your first screening to survivorship — every discipline, every stage, under one roof." crumbs={[{ label: "Services" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            /* Outer div ko hatakar Link laga diya hai, block class add ki hai */
            <Link to={s.slug} key={s.t} className="block group rounded-[28px] bg-white shadow-soft ring-1 ring-border/50 overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all cursor-pointer">
              <div className="grid sm:grid-cols-5 gap-0">
                <div className="sm:col-span-2 relative h-52 sm:h-full overflow-hidden">
                  <img src={s.img} alt={s.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent" />
                  <div className="absolute top-4 left-4 h-11 w-11 rounded-xl gradient-brand text-white flex items-center justify-center shadow-glow"><s.i size={20} /></div>
                </div>
                <div className="sm:col-span-3 p-7">
                  <h3 className="text-xl font-bold text-deep">{s.t}</h3>
                  <p className="mt-2 text-subtle leading-relaxed">{s.d}</p>
                  
                
              
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
