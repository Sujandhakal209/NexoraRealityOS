import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingSection } from "@/components/sections/PricingSection";
import { PlanComparisonTable } from "@/components/sections/PlanComparisonTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ_ITEMS } from "@/lib/data";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-warm-white py-12 md:py-16">
        <div className="container-nexora">
          <SectionHeader
            title="Simple, Transparent Pricing for Every Stage"
            subtitle="From individual brokers to large housing developers — choose the plan that fits your real-estate business today."
          />
        </div>
      </section>

      <PricingSection id="pricing-plans" showNote={true} />

      <section className="bg-surface-container-low py-16 md:py-20">
        <div className="container-nexora">
          <SectionHeader title="Compare Plans" />
          <PlanComparisonTable />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-nexora">
          <SectionHeader title="Pricing FAQ" />
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
