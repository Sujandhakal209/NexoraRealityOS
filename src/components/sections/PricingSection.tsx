import Link from "next/link";
import { PricingCard } from "@/components/cards/PricingCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRICING_PLANS } from "@/lib/data";

interface PricingSectionProps { id?: string; showNote?: boolean; compact?: boolean; showHeader?: boolean; }

export function PricingSection({ id = "pricing", showNote = true, compact = false, showHeader = true }: PricingSectionProps) {
  return (
    <section id={id} className="section-space bg-surface-container-low">
      <div className="container-nexora">
        {showHeader && <SectionHeader eyebrow="Plans for every stage" title="Simple, Transparent Pricing." subtitle="No hidden fees. Local support. Choose the plan that fits your agency today." />}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {PRICING_PLANS.map((plan) => <PricingCard key={plan.id} {...plan} compact={compact} />)}
        </div>
        {showNote && (
          <p className="body-sm mx-auto mt-8 max-w-2xl text-center text-on-surface-variant">
            Custom pricing is available for large agencies, land developers, and housing projects.{" "}
            <Link href="/book-demo" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4">Contact us for a tailored quote.</Link>
          </p>
        )}
      </div>
    </section>
  );
}
