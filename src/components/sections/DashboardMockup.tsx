"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Bell,
  BellRing,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Home,
  MoreHorizontal,
  Search,
  Share2,
  type LucideIcon,
  UserPlus,
  UserRoundCheck,
} from "lucide-react";

const ACTIVITY_INTERVAL_MS = 3400;

interface Activity {
  id: string;
  title: string;
  detail: string;
  time: string;
  badge?: string;
  icon: LucideIcon;
  tone: string;
}

const ACTIVITIES: readonly Activity[] = [
  {
    id: "buyer-inquiry",
    title: "New buyer inquiry",
    detail: "Aarav Shrestha · Modern Villa, Lalitpur",
    time: "Just now",
    badge: "New",
    icon: UserPlus,
    tone: "bg-secondary-container text-primary",
  },
  {
    id: "viewing-scheduled",
    title: "Property viewing scheduled",
    detail: "3-bedroom apartment · Thursday at 2:30 PM",
    time: "2m",
    icon: CalendarCheck2,
    tone: "bg-surface-container text-tertiary",
  },
  {
    id: "property-published",
    title: "New property published",
    detail: "Residential land in Budhanilkantha is now live",
    time: "5m",
    icon: Home,
    tone: "bg-soft-beige text-[#765a2d]",
  },
  {
    id: "agent-assigned",
    title: "Agent assigned",
    detail: "Maya K. assigned to the Shrestha inquiry",
    time: "8m",
    icon: UserRoundCheck,
    tone: "bg-[#e9f6fd] text-primary",
  },
  {
    id: "instagram-published",
    title: "Instagram post published",
    detail: "Luxury Apartment Campaign is now live",
    time: "12m",
    icon: Share2,
    tone: "bg-[#f5eaf1] text-[#7f3f68]",
  },
  {
    id: "lead-qualified",
    title: "Lead moved to qualified",
    detail: "Rohan Thapa · Commercial property inquiry",
    time: "18m",
    icon: BadgeCheck,
    tone: "bg-secondary-container text-primary",
  },
  {
    id: "property-sold",
    title: "Property marked sold",
    detail: "Family Home · Bhaktapur",
    time: "24m",
    icon: CheckCircle2,
    tone: "bg-[#e7f4ed] text-[#2f6248]",
  },
  {
    id: "follow-up",
    title: "Follow-up reminder",
    detail: "Call Nisha about the Lazimpat office space",
    time: "30m",
    icon: BellRing,
    tone: "bg-[#f6efe2] text-[#765a2d]",
  },
];

const METRICS = [
  { label: "New leads today", value: "24", note: "+18%", position: "hero-metric-leads" },
  { label: "Active listings", value: "148", note: "+6 this week", position: "hero-metric-listings" },
  { label: "Viewings booked", value: "08", note: "Today", position: "hero-metric-viewings" },
  { label: "Follow-ups due", value: "12", note: "4 priority", position: "hero-metric-followups" },
] as const;

export function DashboardMockup() {
  const [startIndex, setStartIndex] = useState(0);
  const [advancing, setAdvancing] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setAdvancing(true);
    }, ACTIVITY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const visibleActivities = useMemo(
    () =>
      Array.from({ length: 6 }, (_, offset) =>
        ACTIVITIES[(startIndex + offset) % ACTIVITIES.length]
      ),
    [startIndex]
  );

  const completeAdvance = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || !advancing) return;
    setStartIndex((current) => (current + 1) % ACTIVITIES.length);
    setAdvancing(false);
  };

  return (
    <div
      className="hero-product-visual relative mx-auto w-full max-w-[680px]"
      role="img"
      aria-label="Animated Nexora RealtyOS dashboard showing fictional real-estate agency activity"
    >
      <div className="hero-visual-orb" aria-hidden="true" />

      <div className="hero-metrics-mobile" aria-hidden="true">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} {...metric} compact />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[520px] overflow-hidden rounded-[22px] border border-white/75 bg-[#f8fbfa] shadow-[0_28px_70px_rgba(38,50,56,0.16)]">
        <div className="flex h-12 items-center justify-between border-b border-[#dce6e1] bg-white/90 px-4 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-white">
              <Building2 size={14} aria-hidden="true" />
            </span>
            <span className="text-[11px] font-bold text-charcoal">Nexora RealtyOS</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <Search size={14} aria-hidden="true" />
            <Bell size={14} aria-hidden="true" />
            <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary-container text-[9px] font-bold text-primary">NR</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="hero-live-dot" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">RealtyOS Live</p>
              </div>
              <h2 className="mt-1 text-sm font-bold text-on-surface sm:text-base">Live Agency Activity</h2>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="rounded-full border border-[#dce6e1] bg-white px-2.5 py-1 text-[9px] font-semibold">All activity</span>
              <span className="grid h-7 w-7 place-items-center rounded-lg border border-[#dce6e1] bg-white">
                <MoreHorizontal size={14} aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="activity-feed mt-4 overflow-hidden" aria-hidden="true">
            <div
              className="activity-stack space-y-2"
              data-advancing={advancing}
              onTransitionEnd={completeAdvance}
            >
              {visibleActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="activity-row flex items-center gap-3 rounded-xl border border-[#e5ece8] bg-white px-3 shadow-[0_3px_12px_rgba(38,50,56,0.035)]"
                    data-incoming={index === visibleActivities.length - 1}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${activity.tone}`}>
                      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-[10px] font-bold text-on-surface sm:text-[11px]">{activity.title}</p>
                        {activity.badge && (
                          <span className="rounded-full bg-primary px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-white">{activity.badge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-[8px] text-on-surface-variant sm:text-[9px]">{activity.detail}</p>
                    </div>
                    <span className="shrink-0 text-[8px] font-medium text-outline">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#e5ece8] pt-3 text-[9px] text-on-surface-variant">
            <span>All agency updates in one place</span>
            <span className="font-semibold text-primary">View dashboard →</span>
          </div>
        </div>
      </div>

      <div className="hero-metrics-desktop" aria-hidden="true">
        {METRICS.map((metric, index) => (
          <MetricCard key={metric.label} {...metric} delay={index * -1.25} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  note,
  position,
  compact = false,
  delay = 0,
}: (typeof METRICS)[number] & { compact?: boolean; delay?: number }) {
  return (
    <div
      className={compact ? "hero-metric-card hero-metric-compact" : `hero-metric-card ${position}`}
      style={compact ? undefined : { animationDelay: `${delay}s` }}
    >
      <p className="text-[8px] font-semibold text-on-surface-variant sm:text-[9px]">{label}</p>
      <div className="mt-1 flex items-end justify-between gap-3">
        <p className="text-base font-bold tracking-tight text-on-surface sm:text-lg">{value}</p>
        <span className="pb-0.5 text-[7px] font-bold text-primary sm:text-[8px]">{note}</span>
      </div>
    </div>
  );
}
