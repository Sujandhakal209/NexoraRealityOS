"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Gauge, MonitorSmartphone, Search, Sparkles } from "lucide-react";
import { TemplateCard } from "@/components/cards/TemplateCard";
import { Button } from "@/components/ui/Button";
import { TEMPLATES, TEMPLATE_FILTERS } from "@/lib/data";

const BENEFITS = [
  { title: "Fast Launch", text: "Start from a proven structure instead of a blank page.", icon: Gauge },
  { title: "Mobile First", text: "Every layout adapts cleanly across phones, tablets, and desktops.", icon: MonitorSmartphone },
  { title: "Real-Estate Focused", text: "Listing discovery and lead capture are built into the design.", icon: Sparkles },
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof TEMPLATE_FILTERS)[number]>("All");
  const [query, setQuery] = useState("");
  const filteredTemplates = useMemo(() => TEMPLATES.filter((template) => {
    const matchesCategory = activeFilter === "All" || template.category === activeFilter;
    const haystack = `${template.name} ${template.bestFor} ${template.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  }), [activeFilter, query]);

  return (
    <>
      <section className="bg-surface-container-low pb-14 pt-16 text-center md:pb-20 md:pt-20">
        <div className="container-nexora">
          <span className="eyebrow">Premium template gallery</span>
          <h1 className="headline-xl mx-auto mt-5 max-w-3xl text-on-surface">Website Templates Built for Nepali Real Estate.</h1>
          <p className="body-md mx-auto mt-4 max-w-2xl text-on-surface-variant">Launch with a mobile-responsive design made for property discovery, agency credibility, and buyer inquiries.</p>
        </div>
      </section>

      <section className="section-space bg-surface-container-low pt-0!">
        <div className="container-nexora">
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-light-border bg-white p-4 shadow-low lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Filter templates by category">
              {TEMPLATE_FILTERS.map((filter) => (
                <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${activeFilter === filter ? "bg-primary text-white" : "bg-cream text-on-surface-variant hover:bg-secondary-container"}`}>{filter}</button>
              ))}
            </div>
            <label className="relative block lg:w-64">
              <span className="sr-only">Search templates</span>
              <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="field-control min-h-10 py-2 pl-10 text-xs" placeholder="Search templates" />
            </label>
          </div>

          {filteredTemplates.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => <TemplateCard key={template.id} {...template} showPreview />)}
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center text-white shadow-low">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10"><Sparkles size={25} /></span>
                <h2 className="headline-md mt-6 text-white">Need a Custom Design?</h2>
                <p className="body-sm mt-3 max-w-xs text-white/72">Plus and Pro plans can be tailored to your brand, reference layout, and agency workflow.</p>
                <Button href="/book-demo" variant="secondary" className="mt-7 bg-white text-primary hover:bg-cream">Contact Sales <ArrowRight size={14} /></Button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-light-border bg-white px-6 py-16 text-center shadow-low">
              <Search className="mx-auto text-sage" size={28} /><h2 className="mt-4 text-lg font-semibold text-on-surface">No templates found</h2><p className="body-sm mt-2 text-on-surface-variant">Try a different category or search phrase.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-warm-white py-16 md:py-20">
        <div className="container-nexora grid gap-8 md:grid-cols-3">
          {BENEFITS.map(({ title, text, icon: Icon }) => <div key={title} className="text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-surface-container-low text-primary"><Icon size={21} /></span><h2 className="mt-5 text-base font-semibold text-on-surface">{title}</h2><p className="body-sm mx-auto mt-2 max-w-xs text-on-surface-variant">{text}</p></div>)}
        </div>
      </section>
    </>
  );
}
