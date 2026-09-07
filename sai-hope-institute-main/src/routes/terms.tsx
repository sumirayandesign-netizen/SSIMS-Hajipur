import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Use — SSIMS Hajipur" }, { name: "description", content: "Terms of use for the SSIMS Hajipur website and digital services." }] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of use." crumbs={[{ label: "Terms" }]} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-subtle leading-relaxed">By using ssimshajipur.in you agree to use our services responsibly and understand that information provided on this website is for general awareness and does not replace professional medical advice.</p>
          <p className="text-subtle leading-relaxed mt-4">For any medical concern, please consult a qualified clinician. For emergencies, call our 24×7 line.</p>
        </div>
      </section>
    </>
  );
}