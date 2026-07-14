"use client";

import { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TEAM_SIZE_OPTIONS = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"] as const;
const DEMO_GOAL_OPTIONS = ["Improve lead capture", "Speed up sales follow-up", "Automate onboarding", "Centralize reporting", "Evaluate platform fit"] as const;

interface DemoFormData { fullName: string; workEmail: string; companyName: string; jobTitle: string; companySize: string; phone: string; demoGoal: string; message: string; }
interface DemoFormErrors { fullName?: string; workEmail?: string; companyName?: string; jobTitle?: string; companySize?: string; demoGoal?: string; }
interface DemoFormProps { className?: string; formId?: string; }

const INITIAL_FORM: DemoFormData = { fullName: "", workEmail: "", companyName: "", jobTitle: "", companySize: "", phone: "", demoGoal: "", message: "" };

export function DemoForm({ className, formId }: DemoFormProps) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const resolvedFormId = formId?.trim() || process.env.NEXT_PUBLIC_FORMSPREE_DEMO_FORM_ID || "mojgqnnb";
  const [state, handleSubmit] = useForm(resolvedFormId);

  useEffect(() => {
    if (state.succeeded) { setErrors({}); setForm(INITIAL_FORM); }
  }, [state.succeeded]);

  const validate = () => {
    const nextErrors: DemoFormErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.workEmail.trim()) nextErrors.workEmail = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail.trim())) nextErrors.workEmail = "Enter a valid work email address.";
    if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
    if (!form.jobTitle.trim()) nextErrors.jobTitle = "Job title is required.";
    if (!form.companySize) nextErrors.companySize = "Please select a company size.";
    if (!form.demoGoal) nextErrors.demoGoal = "Please choose a demo focus.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) await handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <div className={cn("rounded-[24px] border border-light-border bg-white p-8 text-center shadow-high md:p-12", className)} role="status">
        <CheckCircle2 className="mx-auto text-primary" size={48} strokeWidth={1.5} />
        <h2 className="headline-md mt-5 text-on-surface">Demo request received</h2>
        <p className="body-md mx-auto mt-3 max-w-md text-on-surface-variant">Thank you. Our team will contact you shortly to schedule a personalized Nexora RealtyOS walkthrough.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("rounded-[24px] border border-light-border bg-white p-6 shadow-high md:p-8 lg:p-10", className)} noValidate>
      <input type="hidden" name="formName" value="Book a Demo" />
      <input type="hidden" name="source" value="Nexora RealtyOS marketing website" />
      <h1 className="headline-md text-on-surface">Request a Free Demo</h1>
      <p className="body-md mt-2 max-w-2xl text-on-surface-variant">Tell us about your agency and we&apos;ll focus the walkthrough on the workflows that matter to you.</p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <Field id="fullName" name="fullName" label="Full name" placeholder="E.g. Rajesh Hamal" value={form.fullName} error={errors.fullName} onChange={(value) => setForm((current) => ({ ...current, fullName: value }))} />
        <Field id="workEmail" name="workEmail" label="Work email" type="email" placeholder="you@agency.com" value={form.workEmail} error={errors.workEmail} onChange={(value) => setForm((current) => ({ ...current, workEmail: value }))} />
        <Field id="companyName" name="companyName" label="Agency name" placeholder="Your real-estate company" value={form.companyName} error={errors.companyName} onChange={(value) => setForm((current) => ({ ...current, companyName: value }))} />
        <Field id="jobTitle" name="jobTitle" label="Your role" placeholder="Owner, manager, agent..." value={form.jobTitle} error={errors.jobTitle} onChange={(value) => setForm((current) => ({ ...current, jobTitle: value }))} />
        <SelectField id="companySize" name="companySize" label="Team size" placeholder="Select team size" value={form.companySize} error={errors.companySize} onChange={(value) => setForm((current) => ({ ...current, companySize: value }))} options={TEAM_SIZE_OPTIONS} />
        <Field id="phone" name="phone" label="Phone number" type="tel" placeholder="+977 98... (optional)" value={form.phone} onChange={(value) => setForm((current) => ({ ...current, phone: value }))} />
      </div>

      <div className="mt-5">
        <SelectField id="demoGoal" name="demoGoal" label="What should we focus on?" placeholder="Select a primary goal" value={form.demoGoal} error={errors.demoGoal} onChange={(value) => setForm((current) => ({ ...current, demoGoal: value }))} options={DEMO_GOAL_OPTIONS} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-xs font-semibold text-on-surface">Message <span className="font-normal text-on-surface-variant">(optional)</span></label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your current workflow or challenges..." value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="field-control resize-none" />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-xs text-error" />
      </div>

      <ValidationError prefix="Email" field="workEmail" errors={state.errors} className="mt-3 text-xs text-error" />
      <Button type="submit" className="mt-7 w-full sm:w-auto sm:min-w-56" size="lg" disabled={state.submitting}>
        {state.submitting ? <><LoaderCircle className="animate-spin" /> Submitting...</> : "Request Demo"}
      </Button>
      <p className="body-sm mt-4 text-on-surface-variant">No credit card required. Our team typically responds within one business day.</p>
    </form>
  );
}

function Field({ id, name, label, placeholder, value, error, onChange, type = "text" }: { id: string; name: string; label: string; placeholder: string; value: string; error?: string; onChange: (value: string) => void; type?: string; }) {
  const errorId = `${id}-error`;
  return <div><label htmlFor={id} className="mb-2 block text-xs font-semibold text-on-surface">{label}</label><input id={id} name={name} type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={cn("field-control", error && "border-error bg-error-container/20")} />{error && <ErrorText id={errorId}>{error}</ErrorText>}</div>;
}

function SelectField({ id, name, label, placeholder, value, error, onChange, options }: { id: string; name: string; label: string; placeholder: string; value: string; error?: string; onChange: (value: string) => void; options: readonly string[]; }) {
  const errorId = `${id}-error`;
  return <div><label htmlFor={id} className="mb-2 block text-xs font-semibold text-on-surface">{label}</label><select id={id} name={name} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={cn("field-control", error && "border-error bg-error-container/20")}><option value="">{placeholder}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <ErrorText id={errorId}>{error}</ErrorText>}</div>;
}

function ErrorText({ children, id }: { children: React.ReactNode; id: string }) { return <p id={id} className="mt-1.5 text-xs text-error">{children}</p>; }
