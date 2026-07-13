"use client";

import { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TEAM_SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
] as const;

const DEMO_GOAL_OPTIONS = [
  "Improve lead capture",
  "Speed up sales follow-up",
  "Automate onboarding",
  "Centralize reporting",
  "Evaluate platform fit",
] as const;

interface DemoFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  companySize: string;
  phone: string;
  demoGoal: string;
  message: string;
}

interface DemoFormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  jobTitle?: string;
  companySize?: string;
  demoGoal?: string;
}

interface DemoFormProps {
  className?: string;
  formId?: string;
}

const INITIAL_FORM: DemoFormData = {
  fullName: "",
  workEmail: "",
  companyName: "",
  jobTitle: "",
  companySize: "",
  phone: "",
  demoGoal: "",
  message: "",
};

export function DemoForm({ className, formId }: DemoFormProps) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const resolvedFormId =
    formId?.trim() ||
    process.env.NEXT_PUBLIC_FORMSPREE_DEMO_FORM_ID ||
    "mojgqnnb";
  const [state, handleSubmit] = useForm(resolvedFormId);

  useEffect(() => {
    if (state.succeeded) {
      setErrors({});
      setForm(INITIAL_FORM);
    }
  }, [state.succeeded]);

  const validate = () => {
    const nextErrors: DemoFormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.workEmail.trim()) {
      nextErrors.workEmail = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail.trim())) {
      nextErrors.workEmail = "Enter a valid work email address.";
    }

    if (!form.companyName.trim()) {
      nextErrors.companyName = "Company name is required.";
    }

    if (!form.jobTitle.trim()) {
      nextErrors.jobTitle = "Job title is required.";
    }

    if (!form.companySize) {
      nextErrors.companySize = "Please select a company size.";
    }

    if (!form.demoGoal) {
      nextErrors.demoGoal = "Please choose what you want to see in the demo.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    await handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-light-border bg-surface-container-lowest p-8 text-center shadow-high md:p-10",
          className
        )}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-2xl text-deep-sage">
          ✓
        </div>
        <h2 className="headline-md text-on-surface">Demo request received</h2>
        <p className="body-md mt-3 text-on-surface-variant">
          Thanks for your interest. We&apos;ll reach out shortly to schedule your
          personalized walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-light-border bg-surface-container-lowest p-6 shadow-high md:p-8",
        className
      )}
      noValidate
    >
      <input type="hidden" name="formName" value="Book a Demo" />
      <input type="hidden" name="source" value="B2B SaaS landing page" />

      <h2 className="headline-md text-on-surface">Book a Demo</h2>
      <p className="body-md mt-2 text-on-surface-variant">
        Tell us a bit about your team and we&apos;ll tailor the walkthrough to your
        sales process, workflows, and growth goals.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Field
          id="fullName"
          name="fullName"
          label="Full name"
          placeholder="Jane Smith"
          value={form.fullName}
          error={errors.fullName}
          onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
        />

        <Field
          id="workEmail"
          name="workEmail"
          label="Work email"
          type="email"
          placeholder="jane@company.com"
          value={form.workEmail}
          error={errors.workEmail}
          onChange={(value) =>
            setForm((current) => ({ ...current, workEmail: value }))
          }
        />

        <Field
          id="companyName"
          name="companyName"
          label="Company name"
          placeholder="Acme Inc."
          value={form.companyName}
          error={errors.companyName}
          onChange={(value) =>
            setForm((current) => ({ ...current, companyName: value }))
          }
        />

        <Field
          id="jobTitle"
          name="jobTitle"
          label="Job title"
          placeholder="VP of Sales"
          value={form.jobTitle}
          error={errors.jobTitle}
          onChange={(value) => setForm((current) => ({ ...current, jobTitle: value }))}
        />

        <SelectField
          id="companySize"
          name="companySize"
          label="Company size"
          placeholder="Select company size"
          value={form.companySize}
          error={errors.companySize}
          onChange={(value) =>
            setForm((current) => ({ ...current, companySize: value }))
          }
          options={TEAM_SIZE_OPTIONS}
        />

        <Field
          id="phone"
          name="phone"
          label="Phone number"
          type="tel"
          placeholder="Optional"
          value={form.phone}
          onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
        />
      </div>

      <div className="mt-4">
        <SelectField
          id="demoGoal"
          name="demoGoal"
          label="What do you want to focus on?"
          placeholder="Select a primary goal"
          value={form.demoGoal}
          error={errors.demoGoal}
          onChange={(value) => setForm((current) => ({ ...current, demoGoal: value }))}
          options={DEMO_GOAL_OPTIONS}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-on-surface"
        >
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Share your current tools, goals, or any questions you want covered in the demo."
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="w-full resize-none rounded-lg border border-light-border bg-warm-white px-4 py-3 body-md text-on-surface focus:border-deep-sage focus:outline-none focus:ring-2 focus:ring-deep-sage/20"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-error"
        />
      </div>

      <ValidationError
        prefix="Work email"
        field="workEmail"
        errors={state.errors}
        className="mt-3 text-sm text-error"
      />

      {state.errors ? (
        <p className="mt-3 text-sm text-error">
          We couldn&apos;t submit your request right now. Please review the form and
          try again.
        </p>
      ) : null}

      <Button
        type="submit"
        className="mt-6 w-full"
        size="lg"
        disabled={state.submitting}
      >
        {state.submitting ? "Submitting..." : "Book My Demo"}
      </Button>

      <p className="body-sm mt-4 text-center text-on-surface-variant">
        No credit card required. We usually respond within one business day.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-on-surface">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-lg border bg-warm-white px-4 py-3 body-md text-on-surface focus:border-deep-sage focus:outline-none focus:ring-2 focus:ring-deep-sage/20",
          error ? "border-error" : "border-light-border"
        )}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  options,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-on-surface">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full rounded-lg border bg-warm-white px-4 py-3 body-md text-on-surface focus:border-deep-sage focus:outline-none focus:ring-2 focus:ring-deep-sage/20",
          error ? "border-error" : "border-light-border"
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-sm text-error">{children}</p>;
}
