import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Calendar, ArrowRight } from "lucide-react";

// Correctly mapped images based on the main website screenshots
import imgJKSingh from "@/assets/01K21Z61CZNMBRE2272N5J5VMW.webp";
import imgADubey from "@/assets/01K38BHK0EBCPCE68GAH4K1RTP.webp";
import imgAkash from "@/assets/01K38BAZVXKQYW4PW6HGDXHYPY.webp";
import imgSanjaySharma from "@/assets/01K38AXC2NSTH8X8JT77WN0FYV.webp";
import imgAshok from "@/assets/01K38B8EEHT3866JV089AXXJK8.webp";
import imgAkhilanand from "@/assets/01K3154TD8YY6Y78DEXKY3FG6Z.webp";
import imgJyoti from "@/assets/01K38BV90JV1914CNPNXH1QSTV.webp";
import imgSanjayKumar from "@/assets/01K315BWJAXRTTWSW9XHM8EQ4T.webp";
import imgAbhishek from "@/assets/01K315CQ8YJTPHKT528DM98CAQ.webp";
import imgManish from "@/assets/01K315FPMVDFETREHCMVMJAK1G.webp";
import imgRavi from "@/assets/01K315GS2QRSB49KQRJVD3D0S7.webp";
import imgPreeti from "@/assets/01K315HR82BHZKQ3MZA7GF33NK.webp";
import imgSuresh from "@/assets/01K315JK6MC9WFHSBFP0C3C3RK.webp";
import imgSunil from "@/assets/01K315K93AXB299YMNPNWPN5BS.webp";
import imgTanveer from "@/assets/01K38CAKCP6109RAH357253K71.webp";
import imgVishal from "@/assets/01K315N4N9DC7SRZGESK2JHGCB.webp";
import imgAnupama from "@/assets/01K315S8548PYJ1WDMVJ7NPB4S.webp";
import imgSweta from "@/assets/01K38C2NR31J74JK9Y6WY7BBE0.webp";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — SSIMS Hajipur" },
      { name: "description", content: "Meet our team of expert doctors and specialists at SSIMS Hajipur." },
      { property: "og:title", content: "Our Doctors — SSIMS Hajipur" },
      { property: "og:description", content: "Comprehensive, Compassionate Cancer Care for Communities in Bihar." },
    ],
  }),
  component: Page,
});

// Ordered exactly as they appear on the main website
const doctors = [
  { img: imgJKSingh, name: "Dr. J K Singh", role: "Senior Oncologist", exp: "Senior Consultant", tags: ["Oncology"] },
  { img: imgADubey, name: "Dr. A. Dubey", role: "Head & Neck Onco", exp: "Consultant", tags: ["Head & Neck", "Oncology"] },
  { img: imgAkash, name: "Dr. Akash Kumar Singh", role: "Oncologist", exp: "Consultant", tags: ["Oncology"] },
  { img: imgSanjaySharma, name: "Dr. Sanjay Sharma", role: "Oncologist", exp: "Consultant", tags: ["Oncology"] },
  { img: imgAshok, name: "Dr. Ashok Kumar Singh", role: "Urologist", exp: "Consultant", tags: ["Urology"] },
  { img: imgAkhilanand, name: "Dr. Akhilanand Singh", role: "Physician", exp: "Consultant", tags: ["Internal Medicine"] },
  { img: imgJyoti, name: "Dr. Jyoti Prakash", role: "Senior Dental Surgeon", exp: "Senior Consultant", tags: ["Dental Surgery"] },
  { img: imgSanjayKumar, name: "Dr. Sanjay Kumar Singh", role: "Anesthesiologist", exp: "Consultant", tags: ["Anesthesiology"] },
  { img: imgAbhishek, name: "Dr. Abhishek Rohan", role: "Senior Dental Surgeon", exp: "Senior Consultant", tags: ["Dental Surgery"] },
  { img: imgManish, name: "Dr. Manish Jaipuriyar", role: "Pathologist", exp: "Consultant", tags: ["Pathology"] },
  { img: imgRavi, name: "Dr. Ravi Deo", role: "Oncologist", exp: "Consultant", tags: ["Oncology"] },
  { img: imgPreeti, name: "Dr. Preeti Jain", role: "Surgical Oncologist", exp: "Consultant Surgeon", tags: ["Onco-Surgery"] },
  { img: imgSuresh, name: "Dr. Suresh H Advani", role: "Sr. Oncologist", exp: "Senior Consultant", tags: ["Oncology"] },
  { img: imgSunil, name: "Dr. Sunil Kumar Agrawal", role: "Pulmonologist", exp: "Consultant", tags: ["Pulmonology"] },
  { img: imgTanveer, name: "Dr. Tanveer Abdul Majeed", role: "Surgical Oncology", exp: "Consultant Surgeon", tags: ["Onco-Surgery"] },
  { img: imgVishal, name: "Dr. Vishal M. Singh", role: "Anesthesiologist", exp: "Consultant", tags: ["Anesthesiology"] },
  { img: imgAnupama, name: "Dr. Anupama", role: "Gynecologic Surgery", exp: "Consultant Surgeon", tags: ["Gynecology", "Surgery"] },
  { img: imgSweta, name: "Dr. Sweta Das", role: "Medical & Clinical Oncology", exp: "Consultant", tags: ["Medical Oncology"] },
];

function Page() {
  return (
    <>
      <PageHero 
        eyebrow="Our Team" 
        title="Meet Our Expert Doctors" 
        subtitle="A multidisciplinary team of India's leading specialists — accessible, empathetic, world-class." 
        crumbs={[{ label: "Doctors" }]} 
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <div key={d.name} className="group rounded-3xl bg-white shadow-soft ring-1 ring-border/50 overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all">
              <div className="relative h-80 overflow-hidden bg-muted">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{d.role}</div>
                <h3 className="mt-1 text-xl font-bold text-deep">{d.name}</h3>
                <p className="mt-1 text-sm text-subtle">{d.exp}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-primary/10 text-primary px-2.5 py-1 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2 text-white text-sm font-semibold shadow-glow">
                    <Calendar size={14} /> Book
                  </Link>
                  <span className="text-sm font-semibold text-deep/70 cursor-pointer">
                    Profile <ArrowRight size={14} className="inline" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
