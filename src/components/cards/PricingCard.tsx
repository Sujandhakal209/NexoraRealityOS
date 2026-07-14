import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  setupCharge: string;
  monthlyCharge: string;
  popular?: boolean;
  bestFor: string;
  includes: readonly string[];
  cta: string;
  compact?: boolean;
}

export function PricingCard({ name, setupCharge, monthlyCharge, popular = false, bestFor, includes, cta, compact = false }: PricingCardProps) {
  const visibleItems = compact ? includes.slice(0, 5) : includes;
  const [price, period] = monthlyCharge.split("/");
  return (
    <article className={`card-hover relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-low md:p-7 ${popular ? "border-primary ring-1 ring-primary" : "border-light-border"}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Most Popular</span>
      )}
      <h3 className="text-lg font-semibold text-on-surface">{name}</h3>
      <p className="body-sm mt-2 min-h-[42px] text-on-surface-variant">{bestFor}</p>
      <div className="mt-5">
        <p className="text-2xl font-bold tracking-tight text-on-surface">{price}<span className="ml-1 text-[10px] font-medium text-on-surface-variant">/{period}</span></p>
        <p className="mt-1 text-[11px] text-on-surface-variant">+ {setupCharge} one-time setup</p>
      </div>
      <ul className="mt-6 flex-1 space-y-2.5">
        {visibleItems.map((item) => (
          <li key={item} className="flex gap-2.5 text-xs leading-5 text-on-surface-variant">
            <Check size={14} className="mt-0.5 shrink-0 text-primary" strokeWidth={2.2} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {compact && includes.length > visibleItems.length && <p className="mt-3 text-[11px] font-semibold text-primary">+ {includes.length - visibleItems.length} more features</p>}
      <Button href="/book-demo" variant={popular ? "primary" : "outline"} className="mt-7 w-full">{cta}</Button>
    </article>
  );
}
