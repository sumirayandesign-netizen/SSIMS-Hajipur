import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ShieldCheck, Clock, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — SSIMS Hajipur" },
      { name: "description", content: "Book an appointment with SSIMS Hajipur — online, by phone or WhatsApp." },
      { property: "og:title", content: "Book Appointment — SSIMS" },
      { property: "og:description", content: "Book online in under a minute." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Appointment" title="Book your consultation in under a minute." subtitle="A patient navigator will confirm within 30 minutes on working days." crumbs={[{ label: "Appointment" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-[32px] bg-white p-8 md:p-10 shadow-soft ring-1 ring-border/50">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-full gradient-brand text-white flex items-center justify-center shadow-glow"><CheckCircle2 size={28} /></div>
                <h2 className="mt-5 text-2xl font-bold text-deep">Thank you — we've received your request.</h2>
                <p className="mt-2 text-subtle">A patient navigator will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5">
                <h2 className="text-2xl font-bold text-deep">Patient details</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" />
                  <Field label="City" name="city" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <SelectField label="Department" options={["Medical Oncology","Radiation Oncology","Surgical Oncology","Pediatric Oncology","Palliative Care","Telemedicine"]} />
                  <Field label="Preferred date" name="date" type="date" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-deep">Message</label>
                  <textarea rows={4} placeholder="Briefly describe symptoms or reports..." className="mt-1.5 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                </div>
                <button type="submit" className="inline-flex justify-center rounded-full gradient-brand px-8 py-3.5 text-white font-semibold shadow-glow hover:-translate-y-0.5 transition">Request Appointment</button>
              </form>
            )}
          </div>
          <aside className="lg:col-span-2 space-y-4">
            {[
              { i: ShieldCheck, t: "Your data is safe", d: "Encrypted, private, and never shared without consent." },
              { i: Clock, t: "30-minute callback", d: "A navigator responds within 30 mins on working days." },
              { i: Phone, t: "Prefer to call?", d: "+91 88888 88888 — Appointments desk 8am–8pm." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl glass p-5 shadow-soft flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl gradient-brand text-white flex items-center justify-center"><x.i size={18} /></div>
                <div>
                  <div className="font-bold text-deep">{x.t}</div>
                  <div className="text-sm text-subtle mt-0.5">{x.d}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-emergency/10 border border-emergency/20 p-5">
              <div className="font-bold text-emergency">Emergency?</div>
              <p className="text-sm text-deep mt-1">Call our 24×7 line: <a href="tel:+919999999999" className="font-bold underline">+91 99999 99999</a></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-deep">{label}{required && <span className="text-emergency">*</span>}</span>
      <input required={required} name={name} type={type} className="mt-1.5 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </label>
  );
}
function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-deep">{label}</span>
      <select className="mt-1.5 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}