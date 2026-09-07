import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  HeartPulse, Microscope, Stethoscope, Users, Video, FlaskConical, HandHeart,
  ArrowRight, Quote, CheckCircle2, ChevronDown, Calendar, Award, PlayCircle,
  Phone, MapPin, Sparkles, ShieldCheck, ChevronRight, ChevronLeft, Building2,
  Syringe, Activity, Globe2, BookOpen, Droplet, Pill, Beaker
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSIMS Hajipur — Sri Sai Institute of Medical Sciences | Cancer Care in Bihar" },
      { name: "description", content: "Comprehensive, compassionate cancer care for communities in Bihar. SSIMS Hajipur — the dream project of Padma Shri Dr. J.K. Singh — offers OPD, community oncology, telemedicine, palliative care and research." },
      { property: "og:title", content: "SSIMS Hajipur — Compassionate Cancer Care for Bihar" },
      { property: "og:description", content: "Non-profit cancer institute in Hajipur, Bihar — affordable OPD, community oncology, telemedicine, palliative care & research." },
      { property: "og:image", content: "https://ssimshajipur.org/assets/banner/1.png" },
      { name: "twitter:image", content: "https://ssimshajipur.org/assets/banner/1.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function useCounter(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { n, ref };
}

const banners = [
  "/ssims/banner/1.png",
  "/ssims/banner/3.png",
  "/ssims/banner/4.png",
  "/ssims/banner/5.png",
  "/ssims/banner/6.png",
  "/ssims/banner/7.png",
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[32px] shadow-glow ring-1 ring-white/40">
      {banners.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`SSIMS banner ${idx + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div aria-hidden className="absolute inset-0 gradient-brand-soft" />
      <div aria-hidden className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-floaty" />
      <div aria-hidden className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-floaty" style={{ animationDelay: "-3s" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles size={14} /> Padma Shri Dr. J.K. Singh's Dream Project
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep leading-[1.05]">
            Comprehensive, <span className="text-gradient">Compassionate Cancer Care</span> for Communities in Bihar.
          </h1>
          <p className="mt-5 text-lg text-subtle max-w-xl">
            Sri Sai Institute of Medical Sciences (SSIMS), Hajipur — a not-for-profit oncology institute delivering affordable, world-class cancer treatment, community outreach and research across Bihar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-white font-semibold shadow-glow hover:-translate-y-0.5 transition animate-glow-pulse">
              <Calendar size={16} /> Book an Appointment
            </Link>
            <a href="tel:+919431021001" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-deep font-semibold shadow-soft ring-1 ring-border hover:ring-primary/40 transition">
              <Phone size={16} className="text-primary" /> +91 94310 21001
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: "49+", v: "Yrs Experience" },
              { k: "22+", v: "Govt. Empanelments" },
              { k: "100%", v: "Non-Profit" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass p-4 shadow-soft">
                <div className="text-2xl font-extrabold text-gradient">{s.k}</div>
                <div className="text-xs text-subtle mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] lg:aspect-[5/4]">
            <HeroCarousel />
            <div className="absolute -left-6 top-6 rounded-2xl bg-white p-4 shadow-glow ring-1 ring-border/40 flex items-center gap-3 animate-floaty">
              <div className="h-10 w-10 rounded-xl gradient-brand text-white flex items-center justify-center"><ShieldCheck size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-subtle">Empanelled</div>
                <div className="text-sm font-bold text-deep">Ayushman Bharat • CGHS</div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl bg-white p-4 shadow-glow ring-1 ring-border/40 flex items-center gap-3 animate-floaty" style={{ animationDelay: "-2s" }}>
              <div className="h-10 w-10 rounded-xl bg-teal text-white flex items-center justify-center"><HeartPulse size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-subtle">24×7 Care Line</div>
                <div className="text-sm font-bold text-deep">Real humans. Always.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const brands = [
  { src: "/ssims/brands/4.png", alt: "Ministry of Health", href: "https://mohfw.gov.in/" },
  { src: "/ssims/brands/5.png", alt: "Swachh Bharat Mission", href: "https://swachhbharatmission.ddws.gov.in/" },
  { src: "/ssims/brands/6.png", alt: "Ayushman Bharat", href: "https://beneficiary.nha.gov.in/" },
  { src: "/ssims/brands/1.png", alt: "IndiaAI", href: "https://indiaai.gov.in/" },
  { src: "/ssims/brands/2.png", alt: "CGHS", href: "https://cghs.mohfw.gov.in/" },
  { src: "/ssims/brands/3.png", alt: "Digital India", href: "https://www.digitalindia.gov.in/" },
];

function TrustBar() {
  return (
    <section className="py-10 border-y border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs uppercase tracking-[0.22em] text-subtle font-semibold mb-6">Recognitions & Empanelments</div>
        <div className="overflow-hidden">
          <div className="flex gap-14 items-center animate-marquee w-max">
            {[...brands, ...brands].map((b, i) => (
              <a key={i} href={b.href} target="_blank" rel="noreferrer" className="shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition">
                <img src={b.src} alt={b.alt} className="h-14 w-auto object-contain" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative animate-tilt3d">
            <div aria-hidden className="absolute -inset-6 gradient-brand rounded-[36px] blur-2xl opacity-30" />
            <img src="/ssims/director-jk-singh.png" alt="Dr. J.K. Singh, Padma Shri" className="relative rounded-[32px] shadow-glow ring-1 ring-white/40 w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-4 shadow-glow ring-1 ring-border/40 max-w-[220px]">
            <div className="flex items-center gap-2 text-primary font-bold text-sm"><Award size={16} /> Padma Shri Awardee</div>
            <div className="text-xs text-subtle mt-1">49+ years of oncology leadership</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] font-bold text-primary">About SSIMS Hospital</div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep">A Message from Our Founder, <span className="text-gradient">Dr. J.K. Singh</span></h2>
          <p className="mt-5 text-subtle leading-relaxed">
            Sri Sai Institute of Medical Sciences (SSIMS), Hajipur is the dream project of Padma Shri Dr. Jitendra Kumar Singh, a visionary who transformed cancer care accessibility in Bihar.
          </p>
          <p className="mt-3 text-subtle leading-relaxed">
            As a unit of S.S. Hospital and Research Centre, Patna, SSIMS focuses on affordable cancer care, community outreach and research. Operated by the non-profit Buddha Unity Trust, the institute is dedicated to enhancing lives through education, medical services and rural health empowerment.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Delivering world-class treatment at an affordable cost, accessible to all.",
              "We don't just treat diseases — we care for the whole person.",
              "Join us in the fight through prevention, early detection, and timely, effective treatment.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-deep"><CheckCircle2 className="text-teal shrink-0 mt-0.5" size={18} /> <span>{t}</span></li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-white font-semibold shadow-glow hover:-translate-y-0.5 transition">
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Stethoscope,
    tab: "OPD Services",
    img: "/ssims/ssims-opd.png",
    title: "Accessible OPD Services for All",
    body: "At SSIMS, our Outpatient Department (OPD) Services are designed with a community-first approach, ensuring that high-quality cancer care begins with easy and affordable access to expert consultations.",
    bullets: [
      ["Personalized Consultations", "Attended by experienced oncologists and specialists."],
      ["Affordable & Non-Profit Model", "Expert care at low cost without compromising on quality."],
      ["Efficient Service Flow", "Minimal waiting times and streamlined diagnostics."],
    ],
  },
  {
    icon: Users,
    tab: "Community Oncology",
    img: "/ssims/community-oncology-banner.webp",
    title: "Reaching Communities with Cancer Care",
    body: "Community Oncology is at the heart of our mission to ensure that no one is left behind in the fight against cancer. We bring awareness, screening, diagnosis and treatment referrals directly to villages.",
    bullets: [
      ["Health Camps in Rural Areas", "Regular screening and consultation camps to detect cases early."],
      ["Awareness & Education Drives", "Workshops in schools, community centres and villages."],
      ["Referral Networks", "Guiding patients toward appropriate specialised care."],
    ],
  },
  {
    icon: FlaskConical,
    tab: "Research Activities",
    img: "/ssims/services/3.png",
    title: "Innovative Research Driving Better Care",
    body: "In collaboration with S.S. Hospital and Research Centre, Patna, our research teams conduct clinical, biomedical and community-based research focused on the unique cancer challenges of our population.",
    bullets: [
      ["Preclinical Studies & Biomarker Research", "Animal research labs and biomarker testing for targeted therapies."],
      ["Drug Response & Clinical Trials", "Ensuring treatments are effective, safe and affordable."],
      ["Public Health Research", "Regional cancer patterns and prevention strategies."],
    ],
  },
  {
    icon: Video,
    tab: "Telemedicine",
    img: "/ssims/services/2.png",
    title: "Expert Cancer Care, Anywhere Anytime",
    body: "Our Telemedicine Services bridge the gap between specialised cancer care and patients living in remote or underserved areas — qualified guidance without the need for travel.",
    bullets: [
      ["Real-Time Video Consultations", "Discuss symptoms, review reports, adjust plans from home."],
      ["Follow-Ups & Second Opinions", "Continuity of care and expert second opinions."],
      ["Affordable & Accessible", "Cost-effective services for low-income families."],
    ],
  },
  {
    icon: HandHeart,
    tab: "Palliative Care",
    img: "/ssims/services/4.jpg",
    title: "Compassionate Palliative Care",
    body: "Our Palliative Care Services provide comfort, dignity and support to cancer patients and their families — relieving pain, managing symptoms and improving overall quality of life.",
    bullets: [
      ["Personalized Care Plans", "Tailored approaches matching condition and goals."],
      ["Pain & Symptom Management", "Specialised medical support for comfort."],
      ["Holistic Healing", "Emotional, psychological and spiritual support."],
    ],
  },
  {
    icon: Microscope,
    tab: "Animal Research Lab",
    img: "/ssims/services/1.png",
    title: "Advancing Cancer Science Through Research",
    body: "The Animal Research Lab supports preclinical studies that help researchers understand cancer biology, test new therapies and evaluate safety of emerging drugs before human trials.",
    bullets: [
      ["Ethical & Regulated Research", "Strict ethical guidelines and regulatory standards."],
      ["Preclinical Innovation", "Foundational studies for affordable, effective therapies."],
      ["Focus on Indian Needs", "Solutions for Indian patients and resource-limited settings."],
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <section className="py-24 bg-brand-soft/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Our Services</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Everything cancer care needs — <span className="text-gradient">under one roof.</span></h2>
        </div>
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {services.map((sv, i) => (
              <button
                key={sv.tab}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl p-4 md:p-5 flex items-center gap-3 transition-all ring-1 card-3d ${active === i ? "gradient-brand text-white shadow-glow ring-transparent" : "bg-white text-deep ring-border/60 hover:ring-primary/40 hover:-translate-y-0.5"}`}
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${active === i ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                  <sv.icon size={20} />
                </div>
                <div className="font-semibold text-sm md:text-base">{sv.tab}</div>
              </button>
            ))}
          </div>
          <div key={s.tab} className="lg:col-span-8 rounded-[28px] bg-white shadow-soft ring-1 ring-border/50 overflow-hidden grid md:grid-cols-2 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full gradient-brand text-white px-3 py-1 text-xs font-semibold shadow-glow">{s.tab}</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-deep">{s.title}</h3>
              <p className="mt-3 text-subtle leading-relaxed text-sm">{s.body}</p>
              <ul className="mt-5 space-y-3">
                {s.bullets.map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="text-teal shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="font-semibold text-deep text-sm">{t}</div>
                      <div className="text-xs text-subtle">{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm">Explore all services <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DirectorDesk() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-[36px] overflow-hidden gradient-brand text-white p-8 md:p-14 shadow-glow">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative animate-floaty">
                <div className="absolute -inset-2 rounded-3xl bg-white/20 blur-xl" />
                <img src="/ssims/drjksingh-doctor.png" alt="Dr. J.K. Singh" className="relative rounded-3xl w-full max-w-[280px] mx-auto ring-4 ring-white/30 shadow-2xl object-cover" loading="lazy" />
              </div>
            </div>
            <div className="md:col-span-2">
              <Quote size={40} className="text-white/50" />
              <p className="mt-3 text-xl md:text-2xl font-display font-semibold leading-snug">
                "At SSIMS, our mission is to deliver compassionate, affordable cancer care with innovation, research and outreach — bringing hope and healing to every corner of society."
              </p>
              <div className="mt-6">
                <div className="text-lg font-bold">Dr. J.K. Singh</div>
                <div className="text-sm text-white/80">Padma Shri Awardee • Director, SSIMS Hajipur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const centers = [
  { img: "/ssims/images/sshospital-research-centre.png", title: "S.S. Research Institute", desc: "A pioneering hub in Patna for clinical trials and oncology research, advancing cancer therapies and bridging innovation with patient care.", href: "https://maps.app.goo.gl/PvqQK7mXuqCEEMbv9" },
  { img: "/ssims/images/ss-hospital-patna.png", title: "S.S. Cancer Hospital", desc: "A comprehensive cancer treatment facility in Patna offering surgery, chemotherapy, radiation and palliative care with a patient-first approach.", href: "https://maps.app.goo.gl/nzq7TJaqK6qirS1S9" },
  { img: "/ssims/images/sims-hajipur.webp", title: "Sri Sai Institute of Medical Sciences", desc: "A rural cancer care initiative in Hajipur focused on affordable treatment, community outreach and research for underserved populations.", href: "https://maps.app.goo.gl/Y9gQT5KetJ7YTDVc8" },
];

function Centers() {
  return (
    <section className="py-24 relative">
      <div aria-hidden className="absolute inset-0 gradient-brand-soft" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Our Centres</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">A network of care <span className="text-gradient">across Bihar.</span></h2>
          <p className="mt-4 text-subtle">SSIMS Hajipur is a centre of excellence and inclusion, dedicated to making cancer care affordable, research-driven and accessible to every corner of the region.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {centers.map((c) => (
            <div key={c.title} className="group rounded-3xl bg-white shadow-soft ring-1 ring-border/50 overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all card-3d">
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-deep"><Building2 size={12} className="text-primary" /> Centre</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep">{c.title}</h3>
                <p className="mt-2 text-sm text-subtle">{c.desc}</p>
                <a href={c.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  <MapPin size={14} /> View Direction <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Our Mission & Vision</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Guiding our care with <span className="text-gradient">purpose and passion.</span></h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { icon: HandHeart, title: "Our Mission", body: "To provide affordable, community-centric and compassionate cancer care to all — especially the rural and underserved — through outreach programs, OPD consultations, training and ongoing research." },
            { icon: Globe2, title: "Our Vision", body: "To be a trusted centre of excellence in Eastern India, known for empowering grassroots healthcare systems and delivering impactful oncology services without financial burden." },
          ].map((m) => (
            <div key={m.title} className="relative rounded-[28px] bg-white p-10 shadow-soft ring-1 ring-border/50 overflow-hidden card-3d">
              <div aria-hidden className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center shadow-glow"><m.icon size={22} /></div>
              <h3 className="relative mt-6 text-2xl font-bold text-deep">{m.title}</h3>
              <p className="relative mt-3 text-subtle leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ n, s, l }: { n: number; s: string; l: string }) {
  const c = useCounter(n);
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-4">
      <div className="text-3xl font-extrabold text-teal"><span ref={c.ref}>{c.n.toLocaleString()}</span>{s}</div>
      <div className="text-xs text-white/70 mt-1">{l}</div>
    </div>
  );
}

function WhyChoose() {
  const stats = [
    { n: 49, s: "+", l: "Years of Experience" },
    { n: 22, s: "+", l: "Govt. Empanelments" },
    { n: 15000, s: "+", l: "Lives Touched" },
    { n: 100, s: "%", l: "Non-Profit" },
  ];

  const reasons = [
    "49+ Years of pioneering oncological expertise under Dr. J.K. Singh",
    "Empanelled by 22+ Central and State Government departments",
    "Comprehensive community oncology & telemedicine centers",
    "World-class, evidence-based treatments at accessible prices",
    "Regular consultations by top oncologists from Mumbai, Delhi, & Kolkata",
  ];

  return (
    <section className="py-24 bg-deep text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div aria-hidden className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-teal/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-teal flex items-center gap-2">
            <ShieldCheck size={16} />
            Why Choose SSIMS
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            A silver line in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary">cancer care.</span>
          </h2>
          <ul className="mt-10 space-y-5">
            {reasons.map((r) => (
              <li key={r} className="flex gap-4 items-start">
                <CheckCircle2 className="text-teal shrink-0 mt-1" size={22} />
                <span className="text-white/80 text-lg leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>

          {/* Stats Grid Enclosed in a Glass Panel for better separation */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {stats.map((st) => (
              <StatCounter key={st.l} {...st} />
            ))}
          </div>
        </div>

        {/* Right Content - Modern Typography Card replacing the old image */}
        <div className="lg:col-span-5">
          <div className="relative group perspective-1000">
            {/* Outer Hover Glow Effect */}
            <div aria-hidden className="absolute -inset-2 bg-gradient-to-br from-teal/30 to-primary/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-700" />

            {/* Glassmorphism Card */}
            <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-12 text-center shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              
              {/* Internal Card Gradient Orbs */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal/20 blur-3xl rounded-full" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
                <Award className="text-teal mb-6" size={48} strokeWidth={1.5} />
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-lg tracking-tighter">
                    49
                  </span>
                  <span className="text-5xl font-bold text-teal">+</span>
                </div>
                
                <span className="mt-2 text-2xl font-bold tracking-[0.2em] uppercase text-white/90">
                  Years
                </span>
                
                {/* Decorative Divider */}
                <div className="w-12 h-1 bg-gradient-to-r from-teal to-primary rounded-full mt-6 mb-6" />
                
                <h3 className="text-xl font-medium text-white/90">Of Legacy & Trust</h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[250px] mx-auto">
                  Delivering world-class oncological care with compassion and state-of-the-art precision.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const campaigns = [
  { img: "/ssims/blood-cancer.png", title: "Blood Cancer Awareness Month", date: "September 15, 2025", time: "10:00 AM – 1:00 PM" },
  { img: "/ssims/brest-cancer.png", title: "Breast Cancer Awareness Month", date: "October 16, 2025", time: "11:00 AM – 2:00 PM" },
  { img: "/ssims/lung-cancer.png", title: "Lung Cancer Awareness Month", date: "November 14, 2025", time: "9:30 AM – 12:30 PM" },
];

function Campaigns() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Health Campaigns</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">SSIMS Health <span className="text-gradient">Campaigns.</span></h2>
          </div>
          <Link to="/community" className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-border px-5 py-2.5 text-sm font-semibold text-deep hover:ring-primary/40">View all <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {campaigns.map((c) => (
            <div key={c.title} className="group rounded-3xl overflow-hidden bg-white ring-1 ring-border/50 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all card-3d">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">SSIMS</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-deep">{c.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-subtle">
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {c.date}</span>
                  <span className="inline-flex items-center gap-1"><Activity size={12} /> {c.time}</span>
                </div>
                <a href="tel:+919431021001" className="mt-5 inline-flex items-center gap-2 rounded-full gradient-brand px-4 py-2 text-white text-sm font-semibold shadow-glow"><Phone size={14} /> Call Us Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section className="py-24 bg-brand-soft/60">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative">
          <img src="/ssims/dr-singh.png" alt="Schedule an Appointment" className="w-full rounded-[32px] shadow-glow ring-1 ring-border/40 object-cover" loading="lazy" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { t: "Clinic", d: "09:30 AM – 02:00 PM" },
              { t: "Telemedicine", d: "09:00 AM – 09:00 PM" },
              { t: "Sunday", d: "10:00 AM – 02:00 PM" },
            ].map((h) => (
              <div key={h.t} className="rounded-2xl bg-white p-3 text-center shadow-soft ring-1 ring-border/50">
                <div className="text-[10px] uppercase tracking-wider text-subtle font-semibold">{h.t}</div>
                <div className="mt-1 text-xs font-bold text-deep">{h.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Appointment</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Book Your Appointment <span className="text-gradient">Today.</span></h2>
          <p className="mt-4 text-subtle max-w-xl">Our expert doctors are available during flexible working hours to support your cancer care and community health needs. Schedule your appointment with SSIMS and take a step towards personalised, affordable treatment.</p>
          <form className="mt-8 grid gap-4 rounded-[28px] bg-white p-6 md:p-8 shadow-soft ring-1 ring-border/50" onSubmit={(e) => { e.preventDefault(); window.location.href = "/appointment"; }}>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              <input required type="tel" placeholder="Phone number" className="rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select className="rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                <option>Select Service</option>
                <option>OPD Services</option>
                <option>Community Oncology</option>
                <option>Telemedicine</option>
                <option>Research Activities</option>
                <option>Village Doctor Training</option>
                <option>Free Medicine Distribution</option>
                <option>Local Level Health Camp</option>
                <option>Blood Donation Camp</option>
              </select>
              <input type="date" className="rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
            </div>
            <textarea rows={3} placeholder="Message (optional)" className="rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
            <button type="submit" className="inline-flex justify-center items-center gap-2 rounded-full gradient-brand px-8 py-3.5 text-white font-semibold shadow-glow hover:-translate-y-0.5 transition">
              Send Request <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const donations = [
  { img: "/ssims/blood-donation.webp", title: "Blood Donation", icon: Droplet },
  { img: "/ssims/organ-doantion.webp", title: "Organ Donation", icon: HeartPulse },
  { img: "/ssims/fund-donation.webp", title: "Fund Donation", icon: HandHeart },
  { img: "/ssims/medicine-donation.webp", title: "Medicine Donation", icon: Pill },
];

function Donations() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Give Back</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Every contribution <span className="text-gradient">saves a life.</span></h2>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {donations.map((d) => (
            <div key={d.title} className="group relative rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-soft hover:shadow-glow transition-all card-3d">
              <img src={d.img} alt={d.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="h-10 w-10 rounded-xl gradient-brand text-white flex items-center justify-center shadow-glow"><d.icon size={18} /></div>
                <h3 className="mt-3 text-lg font-bold text-white">{d.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="tel:+919431021001" className="inline-flex items-center gap-2 rounded-full gradient-brand px-8 py-3.5 text-white font-semibold shadow-glow hover:-translate-y-0.5 transition"><Phone size={16} /> Call Now — +91 94310 21001</a>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { img: "/ssims/testimonials/4.png", name: "Dr. Sunil Prasad", role: "Local General Practitioner", text: "I often refer my patients to SSIMS Hajipur for specialized oncology care. Their expertise, affordability and diagnostic capabilities are unmatched in the region." },
  { img: "/ssims/testimonials/6.png", name: "Pooja Sinha", role: "Caregiver", text: "From appointments to counselling, every service at SSIMS was seamless. Their telemedicine feature made it easier for us to consult specialists without travelling far." },
  { img: "/ssims/testimonials/2.png", name: "Ravi Sharma", role: "Patient's Son", text: "We sincerely thank Dr. Jitendra Kumar Singh and the SSIMS team for their outstanding efforts in providing compassionate and expert cancer care at affordable costs." },
  { img: "/ssims/testimonials/5.png", name: "Anita Kumari", role: "Breast Cancer Survivor", text: "SSIMS gave me not just treatment but hope. The team stood beside me and my family through every step of the journey." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const t = testimonials[i];
  return (
    <section className="py-24 bg-deep text-white relative overflow-hidden">
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -right-40 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.22em] font-bold text-teal">Testimonials</div>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Voices from <span className="text-gradient">our community.</span></h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">SSIMS Hajipur is committed to delivering expert cancer care with top oncologists, personalised treatments and compassionate support.</p>
        <div className="mt-12 relative rounded-[32px] glass-dark p-8 md:p-12 shadow-glow">
          <Quote className="mx-auto text-teal" size={40} />
          <p className="mt-5 text-lg md:text-2xl font-display leading-snug">"{t.text}"</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src={t.img} alt={t.name} className="h-16 w-16 rounded-full object-cover ring-2 ring-teal/60" loading="lazy" />
            <div className="text-left">
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-white/70">{t.role}</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"><ChevronLeft size={18} /></button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`t-${idx}`} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-teal" : "w-1.5 bg-white/30"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Why is SSIMS established in Hajipur?", a: "Because most of the people living in Hajipur consume tobacco more frequently, and tobacco farming is also highly prevalent in this region. Due to the high rate of tobacco consumption and production, there is a greater need for medical research, awareness and treatment facilities related to tobacco-related health issues, making Hajipur a suitable and strategic location for setting up SSIMS." },
  { q: "What services are available at SSIMS Hajipur?", a: "SSIMS offers OPD services, community oncology programs, telemedicine consultations, research activities, blood donation and health camps, free medicine distribution, and training for local village doctors — all tailored to serve rural communities." },
  { q: "How does SSIMS Hajipur keep cancer care affordable?", a: "As a non-profit institute, SSIMS offers low-cost care by reinvesting resources into patient services, free medicine distribution and outreach programs. This ensures affordability without compromising quality." },
  { q: "What kind of community programs does SSIMS provide?", a: "We conduct regular local-level health camps, blood donation drives, village doctor training sessions and awareness programs to make cancer care more accessible in remote and underserved areas." },
  { q: "How can I schedule an appointment at SSIMS Hajipur?", a: "You can book your appointment online through our website form, call our helpline, or directly visit our OPD during working hours. Our team will assist you in choosing the right service and confirm your slot promptly." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <img src="/ssims/faqs1.png" alt="SSIMS FAQ" className="rounded-[32px] shadow-soft w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">FAQ</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Frequently Asked <span className="text-gradient">Questions.</span></h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`w-full text-left rounded-2xl p-5 ring-1 transition-all ${isOpen ? "bg-white ring-primary/30 shadow-soft" : "bg-white/60 ring-border/60 hover:bg-white"}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-semibold text-deep">{f.q}</div>
                    <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-subtle"}`} />
                  </div>
                  {isOpen && <p className="mt-3 text-sm text-subtle leading-relaxed">{f.a}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const videos = ["/ssims/images/thumbnail1.png", "/ssims/images/thumbnail2.png"];
  return (
    <section className="py-24 bg-brand-soft/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-bold text-primary">Lessons & Views</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-deep">Learn from <span className="text-gradient">Dr. J.K. Singh.</span></h2>
          </div>
          <a href="https://www.youtube.com/@dr.jitendrakumarsingh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-border px-5 py-2.5 text-sm font-semibold text-deep hover:ring-primary/40">
            <PlayCircle size={16} className="text-emergency" /> View All on YouTube
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <a key={i} href="https://www.youtube.com/@dr.jitendrakumarsingh" target="_blank" rel="noreferrer" className="group relative block rounded-3xl overflow-hidden ring-1 ring-border/50 shadow-soft hover:shadow-glow transition-all card-3d">
              <img src={v} alt="Video" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-deep/30 group-hover:bg-deep/50 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-glow group-hover:scale-110 transition">
                  <PlayCircle size={44} className="text-emergency" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-[36px] overflow-hidden gradient-brand p-10 md:p-16 text-white shadow-glow">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.22em] font-bold text-white/80">Take Charge of Your Health</div>
              <h3 className="mt-3 text-3xl md:text-4xl font-extrabold">Empowering patients through education, outreach and accessible cancer services.</h3>
              <p className="mt-4 text-white/85 max-w-2xl">SSIMS Hajipur is here to support your journey with care rooted in compassion and community.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+919431021001" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-primary font-bold shadow-glow"><Phone size={16} /> Call Now</a>
              <Link to="/appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-deep px-6 py-3.5 text-white font-bold ring-1 ring-white/20"><Calendar size={16} /> Book Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Founder />
      <Services />
      <DirectorDesk />
      <Centers />
      <MissionVision />
      <WhyChoose />
      <Campaigns />
      <Appointment />
      <Donations />
      <Testimonials />
      <FAQ />
      <Videos />
      <CTA />
    </>
  );
}
