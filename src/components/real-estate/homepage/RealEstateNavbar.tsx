"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Buy", href: "#buy" },
  { label: "Rent", href: "#rent" },
  { label: "Properties", href: "#properties" },
  { label: "Agents", href: "#agents" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function RealEstateNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 text-inverse-on-surface backdrop-blur-md">
      <nav className="container-nexora flex h-16 items-center justify-between md:h-20">
        <Link href="#" className="flex items-center gap-3" aria-label="Aurelia Estates home">
          <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Building2 className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold leading-none">
              Aurelia Estates
            </span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-inverse-on-surface/60">
              Luxury Realty
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-inverse-on-surface/75 transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="accent" size="sm">
            <a href="#contact">Schedule Viewing</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[var(--radius-button)] border border-white/15 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-white/10 bg-charcoal lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="container-nexora py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-inverse-on-surface/80 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="accent" className="mt-3 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Schedule Viewing
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
