"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/motion/MotionProvider";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTemplatePreview = pathname.startsWith("/template-preview");
  const isDemoPage = pathname === "/book-demo";

  if (isTemplatePreview) {
    return <main>{children}</main>;
  }

  if (isDemoPage) {
    return <MotionProvider>{children}</MotionProvider>;
  }

  return (
    <MotionProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MotionProvider>
  );
}
