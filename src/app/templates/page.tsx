"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TemplateCard } from "@/components/cards/TemplateCard";
import { Button } from "@/components/ui/Button";
import { TEMPLATES, TEMPLATE_FILTERS } from "@/lib/data";

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === activeFilter);

  return (
    <>
      <section className="bg-warm-white py-12 md:py-16">
        <div className="container-nexora">
          <SectionHeader
            title="Choose a Website Template Built for Real Estate"
            subtitle="Start with a professional template, then customize it to match your agency's brand."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {TEMPLATE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-on-primary"
                    : "border border-light-border bg-surface-container-lowest text-on-surface-variant hover:bg-cream"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template) => (
              <TemplateCard key={template.id} {...template} showPreview />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-light-border bg-cream py-12 md:py-16">
        <div className="container-nexora text-center">
          <h2 className="headline-md text-on-surface">Need a custom design?</h2>
          <p className="body-md mx-auto mt-3 max-w-xl text-on-surface-variant">
            Plus and Pro plans include custom website design options based on
            your brand, colors, and reference layout.
          </p>
          <Button href="/book-demo" className="mt-6">
            Request Custom Design
          </Button>
        </div>
      </section>
    </>
  );
}
