"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { PropertyDetail } from "@/lib/real-estate-template";
import { DetailSectionTitle } from "./PropertyKeyFeatures";

interface PropertyInquiryFormProps {
  property: PropertyDetail;
}

interface InquiryState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: InquiryState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function PropertyInquiryForm({ property }: PropertyInquiryFormProps) {
  const [form, setForm] = useState<InquiryState>({
    ...initialState,
    message: `I am interested in ${property.title} (${property.id.toUpperCase()}). Please share viewing availability and next steps.`,
  });
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof InquiryState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <section
      aria-labelledby="inquiry-form-heading"
      className="rounded-[var(--radius-panel)] border border-light-border bg-surface-container-lowest p-6 shadow-luxury"
    >
      <DetailSectionTitle
        eyebrow="Private Inquiry"
        title="Request Information"
        id="inquiry-form-heading"
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="space-y-4">
          <Field
            label="Full Name"
            id={`inquiry-name-${property.id}`}
            value={form.name}
            onChange={(value) => updateField("name", value)}
            placeholder="Your full name"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              id={`inquiry-email-${property.id}`}
              type="email"
              value={form.email}
              onChange={(value) => updateField("email", value)}
              placeholder="you@example.com"
            />
            <Field
              label="Phone"
              id={`inquiry-phone-${property.id}`}
              type="tel"
              value={form.phone}
              onChange={(value) => updateField("phone", value)}
              placeholder="+977 98..."
            />
          </div>
          <div>
            <label
              htmlFor={`inquiry-message-${property.id}`}
              className="mb-1.5 block text-sm font-semibold text-on-surface"
            >
              Message
            </label>
            <textarea
              id={`inquiry-message-${property.id}`}
              rows={4}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full resize-none rounded-[var(--radius-button)] border border-light-border bg-warm-white px-3 py-3 text-sm text-on-surface outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {submitted && (
          <p className="mt-4 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
            <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
            Inquiry received for {property.title}. Connect this form to your CRM
            or email backend in production.
          </p>
        )}

        <Button type="submit" variant="accent" size="lg" className="mt-5 w-full">
          <Send aria-hidden="true" />
          Send Inquiry
        </Button>
      </form>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-on-surface"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-[var(--radius-button)] border border-light-border bg-warm-white px-3 text-sm text-on-surface outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
