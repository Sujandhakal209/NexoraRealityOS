"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem { question: string; answer: string; }

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question} className={cn("overflow-hidden rounded-xl border bg-white shadow-low transition-[border-color,box-shadow] duration-200", isOpen ? "border-primary/25 shadow-[0_8px_28px_rgba(38,50,56,0.07)]" : "border-light-border")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/35 md:px-6"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <ChevronDown className={cn("shrink-0 text-primary transition-transform", isOpen && "rotate-180")} size={17} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-panel px-5 pb-5 body-sm text-on-surface-variant md:px-6">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
