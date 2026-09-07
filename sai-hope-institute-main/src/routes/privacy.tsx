import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — SSIMS Hajipur" }, { name: "description", content: "How SSIMS Hajipur protects your personal and health information." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your data. Your trust. Our responsibility." crumbs={[{ label: "Privacy" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 prose prose-slate">
          <p className="text-subtle leading-relaxed">This page is maintained by SSIMS Hajipur to explain how we collect and protect the personal and health information of patients and website visitors. This document is provided as general information and not a certification.</p>
          <h3 className="mt-8 text-xl font-bold text-deep">What we collect</h3>
          <p className="text-subtle leading-relaxed mt-2">Contact details you share with us, appointment information, and any medical records you provide. We collect only what is needed to deliver care.</p>
          <h3 className="mt-8 text-xl font-bold text-deep">How we use it</h3>
          <p className="text-subtle leading-relaxed mt-2">To coordinate your care, communicate about appointments, and — with consent — for anonymised research and quality improvement.</p>
          <h3 className="mt-8 text-xl font-bold text-deep">Your rights</h3>
          <p className="text-subtle leading-relaxed mt-2">You may request access to, correction of, or deletion of your personal data by writing to privacy@ssimshajipur.in.</p>
          <p className="text-subtle leading-relaxed mt-8 text-sm">For any specific compliance or contractual requirement, please contact us at privacy@ssimshajipur.in.</p>
        </div>
      </section>
    </>
  );
}