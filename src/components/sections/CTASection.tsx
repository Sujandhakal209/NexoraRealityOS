import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

interface CTASectionProps { title?: string; text?: string; }

export function CTASection({ title = "Ready to Turn Listings Into Leads and Leads Into Deals?", text = "See how one connected system can simplify your agency's daily work." }: CTASectionProps) {
  return (
    <section className="bg-warm-white py-12 md:py-16">
      <div className="container-nexora">
        <div className="overflow-hidden rounded-[24px] bg-primary px-6 py-12 text-center shadow-high md:px-12 md:py-16">
          <h2 className="headline-lg mx-auto max-w-3xl text-white">{title}</h2>
          <p className="body-md mx-auto mt-4 max-w-xl text-white/75">{text}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/book-demo" variant="secondary" size="lg" className="bg-white text-primary hover:bg-cream">Book a Free Demo</Button>
            <Button href={`tel:${SITE.phone.replace(/\s/g, "")}`} variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10"><Phone size={16} /> Call Sales</Button>
          </div>
          <div className="mt-7 flex flex-col items-center justify-center gap-2 text-xs text-white/70 sm:flex-row sm:gap-5">
            <span className="inline-flex items-center gap-2"><Phone size={13} />{SITE.phone}</span>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={13} />{SITE.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
