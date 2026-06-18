import { DemoForm } from "@/components/forms/DemoForm";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/data";

export const metadata = {
  title: "Book a Demo",
};

const TRUSTED_AVATARS = ["KM", "GH", "NR", "+147"];

export default function BookDemoPage() {
  return (
    <div className="bg-cream min-h-[calc(100vh-72px)] py-10 md:py-16">
      <div className="container-nexora">
        <div className="mb-8 text-center md:hidden">
          <Logo className="justify-center" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <DemoForm />

          <aside className="flex flex-col justify-center">
            <div className="rounded-2xl border border-light-border bg-gradient-to-br from-surface-container-low to-secondary-container/40 p-6 shadow-low md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-deep-sage">
                {SITE.tagline}
              </p>
              <h1 className="headline-lg mt-4 text-on-surface">
                Listings Dekhi Leads Samma...
              </h1>
              <p className="body-md mt-4 text-on-surface-variant">
                Nexora RealtyOS is Nepal&apos;s first all-in-one operating
                system designed specifically for the local real-estate market.
                We help you bridge the gap between traditional networking and
                modern digital speed.
              </p>

              <div className="mt-8 rounded-xl bg-surface-container-lowest/80 p-5">
                <p className="text-sm font-semibold text-on-surface">
                  Direct Support
                </p>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="body-lg mt-1 block font-semibold text-primary hover:underline"
                >
                  {SITE.phone}
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-on-surface">
                  Trusted by 150+ Agencies
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {TRUSTED_AVATARS.map((initials) => (
                    <span
                      key={initials}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-deep-sage text-xs font-bold text-on-primary shadow-low"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
