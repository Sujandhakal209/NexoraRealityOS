"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 8);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-light-border/80 bg-warm-white/94 backdrop-blur-xl transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled && "bg-warm-white/98 shadow-[0_8px_30px_rgba(38,50,56,0.07)]"
      )}
    >
      <nav className="container-nexora flex h-[68px] items-center justify-between" aria-label="Main navigation">
        <Logo compact />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative py-2 text-[12px] font-semibold text-on-surface-variant transition-colors after:absolute after:inset-x-0 after:-bottom-[17px] after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isActive(link.href) && !link.href.startsWith("/#") && "text-primary after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/book-demo" size="sm" className="rounded-full px-5">
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-light-border text-on-surface transition-[background-color,border-color,transform] duration-150 hover:border-primary/30 hover:bg-cream active:scale-95 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[69px] h-[calc(100dvh-69px)] border-t border-light-border bg-warm-white px-4 py-6 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <ul className="container-nexora flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-3.5 text-base font-semibold text-on-surface transition-[background-color,transform] duration-150 hover:translate-x-1 hover:bg-cream"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Button href="/book-demo" className="w-full" size="lg" onClick={() => setMobileOpen(false)}>
              Book a Demo
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
