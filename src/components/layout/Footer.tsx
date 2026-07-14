import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/data";

const FOOTER_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Book a Demo", href: "/book-demo" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/55 bg-surface-container-low">
      <div className="container-nexora py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_.8fr_.8fr_1.1fr]">
          <div>
            <Logo compact />
            <p className="body-sm mt-4 max-w-xs text-on-surface-variant">
              Nepal&apos;s complete real-estate business system, connecting listings, leads, follow-ups, and deals.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-on-surface">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="body-sm text-on-surface-variant hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-on-surface">Contact</h3>
            <div className="mt-4 space-y-3 body-sm text-on-surface-variant">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-primary">
                <Phone size={15} aria-hidden="true" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-primary">
                <Mail size={15} aria-hidden="true" /> {SITE.email}
              </a>
              <p>{SITE.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-outline-variant/60 pt-6 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexora RealtyOS. All rights reserved.</p>
          <p>Nepal&apos;s real-estate business system.</p>
        </div>
      </div>
    </footer>
  );
}
