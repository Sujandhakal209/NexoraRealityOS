"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <section className="bg-warm-white py-12 md:py-16">
        <div className="container-nexora">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions about Nexora RealtyOS? We're here to help your agency grow."
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-light-border bg-surface-container-lowest p-8 text-center shadow-low">
                  <p className="headline-md text-on-surface">Message Sent!</p>
                  <p className="body-md mt-3 text-on-surface-variant">
                    Thank you for reaching out. Our team will get back to you
                    soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-light-border bg-surface-container-lowest p-6 shadow-low md:p-8"
                  noValidate
                >
                  <h2 className="headline-md text-on-surface">Send a Message</h2>
                  <div className="mt-6 space-y-4">
                    <ContactField
                      id="name"
                      label="Full Name"
                      value={form.name}
                      error={errors.name}
                      onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                    />
                    <ContactField
                      id="email"
                      label="Email"
                      type="email"
                      value={form.email}
                      error={errors.email}
                      onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                    />
                    <ContactField
                      id="phone"
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      error={errors.phone}
                      onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                    />
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-on-surface"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        className={cn(
                          "w-full resize-none rounded-lg border bg-warm-white px-4 py-3 body-md focus:border-deep-sage focus:outline-none focus:ring-2 focus:ring-deep-sage/20",
                          errors.message ? "border-error" : "border-light-border"
                        )}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-error">{errors.message}</p>
                      )}
                    </div>
                  </div>
                  <Button type="submit" className="mt-6 w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                title="Phone"
                value={SITE.phone}
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              />
              <ContactInfoCard
                title="WhatsApp"
                value={SITE.phone}
                href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
              />
              <ContactInfoCard
                title="Viber"
                value={SITE.phone}
                href={`viber://chat?number=${SITE.phone.replace(/\D/g, "")}`}
              />
              <ContactInfoCard
                title="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactInfoCard title="Location" value={SITE.location} />

              <div className="rounded-2xl bg-primary p-6 text-on-primary md:p-8">
                <h3 className="text-lg font-semibold">
                  Ready for a personalized walkthrough?
                </h3>
                <p className="body-sm mt-2 text-on-primary-container/90">
                  Book a free demo and see how Nexora RealtyOS can transform
                  your agency&apos;s sales flow.
                </p>
                <Button href="/book-demo" variant="secondary" className="mt-4">
                  Book a Free Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-on-surface">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-lg border bg-warm-white px-4 py-3 body-md focus:border-deep-sage focus:outline-none focus:ring-2 focus:ring-deep-sage/20",
          error ? "border-error" : "border-light-border"
        )}
      />
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
}

function ContactInfoCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-xl border border-light-border bg-surface-container-lowest p-5 shadow-low">
      <p className="text-sm font-semibold text-on-surface-variant">{title}</p>
      {href ? (
        <a
          href={href}
          className="body-md mt-1 block font-medium text-primary hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="body-md mt-1 font-medium text-on-surface">{value}</p>
      )}
    </div>
  );
}
