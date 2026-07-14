import Link from "next/link";
import { ArrowRight, Check, Layers3, Share2, Workflow } from "lucide-react";
import { AudienceCard, FeatureCard, FlowIcon, StepCard } from "@/components/cards/FeatureCard";
import { ProblemCard } from "@/components/cards/ProblemCard";
import { TemplateCard } from "@/components/cards/TemplateCard";
import { CTASection } from "@/components/sections/CTASection";
import { DashboardMockup } from "@/components/sections/DashboardMockup";
import { PricingSection } from "@/components/sections/PricingSection";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PlatformChip } from "@/components/ui/PlatformChip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AUDIENCES, FAQ_ITEMS, FEATURES, PLATFORMS, PROBLEMS, SETUP_STEPS, SOLUTION_FLOW, TEMPLATES } from "@/lib/data";

const HERO_POINTS = ["Setup in around 30 minutes", "Listings, leads, and deals connected", "Built for how agencies work in Nepal"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-container-low py-12 md:py-16 lg:flex lg:min-h-[calc(100svh-68px)] lg:items-center lg:py-20">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-secondary-container/45 blur-3xl" aria-hidden="true" />
        <div className="container-nexora relative">
          <div className="grid items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-12 xl:gap-16">
            <div className="max-w-xl">
              <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Built for Nepali real estate</span>
              <h1 className="display-xl mt-6 text-balance text-on-surface">
                Run your entire real-estate agency <span className="hero-highlight text-primary">from one place.</span>
              </h1>
              <p className="body-lg mt-6 max-w-lg text-on-surface-variant">
                Nexora RealtyOS gives real-estate agencies one connected platform to manage properties, leads, agents, viewings, marketing, and everyday operations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book-demo" size="lg" className="group">Book a Demo <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} /></Button>
                <Button href="/#features" variant="outline" size="lg">Explore Features</Button>
              </div>
              <Link href="/pricing" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary underline decoration-primary/25 underline-offset-4 transition-colors hover:decoration-primary">
                View pricing and plans <ArrowRight size={13} />
              </Link>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {HERO_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-medium text-on-surface-variant">
                    <span className="grid h-5 w-5 place-items-center rounded-full border border-primary/25 bg-white text-primary"><Check size={11} strokeWidth={2.5} /></span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="section-space bg-warm-white">
        <div className="container-nexora">
          <SectionHeader title="Real-Estate Businesses Are Losing Leads Because Everything Is Scattered." subtitle="The traditional way of working makes every response slower and every handoff harder to track." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((problem) => <ProblemCard key={problem.title} {...problem} />)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-space bg-surface-container-low">
        <div className="container-nexora">
          <SectionHeader eyebrow="One connected workflow" title="Nexora RealtyOS Brings Everything Into One System." subtitle="From publishing a property to closing the deal, every important step stays visible to your team." />
          <div className="relative overflow-x-auto pb-3">
            <div className="absolute left-[9%] right-[9%] top-7 hidden h-px bg-primary/20 lg:block" aria-hidden="true" />
            <div className="relative flex min-w-[670px] justify-between gap-3 px-2">
              {SOLUTION_FLOW.map((step, index) => <FlowIcon key={step.label} {...step} index={index} total={SOLUTION_FLOW.length} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="section-space bg-warm-white">
        <div className="container-nexora">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader align="left" eyebrow="Professional from day one" title="Choose Your Website Template and Go Live Fast." subtitle="Start with a polished real-estate website, then connect every inquiry to your sales workflow." className="mb-0 max-w-2xl" />
            <Link href="/templates" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary">View all templates <ArrowRight size={14} /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TEMPLATES.slice(0, 3).map((template) => <TemplateCard key={template.id} {...template} showPreview />)}
          </div>
        </div>
      </section>

      <section id="features" className="section-space bg-cream">
        <div className="container-nexora">
          <SectionHeader eyebrow="Complete agency operations" title="Everything Your Real-Estate Business Needs in One Place." subtitle="Replace disconnected tools with a calmer, clearer workspace for listings, people, and follow-ups." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FEATURES.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden bg-warm-white">
        <div className="container-nexora">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow"><Workflow size={13} /> Quick setup</span>
              <h2 className="headline-lg mt-5 max-w-xl text-on-surface">Choose a Template and Get Your System Ready Without a Long Build.</h2>
              <p className="body-md mt-4 max-w-xl text-on-surface-variant">Share the essentials once. We configure your website, lead actions, and dashboard around the way your agency already works.</p>
              <div className="mt-8 space-y-5">
                {SETUP_STEPS.map((step, index) => <StepCard key={step} step={index + 1} text={step} />)}
              </div>
              <Button href="/book-demo" className="mt-8">Start Your Setup <ArrowRight size={15} /></Button>
            </div>
            <div className="rounded-[24px] border border-light-border bg-surface-container-low p-5 shadow-low sm:p-8">
              <div className="rounded-2xl border border-white bg-white p-6 shadow-high sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-white"><Layers3 size={21} /></span>
                  <span className="rounded-full bg-secondary-container px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">Connected</span>
                </div>
                <p className="headline-md mt-8 text-on-surface">Listings Dekhi Leads Samma, Leads Dekhi Deals Samma.</p>
                <div className="mt-7 space-y-3">
                  {["Website inquiry captured", "Lead assigned to an agent", "Site visit and follow-up scheduled", "Deal status visible to the team"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-light-border bg-cream/70 p-3.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">{index + 1}</span>
                      <span className="text-xs font-medium text-on-surface">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-white">
        <div className="container-nexora">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-secondary-container"><Share2 size={15} /> One entry point</span>
              <h2 className="headline-lg mt-4 max-w-xl text-white">Control Social Media and Property Videos From One Place.</h2>
              <p className="body-md mt-4 max-w-xl text-white/72">Organize property content, captions, videos, listing links, and lead tracking without repeating the same work across every channel.</p>
              <p className="mt-6 text-lg font-semibold text-secondary-container">Add once. Promote everywhere. Track every lead.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {PLATFORMS.map((platform) => <PlatformChip key={platform} label={platform} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="section-space bg-warm-white">
        <div className="container-nexora">
          <SectionHeader eyebrow="Built around your business" title="For Real-Estate Teams Across Nepal." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {AUDIENCES.map((audience) => <AudienceCard key={audience.title} {...audience} />)}
          </div>
        </div>
      </section>

      <PricingSection compact />

      <section id="faq" className="section-space bg-warm-white">
        <div className="container-nexora">
          <SectionHeader eyebrow="Questions, answered" title="Frequently Asked Questions" />
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
