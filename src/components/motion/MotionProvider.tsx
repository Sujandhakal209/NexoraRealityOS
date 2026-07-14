"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VISIBLE_VIEWPORT_RATIO = 0.9;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const main = document.querySelector("main");
    if (!main) return;

    const pageSections = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > section")
    );
    const targets = pageSections.length
      ? pageSections
      : Array.from(main.querySelectorAll<HTMLElement>("form, aside"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.dataset.motionState = "revealed";
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    targets.forEach((target, targetIndex) => {
      const content =
        target.querySelector<HTMLElement>(":scope > .container-nexora") ??
        target;
      const items = Array.from(
        content.querySelectorAll<HTMLElement>("article, [data-motion-item]")
      );

      target.dataset.motionSection = "";
      content.dataset.motionContent = "";
      items.forEach((item, itemIndex) => {
        item.dataset.motionItem = "";
        item.style.setProperty(
          "--motion-order",
          String(Math.min(itemIndex, 6))
        );
      });

      const isInInitialViewport =
        target.getBoundingClientRect().top <=
        window.innerHeight * VISIBLE_VIEWPORT_RATIO;

      target.dataset.motionState = "pending";

      if (isInInitialViewport) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            target.dataset.motionState = "revealed";
          });
        });
      } else {
        observer.observe(target);
      }

      if (targetIndex === 0) {
        target.dataset.motionIntro = "";
      }
    });

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        delete target.dataset.motionSection;
        delete target.dataset.motionState;
        delete target.dataset.motionIntro;
      });
    };
  }, [pathname]);

  return children;
}
