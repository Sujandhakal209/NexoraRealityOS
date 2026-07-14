import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Building2, Check, Map, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TemplateCardProps {
  name: string;
  bestFor: string;
  features?: readonly string[];
  gradient: string;
  category?: string;
  showPreview?: boolean;
  image?: StaticImageData;
  available?: boolean;
}

function TemplateMockup({ gradient, category }: { gradient: string; category?: string }) {
  const Icon = category === "Broker" ? UserRound : category === "Land Developer" ? Map : Building2;
  return (
    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradient}`} aria-hidden="true">
      <div className="absolute inset-x-[10%] bottom-0 top-[12%] rounded-t-xl border border-white/70 bg-white/88 p-3 shadow-high">
        <div className="flex items-center justify-between border-b border-light-border pb-2">
          <div className="flex items-center gap-1.5">
            <span className="grid h-5 w-5 place-items-center rounded bg-primary text-white"><Icon size={11} /></span>
            <span className="h-1.5 w-14 rounded-full bg-charcoal/70" />
          </div>
          <div className="flex gap-1"><span className="h-1 w-7 rounded bg-charcoal/20" /><span className="h-1 w-7 rounded bg-charcoal/20" /></div>
        </div>
        <div className="mt-3 grid grid-cols-[1.1fr_.9fr] gap-2">
          <div className="rounded-md bg-deep-sage p-3">
            <div className="h-1.5 w-8 rounded bg-white/60" />
            <div className="mt-2 h-2 w-16 rounded bg-white/90" />
            <div className="mt-1 h-1 w-12 rounded bg-white/50" />
            <div className="mt-3 h-4 w-10 rounded bg-white" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[0, 1, 2, 3].map((item) => <span key={item} className="rounded bg-surface-container" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TemplateCard({
  name,
  bestFor,
  features,
  gradient,
  category,
  showPreview = false,
  image,
  available = false,
}: TemplateCardProps) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-light-border bg-white shadow-low">
      <div className="relative overflow-hidden">
        {image ? (
          <div className="aspect-[16/10] bg-charcoal">
            <Image src={image} alt={`${name} website preview`} className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ) : (
          <TemplateMockup gradient={gradient} category={category} />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-low">
          {available ? "Available" : "Coming soon"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-on-surface">{name}</h3>
          {category && <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] font-semibold text-on-surface-variant">{category}</span>}
        </div>
        <p className="body-sm mt-2 italic text-on-surface-variant">Best for {bestFor.toLowerCase()}.</p>

        {features && (
          <ul className="mt-5 flex-1 space-y-2.5">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-xs leading-5 text-on-surface-variant">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex gap-3">
          {showPreview && available && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href="/template-preview/luxury-agency" target="_blank" rel="noreferrer">Preview</Link>
            </Button>
          )}
          <Button href="/book-demo" size="sm" className="flex-1" variant={available ? "primary" : "outline"}>
            {available ? "Use This" : "Request Design"}
          </Button>
        </div>
      </div>
    </article>
  );
}
