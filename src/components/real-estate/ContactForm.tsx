"use client";

import { useState } from "react";
import { CalendarDays, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

interface ContactState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const initialState: ContactState = {
  name: "",
  email: "",
  phone: "",
  interest: "Buying a home",
  message: "",
};

export function ContactForm({ className }: ContactFormProps) {
  const [form, setForm] = useState<ContactState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof ContactState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form
      className={cn(
        "rounded-[var(--radius-panel)] border border-light-border bg-surface-container-lowest p-6 shadow-luxury md:p-8",
        className
      )}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
          <CalendarDays className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-on-surface">
            Schedule a Private Consultation
          </h2>
          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            Capture qualified buyer, seller, and rental inquiries with a polished
            agency-ready form.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Field
          label="Full Name"
          id="template-name"
          value={form.name}
          onChange={(value) => updateField("name", value)}
          placeholder="Aarati Sharma"
        />
        <Field
          label="Email"
          id="template-email"
          type="email"
          value={form.email}
          onChange={(value) => updateField("email", value)}
          placeholder="aarati@example.com"
        />
        <Field
          label="Phone"
          id="template-phone"
          type="tel"
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
          placeholder="+977 98..."
        />
        <div>
          <label
            htmlFor="template-interest"
            className="mb-1.5 block text-sm font-semibold text-on-surface"
          >
            Interest
          </label>
          <select
            id="template-interest"
            value={form.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className="h-11 w-full rounded-[var(--radius-button)] border border-light-border bg-warm-white px-3 text-sm text-on-surface outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          >
            <option>Buying a home</option>
            <option>Selling property</option>
            <option>Renting property</option>
            <option>Developer project</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="template-message"
          className="mb-1.5 block text-sm font-semibold text-on-surface"
        >
          Message
        </label>
        <textarea
          id="template-message"
          rows={4}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Share location, budget, timeline, or property details."
          className="w-full resize-none rounded-[var(--radius-button)] border border-light-border bg-warm-white px-3 py-3 text-sm text-on-surface outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {submitted && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          <CheckCircle2 className="size-4" aria-hidden="true" />
          Inquiry captured. This dummy form is ready to connect to a backend.
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full">
        <Send aria-hidden="true" />
        Send Inquiry
      </Button>
    </form>
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
