import {
  BarChart3,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Check,
  CircleCheck,
  ClipboardList,
  FileText,
  Globe2,
  Handshake,
  House,
  KeyRound,
  LayoutDashboard,
  Map,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  PlaySquare,
  type LucideIcon,
  Users,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  website: Globe2,
  template: LayoutDashboard,
  design: Palette,
  listing: House,
  crm: Users,
  visit: CalendarCheck2,
  followup: BellRing,
  agent: BriefcaseBusiness,
  chat: MessageCircle,
  social: Megaphone,
  video: PlaySquare,
  tracking: BarChart3,
  analytics: BarChart3,
  nepal: MapPin,
  agency: Building2,
  broker: Handshake,
  land: Map,
  housing: Building2,
  rental: KeyRound,
  lead: Users,
  deal: CircleCheck,
  notes: FileText,
};

interface FeatureCardProps { title: string; description: string; icon: string; }

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = icons[icon] ?? ClipboardList;
  return (
    <article className="card-hover rounded-2xl border border-light-border bg-white p-5 shadow-low md:p-6">
      <div data-card-icon className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container/70 text-primary">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="text-[15px] font-semibold leading-6 text-on-surface">{title}</h3>
      <p className="body-sm mt-2 text-on-surface-variant">{description}</p>
    </article>
  );
}

export function AudienceCard({ title, description, icon }: FeatureCardProps) {
  const Icon = icons[icon] ?? Building2;
  return (
    <article className="card-hover rounded-2xl border border-light-border bg-white p-6 shadow-low">
      <div data-card-icon className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-surface-container text-primary">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-on-surface">{title}</h3>
      <p className="body-sm mt-2 text-on-surface-variant">{description}</p>
    </article>
  );
}

export function StepCard({ step, text }: { step: number; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{step}</div>
      <p className="body-md pt-1.5 text-on-surface">{text}</p>
    </div>
  );
}

export function FlowIcon({ icon, label, index = 0, total = 1 }: { icon: string; label: string; index?: number; total?: number }) {
  const Icon = icons[icon] ?? ClipboardList;
  const isLast = index === total - 1;
  return (
    <div className="group flex min-w-[96px] flex-col items-center gap-3 text-center">
      <div className={`relative flex h-14 w-14 items-center justify-center rounded-full border shadow-low transition-transform group-hover:-translate-y-1 ${isLast ? "border-primary bg-tertiary text-white" : "border-primary/15 bg-primary text-white"}`}>
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        {isLast && <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-white text-primary shadow-low"><Check size={12} /></span>}
      </div>
      <span className="max-w-[96px] text-[11px] font-semibold leading-4 text-on-surface-variant">{label}</span>
    </div>
  );
}
