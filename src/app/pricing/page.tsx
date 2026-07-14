import { Building2, Check, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PlanComparisonTable } from "@/components/sections/PlanComparisonTable";
import { PricingSection } from "@/components/sections/PricingSection";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/data";

export const metadata = {
  title: "Plans and Pricing",
  description: "Compare Nexora RealtyOS plans for individual brokers, growing real-estate agencies, and property developers in Nepal.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-surface-container-low pb-10 pt-16 text-center md:pb-14 md:pt-20">
        <div className="container-nexora">
          <span className="eyebrow"><ShieldCheck size={13} /> Clear local pricing</span>
          <h1 className="headline-xl mx-auto mt-5 max-w-3xl text-on-surface">Choose the Right Plan for Your Agency.</h1>
          <p className="body-md mx-auto mt-4 max-w-xl text-on-surface-variant">No hidden fees. Local support. Built for the way real-estate businesses operate in Nepal.</p>
        </div>
      </section>

      <PricingSection id="pricing-plans" showHeader={false} />

      <section className="bg-surface-container-low pb-20 md:pb-24">
        <div className="container-nexora">
          <div className="grid overflow-hidden rounded-[24px] border border-primary/20 bg-primary shadow-high lg:grid-cols-[1fr_.9fr]">
            <div className="p-7 text-white md:p-10 lg:p-12">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"><Building2 size={22} /></span>
              <h2 className="headline-md mt-6 text-white">Enterprise & Housing Projects</h2>
              <p className="body-md mt-3 max-w-xl text-white/75">For larger agencies, land developers, and housing projects that need a tailored website, workflows, and support structure.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Custom website architecture", "Large listing volumes", "Tailored team workflows"].map((item) => <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/85">{item}</span>)}
              </div>
              <Button href="/book-demo" variant="secondary" className="mt-8 bg-secondary-container text-primary hover:bg-white">Contact for a Quote</Button>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-[#e4efe9] p-7 md:p-10">
              <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-secondary-container" aria-hidden="true" />
              <div className="relative mx-auto max-w-md rounded-2xl border border-white bg-white/90 p-6 shadow-high">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">Designed around your project</p>
                <div className="mt-5 space-y-3">
                  {["Property and unit organization", "Lead routing for larger teams", "Project-specific inquiry flows", "Priority implementation planning"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-cream p-3 text-xs font-medium text-on-surface"><Check size={15} className="text-primary" />{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-warm-white">
        <div className="container-nexora">
          <SectionHeader eyebrow="Side-by-side" title="Compare Every Plan" subtitle="See which capabilities are included as your agency grows." />
          <PlanComparisonTable />
        </div>
      </section>

      <section className="section-space bg-surface-container-low">
        <div className="container-nexora">
          <SectionHeader eyebrow="Pricing questions" title="Frequently Asked Questions" />
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection title="Ready to Scale Your Agency?" text="Book a personalized walkthrough and choose a plan with the Nexora RealtyOS team." />
    </>
  );
}
