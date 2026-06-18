import { Button } from "@/components/ui/Button";

interface TemplateCardProps {
  name: string;
  bestFor: string;
  features?: readonly string[];
  gradient: string;
  showPreview?: boolean;
}

function TemplateMockup({ gradient }: { gradient: string }) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-t-xl bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-4 rounded-lg border border-white/40 bg-white/60 p-3 backdrop-blur-sm">
        <div className="mb-3 h-2 w-16 rounded bg-deep-sage/30" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 rounded bg-white/80" />
          <div className="h-12 rounded bg-white/80" />
          <div className="col-span-2 h-8 rounded bg-white/60" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-medium text-deep-sage shadow-low">
        Preview
      </div>
    </div>
  );
}

export function TemplateCard({
  name,
  bestFor,
  features,
  gradient,
  showPreview = false,
}: TemplateCardProps) {
  return (
    <article className="card-hover overflow-hidden rounded-xl border border-light-border bg-surface-container-lowest shadow-low">
      <TemplateMockup gradient={gradient} />
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-semibold text-on-surface">{name}</h3>
        <p className="body-sm mt-2 text-on-surface-variant">
          <span className="font-medium text-on-surface">Best for: </span>
          {bestFor}
        </p>

        {features && (
          <ul className="mt-4 space-y-1.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 body-sm text-on-surface-variant"
              >
                <span className="text-deep-sage">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className={`mt-5 flex gap-3 ${showPreview ? "flex-col sm:flex-row" : ""}`}>
          {showPreview && (
            <Button variant="outline" size="sm" className="flex-1">
              Preview
            </Button>
          )}
          <Button
            href="/book-demo"
            size="sm"
            variant={showPreview ? "primary" : "outline"}
            className={showPreview ? "flex-1" : "w-full"}
          >
            Choose Template
          </Button>
        </div>
      </div>
    </article>
  );
}
