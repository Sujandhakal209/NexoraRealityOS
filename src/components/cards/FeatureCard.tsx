const icons: Record<string, React.ReactNode> = {
  website: "🌐",
  template: "📐",
  design: "🎨",
  listing: "🏠",
  crm: "👥",
  visit: "📍",
  followup: "🔔",
  agent: "💼",
  chat: "💬",
  social: "📱",
  video: "🎬",
  tracking: "📊",
  analytics: "📈",
  nepal: "🇳🇵",
  agency: "🏢",
  broker: "🤝",
  land: "🗺️",
  housing: "🏗️",
  rental: "🔑",
  lead: "✉️",
  deal: "✅",
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="card-hover rounded-xl border border-light-border bg-surface-container-lowest p-5 shadow-low">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container text-lg">
        <span aria-hidden="true">{icons[icon] ?? "✦"}</span>
      </div>
      <h3 className="text-base font-semibold text-on-surface">{title}</h3>
      <p className="body-sm mt-2 text-on-surface-variant">{description}</p>
    </article>
  );
}

export function AudienceCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <article className="card-hover rounded-xl border border-light-border bg-surface-container-lowest p-6 shadow-low">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container text-xl">
        <span aria-hidden="true">{icons[icon] ?? "✦"}</span>
      </div>
      <h3 className="text-lg font-semibold text-on-surface">{title}</h3>
      <p className="body-sm mt-2 text-on-surface-variant">{description}</p>
    </article>
  );
}

export function StepCard({
  step,
  text,
}: {
  step: number;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
        {step}
      </div>
      <p className="body-md pt-2 text-on-surface">{text}</p>
    </div>
  );
}

export function FlowIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-xl shadow-low">
        <span aria-hidden="true">{icons[icon] ?? "✦"}</span>
      </div>
      <span className="max-w-[88px] text-xs font-medium text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}
