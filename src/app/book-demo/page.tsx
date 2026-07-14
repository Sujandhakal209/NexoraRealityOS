import Link from "next/link";
import { ArrowLeft, Check, Clock3, Phone, ShieldCheck } from "lucide-react";
import { DemoForm } from "@/components/forms/DemoForm";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/data";

export const metadata = {
  title: "Book a Demo",
  description: "Request a personalized Nexora RealtyOS demonstration for your real-estate agency.",
};

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-light-border/70 bg-cream">
        <div className="container-nexora flex h-20 items-center justify-between">
          <Logo compact />
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"><ArrowLeft size={14} /> Back to website</Link>
        </div>
      </header>

      <main className="py-10 md:py-16 lg:py-20">
        <div className="container-nexora">
          <div className="grid items-start gap-8 lg:grid-cols-[1.55fr_.72fr] lg:gap-12">
            <DemoForm />
            <aside className="space-y-6 lg:sticky lg:top-8">
              <div className="rounded-[24px] border border-[#c8dbe5] bg-surface-container-low p-6 shadow-low md:p-8">
                <ShieldCheck size={31} className="text-primary" strokeWidth={1.6} />
                <h2 className="headline-md mt-5 text-primary">Listings Dekhi Leads Samma...</h2>
                <p className="body-md mt-4 text-on-surface-variant">See how Nexora RealtyOS connects your public website with the daily work of managing inquiries, site visits, follow-ups, and deals.</p>
                <div className="my-6 h-px bg-outline-variant/60" />
                <p className="text-xs font-bold uppercase tracking-wide text-on-surface">Your demo can cover</p>
                <ul className="mt-4 space-y-3">
                  {["Website and property listings", "Lead CRM and follow-up workflow", "Agent and site-visit management", "Social content and reporting"].map((item) => <li key={item} className="flex gap-2.5 text-xs leading-5 text-on-surface-variant"><Check size={15} className="mt-0.5 shrink-0 text-primary" />{item}</li>)}
                </ul>
                <div className="my-6 h-px bg-outline-variant/60" />
                <p className="flex items-center gap-2 text-xs font-semibold text-on-surface"><Phone size={15} className="text-primary" /> Direct support</p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-2 block text-base font-semibold text-primary hover:underline">{SITE.phone}</a>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-light-border bg-white p-5 shadow-low">
                <Clock3 size={20} className="mt-0.5 shrink-0 text-primary" /><div><p className="text-sm font-semibold text-on-surface">A focused, practical walkthrough</p><p className="body-sm mt-1 text-on-surface-variant">We&apos;ll tailor the conversation around your current agency workflow and priorities.</p></div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="border-t border-light-border py-8 text-center">
        <p className="text-xs text-on-surface-variant">© 2026 Nexora RealtyOS. Nepal&apos;s real-estate business system.</p>
      </footer>
    </div>
  );
}
